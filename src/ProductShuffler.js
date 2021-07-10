import React, { Component } from "react";
import ProductList from "./ProductList";

class ProductShuffler extends Component {

    static defaultProps = {
        products : [
            { id: 2, name: 'Black Pants', normal_price: 60.00, discounted_price: 29.99, product_image: 'black_pants.png',},
            { id: 3, name: 'Blue Pants', normal_price: 45.00, discounted_price: 22.49, product_image: 'blue_pants.png'},
            { id: 101, name: 'Hawaiian Shirt', normal_price: 14.99, discounted_price: 11.99, product_image: 'hawaiian_shirt.png'},
            { id: 105, name: 'Polo Shirt', normal_price: 29.99, discounted_price: 25.00, product_image: 'polo_shirt.png'},
            { id: 112, name: 'Tshirt', normal_price: 12.49, discounted_price: 7.99, product_image: 'tshirt.png'},
            { id: 1011, name: 'High Heels', normal_price: 89.99, discounted_price: 79.99, product_image: 'high_heels.png'},
            { id: 1521, name: 'Running Shoes', normal_price: 59.99, discounted_price: 45.00, product_image: 'running_shoes.png'},
            { id: 1858, name: 'Sneakers A', normal_price: 37.80, discounted_price: 28.79, product_image: 'sneakers_a.png'},
            { id: 1912, name: 'Sneakers B', normal_price: 58.00, discounted_price: 55.99, product_image: 'sneakers_b.png'},
            { id: 1941, name: 'Sneakers C', normal_price: 85.00, discounted_price: 79.99, product_image: 'sneakers_c.png'},
            { id: 2111, name: 'Socks', normal_price: 5.90, discounted_price: 4.50, product_image: 'socks.png'},
            { id: 5827, name: 'Sweater', normal_price: 80.00, discounted_price: 78.00, product_image: 'sweater.png'}
        ]
    }

    render() {
        let productGroup1 = [];
        let productGroup2 = [...this.props.products];
        while (productGroup2.length > productGroup1.length) {
            let idx = Math.floor(Math.random() * productGroup2.length);
            let randomProduct = productGroup2.splice(idx, 1)[0];
            productGroup1.push(randomProduct);
        }
        let originalPriceGroup1 = productGroup1.reduce((price, products) => price + products.normal_price, 0.0);
        let discountedPriceGroup1 = productGroup1.reduce((price, products) => price + products.discounted_price, 0.0);
        let totalDiscountGroup1 = originalPriceGroup1 - discountedPriceGroup1;
        
        let originalPriceGroup2 = productGroup2.reduce((price, products) => price + products.normal_price, 0.0);
        let discountedPriceGroup2 = productGroup2.reduce((price, products) => price + products.discounted_price, 0.0);
        let totalDiscountGroup2 = originalPriceGroup2 - discountedPriceGroup2;
                
        return(
            <div>
                <ProductList 
                    products={productGroup1} 
                    totalDiscount={totalDiscountGroup1} 
                    isCheapest={totalDiscountGroup1 > totalDiscountGroup2}/>
                <ProductList 
                    products={productGroup2} 
                    totalDiscount={totalDiscountGroup2} 
                    isCheapest={totalDiscountGroup2 > totalDiscountGroup1}/>
            </div>
        );
    }
}


export default ProductShuffler;