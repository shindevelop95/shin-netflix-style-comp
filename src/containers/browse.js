import React, {useState, useContext, useEffect} from 'react'
import { SelectProfileContainer } from './profiles'
import {FirebaseContext} from '../context/firebase'
import {Header,Loading} from '../components';

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
        <Header src="joker1">
            <p>Hello</p>
        </Header>
        </>):
        (<SelectProfileContainer user={user} setProfile={setProfile}/>)}