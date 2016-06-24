((app) => {
  let ServicosModels = (Cores, Tamanhos, Preco) =>{
    return {
      Cores: Cores,
      Tamanhos: Tamanhos,
      Preco: Preco
    }
  };

  app.factory("Model", ["Cores", "Tamanhos", "Preco", ServicosModels])
})(app);
