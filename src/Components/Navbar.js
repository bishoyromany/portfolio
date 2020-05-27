import React, {useState} from 'react';
import './../Style/Navbar.scss'
import {connect} from 'react-redux'
import store from '../Store/store';

const Navbar = ({NAVBAR_URLS}) => {
    const [showNavbar, setShowNavbar] = useState(false);
    return(
        <header id="navbar" className={`${showNavbar ? 'active' : ''}`}>
            <div className="list-icon" onClick={() => setShowNavbar(!showNavbar)}>
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
            </div>
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