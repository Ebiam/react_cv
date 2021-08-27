import React, {useState} from 'react';

export const CartContext = React.createContext({
    cart: [],
    add_to_cart: (item) => {}
});

export default props => {
    const [cartItems, setCartItems] = useState( []);

    const add_to_cart = (item) => {
        if (!cartItems.find(it => it === item)) {
            setCartItems(PrevState => {
                return [...PrevState, item];
            })
        }
    };

    const remove_from_cart = (item) => {
        let findIndex = cartItems.findIndex(it => it === item);
        if (findIndex >= 0) {
            setCartItems(PrevState => {
                let cpy = [...PrevState];
                cpy.splice(findIndex, 1);
                return cpy;
            })
        }
    };

    const is_item_added = (item) => {
        return cartItems.find(it => it === item) ? true : false;
    };

    return (
        <CartContext.Provider value={{cart: cartItems, add_to_cart: add_to_cart, remove_from_cart: remove_from_cart, is_item_added: is_item_added}}>
            {props.children}
        </CartContext.Provider>
    );
}

