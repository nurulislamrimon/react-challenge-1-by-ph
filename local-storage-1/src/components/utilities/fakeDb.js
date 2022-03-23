const cartItem = (id) => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    const quantity = shoppingCart[id];

    if (quantity) {
        shoppingCart[id] = parseInt(quantity) + 1;
    } else { shoppingCart[id] = 1; }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

};

const cartItemRemove = id => {
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
        const cartDatas = JSON.parse(storedCart);
        if (id in cartDatas) {
            delete cartDatas[id];
        }
        localStorage.setItem("shopping-cart", JSON.stringify(cartDatas));
    }
}

const allReducer = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export { cartItem, cartItemRemove, allReducer as reducer };
