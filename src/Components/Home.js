import React from 'react';
import Jumbotron from './Jumbotron';
import Cardgroup from './Cardgroup';

import '../App.css';

function Home(res) {

	
	return (
		<div className="Home">
            <Jumbotron />
            <Cardgroup />
		</div>
	);
}

export default Home;
