function navbar() {
  let menu = {
    'cadastro': 'Cadastrar',
    'listar': 'Listar frutas',
    'perfil': 'Meu Perfil',
    'config': 'Configurações',
    'report': 'Relatórios',
    'login': 'Sair',
    'milena': 'Milena',
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
