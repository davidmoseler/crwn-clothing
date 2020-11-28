import React from 'react';

import './sign-in.styles.scss'

import { FormInput } from '../form-input/form-input.component.jsx'
import { CustomButton } from '../custom-button/custom-button.component.jsx'

import { signInWithGoogle } from '../../firebase/firebase.utils'

export class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }

    handleChange = ({target: {value, name}}) => {
        this.setState({ [name] : value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    ></FormInput>
                    <label>Email</label>
                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    ></FormInput>
                    <label>Password</label>

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}