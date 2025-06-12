import { getAllSubjects } from "../../data/fetchData.js";
import urls from "../../urls/index.js";
import newElement from "../../utils/newElement.js";
import { panelItem } from "./panelItem.js";

const SubjectsPanelList = async () => {
    const allSubjects = await getAllSubjects(urls.subjects)
    const subjects = allSubjects.map((subject) => subject.name)

    console.log('subjects ===> ', subjects);
    

    const panelContetent = newElement('div') 
    panelContetent.classList.add('subjects-panel-content')

    subjects.forEach((subject) => { 
        const subjectsName = subject.replace(/\s+/g, "")
        const item = panelItem(`#subject/${subject}`, subjectsName, 'subject-panel-list-item')
        console.log('item ===> ', item);
        

        panelContetent.appendChild(item)
    })

    return panelContetent
}

export default SubjectsPanelList;