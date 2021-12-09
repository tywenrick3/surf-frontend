// TODO: Add env variables
const FirebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'final-project-fall-2021-tyw.firebaseapp.com',
	projectId: 'final-project-fall-2021-tyw',
	storageBucket: 'final-project-fall-2021-tyw.appspot.com',
	messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export default FirebaseConfig;
