function saveFruta () {
  event.preventDefault();

  let novaFruta = {
    nome: document.getElementById('fruta-nome').value,
  };

  fetch ('http://localhost:3000/frutas', {
    method: 'POST',
    body: JSON.stringify(novaFruta),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  alert('Pronto, fruta criada');
  document.getElementById('add-fruta').reset();
}

function cadastro() {
  return `
    <h1>Cadastro</h1>
    <hr>

    <form onsubmit="saveFruta()" id="add-fruta">
      <input class="form-control" placeholder="Nome da fruta" id="fruta-nome">

      <button class="btn btn-primary">Salvar</button>
    </form>
  `;
}
