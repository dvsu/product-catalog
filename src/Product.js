import React, {Component} from "react";
import './Product.css'

class Product extends Component {

    // var images = require(this.props.ref);

    render() {
        return(
            <div className="Product">
                <h2>{this.props.name}</h2>
                <div className="Product-normal-price">${this.props.normalPrice}</div>
                <div className="Product-discounted-price">${this.props.discountedPrice}</div>
            </div>
            
        );
    }
}


export default Product;