import { getAllSubjects } from "../../data/fetchData.js";
import urls from "../../urls/index.js";
import newElement from "../../utils/newElement.js";
import { panelItem } from "./panelItem.js"; 

const SubjectsPanelList = async (usersArray) => {
    // usersArray agora será um array com UM ÚNICO objeto de usuário: [currentUser]
    console.log('usersArray recebido em SubjectsPanelList ===> ', usersArray);

    const allSubjects = await getAllSubjects(urls.subjects);
    console.log('allSubjects (todas as disciplinas) ===> ', allSubjects);  

    const PanelContent = newElement('div');
    PanelContent.classList.add('subjects-panel-content');

    usersArray.forEach((user) => { 
        const userSubjectIds = user.subject; 
        
        if (userSubjectIds && Array.isArray(userSubjectIds)) {
            userSubjectIds.forEach(subjectId => {
                const { name } = allSubjects.find(sub => sub._id === subjectId);
                                
                const item = panelItem(`#/subject-student/${user._id}`, name, 'subject-panel-list-item');
                console.log('item criado ===> ', item);

                PanelContent.appendChild(item);
            });
        } 
    });

    return PanelContent;
};

export default SubjectsPanelList;