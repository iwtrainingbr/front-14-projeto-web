function listUser() {

  fetch ('http://localhost:3000/users')
  .then(response => response.json())
  .then(response => {
    response.map(user => {
      document.getElementById('table-users').innerHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.cpf}</td>
          
          <td>${user.phone}</td>
          <td>${user.email}</td>
          <td>${user.status}</td>
          <td>
            <button class="btn btn-warning">Editar</button>
            <button class="btn btn-danger">Excluir</button>
          </td>
        </tr>                
      `;
    })
  });

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

      <tbody id="table-users">
      </tbody>
  </table>
` 
}