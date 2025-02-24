document.addEventListener("DOMContentLoaded", function () {
    // Adiciona rolagem suave aos links do menu
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// Função para simular uma compra
function comprar() {
    alert("Pedido realizado com sucesso! Obrigado por escolher a Açaiteria Delícia.");
}
