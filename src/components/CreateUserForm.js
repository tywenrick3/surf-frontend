import React from 'react';

function CreateUserForm({ signUpUser }) {
	return (
		<div className='Form'>
			<form onSubmit={(e) => signUpUser(e)}>
				<label htmlFor='displayName'>Name</label>
				<input
					type='text'
					name='displayName'
					placeholder='Enter Display Name'
				/>

				<label htmlFor='email'>Email</label>
				<input type='email' name='email' placeholder='Enter Email' />

				<label htmlFor='password'>Password</label>
				<input type='password' name='password' placeholder='******' />

				<button className='button_form slide_left' type='submit'>
					Create User
				</button>
			</form>
		</div>
	);
}

export default CreateUserForm;
