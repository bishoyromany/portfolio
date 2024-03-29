import React, {useState} from 'react';
import './../Style/Navbar.scss'
import {connect} from 'react-redux'
import logo from './../Images/logo.jpg'
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = ({NAVBAR_URLS}) => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showNavbarFast, setShowNavbarFast] = useState(showNavbar);
    const toggle = () => {
        setShowNavbarFast(!showNavbar);
        setTimeout(setShowNavbar(!showNavbar), 500);
    }
    return(
        <header id="navbar">
            <div className="logo">
                <img alt="logo" src={logo} />
            </div>
            <nav className={`menu ${showNavbar ? 'active' : ''}`}>
                <input id="menu-toggler" data-tip="Menu Bar" className="menu-toggler" type="checkbox" checked={showNavbar ? 'checked' : ''} onChange={() => toggle()} />
                <label htmlFor="menu-toggler" data-tip="Menu Bar"></label>
                <ul>
                    {
                        NAVBAR_URLS.map((item) => {
                            return(
                                <li key={item.url} className="menu-item" data-tip={item.title}>
                                    <Link to={item.url} smooth>
                                        <img src={item.icon} />
                                    </Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </nav>
            
            {/* <div className="list-icon" onClick={() => setShowNavbar(!showNavbar)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <div className="links">
                <span className="background"></span>
                <ul>
                    {
                        NAVBAR_URLS.map((item) => {
                            return(
                                <li title={item.title} key={item.url}>
                                    <a href={item.url}>
                                        <img src={item.icon} />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div> */}
        </header>
    );  
};

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        NAVBAR_URLS : state.NAVBAR_URLS,
    }
}
  


// const mapDispatchToProps = { increment, decrement, reset }


const mapDispatchToProps = (dispatch) => {
    return {
        actions : {

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);