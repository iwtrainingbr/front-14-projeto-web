function payment() {
    return `
      <h2>Tipo de Pagamento</h2>
      <hr>
      <form>
        <label for="name-payment">Nome</label>
        <input id="name" class="form-control mb-3" placeholder="Digite aqui">
  
        <label for="description-payment">Descrição</label>
        <input id="description" class="form-control mb-3" placeholder="Digite aqui">
            
        <button class="btn btn-success">Cadastrar</button>
      </form>
    `;
  }