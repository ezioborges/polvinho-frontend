import newElement from "../../utils/newElement.js"
import PageTitle from "../PageTitle.js";

const SubjectsNotFound = (titleError, subtitle) => {
    const subjectNotFoundContent = newElement('div');
    subjectNotFoundContent.classList.add('subjects-not-found');

    const title = PageTitle(titleError, subtitle)

    const imgArea = newElement('div');
    imgArea.classList.add('img-area');

    const octopusImg = newElement('img')
    octopusImg.src = '../../../assets/sad-octopus.png'
    octopusImg.alt = 'Polvinhos tristes'
    octopusImg.classList.add('octopus-image');

    imgArea.appendChild(octopusImg)

    subjectNotFoundContent.appendChild(title);
    subjectNotFoundContent.appendChild(imgArea);

    return subjectNotFoundContent;
}

export default SubjectsNotFound;