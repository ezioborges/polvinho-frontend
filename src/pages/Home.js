import newElement from "../utils/newElement.js";

const Home = () => {
    const homeContent = newElement('div')
    homeContent.classList.add('home-content')
    homeContent.textContent = 'Em construção...'
    homeContent.style.color = 'white'
    homeContent.classList.add('textXL')

    return homeContent
}

export default Home;
