import React, {useState, useContext} from 'react';
import { FooterContainer } from '../containers/footer';
import {HeaderContainer} from '../containers/header';
import {FirebaseContext} from '../context/firebase'
import * as ROUTES from '../constants/routes';
import {useHistory} from 'react-router-dom'
import {Form} from '../components';


export default function Signup(){
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [firstName,setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [ password, setPassword] = useState('');
    const [error,setError] = useState('');
    const isInvalid = password ==='' || emailAddress ==='';

    const handleSignup = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress,password)
            .then((result) =>
                result.user.updateProfile({
                    displayName:firstName,
                    photoURL:Math.floor(Math.random()*5) + 1,
                })
                .then(() => {
                    history.push(ROUTES.BROWSE);
                })
                )
                .catch((error) => {
                    setFirstName('');
                    setEmailAddress('');
                    setPassword('');
                    setError(error.message);
                })
                
                
    }
    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input
                        placeholder="First name"
                        value={firstName}
                        onChange={((e) => setFirstName(e.target.value))}
                    />
                     <Form.Input
                        placeholder="Email address"
                        value={emailAddress}
                        onChange={((e) => setEmailAddress(e.target.value))}
                    />
                    <Form.Input
                        type="password"
                        value={password}
                        autoComplete="off"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Sign Up
                    </Form.Submit>
                    
                    <Form.Text>
                        Already a user? <Form.Link to="/signin">Sign in now</Form.Link>
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