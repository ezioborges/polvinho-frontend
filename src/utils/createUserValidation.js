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

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`])(?=.{8,})/;
    if(!passwordPattern.test(password) || !password) {
        errors.push({ valid: false, message: 'Senha inválida. Deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.' });
    }

    return errors
 }

