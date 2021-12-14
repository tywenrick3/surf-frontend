import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Components
import UserCard from '../components/UserCard';
import { baseUrl } from '../App';

function Dashboard() {
	const [users, setUsers] = useState([]);
	// Display all posts

	useEffect(() => {
		// Get All users
		axios
			.get(baseUrl)
			.then(function (response) {
				setUsers(response.data);
			})
			.catch(function (error) {
				//handle error
				console.warn(error);
			});
	}, []);

	return (
		<div className='PageWrapper'>
			<h1>Surf</h1>
			{users.map((user, i) => (
				<UserCard user={user} key={i} />
			))}
		</div>
	);
}

export default Dashboard;
