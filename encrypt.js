function encriptar() {
    const texto = document.getElementById("texto-a-encriptar").value;
    const clave = "clave-secreta";
    const textoEncriptado = CryptoJS.AES.encrypt(texto, clave).toString();
    document.getElementById("texto-encriptado").setAttribute("value", textoEncriptado);
  }
  
  function desencriptar() {
    const textoEncriptado = document.getElementById("texto-a-desencriptar").value;
    const clave = "clave-secreta";
    const bytesDesencriptados = CryptoJS.AES.decrypt(textoEncriptado, clave);
    const textoDesencriptado = bytesDesencriptados.toString(CryptoJS.enc.Utf8);
    document.getElementById("texto-desencriptado").setAttribute("value", textoDesencriptado);
  }
  
  function copiar(idInput) {
    const input = document.getElementById(idInput);
    input.select();
    document.execCommand("copy");
  }
  