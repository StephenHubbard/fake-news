import React from 'react';

import '../App.css';
import { Navbar } from 'react-bootstrap';

function Footer() {
	
	return (
        <div>
            <Navbar bg="dark" variant="dark">
        <footer className="page-footer font-small pt-4 ml-5" >

                <div className="container-fluid text-center text-md-left" style={{color: "white"}}>

                    <div className="row">

                    <div className="col-md-6 mt-md-0 mt-3">

                        <h5 className="text-uppercase" >Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>

                    </div>

                    <hr className="clearfix w-100 d-md-none pb-3" />

                    <div className="col-md-3 mb-md-0 mb-3">

                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled">
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                            <a href="#!">Link 2</a>
                        </li>
                        <li>
                            <a href="#!">Link 3</a>
                        </li>
                        <li>
                            <a href="#!">Link 4</a>
                        </li>
                        </ul>

                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">

                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled">
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                            <a href="#!">Link 2</a>
                        </li>
                        <li>
                            <a href="#!">Link 3</a>
                        </li>
                        <li>
                            <a href="#!">Link 4</a>
                        </li>
                        </ul>

                    </div>


                </div>

                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/education/bootstrap/"> Hooks-News.com</a>
                </div>
                </div>
        </footer>
                </Navbar>
        </div>
	);
}

export default Footer;
