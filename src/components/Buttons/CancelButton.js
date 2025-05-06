import { clickEventCancelButton } from "../../utils/eventListeners.js";
import newElement from "../../utils/newElement.js";

const CancelButton = (title, classTitle) => {
    const buttonContent = newElement('button');
    buttonContent.textContent = title
    buttonContent.classList.add('cancel-button-content')
    buttonContent.classList.add(classTitle)

    clickEventCancelButton(buttonContent)
    
    return buttonContent
}

export default CancelButton;
