function addCategory() {
  return `
    <h2>Novo Categoria</h2>
    <hr>
    <form>
      <label for="user-name">Nome</label>
      <input id="user-name" class="form-control mb-3" placeholder="Digite aqui">

      <label for="description-flag">Descrição</label>
      <input id="description-flag" class="form-control mb-3" placeholder="Digite aqui">

      <button class="btn btn-success">Cadastrar</button>
    </form>
  `;
}
