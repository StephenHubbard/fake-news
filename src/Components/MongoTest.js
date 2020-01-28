import React, { useState } from 'react';
import axios from 'axios';

import { Button } from 'react-bootstrap';

import '../App.css';

function MongoTest(res) {
	const [data, setData] = useState('');
	
	function getMongo(){
		axios
		.get('/api/getMongo')
		.then(res => {
			setData(res.data)
			console.log(res.data)
		})
		.catch(err => console.log(err))
	}
	
	return (
		<div className="MongoTest">
			<Button onClick={() => getMongo()}>Test</Button>
		</div>
	);
}

export default MongoTest;
