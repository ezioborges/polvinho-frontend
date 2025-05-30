import newElement from "../../utils/newElement.js";
import BodyWithoutContent from "../BodyWithoutContent.js";
import { entities } from "../../data/adminEntities.js"
import BarItem from "./BarItem.js";

const DashContent = () => {
    const content = newElement('div')

    const noContent = BodyWithoutContent('Nenhum conteúdo disponível');

    if(!entities.length) content.appendChild(noContent)

    entities.forEach((entity) => {
        console.log('entity ===> ', entity);
        
        content.appendChild(BarItem(entity, true))
    })

    return content
}

export default DashContent;