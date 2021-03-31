import React from 'react'

import {
    Card,
    CardDeck,
    Modal,
    Button
} from 'react-bootstrap'

import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'

import './ItemCards.css'
// props will be an array of all hashes, containing data of inventory

class ItemCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            clickedItemName : "",
            clickedItemPrice : 0,
            clickedItemDesc : "",
            clickedItemImg : ""
        }
    }
    sortedInventory = () => {
        var sortedData 
        switch(this.props.state.sortBy) {
            case "name":
                sortedData = this.props.data.sort((a,b) => a.name > b.name ? 1 : -1)
                break;
            case "priceIncreasing":
                sortedData = this.props.data.sort((a,b) => a.price > b.price ? 1 : -1)
                break;
            case "priceDecreasing":
                sortedData = this.props.data.sort((a,b) => a.price > b.price ? 1 : -1)
                sortedData = sortedData.reverse()
                break;
        }
        return sortedData
    }

    filterInventory = (inventory) => {
        var filteredData = inventory.filter(data => this.props.state[data.type])
        return filteredData
    }
    
    notFoundMessage = (inventory) => {
        if (inventory.length == 0) {
            return(
                <div>
                    Sorry, we couldn't find what you're looking for.. Maybe check spelling?
                </div>
            )
        } else {
            return (<div></div>)
        }
    }

    callBackCloseModal = () => {
        this.setState({ itemClicked : false })
    }

    clickedCard = (e, name, price, desc, thumbnail) => {
        this.setState({ clickedItemName : name,
                        clickedItemPrice : price,
                        clickedItemDesc : desc,
                        clickedItemImg : thumbnail })
    }

    render () {
        let inventory = this.sortedInventory()
        let filteredInventory = this.filterInventory(inventory)
        let message = this.notFoundMessage(filteredInventory)
        return (
            <div>
                <CardDeck>
                {filteredInventory.map(({id, name, type, price, description, thumbnail, img}) => 
                    <div className="clickable-card">
                    <Card 
                    as={Link}
                    to={`/Shop/id=${id}`}
                    onClick={(e) => this.clickedCard(e, name, price, description, thumbnail)}
                    >
                    <Card.Img src={thumbnail}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}<br/>${price}</Card.Text>
                    </Card.Body>
                    </Card> <br />
                    </div>
                )}
                </CardDeck>
                <div style={{ textAlign : "center" }}>
                {message}
                </div>
            </div>
        )
    }
}

class ItemPage extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div>
                <Button>Click</Button>
            </div>
        )
    }
    
}
export { ItemCards, ItemPage }

// Hover animation on shop page
// Modal for item