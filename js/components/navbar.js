function navbar() {
  let menu = {
    'home': 'Inicio',
    'cadastro': 'Cadastrar',
    'listar': 'Listar frutas',
    'perfil': 'Meu Perfil',
    'config': 'Configurações',
    'report': 'Relatórios',
    'login': 'sair',
    'hermeson':'frase',
    'login': 'Sair',
    'milena': 'Milena',
    'andrade': 'Andrade',
    'janaina': 'Página',
    'alvaro': 'Pagina Alvaro',
    'tito': 'Titão',
    'allyson': 'Allyson',
    'listCards': 'Cartões',
    'listCategories': 'Categorias'
    'addCategory': 'Nova Categoria',
    'list':'Lista Usuários'
    'payment': 'Tipo de Pagamento',

    'addUser': 'Novo Usuario',
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
