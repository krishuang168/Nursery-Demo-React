import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Table } from 'reactstrap';
import { SmallCard } from './Cards';
import shoppingBasket from '../shared/svg/shoppingBasket.svg';
import { initialBasket } from '../shared/data/InitialBasket';

class ShoppingBasket extends Component {
    constructor(props) {
        super(props);

        this.state = {
            basket: initialBasket
        };

        // this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove = (e) => {
        const updatedBasket = this.state.basket.filter(item => item.id !== e.id);
        this.setState( this.state.basket = updatedBasket );
    }

    handlePlusOne = (e) => {
        var updatedBasket = this.state.basket.map(item => {
            var tempArray = {...item};
          
            if (item.id === e.id) {
              tempArray.quantity += 1;
            }
          
            return tempArray
        });

        this.setState({
            basket: updatedBasket
        });
    }

    handleMinusOne = (e) => {
        var updatedBasket = this.state.basket.map(item => {
            var tempArray = {...item};
          
            if (item.id === e.id && tempArray.quantity > 0 ) {
                tempArray.quantity -= 1;
                
            } // else (quantity == 0): do nothing
            return tempArray;
        });
        // Remove (qunatity == 0) items
        updatedBasket = updatedBasket.filter(item => item.quantity > 0);

        this.setState({
            basket: updatedBasket
        });
        console.log(this.state.basket);
    }

    render(){
        var subtotal=0;
        const merchandise = this.state.basket.map( item => {
            subtotal+=item.price*item.quantity;

            return (
                <tr>
                    <td className="center">
                        <SmallCard name={item.name} image={item.image} text={`$${item.price}`}/>
                    </td>  
                    <td className="center">{item.quantity}</td>
                    <td className="center">
                        <Button className="btn-primary" onClick={() => this.handlePlusOne(item)}>+</Button>
                        {' '}
                        <Button className="btn-primary" onClick={()=> this.handleMinusOne(item)}>-</Button>
                        {' '}
                        <Button className="btn-primary" onClick={() => this.handleRemove(item)}>Remove</Button>
                    </td>
                    <td className="center">{`$${(item.price*item.quantity).toFixed(2)}`}</td>
                </tr>
            );
        });

        return (
            <div className="container">
                <div className="row row-content"></div>
                    <Col>
                    <strong>Your Shopping Basket<img src={shoppingBasket} alt="Shopping Basket" width="25" className="ml-3"/></strong>
                    </Col>
                    <hr />
                <Table>
                    <thead className="shopping">
                        <tr>
                        <th className="center" colSpan="1">Product</th>
                        <th className="center" colSpan="1">Quantity</th>
                        <th className="center" colSpan="1">Actions</th>
                        <th className="center" colSpan="1">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {merchandise}
                    </tbody>
                </Table>
                <hr />
                <div className="row row-content mr-3 right bold">Subtotal: ${subtotal.toFixed(2)}</div>
                <div className="row-content">
                <Link to="/catalog">
                    <Button className="btn-light ml-auto">Conitnue shopping</Button>
                </Link>
                <Button className="btn-success ml-3">Checkout</Button>
                </div>
            </div>
        );
    }
}

export default ShoppingBasket;