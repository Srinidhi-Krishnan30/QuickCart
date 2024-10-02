// Quantity updation
document.addEventListener('DOMContentLoaded', function () {
    const minus = document.querySelector(".minus-btn");
    const plus = document.querySelector(".plus-btn");
    const QuanityText = document.querySelector("#number");
    let Quantity = parseInt(QuanityText.textContent);

    function updateQty() {
        QuanityText.textContent = Quantity;
    }

    minus.addEventListener('click', function () {
        if (Quantity > 1) {
            Quantity--;
            updateQty();
        }
    });

    plus.addEventListener('click', function () {
        Quantity++;
        updateQty();
    });
});

// Popup when thumbnails are clicked
document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.small-image');
    const imagePopup = document.getElementById('image-popup');
    const popupBigShoe = document.getElementById('popup-big-shoe');
    const closePopup = document.querySelector('.close-popup');

    function openPopup(imageSrc) {
        popupBigShoe.src = imageSrc;
        imagePopup.style.display = 'block';
    }

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const fullImageSrc = this.getAttribute('data-full');
            openPopup(fullImageSrc);
        });
    });

    const popupThumbnails = document.querySelectorAll('.popup-small-images .small-image');
    popupThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const fullImageSrc = this.getAttribute('data-full');
            popupBigShoe.src = fullImageSrc;
        });
    });

    closePopup.addEventListener('click', function () {
        imagePopup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === imagePopup) {
            imagePopup.style.display = 'none';
        }
    });
});

// Cart popup and add to cart
document.getElementById('add-to-cart-button').addEventListener('click', function () {
    const notificationCircle = document.getElementById('cart-notification');
    let currentQuantity = parseInt(notificationCircle.innerText) || 0; // Fallback to 0 if empty
    const itemQuantity = parseInt(document.getElementById("number").innerText); // Get the current selected quantity

    currentQuantity += itemQuantity; // Increment with selected quantity
    notificationCircle.innerText = currentQuantity; // Update the notification
    notificationCircle.style.display = 'block'; // Ensure it is visible

    // Update cart display logic
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartItemQuantity = document.getElementById('cart-item-quantity');

    cartItemQuantity.innerText = currentQuantity; // Update the quantity in the cart popup
    cartTotalPrice.innerText = (currentQuantity * 125).toFixed(2); // Assuming the price is $125
});

// Event listener for the Cart button to show popup
document.getElementById('cart-button').addEventListener('click', function () {
    const cartPopup = document.getElementById('cart-popup'); // Make sure this ID matches your cart popup's ID
    if (cartPopup) {
        cartPopup.style.display = 'block'; // Show the popup
    } else {
        console.error('Cart popup not found!');
    }
});



// Event listener for the Close button to hide the popup
document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('cart-popup').style.display = 'none';
});

// Close popup when clicking outside the cart
window.addEventListener('click', function (event) {
    const cartPopup = document.getElementById('cart-popup');
    if (event.target === cartPopup) {
        cartPopup.style.display = 'none';
    }
});
