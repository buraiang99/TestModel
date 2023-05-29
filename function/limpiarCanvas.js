function limpiar() {
  const canvas = document.getElementById("lienzo");
  const ctx = canvas.getContext("2d");
  document.getElementById("resultado").innerHTML = '';
  // Limpia el canvas completo
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
