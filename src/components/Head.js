import React from 'react';
import wavelogo from '../assets/wavelogo.png';

function Head({ logout, loggedIn }) {
	return (
		<header className='HeaderWrapper'>
			<div className='Header PageWrapper'>
				<div className='Logo'>
					<a href='/'>
						<img
							className='LogoImage'
							alt='Logo'
							src={wavelogo}
							width='100'
							height='auto'
						/>
					</a>
				</div>
				<nav>
					{!loggedIn && (
						<>
							<a href='/login'>Login</a>
							<a href='/create-user'>Create User</a>
						</>
					)}
					{loggedIn && (
						<>
							<a href='/'>Dashboard</a>
							<a href='/user/:id'> My Profile</a>
							<a href='/add-post'>Add Post</a>
							<button
								className='button_slide slide_left'
								onClick={() => logout()}
							>
								Log Out
							</button>
						</>
					)}
				</nav>
			</div>
		</header>
	);
}

export default Head;
