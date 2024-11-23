// get all products from local storage
const getAllProducts = (type) => {
    const allCartData = localStorage.getItem('cart');
    const allWishlistData = localStorage.getItem('wishlist');

    if (type == 'wishlist') {
        if (allWishlistData) {
            const allWishLists = JSON.parse(allWishlistData);
            return (allWishLists);
        }
        else {
            return [];
        }

    }
    else {
        if (allCartData) {
            const allCarts = JSON.parse(allCartData);
            return (allCarts);
        }
        else {
            return [];
        }
    }
}
// Add a product to local storage
const addShoppingCart = (product, type) => {
    // get all previously saved product
    const carts = getAllProducts('cart');
    const wishlists = getAllProducts('wishlist');

    if (type == 'cart') {
        carts.push(product);
        localStorage.setItem('cart', JSON.stringify(carts));
    }
    else if (type == 'wishlist') {
        wishlists.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlists));
    }
}
// Remove a product from local storage

export { addShoppingCart, getAllProducts };

