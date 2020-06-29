import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser })=>(
<div className='header'>
<Link className='logo-container' to ='/'>
<Logo className='Logo'/>
</Link>
<div  className='options'>
    <Link className='option' to ='./shop'>
        SHOP
    </Link>
    <Link className='option' to ='./shop'>
        CONTACT
    </Link>
    <Link className='option' to ='./shop'>
    
    </Link>
    {
        currentUser ?
        <div className='option' onClick={()=> auth.signOut()}> SIGN OUT</div>
        :
        <Link className='option' to='/signin'>sign in</Link>
    }
</div>
</div>

)
export default Header;