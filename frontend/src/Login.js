import React from 'react'
import {
    Form,
    Button,
} from 'react-bootstrap'

import { HashRouter as Router, NavLink } from 'react-router-dom'

import './Login.css'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username : "",
            password : ""
        }
    }

    login = () => {
        // authenticate
    }

    render() {
        return(
            <div className="login-padding">
                <h1>Login</h1>
                <br /><br /><br />
                <div style={{textAlign : "left"}}>
                    <Form>
                    <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control 
                    placeholder="username"
                    value={this.state.username}
                    onChange={(e) => this.setState({ username : e.currentTarget.value })}>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formEmployeePassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                    placeholder="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({ password : e.currentTarget.value })}>
                    </Form.Control>
                    </Form.Group>
                    </Form>
                </div><br />
                <Button onClick={this.login.bind(this)}>Login</Button>
                <br /><br /><br />
                <div>
                <Router>
                <Button 
                as={NavLink}
                to="/ForgotPassword"
                variant="link"
                size="sm">Forgot password</Button>{" "}
                <Button
                as={NavLink}
                to="/NewAccount"
                variant="link"
                size="sm"
                >Create new account</Button>
                </Router>
                </div>                
            </div>
        )
    }
}

class NewAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username : "",
            password : "",
            passwordCopy : "",
            email : ""
        }
    }

    submitNewAccountInfo = () => {
        // sends new account information to server
        // server sends out confirmation email
    }
    
    render() {
        return(
            <div className="login-padding">
                <h1>New Account</h1>
                <br /><br /><br />
                <div style={{textAlign : "left"}}>
                    <Form>
                    <Form.Group controlId="formNewAccountUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                    placeholder="New username"
                    value={this.state.username}
                    onChange={(e) => this.setState({username : e.currentTarget.value})}
                    >
                    </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formNewAccountPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                    placeholder="Password"
                    value={this.state.password}
                    onChange={(e) => this.setState({password : e.currentTarget.value})}>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formNewAccountRetypePassword">
                    <Form.Label>Re-type password:</Form.Label>
                    <Form.Control
                    placeholder="Re-type password"
                    value={this.state.passwordCopy}
                    onChange={(e) => this.setState({passwordCopy : e.currentTarget.value})}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formNewAccountEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => this.setState({email : e.currentTarget.value})}></Form.Control>
                    </Form.Group>
                    </Form>

                    <div style={{textAlign : "right"}}>
                        <Button onClick={this.submitNewAccountInfo.bind(this)}>Submit</Button>
                    </div>
                </div>
            </div>
        )
    }
}

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email : ""
        }
    }

    render() {
        return(
            <div>
                <div className="forgot-password-padding">
                <h1>Forgot your password?</h1>
                <br /><br /><br />
                </div>
                <div className="login-padding">
                <Form>
                    <Form.Group controlId="formForgotPasswordUsername">
                    <Form.Label>Please enter your email, we will send you a unique link to reset your password</Form.Label>
                    <Form.Control
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => this.setState({email : e.currentTarget.value})}></Form.Control>
                    </Form.Group>
                </Form>
                <br />
                <div style={{textAlign : "right"}}>
                <Button>Submit</Button>
                </div>
                </div>
            </div>
        )
    }
}

export { LoginPage, ForgotPassword, NewAccount }