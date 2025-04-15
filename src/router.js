export const router = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.location.hash = event.target.href.slice(window.location.origin.length); // Atualiza o hash
  handleLocation()
};

const routes = {
  "/": "./pages/Home.js",
  "/dashboard": "./pages/Dashboard.js",
  "/disciplines": "./pages/Disciplines.js",
  "/arroz": "./pages/Exam.js"
};

const handleLocation = async () => {
  const hashPath = window.location.hash;
  const path = hashPath.slice(1) || "/"; // Remove o '#' inicial, se existir, ou usa '/' como padrão
  const route =
    routes[path] ||
    (() => {
      document.querySelector("#main-content").innerHTML =
        "<h1>Página não encontrada</h1>";
    });

  if (typeof route === "string" && route.endsWith(".js")) {
    try {
      const module = await import(route);
      document.querySelector("#main-content").innerHTML = ""; // Limpa o conteúdo
      if (module.default && typeof module.default === "function") {
        const content = module.default(); // Chama a função do componente
        if (content instanceof HTMLElement) {
          document.querySelector("#main-content").appendChild(content); // Adiciona o elemento retornado
        } else {
          console.warn(`O componente em ${route} não retornou um HTMLElement.`);
        }
      } else {
        console.warn(`O módulo ${route} não exportou uma função default.`);
      }
      console.log(`Módulo ${route} importado e (se aplicável) executado.`);
    } catch (error) {
      console.error("Erro ao importar o módulo:", error);
      document.querySelector("#main-content").innerHTML =
        "<h1>Erro ao carregar a página</h1>";
    }
  } else if (typeof route === "string" && route.endsWith(".html")) {
    const html = await fetch(route).then((data) => data.text());
    document.querySelector("#main-content").innerHTML = html;
    // Lógica para executar scripts dentro do HTML, se necessário.
  } else if (typeof route === "function") {
    route();
  }
};

window.addEventListener("hashchange", handleLocation); // Escuta mudanças no hash
window.addEventListener("load", handleLocation); // Para carregar a rota inicial

window.onpopstate = handleLocation;
// window.router = router;

handleLocation();
