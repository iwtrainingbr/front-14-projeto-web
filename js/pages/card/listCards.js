function listCards() {

  fetch ('http://localhost:3000/cards')
    .then(response => response.json())
    .then(response => {
      response.map(cadaCards => {
        document.getElementById('cards').innerHTML += `
          <tr>
           
            <td>${cadaCards.name}</td>
            <td>${cadaCards.flag}</td>
            <td>${cadaCards.number}</td>
            <td>${cadaCards.type}</td>
            <td>${cadaCards.validDate}</td>
            <td>
              <button class="btn btn-primary">Editar</button>
              <button class="btn btn-warning">Excluir</button>
            </td>           
          </tr>
        `;
      })
    });
  return `
    <h2>Gerenciar Cartões</h2>
    <hr>
    <div>
    <button onclick="alterarConteudo('addCard')" type="button" class="btn btn-success">Adicionar</button>
    </div>
    <hr>
    <table class="table table-striped table-hover">
      <thead class="table-dark">
        <tr>
          <td>Nome</td>
          <td>Bandeira</td>
          <td>Número</td>
          <td>Tipo</td>
          <td>Data de Vencimento</td>
          <td>Ações</td>
        </tr>
      </thead>
      <tbody id="cards">        
      </tbody>
    </table>
  `;
}

