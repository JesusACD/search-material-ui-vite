import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';

const Searcher = (props) => {
	const { inputUser, setInputUser } = props;

	const [valueInput, setValueInput] = useState('');

	const handleSubmit = () => {
		setInputUser(() => valueInput);
	};
	return (
		<Stack direction={'row'} sx={{ marginTop: '30px', width: '80%' }}>
			<TextField
				sx={{ width: '90%' }}
				id='outlined-basic'
				label='GitHub User'
				placeholder='Buscar Usuario Github'
				variant='outlined'
				size='small'
				value={valueInput}
				onChange={(e) => setValueInput(e.target.value)}
			/>
			<IconButton
				sx={{ left: '-45px' }}
				size='small'
				onClick={handleSubmit}>
				<SearchIcon />
			</IconButton>
		</Stack>
	);
};

export default Searcher;
