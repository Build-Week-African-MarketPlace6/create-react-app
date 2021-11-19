import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../assets/css/Home.css';
import Nav from './Nav';
import axios from 'axios';
class Signup extends React.Component {
    state = {
        username: "",
        password: ""
    }
    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://marketplacelambda.herokuapp.com/api/users/register", this.state)
            .then(response => {
                console.log(response)
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
                    <h1> Sign Up</h1>
                    <div className='page-wrapper'>
                        <Form >
                            {/* <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <br />
                                <Form.Control
                                    type='email'
                                    placeholder='Email address'
                                />
                                <Form.Text className='text-muted'>
                                    Please provide a valid email address. This will be
                                    your login Id.
                                </Form.Text>
                            </Form.Group> */}
                            <br />
                            <Form.Group className='mb-3' controlId='text-muted'>
                                <label>Username</label>
                                <Form.Control name='username' onChange={this.handleChange} value={this.state.username} type='text' placeholder='Username' />
                            </Form.Group>
                            <br />
                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <label>Password</label>
                                <Form.Control name='password'onChange={this.handleChange} value={this.state.password} type='password' placeholder='Password' />
                            </Form.Group>
                            <br />
                            <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
                        </Form>
                        <p>
                            Already have an account? <a href='/Login'> Log in.</a>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
export default Signup;