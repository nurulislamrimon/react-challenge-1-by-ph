const cartItem = (id) => {
    let shoppingCart;

    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    } else { shoppingCart = {} }

    const quantity = shoppingCart[id];

    if (quantity) {
        shoppingCart[id] = parseInt(quantity) + 1;
    } else { shoppingCart[id] = 1; }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

}
export { cartItem };
