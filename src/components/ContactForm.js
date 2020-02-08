import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import { Form } from 'react-bootstrap';
import Button from "@material-ui/core/Button";
import axios from 'axios';
import '../css/contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [messageSent, setMessageSent] = useState('');

    const mailOptions = {
        from: `${email}`,
        to: 'travis.laudahl@gmail.com',
        subject: 'Portfolio Contact Form',
        text: `Name: ${name}, Email: ${email} \n ${message}`
    };

    const sendMail = (e) => {
        axios.post('https://nodemailer-backend.herokuapp.com/send', mailOptions)
        .then(res => {
            if(res.status === 200) {
                setName('');
                setEmail('');
                setMessage('');
                setMessageSent(true);
            }
        })
        .catch(err => console.error(err))
    }

    const ColorButton = withStyles(theme => ({
        root: {
            backgroundColor: '#45a29e',
        },
    }))(Button);

    return (
        <section className='contact' id='contact'>
            <div className='contactFormContainer'>
                <Form method='POST' action='https://nodemailer-backend.herokuapp.com/send' className='contactForm'>
                    <h1>Contact</h1>
                    <p>Have a question or want to meet? Shoot me an email.</p>
                    {messageSent && 
                        <p id='messageSent'>Message Sent Successfully!</p>
                    }
                    <Form.Label style={{ color: '#45A29E' }}>Name</Form.Label>
                    <Form.Control data-name='name' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Name' style={{ color: 'white', backgroundColor: '#04060d', marginBottom: '1%' }}/>
                    <Form.Label style={{ color: '#45A29E' }}>Email</Form.Label>
                    <Form.Control data-name='from' value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' style={{ color: 'white', backgroundColor: '#04060d', marginBottom: '1%' }}/>
                    <Form.Label style={{ color: '#45A29E' }}>Message</Form.Label>
                    <Form.Control data-name='message' value={message} as='textarea' rows='4' placeholder='Message' style={{ color: 'white', backgroundColor: '#04060d', marginBottom: '1%' }} onChange={(e) => setMessage(e.target.value)}/>
                    <ColorButton
                    type='submit'
                    variant='contained'
                    onClick={(e) => {
                        e.preventDefault();
                        sendMail();
                    }}>Submit</ColorButton>
                </Form>
            </div>
        </section>
    );
};

export default ContactForm;