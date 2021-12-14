import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Components
import UserCard from '../components/UserCard';
import { baseUrl } from '../App';

function UserProfile({ userInformation }) {
	// Display all post by ONE USER
	console.log({ userInformation });

	const [users, setUsers] = useState([]);

	useEffect(() => {
		// Get all of a users posts
		axios
			.get(baseUrl)
			.then(function (response) {
				console.log({ response });
				setUsers(response.data);
			})
			.catch(function (error) {
				//handle error
				console.warn(error);
			});
	}, []);

	return (
		<div className='PageWrapper'>
			<h1>{userInformation.displayName}</h1>
			<h2>Posts</h2>
			{users.map((user, i) => (
				<UserCard user={user} key={i} />
			))}
		</div>
	);
}

export default UserProfile;
