var bot = document.getElementById("btnCadastrar");
var nome = document.getElementById("nome");
var descricao = document.getElementById("descricao");
var cultura = document.getElementById("cultura");
var dominio = document.getElementById("dominio");
;
var img = document.getElementById("imagem");

const closeAlert = () => {
  const close = document.querySelector("#close-message");
  const message = document.querySelector(".message");

  close.addEventListener("click", () => {
    message.style.display = "none";
  });

  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
};
closeAlert()

function validarCampos() {
    if (
      nome.value == "" ||
      descricao.value == "" ||
      cultura.value == "" ||
      dominio.value == "" ||
      img.value == ""
    ) {
      bot.disabled = true;
    } else {
      bot.disabled = false;
    }
  }


  