import React from 'react'
import { BackgroundImage } from 'react-image-and-background-image-fade'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import ServicesPage from './Services'
import ShopPage from './Shop'
import AboutPage from './About'
import FaqPage from './Faq'
import ContactPage from './Contact'
import ServicesGetStartedPage from './servicePages/serviceGetStartedPage'
import { LoginPage, ForgotPassword, NewAccount } from './Login'
import { ItemPage } from './components/ItemCards'

import { inventory } from './testData/inventory.js' //Test data

// import background from './images/image.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="parent">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Logo here</Navbar.Brand>
                <Nav className="container-fluid">
                <Router>
                <Nav.Item>
                <Nav.Link as={NavLink} to="/Shop">Shop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={NavLink} to="/BuildService">Build Service</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={NavLink} to="/About">About</Nav.Link>
                </Nav.Item>  
                <Nav.Item>
                <Nav.Link as={NavLink} to="/Contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={NavLink} to="/FAQ">FAQ</Nav.Link> 
                </Nav.Item>
                <Nav.Item className="ml-auto">
                <Nav.Link as={NavLink} to="/login">Login/Register</Nav.Link>
                </Nav.Item>
                </Router>
                </Nav>
            </Navbar>

            {/* -Insert faded background image- */}
            {/* <BackgroundImage 
            src={background} 
            width="1920px"
            height="1080px"
            /> */}

            <Router>
                <div className="pages">
                <Switch>
                <Route exact path="/"></Route>  
                <Route exact path="/BuildService"><ServicesPage /></Route>
                <Route path="/BuildService/Get_started"><ServicesGetStartedPage /></Route>
                <Route path="/BuildService/Personal_info"></Route>
                <Route path="/BuildService/Switches"></Route>
                <Route path="/BuildService/Case"></Route>
                <Route path="/Shop"><ShopPage data={inventory}/></Route>
                <Route path="/About"><AboutPage /></Route>
                <Route path="/FAQ"><FaqPage /></Route>
                <Route path="/Contact"><ContactPage /></Route>
                <Route path="/login"><LoginPage /></Route>
                <Route path="/NewAccount"><NewAccount /></Route>
                <Route path="/ForgotPassword"><ForgotPassword /></Route>
                {/* <Route path="/Shop/id=:itemId"><ItemPage /></Route> */}
                </Switch>
                </div>
            </Router>
            </div>
        )
    }
}

export default App


// footer on page