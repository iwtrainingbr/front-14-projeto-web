function listCards() {
  return `
    <h2>Gerenciar Cartões</h2>
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
      <tbody>
        ${[0, 1, 2, 3, 4, 5].map(() => {
          return `<tr>
            <td>Meu Roxinho</td>
            <td>MasterCard</td>
            <td>1234 **** **** *123</td>
            <td>Crédito</td>
            <td>01/28</td>
            <td>
              <button class="btn btn-warning">Editar</button>
              <button class="btn btn-danger">Excluir</button>
            </td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  `;
}
