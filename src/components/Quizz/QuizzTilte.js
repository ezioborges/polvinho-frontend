import PageTitle from '../PageTitle.js';

const QuizzTitle = (name, discipline) => {
    return PageTitle(`Avaliação: ${name}`,
        `Discipolina: ${discipline}`);
}

export default QuizzTitle;