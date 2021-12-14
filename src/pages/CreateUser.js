import React, { useCallback } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// Components
import CreateUserForm from '../components/CreateUserForm';

function CreateUser({ setErrors, setLoggedIn, setUserInformation }) {
	const signUpUser = useCallback(
		(e) => {
			e.preventDefault();

			const email = e.currentTarget.email.value;
			const password = e.currentTarget.password.value;
			const name = e.currentTarget.displayName.value;
			const auth = getAuth();

			// TODO: hookup displayname
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					user.displayName = name;
					setLoggedIn(true);
					setUserInformation({
						displayName: user.displayName,
						email: user.email,
						uid: user.uid,
						accessToken: user.accessToken,
					});
					console.log({ user });
					setErrors();
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.warn({ error, errorCode, errorMessage });
				});
		},
		[setErrors, setLoggedIn, setUserInformation]
	);

	return (
		<div className='PageWrapper'>
			<h1>Create User</h1>
			<CreateUserForm signUpUser={signUpUser} />
		</div>
	);
}

export default CreateUser;
