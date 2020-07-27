import React from 'react';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Resume from './Pages/Resume';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip';

function App({ BASE_URL }) {
    return (
        <Router basename={BASE_URL}>
            <div className="App">
                <Switch>
                    <Route path="/Projects">
                        Wooha My Project HERE
                </Route>
                    <Route path="/Resume">
                        <Resume />
                    </Route>
                    <Route path="/">
                        <Navbar />
                        <Home />
                    </Route>
                </Switch>
                <ReactTooltip />
            </div>
        </Router>
    );
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        BASE_URL: state.BASE_URL,
    }
}



// const mapDispatchToProps = { increment, decrement, reset }


const mapDispatchToProps = (dispatch) => {
    return {
        actions: {

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
