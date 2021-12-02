import {
	Navigate,
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
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

function App() {
	return (
		<div>
			<Head />
			<Router>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/create-user' element={<CreateUser />} />
					<Route path='/add-post' element={<AddPost />} />
					<Route path='/post/:id' element={<Post />} />
					<Route path='/user/:id' element={<UserProfile />} />
					<Route path='/' element={<Dashboard />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
