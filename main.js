function showPass() {
  var x = document.getElementById("inputPass");
  
  if (x.type === "password") {
    x.type = "text";
    
  } else {
    x.type = "password";
  }
}

window.alert("♦️ LOADING ♦️ ");
