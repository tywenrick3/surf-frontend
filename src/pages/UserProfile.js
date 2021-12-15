import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// Components
import UserCard from '../components/UserCard';
import { baseUrl } from '../App';

function UserProfile({ userInformation }) {
	// Display all post by ONE USER
	const [users, setUsers] = useState([]);
	const [profileName, setProfileName] = useState();
	let { uid } = useParams();

	useEffect(() => {
		// Get all of a users posts
		axios
			.get(`${baseUrl}/profile/${uid}`)
			.then(function (response) {
				setUsers(response.data);
				setProfileName(response.data[0].displayName);
			})
			.catch(function (error) {
				//handle error
				console.warn(error);
			});
	}, [uid]);
	console.log(profileName);

	return (
		<div className='PageWrapper'>
			<h1>{profileName}</h1>
			{users.map((user, i) => (
				<UserCard user={user} key={i} />
			))}
		</div>
	);
}

export default UserProfile;
