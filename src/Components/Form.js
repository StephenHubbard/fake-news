import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import '../App.css';
import './Form.css';



function Form(props) {
	console.log(props)
	const [username, setUsername] = useState('');
	const [category, setCategory] = useState('');
	const [content, setContent] = useState('');
	
	function submitForm(){
		axios
		.post('/api/post', {username, category, content})
		.then(res => {
			console.log(res.data.ops)
		})
		.catch(err => console.log(err))
		props.history.push("/")
	}

	return (
		<div className="Form">
			<form>
				<div className="form-group">
					<label htmlFor="exampleFormControlInput1">Username</label>
					<input onChange={(e) => setUsername(e.target.value)} className="form-control" id="usernameInput" placeholder="Username" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleFormControlSelect1">Category</label>
					<select onChange={(e) => setCategory(e.target.value)} className="form-control" id="exampleFormControlSelect1">
						<option>--Select--</option>
						<option>Politics</option>
						<option>Technology</option>
						<option>Humor</option>
						<option>Gaming</option>
						<option>Sports</option>
					</select>
				</div>
				
				<div className="form-group">
					<label htmlFor="exampleFormControlTextarea1">Content</label>
					<textarea onChange={(e) => setContent(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Content"></textarea>
				</div>
				<div className="form-group">
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">Upload</span>
						</div>
						<div className="custom-file">
							<input type="file" className="custom-file-input" id="inputGroupFile01" />
							<label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
						</div>
					</div>
				</div>
				{/* <button onClick={() => console.log(username, category, content)}>State</button> */}
				<Button type="submit" onClick={() => submitForm()}>Submit</Button>
			</form>
		</div>
	);
}

export default withRouter(Form);
