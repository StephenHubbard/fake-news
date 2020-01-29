import React from 'react';

import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

import '../App.css';

function Header(res) {
	
	
	return (
		<div className="Header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">Hooks-News</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#form">Post</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                <Nav className="d-flex justify-content-end">
                    <Nav.Link href="#login">Login</Nav.Link>
                </Nav>
            </Navbar>
		</div>
	);
}

export default Header;
