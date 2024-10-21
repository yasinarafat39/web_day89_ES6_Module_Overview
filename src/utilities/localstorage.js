 

const getStoredCart = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = id => {
  const cart = getStoredCart();
  if (cart.includes(id)) {
    return alert("This Bottle is already added to cart.");
  } else {
    cart.push(id);
    // save to Local Storage
    saveCartToLS(cart);
    return true;
  }
};


const removesFromLS = id => {
    const cart = getStoredCart()
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining)
}

export { addToLS, getStoredCart, saveCartToLS, removesFromLS };
