const newBody = () => {
    const bodyContent = document.querySelector('#main-content')
    // const home = document.querySelector('#home')
    bodyContent.classList.add('body')
    
    // const homeComponent = Home();
    // bodyContent.appendChild(homeComponent)
    
    // console.log("🚀 ~ newBody ~ home:", home)
    console.log("🚀 ~ newBody ~ bodyContent:", bodyContent)
    return bodyContent;
}

export default newBody;
