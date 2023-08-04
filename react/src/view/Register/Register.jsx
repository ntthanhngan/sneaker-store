import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Register.scss'
import { Link } from 'react-router-dom';

Register.propTypes = {
    
};

function Register() {

  const [post, setPost] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    dob: '',
    gender: false
  })
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword]= useState('')

  function handleInput(e){
    setPost({...post, [e.target.name]: e.target.value})
  }
  // Handling the form submission
  function handleSubmit(e){
    e.preventDefault()
    const formData = {
      firstname: post.firstname,
      lastname: post.lastname,
      email: post.email,
      password: post.password,
      dob: post.dob,
      gender: post.gender
    };
    axios.post('http://localhost:3001/users/register', formData)
    .then(res=>{
      console.log(res)
      if(res.status===200){
        alert('Sign up successful')
        window.location.href='/login';
      }else{
        setError('Registration failed. Please try again')
      }
    })
    .catch(err=>{
      console.log(err)
      setError('Registration failed. Please try again')
    })
  };
  useEffect(()=>{
    if (post.password !== confirmPassword) {
      setError('Confirm password not match')
    } else{
      setError('')
    }
  }, [confirmPassword, post.password])

  function handleConfirmPass(e) {
    setConfirmPassword(e.target.value)
  }
  

  return (
    <div className="container">
      <div className="ct-form">
        <h3>Register</h3>
        <Form>
          {error&& <div className='error-area'>{error}</div>}
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control 
                type="text" 
                placeholder="First name" 
                name='firstname' 
                onChange={handleInput} 
                id='formPlaintextFirstName'
                autoComplete="off"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control 
                type="text" 
                placeholder="Last name" 
                name='lastname' 
                onChange={handleInput} 
                id='formPlaintextLastName'
                autoComplete="off"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control 
                type="email" 
                placeholder="Email" 
                name='email' 
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
                placeholder="Password" 
                name='password' 
                onChange={handleInput} 
                id='formPlaintextPassword' 
                autoComplete="off"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control 
                type="password" 
                placeholder="Confirm Password" 
                name='confirmPassword' 
                id='formPlaintextConfirmPassword' 
                autoComplete="off"
                value={confirmPassword}
                onChange={(e)=>handleConfirmPass(e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Control 
                type="date" 
                placeholder="Birth Day" 
                name='dob' 
                id='formPlaintextDoB' 
                autoComplete="off"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Form.Check
                type="radio" 
                placeholder="Birth Day" 
                name='gender' 
                value="false"
                autoComplete="off"
                label="Male"
              />
              <Form.Check
                type="radio" 
                placeholder="Birth Day" 
                name='gender' 
                value='true' 
                autoComplete="off"
                label="Female"
              />
            </Col>
          </Form.Group>
        </Form>
        <button type='submit' onClick={(e)=>handleSubmit(e)}>Sign up</button>
        <p>Already have account? &nbsp;
          <Link to='/login'>Sign in</Link>
        </p>
      </div>
    </div>
    
  );
}

export default Register;