import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";


function App() {
    const { filterProducts} = useFilters()
    const [products, setProducts] = useState([]);
   
   


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    
    const filteredProducts = filterProducts(products)

    return (
        <CartProvider>
        <Header></Header>
        <Cart></Cart>
        <Products products={filteredProducts} ></Products>
        

        </CartProvider>
    );
}

export default App;
