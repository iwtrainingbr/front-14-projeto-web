function navbar() {
  let menu = {
    'home': 'Inicio',
    'cadastro': 'Cadastrar',
    'listar': 'Listar frutas',
    'perfil': 'Meu Perfil',
    'config': 'Configurações',
    'report': 'Relatórios',
    'login': 'sair',
    'login': 'Sair',
    'listCards': 'Cartões',
    'listCategories': 'Categorias',
    'listUser':'Usuários',
    'listPaymentTypes': 'Pagamentos'
  };

  let buttons = '';

  for (let functionName in menu) {
    buttons += `
      <button onclick="alterarConteudo('${functionName}')" class="btn btn-primary">
        ${menu[functionName]}
      </button>
    `
  }

  return buttons;
}

document.getElementById('navbar').innerHTML = navbar();
