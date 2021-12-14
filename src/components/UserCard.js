import React from 'react';

function UserCard({ user }) {
	console.log({ user });
	return (
		<div className='UserCard'>
			<div className='UserCardImage'>
				<img src={user.imageSrc} alt={user.imageAlt} />
			</div>

			<div className='UserCardText'>
				<p>{user.userMessage}</p>
				<p>
					Posted by: {user.displayName}
					<a href={`/user/${user.userId}`}>{user.displayName}</a>
				</p>
				<p>
					<a href={`/post/${user.id}`}>View Post</a>
				</p>
			</div>
		</div>
	);
}

export default UserCard;
