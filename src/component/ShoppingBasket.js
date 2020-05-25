import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Table } from 'reactstrap';
import { SmallCard } from './Card';

class ShoppingBasket extends Component {
    constructor(props) {
        super(props);

        this.state = [
            {   
                id: 0,
                name: "Forget-me-not",
                image: "https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFFOR113-1_medium.jpg",
                price: 1.99,
                quantity: 2,
            },
            {   
                id: 1,
                name: "Purple Shiso",
                image: "https://www.edenbrothers.com/store/media/Seeds-Herbs/resized/SHPER111-1_medium.jpg",
                price: 3.99,
                quantity: 1,
            }
        ];

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e) {
        this.setState({price: null});
    }

    render(){
        const merchandise = this.state.map( item => {
            return (
                <tr>
                    <td>
                        <SmallCard name={item.name} image={item.image} />
                    </td>  
                    <td className="center">${item.price}</td>
                    <td className="center">{item.quantity}</td>
                    <td className="center"><Button onClick={this.handleRemove}>Remove</Button></td>
                    <td className="center">${item.price*item.quantity}</td>
                </tr>
            );
        });

        return (
            <div className="container">
                <div className="row row-content"></div>
                    <Col><strong>Your Shopping Basket</strong></Col>
                    <hr />
                <Table>
                    <thead className="shopping">
                        <tr>
                        <th className="center">Product</th>
                        <th className="center">Price</th>
                        <th className="center">Quantity</th>
                        <th className="center">Remove</th>
                        <th className="center">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {merchandise}
                    </tbody>
                </Table>
                <hr />
                <div className="row row-content right bold">Total: {this.state[0].total}</div>
                <div className="row-content">
                <Link to="/catalog">
                    <Button className="btn-light ml-auto">Conitnue shopping</Button>
                </Link>
                
                <Button className="btn-primary ml-3">Update</Button>
                <Button className="btn-success ml-3">Checkout</Button>
                </div>
            </div>
        );
    }
}

export default ShoppingBasket;