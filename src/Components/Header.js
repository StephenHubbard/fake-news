import React from 'react';

import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import '../App.css';

function Header(res) {
	
	
	return (
		<div className="Header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Hooks-News</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Post</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
		</div>
	);
}

export default Header;
