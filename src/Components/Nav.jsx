import {Link} from "react-router-dom"

const Nav = () => {
    
    return (<nav>
        <Link to="/">Home</Link>
        <Link to="/articles/topic?topic="> Topics</Link>
        <Link to="/user/:user_id"> Profile</Link>
        </nav>)
}

export default Nav;