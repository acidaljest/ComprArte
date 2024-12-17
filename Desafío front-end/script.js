const cartCount = document.getElementById('cart-count');
const cartButton = document.getElementById('cart-btn');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cartItems = 0;

// Add event listener to all "Add to Cart" buttons
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        cartItems++;
        updateCartCount();
    });
});

// Update cart count
function updateCartCount() {
    cartCount.textContent = cartItems;
}

// Show alert when cart button is clicked
cartButton.addEventListener('click', () => {
    alert(`You have ${cartItems} items in your cart.`);
});
