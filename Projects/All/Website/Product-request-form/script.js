function submitOrder() {
    // Get form values
    var productName = document.getElementById('productName').value;
    var quantity = document.getElementById('quantity').value;
    var customerName = document.getElementById('customerName').value;

    // Display order summary
    document.getElementById('summaryProductName').innerText = 'المنتج: ' + productName;
    document.getElementById('summaryQuantity').innerText = 'الكمية: ' + quantity;
    document.getElementById('summaryCustomerName').innerText = 'العميل: ' + customerName;
}
