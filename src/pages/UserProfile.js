import React from 'react';
import { MOCK_DATA } from './Dashboard';
import UserCard from '../components/UserCard';

function UserProfile({ userInformation }) {
	// Display all post by ONE USER
	console.log({ userInformation });
	return (
		<div className='PageWrapper'>
			<h1>User Name:</h1>
			<h2>Posts</h2>
			{MOCK_DATA.map((user, i) => (
				<UserCard user={user} key={i} />
			))}
		</div>
	);
}

export default UserProfile;
