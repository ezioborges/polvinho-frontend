export const router = (event) => {
    event = event || window.event;
    event.preventDefault();
    const link = event.currentTarget || event.target.closest('a');
    if (link && link.getAttribute('href')) {
        window.location.hash = link.getAttribute('href');
    }
    handleLocation();
};

const routes = {
    "/": "./pages/Login.js",
    "/dashboard-admin":"./pages/Admin/Dashboard.js",
    "/register/:entity":"./pages/Admin/Register.js",
    "/dashboard": "./pages/Dashboard.js",
    "/disciplines": "./pages/Disciplines.js",
    "/disciplines/:id": "./pages/Exam.js",
    "/disciplines/:id/quizz": "./pages/Quizz.js",
    "/disciplines/:id/results": "./pages/Result.js",
};

export const handleLocation = async () => {
    const hashPath = window.location.hash;
    const path = hashPath.slice(1) || "/";

    const token = localStorage.getItem('jwtToken')

    // verifica se o usuário tem token de acesso válido
    if (path !== "/" && !token) {
      window.location.hash = "/";
      return;
    }

    let matchedRoute = null;
    let params = null;

    for (const routePattern in routes) {
        const regexPath = routePattern.replace(/:\w+/g, '(\\w+)');
        const regex = new RegExp(`^${regexPath}$`);
        const match = path.match(regex);

        if (match) {
            matchedRoute = routes[routePattern];
            params = {};
            const paramNames = routePattern.match(/:\w+/g);
            if (paramNames) {
                paramNames.forEach((name, index) => {
                    params[name.slice(1)] = match[index + 1];
                });
            }
            break;
        }
    }

    const route = matchedRoute || (() => {
        const newMain = document.getElementById("main-body");
        if (newMain) {
            newMain.innerHTML = "<h1>Página não encontrada</h1>";
        } else {
            document.getElementById("main-content").innerHTML = "<h1>Página não encontrada</h1>";
        }
    });

    if (typeof route === "string" && route.endsWith(".js")) {
        try {
            const module = await import(route);
            if (module.default && typeof module.default === "function") {
                const content = module.default(params);

                if (path === "/" || path === "/dashboard" || path === "/dashboard-admin") {
                    // Login e Dashboard: limpa e renderiza na raiz
                    document.getElementById("main-content").innerHTML = "";
                    document.getElementById("main-content").appendChild(content);
                } else {
                    // Outras rotas: garante que main-body existe
                    let newMain = document.getElementById("main-body");
                    if (!newMain) {
                        // Renderiza a Dashboard primeiro para criar main-body
                        const DashboardModule = await import('./pages/Dashboard.js');
                        const DashboardContent = DashboardModule.default();
                        document.getElementById("main-content").innerHTML = "";
                        document.getElementById("main-content").appendChild(DashboardContent);
                        newMain = document.getElementById("main-body");
                    }
                    if (newMain && content instanceof HTMLElement) {
                        newMain.innerHTML = "";
                        newMain.appendChild(content);
                    } else {
                        document.getElementById("main-content").innerHTML =
                            "<h1>Erro: container #main-body não encontrado!</h1>";
                    }
                }
            } else {
                console.warn(`O módulo ${route} não exportou uma função default.`);
            }
        } catch (error) {
            console.error("Erro ao importar o módulo:", error);
            const newMain = document.getElementById("main-body");
            if (newMain) {
                newMain.innerHTML = "<h1>Erro ao carregar a página</h1>";
            } else {
                document.getElementById("main-content").innerHTML = "<h1>Erro ao carregar a página</h1>";
            }
        }
    } else if (typeof route === "function") {
        route();
    }
};

window.addEventListener("hashchange", handleLocation);
window.addEventListener("load", handleLocation);
window.onpopstate = handleLocation;

handleLocation();