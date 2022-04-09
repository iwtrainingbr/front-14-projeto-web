function removeFruit(id) {
  if (false === confirm('Você tem certeza disso?')) {
    return;
  }

  fetch('http://localhost:3000/frutas/'+id, {
    method: 'DELETE'
  });

  alert('Pronto, fruta excluida');
  alterarConteudo('listar');
}


function listar() {
  fetch ('http://localhost:3000/frutas')
    .then(response => response.json())
    .then(response => {
      response.map(cadaFruta => {
        document.getElementById('table-frutas').innerHTML += `
          <tr>
            <td>${cadaFruta.id}</td>
            <td>${cadaFruta.nome}</td>
            <td>
              <button class="btn btn-warning">Editar</button>
              <button onclick="removeFruit(${cadaFruta.id})" class="btn btn-danger">Excluir</button>
            </td>
          </tr>
        `;
      })
    });


  return `
    <h1>Pagina de Listar</h1>
    <hr>
    <table class="table table-hover table-striped">
      <thead class="table-dark">
        <tr>
          <td>#ID</td>
          <td>Nome</td>
          <td>Ações</td>
        </tr>
      </thead>
      <tbody id="table-frutas">

      </tbody>
    </table>
  `;
}
