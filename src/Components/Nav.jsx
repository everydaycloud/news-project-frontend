import {Link} from "react-router-dom"
import React from 'react';
import { useUserContext } from './UserContext';

const Nav = () => {
    const { user } = useUserContext();

    return (<>
    {user ? (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/articles/topic?topic="> Topics</Link>
        <Link to="/user"> Profile</Link>
        <Link to="/articles/add-article"> Add Article</Link>
        </nav>)
        :
        (<nav>
        <Link to="/">Home</Link>
        <Link to="/articles/topic?topic="> Topics</Link>
        <Link to="/user/:user_id"> Profile</Link>
        </nav>)}
    </>
)}

export default Nav;