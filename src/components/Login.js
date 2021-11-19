import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Nav from './Nav';
import { BrowserRouter as Link } from 'react-router-dom';

class Login extends React.Component {

	state = {
		username: "",
		password: ""
		    }
		
	handleChange = event => {
		this.setState({
		    ...this.state,
		    [event.target.username]: event.target.value
		})
	}
		
			
	handleSubmit = () => {
		axios.post("https://marketplacelambda.herokuapp.com/api/users/login", this.state)
		    .then(response => {
		        localStorage.setItem("token", response.data.payload);
		        localStorage.setItem("username", this.state.username);
		        this.props.history.push("/protected");
		
		    }).catch(error => {
		                console.error(error);
		        })
	};

	render() {
		return (
			<section id='header'>
				<Nav />
				<div className='container'>
					<h1>Log In</h1>
                    <br/>
                    <br/>
					<div className='page-wrapper'>
						<Form>
							<Form.Group className='mb-3' controlId='formBasicEmail'>
								<Form.Label>Username</Form.Label>
								<Form.Control type='text' placeholder='Enter Username' />
								<Form.Text className='text-muted'>
									Log into your account to add products.
								</Form.Text>
							</Form.Group>

                            <br/>
                            
							<Form.Group className='mb-3' controlId='formBasicPassword'>
								<Form.Label>Password</Form.Label>
								<Form.Control type='password' placeholder='Password' />
							</Form.Group>
							<br />
							<Button type='submit'>Submit</Button>
						</Form>
						<p>
							Don't have an account yet? <a href='/Signup'> Sign up.</a>
						</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Login;