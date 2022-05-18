// Utilizando o sweet Alert 
// Swal no lugar de alert

function Random() {
  var play1 = document.getElementById("play1").value;
  var play2 = document.getElementById("play2").value;

  var rnd = Math.floor(Math.random() * 5);
  document.getElementById("tb").value = rnd;

  if (play1 > 5 || play1 == "" || play2 == "") {
    swal(
      "Favor usar um número valido!",
      "Use um número maior que 0 e menor ou igual a 5.",
      "error"
    );
    document.getElementById("play1").value = "";
    document.getElementById("play2").value = "";
  }
  else if (rnd == play1) {
    swal("Player 1 vai ter que beber!!!", "", "success");
    document.getElementById("play1").value = "";
    document.getElementById("play2").value = "";
  } else if (rnd == play2) {
    swal("Player 1 vai ter que beber!!!", "", "success");
    document.getElementById("play1").value = "";
    document.getElementById("play2").value = "";
  } else if (rnd != play1 && rnd != play2) {
    swal("Ninguem acertou", "Jogue novamente!", "error");
    document.getElementById("play1").value = "";
    document.getElementById("play2").value = "";
  }
}
