import React from 'react';

function UserCard({ user }) {
	return (
		<div className='UserCard'>
			<div className='UserCardImage'>
				<img src={user.imageSrc} alt={user.imageAlt} />
			</div>

			<div className='UserCardText'>
				<p>{user.userMessage}</p>
				<p>
					Posted by:
					<a href={`/user/${user.userId}`}> {user.userName}</a>
				</p>
				<p>
					<a href={`/post/${user.id}`}>View Post</a>
				</p>
			</div>
		</div>
	);
}

export default UserCard;
