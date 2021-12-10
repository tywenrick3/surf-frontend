import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddPostForm from '../components/AddPostForm';

const baseUrl = process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;

function AddPost({ userInformation }) {
	const navigate = useNavigate();
	// Function to submit post to api
	function submitPost(e) {
		e.preventDefault();
		const userMessage = e.currentTarget.userMessage.value;
		const imageSrc = e.currentTarget.imageUrl.value;
		const imageAlt = e.currentTarget.imageAlt.value;
		const userName = userInformation.displayName;
		const userId = userInformation.uid;

		const url = `${baseUrl}/create?userMessage=${userMessage}&imageSrc=${imageSrc}&imageAlt=${imageAlt}&userName=${userName}&userId=${userId}`;

		axios
			.get(url)
			.then(function (response) {
				console.log({ response });
				navigate('/', { replace: true });
			})
			.catch(function (error) {
				console.log({ error });
			});
	}

	return (
		<div className='PageWrapper'>
			<h1>Add Post</h1>
			<AddPostForm submitPost={submitPost} />
		</div>
	);
}

export default AddPost;
