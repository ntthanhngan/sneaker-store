import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Form } from 'react-router-dom';

function Account(props) {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dob, setDob] = useState('')

    useEffect((res)=>{
        setFirstname(res.user.firstname)
        setLastname(res.user.lastname)
        setEmail(res.user.email)
        setPassword(res.user.password)
        setDob(res.user.dob)
    },[])

    return (
        <div className='container'>
            <h3>Setting</h3> 
            <div className='ct'>
                <div className="sub-sidebar-menu">
                    <img src="" alt="" />
                </div>
                <div className="ct-profile">
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                            <Form.Control 
                                type="text" 
                                name='firstname'  
                                id='formPlaintextFirstName'
                                autoComplete="off"
                                value={firstname}
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                            <Form.Control 
                                type="text" 
                                name='lastname' 
                                id='formPlaintextLastName'
                                autoComplete="off"
                                value={lastname}
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                            <Form.Control 
                                type="email" 
                                name='email' 
                                id='formPlaintextEmail' 
                                autoComplete="off"
                                value={email}
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label sm='3'>Password</Form.Label>
                            <Col sm="9">
                            <Form.Control 
                                type="password" 
                                name='password' 
                                id='formPlaintextPassword' 
                                autoComplete="off"
                                readOnly
                                value={password}
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col>
                            <Form.Control 
                                type="date" 
                                name='dob' 
                                id='formPlaintextDoB' 
                                autoComplete="off"
                                value={dob}
                            />
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>  
        </div>
    );
}

export default Account;