// Lista de URLs inseguras
var urlsInseguras = ["https://g1.globo.com/", "https://www.uol.com.br/"];

// Função para verificar se a URL atual é insegura
function isURLInsegura(url) {
  return urlsInseguras.some(function (urlInsegura) {
    return url.includes(urlInsegura);
  });
}

// Verifica a URL atual
var urlAtual = window.location.href;

if (isURLInsegura(urlAtual)) {
  // A URL é insegura, exiba um pop-up de aviso
  var popup = document.createElement("div");
  popup.className = "popup-aviso"; // Adicione uma classe para estilização CSS

  // Define o conteúdo do pop-up de aviso
  popup.innerHTML = "Esta página é considerada insegura. Tome cuidado!<br><br>";
  var botaoFechar = document.createElement("button");
  botaoFechar.textContent = "Estou ciente e desejo continuar";
  botaoFechar.addEventListener("click", function () {
    // Fecha o pop-up quando o botão é clicado
    document.body.removeChild(popup);
  });

  // Adiciona o botão ao pop-up
  popup.appendChild(botaoFechar);

  // Estiliz a o pop-up e o botão (pode ser feito via CSS)
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "red";
  popup.style.color = "white";
  popup.style.padding = "20px";
  popup.style.borderRadius = "5px";
  popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  popup.style.zIndex = "9999";

  botaoFechar.style.background = "white";
  botaoFechar.style.color = "red";
  botaoFechar.style.border = "1px solid red";
  botaoFechar.style.padding = "10px";
  botaoFechar.style.cursor = "pointer";

  // Adiciona o pop-up à página
  document.body.appendChild(popup);
}
// Usa o evento 'DOMContentLoaded' para acionar a verificação após o carregamento da página
document.addEventListener("DOMContentLoaded", function () {
  // Adicione um pequeno atraso para garantir que a página esteja completamente carregada
  setTimeout(mostrarPopupAviso, 1000); // Aguarda 1 segundo antes de verificar
});