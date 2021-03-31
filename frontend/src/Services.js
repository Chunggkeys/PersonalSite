import React from 'react'
import axios from 'axios'

import { NavLink } from 'react-router-dom'

import {
    Form,
    Button,
    Col,
    Modal
} from 'react-bootstrap'

import './Services.css'

class ServicesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : 0,
            firstName : "",
            lastName : "",
            email: "",
            keyboardCase : "",
            formFactor : "",
            requireSwitchMod : true,
            agreeToTerms : false,
            additionalNotes : "",
            lube : false,
            film : false,
            keycaps : "",
            showConfirmation : false,
            inventoryData : []
        }
    }

    componentDidMount() {
        this.getInventory()
    }

    closeModalCallBackFn = () => {
        this.setState({ 
            id : 0,
            firstName : "",
            lastName : "",
            email : "",
            keyboardCase : "",
            formFactor : "",
            requireSwitchMod : true,
            agreeToTerms : false,
            additionalNotes : "",
            lube: false,
            film : false,
            keycaps : "",
            showConfirmation : false,
            inventoryData : [] 
        })
    }

    submitCallBackFn = () => {
        // GET request to get id
        var dataHash;

        axios
        .get("http://localhost:8000/api/customer_data/")
        .then(res => (this.setState({ id : res.data.length + 1 }, () => {
            console.log("id: ", this.state.id); 
            dataHash = this.state; delete dataHash['showConfirmation']
            delete dataHash['inventoryData']
            this.putDataToServer(dataHash)
        })))
        .catch(err => console.log(err)) // Perhaps bring to another page
    }

    putDataToServer = (dataHash) => {
        // PUT request
        axios
        .post(`http://localhost:8000/api/customer_data/${dataHash.id}`, dataHash) //fails here, does not exist, 404 not found
        .then(res => this.setState({ showConfirmation : true }))
        .catch(err => console.log(err.response))

        console.log(this.state)
    }

    getInventory = () => {
        axios
        .get("http://localhost:8000/api/inventory/")
        .then(res => this.setState({ inventoryData : res.data }))
        .catch(err => console.log(err))
    }

    filterDataForKeycaps = () => {
        var index;
        var keycaps = ["- Select keycaps -"]
        for (index in this.state.inventoryData) {
            let data = this.state.inventoryData[index]
            if (data['itemType'] === "keycaps") keycaps.push(data['name'])
        }
        return keycaps
    }

    handleSwitchModChange = (requireMod) => {
        if (requireMod === "Yes") {
            this.setState({ requireSwitchMod : true })
        } else {
            this.setState({ requireSwitchMod : false })
        }
    }

    render() {
        // let modTypes = ["Lube", "Film"] // Perhaps grab this from backend? 
        let termsCondString = <div>Please check this box once you've read and agree to <NavLink to="/Agreement">terms and conditions</NavLink></div>
        let keycaps = this.filterDataForKeycaps()
        return(
            <div className="padding">
                <h1>Build Service</h1><br />
                <div style={{textAlign : "left"}}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formPersonalfirstName">
                            <Form.Label>First name:</Form.Label>
                            <Form.Control placeholder="Your first name"
                            value={this.state.firstName} 
                            onChange={(e) => this.setState({ firstName : e.currentTarget.value })}
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formPersonalLastName">
                            <Form.Label>Last name:</Form.Label>
                            <Form.Control 
                            placeholder="Your last name" 
                            value={this.state.lastName}
                            onChange={(e) => this.setState({ lastName : e.currentTarget.value })} 
                            />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formEmail">
                        <Form.Label>email:</Form.Label>
                        <Form.Control 
                        placeholder="Your email" 
                        value={this.state.email}
                        onChange={(e) => this.setState({ email : e.currentTarget.value })} 
                        />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formKeyboardName">
                            <Form.Label>Keyboard case:</Form.Label>
                            <Form.Control 
                            placeholder="Enter keyboard name here" 
                            value={this.state.keyboardCase}
                            onChange={(e) => this.setState({ keyboardCase : e.currentTarget.value })} 
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formFactor">
                            <Form.Label>Form factor:</Form.Label>
                            <Form.Control as="select" defaultValue="100%" onChange={(e) => this.setState({ formFactor : e.target.value })}>
                                <option value="100%">100%</option>
                                <option value="TKL">TKL</option>
                                <option value="75%">75%</option>
                                <option value="65%">65%</option>
                                <option value="60%">60%</option>
                                <option value="40%">40%</option>
                            </Form.Control>
                            </Form.Group>
                        </Form.Row>

                            <Form.Group controlId="formRequireKeycaps">
                            <Form.Label>Choose keycap set from my inventory (if required)*:</Form.Label>
                            <Form.Control as="select"
                            defaultValue="Select keycaps" 
                            onChange={(e) => this.setState({ keycaps : e.target.value })}>
                                {keycaps.map((el) => 
                                <option value={el}>{el}</option>
                                )}
                            </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formRequireSwitchMod">
                            <Form.Label>Do you require switch modding?</Form.Label>
                            <Form.Control as="select" defaultValue="Yes" onChange={(e) => this.handleSwitchModChange(e.target.value)}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formModTypes">
                            <Form.Label>Switch mod method:</Form.Label>
                            <Form.Check 
                            type="checkbox" 
                            label="Lube"
                            disabled={!this.state.requireSwitchMod}
                            onChange={(e) => this.setState({ lube : e.target.checked})}
                            />
                            <Form.Check 
                            type="checkbox" 
                            label="Film" 
                            disabled={!this.state.requireSwitchMod}
                            onChange={(e) => this.setState({ film : e.target.checked })}
                            />
                            </Form.Group>

                        <Form.Group controlId="formAdditionalNotes">
                        <Form.Label>Additional notes (i.e do not lube springs):</Form.Label>
                        <Form.Control 
                        placeholder="Enter notes here" 
                        value={this.state.additionalNotes}
                        onChange={(e) => this.setState({ additionalNotes : e.currentTarget.value })} 
                        />
                        </Form.Group>

                        <Form.Group controlId="formTermsConditions">
                        <Form.Label>Terms and conditions:</Form.Label>
                        <Form.Check 
                        type="checkbox"
                        label={termsCondString}
                        onClick={(e) => this.setState({ agreeToTerms : e.target.checked })}
                        />
                        </Form.Group>
                    </Form>

                    * All keycap selections include base kits ONLY

                    <div style={{textAlign : "right"}}>
                        <BuildServiceConfirmationModal
                        submitCallBackFn={this.submitCallBackFn.bind(this)}
                        closeModalCallBackFn={this.closeModalCallBackFn.bind(this)}
                        state={this.state}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

function BuildServiceConfirmationModal(props) {
        

    const handleClose = () => props.closeModalCallBackFn();
    const handleSubmit = () => props.submitCallBackFn()


    return(
        <div>
            <Modal show={props.state.showConfirmation} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{textAlign : 'left'}}>Thanks for submitting! Chunggkeys will be in touch with you shortly regarding your build!</div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
            </Modal>

            <Button onClick={handleSubmit}>Submit</Button>
        </div>
        )
    
}

export default ServicesPage

// TODO: 
// Confirmation modal
// PUT request
// Error message if attempt to submit when necessary information not filled
//  - Reddened fields? 