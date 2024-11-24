import toast from "react-hot-toast";

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
        toast.success('Cart added successfully')
    }
    else if (type == 'wishlist') {
        wishlists.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlists));
        toast.success("Added to wishlist successfully")
    }
}
// Remove a product from local storage
const removeProduct = (id) => {
    const allProducts = getAllProducts('cart');
    const remaining = allProducts.filter(product => product.product_id !== id);
    localStorage.setItem('cart', JSON.stringify(remaining));
}

export { addShoppingCart, getAllProducts, removeProduct };

