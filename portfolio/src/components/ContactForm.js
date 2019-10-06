import React, { useState } from 'react';
import { withStyles, makeStyles, TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import '../css/contact.css'


function ContactForm({ values }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const useStyles = makeStyles(theme => ({
        root: {
            display: "flex",
            flexWrap: "wrap"
        },
        margin: {
            margin: theme.spacing(1)
        }
    }));

    const CssTextField = withStyles({
        root: {
            "& label.Mui-focused": {
                color: "#66FCF1"
            },
            "& label": {
                color: '#66FCF1'
            },
            "& .MuiInput-underline:after": {
                borderBottomColor: "#66FCF1"
            },
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    borderColor: "#66FCF1"
                },
                "&:hover fieldset": {
                    borderColor: "#66FCF1"
                },
                "&.Mui-focused fieldset": {
                    borderColor: "#66FCF1"
                }
            }
        }
    })(TextField);

    const ColorButton = withStyles(theme => ({
        root: {
            backgroundColor: '#45a29e',
        },
    }))(Button);

    const classes = useStyles();

    const handleChange = e => {
        if (e.target.id === 'name') {
            setName(e.target.value)
        } else if (e.target.id === 'email') {
            setEmail(e.target.value)
        } else {
            setMessage(e.target.value);
        }
    }

    return (
        <section className='contact' id='contact'>
            <div className='contactFormContainer'>
                <form action='https://formcarry.com/s/F6SGODTF9OL' method='POST' className='contactForm'>
                    <h1>Contact Me</h1>
                    <CssTextField
                    className={classes.margin}
                    id='name'
                    name='Name'
                    type='text'
                    label='Name'
                    variant='outlined'
                    fullWidth />
                    <CssTextField
                    className={classes.margin}
                    id='email'
                    name='Email'
                    label='Email'
                    type='text'
                    variant='outlined'
                    fullWidth />
                    <CssTextField
                    className={classes.margin}
                    id='message'
                    name='Message'
                    type='text'
                    label='Message'
                    variant='outlined'
                    multiline
                    rows='4'
                    fullWidth />
                    <ColorButton
                    type='submit'
                    variant='contained'>Submit</ColorButton>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;