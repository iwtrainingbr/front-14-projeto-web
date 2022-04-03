function listCategories() {
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
        <tbody>
          ${[0, 1, 2, 3, 4, 5].map(() => {
            return `<tr>
              <td>Nome</td>
              <td>Descrições</td>
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
  
