function addCard() {
  return `
    <h2>Novo Cartão</h2>
    <hr>

    <div>
    <button onclick="alterarConteudo('listCards')" type="button" class="btn btn-outline-success">Voltar</button>
    </div>
    <form>
      <label for="card-name">Nome</label>
      <input id="card-name" class="form-control mb-3" placeholder="Digite aqui">

      <label for="card-flag">Bandeira</label>
      <input id="card-flag" class="form-control mb-3" placeholder="Digite aqui">

      <label for="card-number">Número</label>
      <input id="card-number" class="form-control mb-3" placeholder="Digite aqui">

      <label for="card-date">Data de Validade</label>
      <input id="card-date" class="form-control mb-3" placeholder="Digite aqui">

      <label for="card-type">Tipo</label>
      <input id="card-type" class="form-control mb-3" placeholder="Digite aqui">

      <button class="btn btn-success">Cadastrar</button>
    </form>
  `;
}
