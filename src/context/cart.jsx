import {createContext, useReducer, useState} from "react"
import { cartReducer, cartInitialState } from "../reducers/cart"

//1.Crear contexto
export const CartContext = createContext()

function useCartReducer(){
    const [state, dispatch] =  useReducer(cartReducer, cartInitialState)
    const addToCart = product => dispatch({
        type: "ADD_TO_CART",
        payload: product
    })
    
    const removeFromCart = product => dispatch({
        type:"REMOVE_FROM_CART",
        payload: product
    })
    
    const clearCart = () => dispatch({ type: "CLEAR_CART"})

    return { state, addToCart, removeFromCart, clearCart}
}




//2. Crear provider
export function CartProvider({children}) {
//    const [cart, setCart] = useState([])
const {state, addToCart, removeFromCart, clearCart} = useCartReducer()



    
//     const addToCart = product => {
// //Forma basica para principiantes: setCart([...cart, product])

//         // Check if the product is already in the cart
//         const productInCartIdex= cart.findIndex(item => item.id === product.id)

//         if(productInCartIdex >= 0) {
// // Forma usando structuredClone
//             const newCart = structuredClone(cart)
//             newCart[productInCartIdex].quantity += 1
//             return setCart(newCart)
//         }
//         setCart(prevState => ([
//             ...prevState,
//             {
//             ...product,
//             quantity: 1    
//             }
//         ]))
//     }
    // const removeFromCart = product => {
    //     setCart(prevState=> prevState.filter(item => item.id !== product.id))
    // }

    // const clearCart = () => {
    //     setCart([])
    // } 
    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
        {children}

        </CartContext.Provider>
    )
}