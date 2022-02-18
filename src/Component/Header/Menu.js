import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';



const  Navbar =  () => {
return(
    <div>
        <nav className='nav-menu'>
            <ul>
                <li> <Link to="/">Home </Link></li>
                <li> <Link to="/Data">contact </Link></li>
                <li> <Link to="/about">About </Link></li>
                <li> <Link to="/service">Service </Link></li>
                <li> <Link to="/login">Login </Link></li>
               
               
            </ul>
        </nav>
    </div>

)

}

const mapStateToProps = state =>{
    
}



export default Navbar;