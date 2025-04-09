import newElement from "../utils/newElement.js";

const Home = () => {
    const homeContent = newElement('div')
    homeContent.id = 'home'
    homeContent.textContent = "Aqui é o HOME"

    console.log("🚀 ~ Home ~ homeContent:", homeContent)

    return homeContent;
}

export default Home;