import { handleLocation } from "./router.js";

document.addEventListener('DOMContentLoaded', handleLocation);
window.addEventListener('hashchange', handleLocation);