function listPaymentTypes() {
  fetch ('http://localhost:3000/payment-types')
  .then(response => response.json())
  .then(response => {
    response.map(cat => {
      document.getElementById('table-paymentType').innerHTML += `
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
      <h2>Lista de Pagamentos</h2>
      <hr>
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <td>Valor</td>
            <td>Descrição</td>
            <td>Tipo</td>
           </tr>
        </thead>
        <tbody id="table-paymentType">
          
        </tbody>
      </table>
    `;
  }
  
