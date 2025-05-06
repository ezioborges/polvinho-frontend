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
  "/disciplines/:id": "./pages/Exam.js",
  "/disciplines/:id/quiz": "./pages/Quiz.js",
};

const handleLocation = async () => {
  const hashPath = window.location.hash;
  const path = hashPath.slice(1) || "/"; // Remove o '#' inicial, se existir, ou usa '/' como padrão

  let matchedRoute = null;
  let params = null;

  for (const routePattern in routes) {
    const regexPath = routePattern.replace(/:\w+/g, '(\\w+)'); // Converte a rota dinâmica para uma regex
    const regex = new RegExp(`^${regexPath}$`);
    const match = path.match(regex);

    if (match) {
      matchedRoute = routes[routePattern];
      params = {};
      const paramNames = routePattern.match(/:\w+/g);
      if (paramNames) {
        paramNames.forEach((name, index) => {
          params[name.slice(1)] = match[index + 1]; // Extrai o valor do parâmetro
        });
      }
      break; // Encontrou uma rota correspondente
    }
  }

  const route = matchedRoute || (() => {
    document.querySelector("#main-content").innerHTML =
      "<h1>Página não encontrada</h1>";
  });

  if (typeof route === "string" && route.endsWith(".js")) {
    try {
      const module = await import(route);
      document.querySelector("#main-content").innerHTML = "";
      if (module.default && typeof module.default === "function") {
        // Passe os parâmetros para o componente, se necessário
        const content = module.default(params);
        if (content instanceof HTMLElement) {
          document.querySelector("#main-content").appendChild(content);
        } else {
          console.warn(`O componente em ${route} não retornou um HTMLElement.`);
        }
      } else {
        console.warn(`O módulo ${route} não exportou uma função default.`);
      }
      console.log(`Módulo ${route} importado e (se aplicável) executado com parâmetros:`, params);
    } catch (error) {
      console.error("Erro ao importar o módulo:", error);
      document.querySelector("#main-content").innerHTML =
        "<h1>Erro ao carregar a página</h1>";
    }
  } else if (typeof route === "function") {
    route();
  }
};

window.addEventListener("hashchange", handleLocation); // Escuta mudanças no hash
window.addEventListener("load", handleLocation); // Para carregar a rota inicial

window.onpopstate = handleLocation;
// window.router = router;

handleLocation();
