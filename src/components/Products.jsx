import React from 'react';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import   "../components/Products.css";
import { useCart } from '../hooks/useCart';

export function Products({ products  }) {
    const  {addToCart, cart, removeFromCart }= useCart()
    
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    return (
        <main className="products">
            <ul>
                {products.map(product => { 
                    const isProductInCart = checkProductInCart(product)
                    return(
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title}</strong>
                        </div>
                        <div>
                            <span>${product.price}</span>
                            

                        </div>
                        <div>
                            <button style={{backgroundColor: isProductInCart ? "red" : "#09f"}} onClick={() => { 
                            isProductInCart
                            ? removeFromCart(product) 
                            : addToCart(product)
                            }}
                            >
                               {
                                isProductInCart
                                ? <RemoveFromCartIcon></RemoveFromCartIcon>
                                : <AddToCartIcon></AddToCartIcon>
                               }
                            </button>
                        </div>
                    </li>
                )
            })}
            </ul>
        </main>
    );
}
