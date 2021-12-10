import React from 'react';

function AddPostForm({ submitPost }) {
	return (
		<div className='Form'>
			<form onSubmit={(e) => submitPost(e)}>
				<label htmlFor='userMessage'>User Message</label>
				<input
					type='text'
					name='userMessage'
					placeholder='Enter Caption'
				/>

				<label htmlFor='imageUrl'>Image URL</label>
				<input
					type='text'
					name='imageUrl'
					placeholder='http://image.com/surfimage.jpg'
				/>

				<label htmlFor='imageAlt'>Image Alt Text</label>
				<input
					type='text'
					name='imageAlt'
					placeholder='Alt Text for image'
				/>

				<button className='button_form slide_left' type='submit'>
					Post
				</button>
			</form>
		</div>
	);
}

export default AddPostForm;
