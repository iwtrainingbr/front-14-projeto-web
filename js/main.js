function alterarConteudo(pagina) {
  document.getElementById('content').innerHTML = window[pagina]();
}
