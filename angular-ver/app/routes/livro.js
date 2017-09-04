module.exports = function (app) {
    
    var api = app.api.livro;

    app.route('/v1/livros')
        .get(api.lista)
        .post(api.adiciona)

    app.route('/v1/fantasia')
        .get(api.filtroF);

    app.route('/v1/policial')
        .get(api.filtroR);

    app.route('/v1/carrinho')
        .post(api.adicionar)

    return app;
};
