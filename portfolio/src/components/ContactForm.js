import React from 'react'
import { withFormik, Form, Field } from 'formik';
// import { TextField } from 'formik-material-ui';
import { withStyles, makeStyles, TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";

import '../css/contact.css'
function ContactForm() {

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

    return (
        <section className='contact' id='contact'>
            <div className='contactFormContainer'>
                <Form className='contactForm'>
                    <h1>Contact Me</h1>
                    <CssTextField
                    className={classes.margin}
                    name='name'
                    label='Name'
                    variant='outlined'
                    fullWidth />
                    <CssTextField
                    className={classes.margin}
                    name='name'
                    label='Email'
                    variant='outlined'
                    fullWidth />
                    <CssTextField
                    className={classes.margin}
                    name='name'
                    label='Message'
                    variant='outlined'
                    multiline
                    rows='4'
                    fullWidth />
                    <ColorButton
                    type='submit'
                    variant='contained'>Submit</ColorButton>
                </Form>
            </div>
        </section>
    );
};

const FormikContactForm = withFormik({
    mapPropsToValues({ name, email, message }) {
        return {
            name: name || '',
            email: email || '',
            message: message || '',
        }
    }
})(ContactForm);

export default FormikContactForm;