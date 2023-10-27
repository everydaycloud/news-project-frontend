import {Link} from "react-router-dom"
import React from 'react';
import { useUserContext } from './UserContext';
import UserProfile from "./UserLogin";


const Nav = () => {
    const { user } = useUserContext();

    return (<>
    {user ? (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/user"> Profile</Link>
        <Link to="/articles/add-article"> Add Article</Link>
        <UserProfile/>
        </nav>)
        :
        (<nav>
        <Link to="/">Home</Link>
        <Link to="/user/:user_id"> Profile</Link>
        <UserProfile/>

        </nav>)}
    </>
)}

export default Nav;