function addCategory() {
  return `
    <h2>Nova Categoria</h2>
    <hr>
    <form>
      <label for="category-name">Nome</label>
      <input id="category-name" class="form-control mb-3" placeholder="Digite aqui">

      <label for="category-description">Descrição</label>
      <input id="category-description" class="form-control mb-3" placeholder="Digite aqui">

      <button class="btn btn-success">Cadastrar</button>
    </form>
  `;
}
