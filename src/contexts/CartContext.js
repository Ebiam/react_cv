import React, {useState} from 'react';

export const CartContext = React.createContext({
    cart: [],
    add_to_cart: (item) => {}
});

export default props => {
    const [cartItems, setCartItems] = useState( []);

    const add_to_cart = (item) => {
        setCartItems(PrevState => {
            return [...PrevState, item];
        })
    };

    return (
        <CartContext.Provider value={{cart: cartItems, add_to_cart: add_to_cart}}>
            {props.children}
        </CartContext.Provider>
    );
}

