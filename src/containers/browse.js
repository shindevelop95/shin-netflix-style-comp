import React, {useState, useContext, useEffect} from 'react'
import { SelectProfileContainer } from './profiles'
import {FirebaseContext} from '../context/firebase'
import {Header,Loading} from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function BrowseContainer({slides}){
    const [profile,setProfile] = useState({});
    const {firebase} = useContext(FirebaseContext);
    const [loading,setLoading] = useState(true);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        console.log('profile',profile);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [profile.displayName])
    return profile.displayName ? (
        
        <>
        {loading ? 
            <Loading src={user.photoURL}/>
        :<Loading.ReleaseBody/>}
        <Header src="joker1" dontShowOnSmallViewPort>
            <Header.Frame>
                <Header.Group>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
                    <Header.TextLink>Series</Header.TextLink>
                    <Header.TextLink>Films</Header.TextLink>
                </Header.Group>
            </Header.Frame>
            <Header.Feature>
            <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                <Header.Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Header.Text>
            </Header.Feature>
        </Header>
        </>):
        (<SelectProfileContainer user={user} setProfile={setProfile}/>)}