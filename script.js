// Update total price function
function updateTotal() {
  const prices = document.querySelectorAll(".unit-price");
  const quantities = document.querySelectorAll(".quantity");
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = parseFloat(prices[i].textContent);
    const quantity = parseInt(quantities[i].textContent);
    total += price * quantity;
  }

  document.querySelector(".total").textContent = total + " $";
}

// Handle quantity increment
document.querySelectorAll(".fa-plus-circle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.nextElementSibling;
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
    updateTotal();
  });
});

// Handle quantity decrement
document.querySelectorAll(".fa-minus-circle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.previousElementSibling;
    const currentQty = parseInt(quantitySpan.textContent);
    if (currentQty > 0) {
      quantitySpan.textContent = currentQty - 1;
      updateTotal();
    }
  });
});

// Handle item deletion
document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card-body");
    card.remove();
    updateTotal();
  });
});

// Handle like (heart) toggle
document.querySelectorAll(".fa-heart").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
    // Optional: add red color if liked
    btn.style.color = btn.classList.contains("liked") ? "red" : "black";
  });
});

// Initial total
updateTotal();
