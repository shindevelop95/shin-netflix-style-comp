import React, {useState, useContext} from 'react';
import { FooterContainer } from '../containers/footer';
import {HeaderContainer} from '../containers/header';
import {FirebaseContext} from '../context/firebase'
import * as ROUTES from '../constants/routes';
import {useHistory} from 'react-router-dom'
import {Form} from '../components';

export default function Signin(){
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const isInvalid = password =='' || emailAddress =='';
    const handleSignIn = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress,password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }
    return (
    <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn} method="POST">
                     <Form.Input
                        placeholder="Email Address"
                        value={emailAddress}
                        onChange={e=>setEmailAddress(e.target.value)}
                    />
                    <Form.Input
                        placeholder="Password"
                        autoComplete="off"
                        type="password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />

                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign In 
                    </Form.Submit>
                    <Form.Text>
                        New to Netflix ? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
    </>
    )
}