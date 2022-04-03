function home() {
    return `
        <section id="dashboard" class="container">
            <h1>Dashboard</h1>

            <div class="row mt-5">
                <div class="col">
                    <div class="card">
                        <h5 class="card-header">Usuários</h5>
                        <div class="card-body">
                            <h5 class="card-title">Total Cadastrados</h5>
                            <h3 class="card-text"><span class="badge bg-success">15</span></h3>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                <div class="card">
                    <h5 class="card-header">Categorias</h5>
                    <div class="card-body">
                    <h5 class="card-title">Total de Categorias</h5>
                    <h3 class="card-text"><span class="badge bg-primary">5</span></h3>
                    </div>
                </div>
            </div>
            <div class="col">
            <div class="card">
                <h5 class="card-header">Cartões</h5>
                <div class="card-body">
                <h5 class="card-title">Cartões Cadastrados</h5>
                <h3 class="card-text"><span class="badge bg-warning">3</span></h3>
                </div>
            </div>
        </div>
        <div class="col">
        <div class="card">
            <h5 class="card-header">Pagamentos</h5>
            <div class="card-body">
            <h5 class="card-title">Registro de Pagamentos</h5>
            <h3 class="card-text"><span class="badge bg-danger">150</span></h3>
            </div>
        </div>
    </div>      
            </div>

        </section>
    
    `;
}