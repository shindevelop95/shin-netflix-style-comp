import React from 'react';
import {useContent} from '../hooks'

export default function Browse(){
    const {series} = useContent('series');
    return (<p>Hello frmom the browse</p>)
}