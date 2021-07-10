import React, { Component } from "react";
import './Product.css'

class Product extends Component {

    render() {

        const { key, name, normalPrice, discountedPrice, productImage } = this.props;
        console.log(discountedPrice);
        console.log(productImage);
        return(
            <div key={key} className="Product">
                <h2>{name}</h2>
                <img className="Product-image" src={require(`./assets/${productImage}`).default} alt={name} />
                <div className="Product-normal-price">${normalPrice}</div>
                <div className="Product-discounted-price">${discountedPrice}</div>
            </div>
            
        );
    }
}


export default Product;