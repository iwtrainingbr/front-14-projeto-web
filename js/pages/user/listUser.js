function listUser() {
    return `
    <h2>Lista de Usuários</h2>
    <hr>
    <div>
      <button onclick="alterarConteudo('addUser')" type="button" class="btn btn-success">Adicionar</button>
    </div>
    <hr>
    <table class="table table-striped table-hover">
      <thead class="table-danger">
        <tr>
          <td>Usuário</td>
          <td>CPF</td>
          <td>Contato</td>
          <td>Email</td>
          <td>Status</td>
          <td>Ações</td>
        </tr>
      </thead>
      ${[0, 1, 2, 3, 4, 5].map(() => {
        return `<tr>
          <td>Chiquinho</td>
          <td>601.000.000.00</td>
          <td>(85)9 0000-0000</td>
          <td>email@hotmail.com</td>
          <td>Ativo</td>
          <td>
          
            <button class="btn btn-outline-dark">Detalhes</button>
            <button class="btn btn-dark">Editar</button>
            <button class="btn btn-danger">Excluir</button>
          </td>
        </tr>`;
      }).join('')}
    </tbody>
  </table>
` 
}