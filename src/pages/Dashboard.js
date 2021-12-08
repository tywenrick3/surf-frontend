import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Components
import UserCard from '../components/UserCard';

export const MOCK_DATA = [
	{
		imageAlt: 'alt text',
		imageSrc:
			'http://galaxypro.s3.amazonaws.com/spot-media/142/142-pipeline-surf-hawaii2.jpg',
		userMessage: 'Stoked',
		postId: '1',
		userId: '123',
		userName: 'Ty',
	},
	{
		imageAlt: 'alt text',
		imageSrc:
			'https://frothers.com.au/wp-content/uploads/2014/11/seandavey004-1.jpg',
		userMessage: 'Another!',
		postId: '1',
		userId: '123',
		userName: 'Ty',
	},
	{
		imageAlt: 'alt text',
		imageSrc:
			'https://spot-thumbnails.cdn-surfline.com/spots/584204214e65fad6a7709cdf/584204214e65fad6a7709cdf_1500.jpg',
		userMessage: 'Sets',
		postId: '1',
		userId: '123',
		userName: 'Ty',
	},
];
// Once deployed will be heroku
const url = `http://localhost:4000`;

function Dashboard() {
	const [users, setUsers] = useState([]);
	// Display all posts

	useEffect(() => {
		// Get All users
		axios
			.get(url)
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
			<h1>Dashboard</h1>
			{users.map((user, i) => (
				<UserCard user={user} key={i} />
			))}
		</div>
	);
}

export default Dashboard;
