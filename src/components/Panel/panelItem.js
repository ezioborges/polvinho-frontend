import { router } from "../../router.js";
import newElement from "../../utils/newElement.js";

export const panelItem = (href, entityParam, itemClass) => {
    const entity = newElement('a');
    entity.href = href
    entity.classList.add('textSm');
    entity.classList.add(itemClass)
    entity.textContent = entityParam;
    entity.onclick = (event) => router(event)

    return entity

}