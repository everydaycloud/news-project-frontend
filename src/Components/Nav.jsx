import {Link} from "react-router-dom"
import React from 'react';
import { useUserContext } from './UserContext';
import UserProfile from "./UserLogin";
import Logo from "./Logo";



const Nav = () => {
    const { user } = useUserContext();

    return (<>
    {user ? (
        <nav className="nav">
        <Logo/>
        <Link className="menu-link" to="/">Home</Link>
        {/* <Link className="menu-link" to="/articles/add-article"> Add Article</Link> */}
        <UserProfile/>
        </nav>)
        :
        (<nav className="nav">
        <Logo/>
        <Link className="menu-link" to="/">Home</Link>
        <UserProfile/>

        </nav>)}
    </>
)}

export default Nav;