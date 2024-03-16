
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../component';
import * as ROUTES from '../config/router';
import HeadCon from "../containers/newheader";
import useAuth from '../helpers/useAuth';

export default function SignUp() {
    const history = useNavigate();
    const {signUp, loading, error, isLogin} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
  
    const isInvalid = password === '' || username === '' || emailAddress == '' || loading;
  
    const handleSignup = async (event) => {
      event.preventDefault();
      
      signUp(emailAddress, username, password);
    }
    return (
        <>
        <HeadCon>
          <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error data-testid="error">{error}</Form.Error>}
  
            <Form.Base onSubmit={handleSignup} method="POST">
              <Form.Input
                placeholder="Username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
              <Form.Input
                type="password"
                value={password}
                autoComplete="off"
                placeholder="Password"
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
                Sign In
              </Form.Submit>
            </Form.Base>
  
            <Form.Text>
            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
          </Form>
        </HeadCon>
      </>
    )
}