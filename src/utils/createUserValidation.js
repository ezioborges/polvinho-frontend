export const createUserValidation = (name, email, register, discipline, password) => {
    const errors = []
    if (!name) {
        errors.push({ valid: false, message: 'Nome é obrigatório.' });
    }

    if (!discipline) {
        errors.push({ valid: false, message: 'Por favor, vincule a pessoa a uma disciplina.' });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email) || !email) {
        errors.push({ valid: false, message: 'E-mail inválido.' });
    }

    const registerPattern = /^\d{6,}$/; 
    if(!registerPattern.test(register) || !register) {
        errors.push({ valid: false, message: 'Número de matrícula inválido. Deve conter pelo menos 6 dígitos.' });
    }

    return errors
 }

