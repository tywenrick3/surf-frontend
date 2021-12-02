import React from 'react';

function Head() {
	return (
		<header className='HeaderWrapper'>
			<div className='Header PageWrapper'>
				<h1>Logo</h1>
				<nav>
					<a href='/'>Dashboard</a>
					<a href='/login'>Login</a>
					<a href='/create-user'>Create User</a>
					<a href='/add-post'>Add Post</a>
					{/*TODO: pull in userID here */}
					<a href='/user/:id'> My Profile</a>
					{/*TODO: add logout functionality */}
					<a href='/logout'>Logout</a>
				</nav>
			</div>
		</header>
	);
}

export default Head;
