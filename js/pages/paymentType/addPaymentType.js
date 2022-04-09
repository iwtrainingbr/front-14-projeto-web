function savePaymentType() {
  event.preventDefault();

  let newPaymentTypes = {
    name: document.getElementById('payment-name').value,
    description: document.getElementById('payment-description').value, 
  };

  fetch ('http://localhost:3000/payment-types', {
    method: 'POST',
    body: JSON.stringify(newPaymentTypes),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  alert('Ok, PaymentType');
  document.getElementById('add-PaymentType').reset();
}

function addPaymentType() {
    return `
      <h2>Tipo de Pagamento</h2>
      <hr>
      <form onsubmit="savePaymentType()">
        <label for="payment-name">Nome</label>
        <input id="payment-name" class="form-control mb-3" placeholder="Digite aqui">

        <label for="payment-description">Descrição</label>
        <input id="payment-description" class="form-control mb-3" placeholder="Digite aqui">

        <button class="btn btn-success">Cadastrar</button>
      </form>
    `;
  }
