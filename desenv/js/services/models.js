((app) => {
  let ServicosModels = (Cores, Tamanhos, Preco, Produtos) =>{
    return {
      Cores: Cores,
      Tamanhos: Tamanhos,
      Preco: Preco,
      Produtos: Produtos
    }
  };

  app.factory("Model", ["Cores", "Tamanhos", "Preco", "Produtos", ServicosModels])
})(app);
