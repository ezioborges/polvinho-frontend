import { router } from "../../router.js";
import newElement from "../../utils/newElement.js";

export const panelItem = (id, href, entityParam) => {
    const entity = newElement('a');
    entity.id = id
    entity.href = href
    entity.classList.add('textSm');
    entity.classList.add('dropdown-items')
    entity.textContent = entityParam;
    entity.onclick = (event) => router(event)

    return entity

}