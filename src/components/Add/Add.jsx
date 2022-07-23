import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { db } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import modal

const Add = () => {
	const navigate = useNavigate();
	const date = new Date();
	const [d, t] = [date.toLocaleDateString(), date.toLocaleTimeString()];

	const [data, setData] = useState([]);
	const [up, setUp] = useState(false);

	const handleClose = () => {
		setUp(false);
		navigate('/');
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		db.collection('confession').add({
			date: d,
			time: t,
			text: data,
		});
		setUp(true);
	}

	return (
		<>
			<h1>Add New Item</h1>
			<br />
			<Modal show={up} onHide={() => setUp(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Success</Modal.Title>
				</Modal.Header>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => handleClose()}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			<Button variant="secondary" href="/">Home</Button>
			<div>
				<Form>
					<Form.Group controlId="text">
						<Form.Label>Text</Form.Label>
						<Form.Control type="text" placeholder="Enter text" onChange={e => setData(e.target.value)} />
					</Form.Group>
					<Button variant="primary" type="submit" onClick={e => handleSubmit(e)}>Submit</Button>
				</Form>
			</div>
		</>
	)
}

export default Add