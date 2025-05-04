// Espera 10 segundos e ativa o susto
function iniciarSusto() {
  setTimeout(() => {
    document.getElementById("susto").style.display = "flex";
    document.getElementById("somSusto").play();
  }, 3000);

  // Remove o clique depois da primeira interação
  document.body.onclick = null;
}
