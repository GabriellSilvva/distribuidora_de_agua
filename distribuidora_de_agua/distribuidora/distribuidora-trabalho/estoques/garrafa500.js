// Preço unitário
const unitPrice = 2.50;

// Função para aumentar a quantidade
function increaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < parseInt(quantityInput.max)) {
        quantityInput.value = currentValue + 1;
        updatePrice();
    }
}

// Função para diminuir a quantidade
function decreaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > parseInt(quantityInput.min)) {
        quantityInput.value = currentValue - 1;
        updatePrice();
    }
}

// Função para atualizar o preço total
function updatePrice() {
    const quantity = parseInt(document.getElementById("quantity").value);
    const totalPrice = (unitPrice * quantity).toFixed(2);
    document.getElementById("total-price").innerText = totalPrice;
}
