import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Register/Register.scss'

SignIn.propTypes = {
    
};

function SignIn() {
    const [post, setPost] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('');
    const navigate = useNavigate()

    function handleInput(e){
        setPost({...post, [e.target.name]: e.target.value})
    }
    
    axios.defaults.withCredentials = true

    function handleSubmit(e){
        e.preventDefault()
        const formData = {
            email: post.email,
            password: post.password
        };
        axios.post('http://localhost:3001/users/login', formData)
        .then(res=>{
            if(res.data.status === "Success"){
                localStorage.setItem('token', res.data.token)
                navigate('/')
            }
            else{
                alert(res.data.error)
            }
        })
        .catch(err=>{
            console.log(err)
            setError('Login failed. Please try again')
        })
    };

    return (
        <div className="container">
            <div className="ct-form">
                <h3>Sign in</h3>
                <Form onSubmit={(e)=>handleSubmit(e)}>
                    {error&& <div className='error-area'>{error}</div>}
                    <Form.Group as={Row} className="mb-3">
                        <Col>
                            <Form.Control 
                                type="email" 
                                name="email"
                                placeholder="Email" 
                                onChange={handleInput} 
                                id='formPlaintextEmail'
                                autoComplete="off"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col>
                            <Form.Control 
                                type="password" 
                                name="password"
                                placeholder="Password" 
                                onChange={handleInput} 
                                id='formPlaintextPassword'
                                autoComplete="off"
                            />
                        </Col>
                    </Form.Group>
                </Form>
                <button type='submit' onClick={(e)=>handleSubmit(e)}>Sign in</button>
                <p>Create new account? &nbsp;
                    <Link to='/register'>Sign up</Link>
                </p>
            </div>
        </div>
    );
}

export default SignIn;