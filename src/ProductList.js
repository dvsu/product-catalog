import React, { Component } from 'react';
import Product from './Product';
import BlackPants from './assets/black_pants.png';

class ProductList extends Component {
    static defaultProps = {
        products : [
            { id: 2, name: 'Black Pants', normal_price: 60.00, discounted_price: 29.99, ref: './assets/black_pants.png'},
            { id: 3, name: 'Blue Pants', normal_price: 45.00, discounted_price: 22.49, ref: './assets/blue_pants.png'},
            { id: 101, name: 'Hawaiian Shirt', normal_price: 14.99, discounted_price: 11.99, ref: './assets/hawaiian_shirt.png'},
            { id: 105, name: 'Polo Shirt', normal_price: 29.99, discounted_price: 25.00, ref: './assets/polo_shirt.png'},
            { id: 112, name: 'Tshirt', normal_price: 12.49, discounted_price: 7.99, ref: './assets/tshirt.png'},
            { id: 1011, name: 'High Heels', normal_price: 89.99, discounted_price: 79.99, ref: './assets/high_heels.png'},
            { id: 1521, name: 'Running Shoes', normal_price: 59.99, discounted_price: 45.00, ref: './assets/running_shoes.png'},
            { id: 1858, name: 'Sneakers A', normal_price: 37.80, discounted_price: 28.79, ref: './assets/sneakers_a.png'},
            { id: 1912, name: 'Sneakers B', normal_price: 58.00, discounted_price: 55.99, ref: './assets/sneakers_b.png'},
            { id: 1941, name: 'Sneakers C', normal_price: 85.00, discounted_price: 79.99, ref: './assets/sneakers_c.png'},
            { id: 2111, name: 'Socks', normal_price: 5.90, discounted_price: 4.50, ref: './assets/socks.png'},
            { id: 5827, name: 'Sweater', normal_price: 80.00, discounted_price: 78.00, ref: './assets/sweater.png'}
        ]
    }

    render() {
        return (
            <div className='ProductList'>
                {this.props.products.map((prod) => (
                    <Product id={prod.id} name={prod.name} normalPrice={prod.normal_price} discountedPrice={prod.discounted_price} ref={prod.ref}/>
                ))}
            </div>
        );
    }
}

export default ProductList;