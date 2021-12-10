import React, { useEffect, useState } from 'react';
import {
	Navigate,
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
// Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
// Pages
import AddPost from './pages/AddPost';
import CreateUser from './pages/CreateUser';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Post from './pages/AddPost';
import UserProfile from './pages/UserProfile';
// Components
import Head from './components/Head';
// Styles
import './App.css';
// Config
import FirebaseConfig from './components/FirebaseConfig';

export const baseUrl =
	process.env.REACT_APP_BACKEND_URL || `http://localhost:4000`;

function App() {
	// Track if user is logged in
	const [loggedIn, setLoggedIn] = useState(false);
	// Check to see if there is any loading
	const [loading, setLoading] = useState(true);
	// Store user information in state
	const [userInformation, setUserInformation] = useState({});
	const [appInitialized, setAppInitialized] = useState(false);
	// Error
	const [errors, setErrors] = useState();
	console.warn(errors);

	useEffect(() => {
		initializeApp(FirebaseConfig);
		setAppInitialized(true);
	}, []);

	useEffect(() => {
		if (appInitialized) {
			const auth = getAuth();
			onAuthStateChanged(auth, (user) => {
				if (user) {
					setUserInformation(user);
					setLoggedIn(true);
				} else {
					setUserInformation({});
					setLoggedIn(false);
				}
				setLoading(false);
			});
		}
	}, [appInitialized]);

	function logout() {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				setUserInformation({});
				setLoggedIn(false);
			})
			.catch((error) => {
				console.warn(error);
			});
	}

	if (loading || !appInitialized) return null;

	return (
		<div>
			<Head logout={logout} loggedIn={loggedIn} />
			<Router>
				<Routes>
					<Route
						path='/login'
						element={
							!loggedIn ? (
								<Login
									setErrors={setErrors}
									setLoggedIn={setLoggedIn}
									setUserInformation={setUserInformation}
								/>
							) : (
								<Navigate to='/' />
							)
						}
					/>
					<Route
						path='/create-user'
						element={
							!loggedIn ? (
								<CreateUser
									setErrors={setErrors}
									setLoggedIn={setLoggedIn}
									setUserInformation={setUserInformation}
								/>
							) : (
								<Navigate to='/' />
							)
						}
					/>
					<Route
						path='/add-post'
						element={
							loggedIn ? (
								<AddPost userInformation={userInformation} />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/post/:id'
						element={loggedIn ? <Post /> : <Navigate to='/login' />}
					/>
					<Route
						path='/user/:id'
						element={
							loggedIn ? (
								<UserProfile
									userInformation={userInformation}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/'
						element={
							loggedIn ? <Dashboard /> : <Navigate to='/login' />
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
