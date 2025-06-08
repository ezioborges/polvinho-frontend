import newElement from "../utils/newElement.js"

export const BodyWithoputUsers = () => {
    const bodyArea = newElement('div');
    bodyArea.classList.add('body-without-users');

    const bodyImg = newElement('img');
    bodyImg.src = '../../assets/fantasminha.png';
    bodyImg.alt = 'Imagem de polvos fantasmas';

    bodyArea.appendChild(bodyImg)


    return bodyArea;
}