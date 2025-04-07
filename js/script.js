document.getElementById("form-contato").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();
  
    if (nome === "") {
      alert("Por favor, preencha o nome.");
      return;
    }
  
    if (!email.includes("@") || !email.includes(".")) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }
  
    if (mensagem === "") {
      alert("Por favor, escreva uma mensagem.");
      return;
    }
  
    alert("Formulário enviado com sucesso! (Simulação)");
  });
  
  document.getElementById("enviar-btn").addEventListener("click", function () {
    this.style.backgroundColor = "#28a745";
  });
  