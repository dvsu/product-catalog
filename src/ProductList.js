import React, { Component } from 'react';
import Product from './Product';
import './ProductList.css';


class ProductList extends Component {

    render() {
        return (
            <div className='ProductList'>
                <h1>Test</h1>
                <p>Total discount: {this.props.totalDiscount} </p>
                <div className='ProductList-cards'>
                {this.props.products.map((product) => 
                    <Product 
                        key={product.id} 
                        name={product.name} 
                        normalPrice={product.normal_price} 
                        discountedPrice={product.discounted_price} 
                        productImage={product.product_image} />
                )}
                </div>

            </div>
        );
    }
}

export default ProductList;