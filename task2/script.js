function checkPassword() {
  let pass = document.getElementById("myPassword").value;
   percentage = 0;


  if (pass.length >= 8 && pass.length <= 20) {
    percentage = percentage + 25;
  }

  if (/[A-Z]/.test(pass)) {
    percentage = percentage + 25;
  }

  if (/[a-z]/.test(pass)) {
    percentage = percentage + 25;
  }

  if (/[0-9]/.test(pass)) {
    percentage = percentage + 25;
  }


  document.getElementById("myBar").style.width = percentage + "%";
  document.getElementById("myText").innerText = "النسبة المئوية: " + percentage + "%";

  if (percentage <= 25) {
    document.getElementById("myBar").style.backgroundColor = "red";
  } else if (percentage <= 75) {
    document.getElementById("myBar").style.backgroundColor = "orange";
  } else {
    document.getElementById("myBar").style.backgroundColor = "green";
  }
}