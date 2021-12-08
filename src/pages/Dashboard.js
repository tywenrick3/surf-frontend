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
