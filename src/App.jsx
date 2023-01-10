import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import Searcher from './components/Searcher';
import UserCard from './containers/userCard';
import { getGitHubUser } from './services/users';

const StyleContainer = {
	background: 'whitesmoke',
	width: '80vw',
	height: '500px',
	borderRadius: '16px',
	marginTop: '40px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
};

function App() {
	const [inputUser, setInputUser] = useState('octocat');
	const [userState, setUserState] = useState('');
	const [notFound, setNotFound] = useState(false);

	const gettinUser = async (user) => {
		const userResponse = await getGitHubUser(user);

		if (userState === 'octocat') {
			localStorage.setItem('octocat', userResponse);
		}

		if (userResponse.message === 'Not Found') {
			const { octocat } = localStorage;
			setInputUser(octocat);
			setNotFound(true);
		} else {
			setUserState(userResponse);
		}
	};

	console.log(userState);

	useEffect(() => {
		gettinUser(inputUser);
	}, [inputUser]);

	return (
		<Container sx={StyleContainer}>
			<Searcher inputUser={inputUser} setInputUser={setInputUser} />
			<UserCard userState={userState} />
		</Container>
	);
}

export default App;
