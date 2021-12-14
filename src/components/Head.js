import React from 'react';
import wavelogo from '../assets/wavelogo.png';

function Head({ logout, loggedIn }) {
	return (
		<header className='HeaderWrapper'>
			<div className='Header PageWrapper'>
				<a href='/'>
					<img
						className='logo'
						width='70'
						height='auto'
						alt='logo'
						src={wavelogo}
					></img>
				</a>
				<nav>
					{!loggedIn && (
						<>
							<a href='/login'>Login</a>
							<a href='/create-user'>Create User</a>
						</>
					)}
					{loggedIn && (
						<>
							<a href='/'>Surf</a>
							<a href='/user/:id'>Profile</a>
							<a href='/add-post'>New+</a>
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
