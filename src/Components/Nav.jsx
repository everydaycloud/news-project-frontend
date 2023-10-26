import {Link} from "react-router-dom"
import React from 'react';
import { useUserContext } from './UserContext';
import UserProfile from "./UserLogin";
import ArticlesByTopic from "./ArticlesByTopic";


const Nav = () => {
    const { user } = useUserContext();

    return (<>
    {user ? (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/user"> Profile</Link>
        <Link to="/articles/add-article"> Add Article</Link>
        <ArticlesByTopic/>
        <UserProfile/>
        </nav>)
        :
        (<nav>
        <Link to="/">Home</Link>
        <Link to="/user/:user_id"> Profile</Link>
        <ArticlesByTopic/>
        <UserProfile/>

        </nav>)}
    </>
)}

export default Nav;