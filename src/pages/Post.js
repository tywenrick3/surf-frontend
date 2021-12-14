import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserCard from '../components/UserCard';

const url = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;

function Post() {
	const [singlePost, setSinglePost] = useState({});
	let { id } = useParams();

	useEffect(() => {
		// Get All users
		axios
			.get(`${url}/user/${id}`)
			.then(function (response) {
				console.log({ response });
				setSinglePost(response.data);
			})
			.catch(function (error) {
				console.warn(error);
			});
	}, [id]);

	return (
		<div className='PageWrapper'>
			<h1>Post</h1>
			<UserCard user={singlePost} />
		</div>
	);
}

export default Post;
