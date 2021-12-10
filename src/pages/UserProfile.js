import React from 'react';

function UserProfile({ userInformation }) {
	// Display all post by ONE USER
	console.log({ userInformation });
	return (
		<div className='PageWrapper'>
			<h1>User Name:</h1>
			<h2>Posts</h2>
		</div>
	);
}

export default UserProfile;
