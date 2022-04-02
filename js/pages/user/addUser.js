function addUser() {
  return `
    <h2>Novo Usuario</h2>
    <hr>
    <form>
      <label for="user-name">Nome</label>
      <input id="user-name" class="form-control mb-3" placeholder="Digite aqui">

      <label for="email">Email</label>
      <input id="email" class="form-control mb-3" placeholder="Your Email address">

      <label for="phone">Telefone</label>
      <input type="number" class="form-control mb-3" placeholder="Digite aqui">

      <label for="password">Senha</label>
      <input type="password" class="form-control mb-3" placeholder="Digite aqui">

      <button class="btn btn-success">Cadastrar</button>
    </form>
  `;
}
