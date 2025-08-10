function shopNow() {
    alert("Redirecting to the shop page...");
}

// Add to Cart Button
document.querySelectorAll(".product button").forEach(button => {
    button.addEventListener("click", () => {
        alert("✅ Item added to cart!");
    });
});

// Product Search Functionality
document.getElementById("searchBar").addEventListener("keyup", function() {
    let searchValue = this.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let productName = product.getAttribute("data-name").toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
