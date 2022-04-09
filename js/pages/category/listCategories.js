function listCategories() {
  fetch ('http://localhost:3000/categories')
  .then(response => response.json())
  .then(response => {
    response.map(cat => {
      document.getElementById('table-categories').innerHTML += `
        <tr>
          <td>${cat.name}</td>
          <td>${cat.description}</td>
          
          <td>
            <button class="btn btn-warning">Editar</button>
            <button class="btn btn-danger">Excluir</button>
          </td>
        </tr>                
      `;
    })
  });

    return `
      <h2>Categoria de categorias</h2>
      <hr>
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <td>Nome</td>
            <td>Descrição</td>
            <td>ações</td>
           </tr>
        </thead>
        <tbody id="table-categories">

        </tbody>
      </table>
    `;
  }
  
