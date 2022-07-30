import React, { useState, useEffect } from 'react'
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { db } from '../../firebase'

const Home = () => {
	const [show, setShow] = useState(false);
	const [data, setData] = useState([]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleFetch = async () => {
		const items = await db.collection('confession').get();
		const itemsData = items.docs.map(item => item.data());
		for (let i = 0; i < itemsData.length; i++) {
			setData(prevData => [...prevData, {
				date: itemsData[i].date,
				time: itemsData[i].time,
				text: itemsData[i].text,
			}]);
		}
		console.log(data);
	}

	useEffect(() => {
		handleFetch();
	}
		, [])

	return (
		<>
			<h1>Trashy Page</h1>
			<br />
			<div>
				<Button variant="primary" href="/add">Add</Button>{' '}
				{show ?
					<Button variant="secondary" onClick={handleClose}>Hide</Button> :
					<Button variant="primary" onClick={handleShow}>Show</Button>
				}
			</div>

			{
				show ? <div>
					<br />
					<Row xs={1} md={2} className="g-4" style={{ margin: "auto", marginLeft: "auto", marginRight: "auto" }}>
						{data.map((item, idx) => (
							<Col>
								{/* <CardGroup> */}
								<Card key={idx} style={{ width: "20rem", height: "100%" }}>
									<Card.Header>{ }</Card.Header>
									<Card.Body>
										<Card.Title>Entry #{idx + 1}</Card.Title>
										<Card.Text>
											<u>{item.date}, {item.time}</u>
											{/* <br /> */}
											<br />
											{item.text}
										</Card.Text>
									</Card.Body>
									<Card.Footer>{ }</Card.Footer>
								</Card>
								{/* </CardGroup> */}
							</Col>
						))}
					</Row>
				</div> : null
			}
		</>
	)
}

export default Home;