import React from 'react'
import { withFormik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import Button from "@material-ui/core/Button";
function ContactForm() {
    return (
        <section>
            <div className='contactFormContainer'>
                <Form className='contactForm'>
                    <label id='contactMe'>Contact Me</label>
                    <Field
                    className='formField'
                    name='name'
                    label='Name'
                    type='text'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    component={TextField} />
                    <Field
                    className='formField'
                    name='email'
                    label='Email'
                    type='email'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    component={TextField} />
                    <Field
                    className='formField'
                    type='textarea' 
                    name='message'
                    label='Message'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    component={TextField}
                    multiline/>
                    <Button
                    type='submit'
                    variant='contained'
                    color='primary'>Submit</Button>
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