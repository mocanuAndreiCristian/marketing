// Funcționalitate simplă pentru butonul "Adaugă în coș"
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
        const productName = this.parentElement.querySelector(".product-title").textContent;
        alert(`Produsul "${productName}" a fost adăugat în coșul tău!`);
    });
});
