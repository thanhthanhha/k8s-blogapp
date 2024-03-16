
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../component';
import * as ROUTES from '../config/router';
import HeadCon from "../containers/newheader";
import useAuth from '../helpers/useAuth';

export default function SignIn() {
    const history = useNavigate();
    const {login, loading, error, isLogin} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let payload;
  
    const isInvalid = password === '' || username === '';
  
    const handleSignin = async (event) => {
      event.preventDefault();
      
      login(username, password);
    }
    return (
        <>
        <HeadCon ButtonOption={true} >
          <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error data-testid="error">{error}</Form.Error>}
  
            <Form.Base onSubmit={handleSignin} method="POST">
              <Form.Input
                placeholder="Username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
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
              Don't Have An Account Yet? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
          </Form>
        </HeadCon>
      </>
    )
}