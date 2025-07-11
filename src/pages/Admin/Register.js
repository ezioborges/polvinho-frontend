import { createUser } from '../../events/users.js';
import UserRegister from './StudentRegister.js';
import SubjectsRegister from './SubjectsRegister.js';

const Register = async () => {
	const roleFromHash = window.location.hash.split('/')[2].toLocaleLowerCase();

	if (roleFromHash === 'disciplina') {
		return SubjectsRegister();
	}

	if (roleFromHash === 'professor') {
		return UserRegister(roleFromHash, createUser);
	}

	if (roleFromHash === 'aluno') {
		return UserRegister(roleFromHash, createUser);
	}
};

export default Register;
