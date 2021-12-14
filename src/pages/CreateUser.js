import React, { useCallback } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
// Components
import CreateUserForm from '../components/CreateUserForm';

function CreateUser({ setErrors, setLoggedIn, setUserInformation }) {
	const signUpUser = useCallback(
		(e) => {
			e.preventDefault();

			const email = e.currentTarget.email.value;
			const password = e.currentTarget.password.value;
			const displayName = e.currentTarget.displayName.value;
			const auth = getAuth();

			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					setLoggedIn(true);
					setUserInformation({
						email: user.email,
						uid: user.uid,
						accessToken: user.accessToken,
					});
					updateProfile(auth.currentUser, {
						displayName,
					})
						.then(() => {
							return true;
						})
						.catch((error) => {
							return setErrors(error.errorMessage);
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
