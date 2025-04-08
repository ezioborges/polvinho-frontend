const router = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": "./src/pages/home.html",
  "/dashboard": "./src/pages/dashboard.html",
  "/disciplines": "./src/pages/disciplines.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.querySelector("#main-content").innerHTML = html;
};

window.onpopstate = handleLocation;
window.router = router;

handleLocation();
