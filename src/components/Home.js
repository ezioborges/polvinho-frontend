function Home() {
    const homeDiv = document.createElement('div');
    homeDiv.id = 'home-container';
    homeDiv.innerHTML = '<h1>Bem-vindo à Home!</h1>'; // Exemplo de conteúdo
  
    const mainContent = document.querySelector('#main-content');
    mainContent.innerHTML = ''; // Limpa o conteúdo anterior
    mainContent.appendChild(homeDiv);
  
    console.log("Componente Home renderizado!");
  }
  
  export default Home;