function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "" || password === "") {
      alert("Preencha os campos de nome de usuário e senha!");
    } else if (username === "admin" && password === "123456") {
      alert("Login bem-sucedido!");
    } else {
      alert("Nome de usuário ou senha incorretos!");
    }
  }