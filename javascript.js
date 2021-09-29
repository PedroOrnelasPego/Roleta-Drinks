//swal no lugar de alert
function Random() {
  var play1 = document.getElementById("play1").value;
  var play2 = document.getElementById("play2").value;

  var rnd = Math.floor(Math.random() * 10);
  document.getElementById("tb").value = rnd;

  if (play1 > 20 || play1 == "" || play2 == "") {
    swal(
      "Favor usar um número valido!",
      "Maior que 0 e menor que 20.",
      "error"
    );
    document.getElementById("play1").value = "";
    document.getElementById("play2").value = "";
  }
  if (rnd == play1) {
    swal("Player 1 vai ter que beber!!!", "", "success");
    document.getElementById("play1").value = "";
    document.getElementById("play2").value = "";
  } else if (rnd == play2) {
    swal("Player 1 vai ter que beber!!!", "", "success");
    document.getElementById("play1").value = "";
    document.getElementById("play2").value = "";
  } else if (rnd != play1 && play1 != "") {
    swal("Ninguem acertou", "Jogue novamente!", "error");
    document.getElementById("play1").value = "";
    document.getElementById("play2").value = "";
  } else if (rnd != play2 && play2 != "") {
    swal("Ninguem acertou", "Jogue novamente!", "error");
    document.getElementById("play1").value = "";
    document.getElementById("play2").value = "";
  }
}
