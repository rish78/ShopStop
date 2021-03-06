import React from 'react';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {ReactComponent as Logo} from '../../assets/logo.svg'

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to='/' className="logo-container">
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link to='/shop' className="option">
                SHOP
            </Link>
            <Link to='/shop' className="option">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link to='/signin' className="option">Sign In</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        

    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);