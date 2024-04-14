// JavaScript for the eCommerce website

// Add to Cart functionality
document.querySelectorAll('.btn.btn-primary').forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    // Prevent default action
    event.preventDefault();

    // Get the parent card element
    const card = event.target.closest('.card');

    // Get product details
    const productName = card.querySelector('.card-title').innerText;
    const productPrice = card.querySelector('.card-text').innerText;

    // Create a new item object
    const item = {
        name: productName,
        price: productPrice
    };

    // Add the item to cart (You can implement your own cart functionality)
    addToCartFunction(item);

    // Alert to indicate the item has been added to cart (You can customize this according to your UI)
    alert('Added to cart: ' + productName);
}

// Example function to add item to cart (You should implement your own cart functionality)
function addToCartFunction(item) {
    console.log('Added to cart:', item);
}
