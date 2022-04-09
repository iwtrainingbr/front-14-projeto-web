function saveCategory () {
  event.preventDefault();

  let newCategory = {
    name:         document.getElementById('category-name').value,
    description:  document.getElementById('category-description').value,
  };

  fetch ('http://localhost:3000/categories', {
    method: 'POST',
    body: JSON.stringify(newCategory),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  alert('Pronto, categoria criada com sucesso!');
  document.getElementById('add-category').reset();
}

function addCategory() {
  return `
    <h2>Nova Categoria</h2>
    <hr>
    <form onSubmit="saveCategory()" id="add-category">
      <label for="category-name">Nome</label>
      <input id="category-name" class="form-control mb-3" placeholder="Digite aqui">

      <label for="category-description">Descrição</label>
      <input id="category-description" class="form-control mb-3" placeholder="Digite aqui">

      <button class="btn btn-success">Cadastrar</button>
    </form>
  `;
}

