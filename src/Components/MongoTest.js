import React, { useState } from 'react';
import axios from 'axios';

import { Button } from 'react-bootstrap';

import '../App.css';


function getMongo(){
	axios
	.get('/api/getMongo')
	.then(res => {
		console.log(res)
	})
	.catch(err => console.log(err))
}

const App = () => (
    <div>
			<Button onClick={() => getMongo()}>Test</Button>
		</div>
);

export default App;
