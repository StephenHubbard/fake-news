import React from 'react';

import { CardGroup, Card } from 'react-bootstrap';

import '../App.css';

function Cardgroup() {
	
	return (
		<div className="Cardgroup pl-5 pr-5">
			<CardGroup>
            <Card className="m-5">
                <Card.Img variant="top" src="https://www.sltrib.com/resizer/1A7eK8294QW2nqQku2wdVW9Z6mM=/970x0/filters:quality(100)/arc-anglerfish-arc2-prod-sltrib.s3.amazonaws.com/public/L466O4GHMVEZVMHLXRUCIBWU7A.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className="m-5">
                <Card.Img variant="top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/15/12/trumptoon.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className="m-5">
                <Card.Img variant="top" src="https://dw-wp-production.imgix.net/2019/09/300b552e-c4c1-4be3-8d2e-ff770d6b4b77.jpeg?auto=format&fit=crop&ixlib=react-8.6.4&h=546&w=970" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardGroup>
            <CardGroup>
            <Card className="m-5">
                <Card.Img variant="top" src="https://www.sltrib.com/resizer/1A7eK8294QW2nqQku2wdVW9Z6mM=/970x0/filters:quality(100)/arc-anglerfish-arc2-prod-sltrib.s3.amazonaws.com/public/L466O4GHMVEZVMHLXRUCIBWU7A.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className="m-5">
                <Card.Img variant="top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/15/12/trumptoon.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className="m-5">
                <Card.Img variant="top" src="https://dw-wp-production.imgix.net/2019/09/300b552e-c4c1-4be3-8d2e-ff770d6b4b77.jpeg?auto=format&fit=crop&ixlib=react-8.6.4&h=546&w=970" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardGroup>
		</div>
	);
}

export default Cardgroup;
