import React from 'react'
import { ItemCards, ItemPage } from './components/ItemCards'
import {
    InputGroup,
    Form,
    Button,
    FormControl
} from 'react-bootstrap'
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import { withRouter } from 'react-router'
import "./Shop.css"


class Shop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemClicked : false,
            clickedItemName : "",
            clickedItemDesc : "",
            clickedItemPrice : 0,
            clickedItemImg : ""
        }
    }

    itemClickedCallBackFn = (e) => {
        this.setState({ itemClicked : !this.state.itemClicked })
    }

    // pageSelector = () => {
    //     if(this.state.itemClicked) {
    //         return(
    //             <div><ItemPage callBackFn={(e) => this.itemClickedCallBackFn(e)}/></div>
    //         )
    //     } else {
    //         return (
    //             <div><ShopInterface callBackFn={(e) => this.itemClickedCallBackFn(e)}/></div>
    //         )
    //     }
    // }

    render() {
        // let page = this.pageSelector()
        return(
            <div>
                {/* {page} */}

               
            </div>
        )
    }
}

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy : "name",
            keycaps : true,
            case : true,
            pcb : true,
            plates : true,
            keyswitches : true,
            stabilizers : true,
            searchBarText : "",
            filteredInventory : this.props.data
        }
    }

    checkIfEnterPressed = (e) => {
        if(e.code === "Enter") this.search()
    }

    search = () => {
        var i;
        var l = this.props.data.length;
        var searchResults = [];
        var query = this.state.searchBarText;

        if(query !== "") {
            for(i = 0; i < l; i++) {
                let matchstring = query.toLowerCase()
                if(this.props.data[i].name.toLowerCase().indexOf(matchstring) != -1) {
                    searchResults.push(this.props.data[i])
                }
            }
            this.setState({ filteredInventory : searchResults })
        } else {
            this.setState({ filteredInventory : this.props.data })
        }
        this.setState({ searchBarText : "" })
    }

    render() {
        return(
            <div className="content">
                <h1>Shop</h1><br />
                <div style={{textAlign : "left"}}>
                <div className="filter-sidebar">
                    <Form>
                    <Form.Group controlID="formShopFilters">
                    <Form.Label>Filter:</Form.Label>
                        <Form.Check 
                        type="checkbox" 
                        label="keyboard cases"
                        checked={this.state.case}
                        onChange={(e) => this.setState({ case : e.target.checked})}
                        />
                        <Form.Check 
                        type="checkbox" 
                        label="Keyswitches" 
                        checked={this.state.keyswitches}
                        onChange={(e) => this.setState({ keyswitches : e.target.checked })}
                        />
                        <Form.Check 
                        type="checkbox" 
                        label="Stabilizers" 
                        checked={this.state.stabilizers}
                        onChange={(e) => this.setState({ stabilizers : e.target.checked })}
                        />
                        <Form.Check 
                        type="checkbox" 
                        label="PCBs" 
                        checked={this.state.pcb}
                        onChange={(e) => this.setState({ pcb : e.target.checked })}
                        />
                        <Form.Check 
                        type="checkbox" 
                        label="Plates" 
                        checked={this.state.plates}
                        onChange={(e) => this.setState({ plates : e.target.checked })}
                        />
                         <Form.Check 
                        type="checkbox" 
                        label="Keycaps" 
                        checked={this.state.keycaps}
                        onChange={(e) => this.setState({ keycaps : e.target.checked })}
                        />
                        
                    </Form.Group>
                    </Form>
                </div> 
                <div className="item-section">
                <div style={{width : "99%"}}>
                    <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search shop"
                    aria-label="ShopSearch"
                    value={this.state.searchBarText}
                    onKeyPress={e => this.checkIfEnterPressed(e)}
                    onChange={(e) => this.setState({ searchBarText : e.currentTarget.value })}
                    >
                    </FormControl>
                    <InputGroup.Append>
                    <Button onClick={this.search.bind(this)}>Search</Button>
                    </InputGroup.Append>
                    </InputGroup>
                </div>
                <Form>
                    <Form.Row>
                    <Form.Group controlId="formRequireSwitchMod">
                    <Form.Label>Sort by:</Form.Label>
                    <Form.Control as="select" defaultValue="name" onChange={(e) => this.setState({ sortBy: e.target.value })}>
                        <option value="name">Name</option>
                        <option value="priceIncreasing">Price (increasing)</option>
                        <option value="priceDecreasing">Price (decreasing)</option>
                    </Form.Control>
                    </Form.Group>
                    </Form.Row>
                </Form>
                <div style={{textAlign : "left"}}>
                    <ItemCards 
                    data={this.state.filteredInventory} 
                    state={this.state}
                    callBackFn={this.props.callBackFn}
                    />
                </div>
                </div>
                </div>

                <Router>
                <Switch>
                    <Route exact path="/Shop/id=:id"><ItemPage /></Route>
                </Switch>
                </Router>
            </div>
        )
    }
}

export default ShopPage


// Figure out how to keep the same font pattern in cards
// Figure out algo for "did you mean.. this?" (optional)
// Figure out how to navigate to a link on search