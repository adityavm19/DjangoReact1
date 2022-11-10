import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { StudLogin } from '../actions/auth';
import axios from 'axios';

const StudCreate = ({ StudLogin, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username:'',
        birthdate:'',
        password: '',
        re_password: ''
    });

    const { first_name, last_name,username,birthdate, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            StudLogin(first_name, last_name,username,birthdate, password, re_password);
            setAccountCreated(true);
        }
    };



    if (isAuthenticated) {
        return <Navigate to='/' />
    }
    if (accountCreated) {
        return <Navigate to='/login' />
    }

    return (
        <div className='container mt-5'>
            <h1>Sign Up</h1>
            <p>Create your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                <label>
                    First Name:
                        <input
                        className='form-control'
                        type='text'
                        placeholder='First Name*'
                        name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </label>
                <label>
                    Last Name:
                        <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name*'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </label>
                </div>

                <div>
                <label>
                    Username:
                        <input
                        className='form-control'
                        type='text'
                        placeholder='Username'
                        name='Username'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </label>

                <label>
                    Email:
                        <input
                        className='form-control'
                        type='text'
                        placeholder='Email'
                        name='Email'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </label>


                </div>


                <label>
                    Date of Birth:
                        <input
                        className='form-control'
                        type='text'
                        placeholder='Date of Birth'
                        name='Birthdate'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </label>

                <div>

                <label>
                    Password:
                        <input
                        className='form-control'
                        type='text'
                        placeholder='Enter Password'
                        name='Password'
                        value={last_name}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </label>

                <label>
                    Confirm Password:
                        <input
                        className='form-control'
                        type='text'
                        placeholder='Confirm Password'
                        name='Confirm Password'
                        value={last_name}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </label>


                </div>


                <button className='btn btn-primary' type='submit'>Register</button>
            </form>

            <br />
            <p className='mt-3'>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated
});

export default connect(mapStateToProps, { StudLogin })(StudCreate);