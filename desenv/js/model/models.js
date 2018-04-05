((app) => {
  let ServicosModels = (Cores, Tamanhos, Preco, Produtos, Carrinho) =>{
    return {
      Cores: Cores,
      Tamanhos: Tamanhos,
      Preco: Preco,
      Produtos: Produtos,
      Carrinho: Carrinho
    }
  };

  app.factory("Model", ["Cores", "Tamanhos", "Preco", "Produtos", "Carrinho", ServicosModels])
})(app);
