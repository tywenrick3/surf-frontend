import React from 'react';
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
];
function Dashboard() {
	// Display all posts
	return (
		<div className='PageWrapper'>
			<h1>Dashboard</h1>
			{MOCK_DATA.map((user, i) => (
				<UserCard user={user} key={i} />
			))}
		</div>
	);
}

export default Dashboard;
