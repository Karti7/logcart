import React from 'react';
import './styles.scss';
import logo from './../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utlis';

import { connect } from 'react-redux';

const Header = props => {
    const { currentUser } = props;

    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img style={{ width: "50px", height: "50px" }} src={logo} alt="logo"></img>
                    </Link>
                </div>
            </div>
            <div className="callToAction">
                {!currentUser && (
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                        </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                        </Link>
                        </li>
                    </ul>
                )}

                {currentUser && (
                    <ul>
                        <li>
                            <span onClick={()=>auth.signOut()}>
                                Logout
                             </span>
                        </li>
                    </ul>
                )}

            </div>
        </div>
    )
}

Header.defaultProps = {
    currentUser: null
}

const mapStateToProps = ({user})=>({    
    currentUser:user.currentUser
});

export default connect(mapStateToProps,null) (Header);