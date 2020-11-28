import React from 'react';

import './auth.styles.scss'

import { SignIn } from '../../components/sign-in/sign-in.component.jsx'
import { SignUp } from '../../components/sign-up/sign-up.component.jsx'

export const AuthPage = () => (
    <div className='auth'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
)