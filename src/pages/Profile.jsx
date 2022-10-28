import React from 'react'
import {Link} from "react-router-dom";
import Header from '../components/Header';
import ProfileContainer from '../components/Profile';
import BackBtn from '../components/BackBtn';


export default function Profile() {
  return (
    <div>
        <Header/>
        <ProfileContainer/>

        <Link to='/'>
            <BackBtn/>
        </Link>
    </div>
  )
}
