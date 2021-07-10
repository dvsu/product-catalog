import React, { Component } from 'react';
import Product from './Product';
import './ProductList.css';


class ProductList extends Component {

    render() {
        return (
            <div className='ProductList'>
                <h1>Test</h1>
                <div className='ProductList-discount-title'>Total discount</div>
                <div className='ProductList-discount-values'>
                    <div className='ProductList-nominal-discount'>${this.props.totalDiscount.toFixed(2)}</div>
                    <div>{' '}</div>
                    <div className='ProductList-percent-discount'>{`${this.props.percentDiscount.toFixed(0)}%`}</div>
                </div>
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