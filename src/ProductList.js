import React, { Component } from 'react';
import Product from './Product';
import './ProductList.css';


class ProductList extends Component {

    render() {

        let productGroupTitle;
        
        
        if(this.props.isBestDeal) {
            productGroupTitle = <h1 class='ProductList-title-best'>Best Deal</h1>
        } else {
            productGroupTitle = <h1 class='ProductList-title-alternative'>Alternative Deal</h1>
        }

        return (
            <div className='ProductList'>
                {productGroupTitle}
                <div className='ProductList-discount-values'>
                    <div className='ProductList-discount-container-left'>
                        <div className='ProductList-discount-title'>Total discount</div>
                        <div className='ProductList-nominal-discount'>${this.props.totalDiscount.toFixed(2)}</div>
                    </div>
                    <div className='ProductList-percent-discount'>{this.props.percentDiscount.toFixed(0)}</div>
                    <div className='ProductList-percent-char'>%</div>
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