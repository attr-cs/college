document.getElementById("sellerForm").addEventListener("submit", function(event) {
    var sellerName = document.getElementById("sellerName").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    if (sellerName === '' || phone === '' || address === '') {
        alert('Please fill in all fields');
        event.preventDefault();
    }
});
