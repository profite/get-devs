import axios from 'axios'

// *************** Componente pesponsável pelo esqueleto da página ************

var Page = React.createClass({

    render:function(){
        return (
            <page>
                <Header />
                <SubHeader />
                <div className="content">
                    <ContentFiltro />
                    <ContentCards />
                </div>
            </page>
        );
    }
});

// *************** Componente pesponsável pelo header ************

var Header = React.createClass({
    render: function() {
        return (
            <div className="header">
                <div className="header-border">
                    <img className="header__logo" src="images/logo.png" />
                    <div>
	                    <img className="header__bag" src="images/bag.png" />
	                    <p>3</p>
                    </div>
                </div>
            </div>
        );
    }
})

// *************** Componente pesponsável pelo header ************

var SubHeader = React.createClass({
	getInitialState: function(){
    return {
        click: true
        };
    },
	dropBlock: function(){
        this.setState({
            click: !this.state.click
        });
    },

    render: function() {
    	var dropMenus = this.state.click ? 'dropmenuBlock' : 'dropmenuNone';
    	var dropClass = this.state.click ? 'dropdownNone' : 'dropdownBlock';
        return (
        	<div>
	            <div className="subHeader">
		            <div className="subHeader__title">
		                <h1>VESTIDOS</h1>
		             </div>
		             <div className	="subHeader__tab">
		                <form action="" className="subHeader__form">
		                    <select name="" id="" className="subHeader__select">
		                        <option value="" selected>Ordenar Por:</option>
		                        <option value="recentes">Mais Recentes</option>
		                        <option value="menor">Menor Preço</option>
		                        <option value="maior">Maior Preço</option>
		                    </select>
		                </form>
		            </div>	                   
	         	</div>
	         	<div className="subHeader__mobile">
	                <button className="subHeader__btnMobile" onClick={ this.dropBlock }>Filtrar</button>
	                <button className="subHeader__btnMobile" >Ordenar</button>
	                <div className="subHeader__selectMobile">
	                    <div className={ dropClass }>
							<MenuCor />
							<MenuTamanho />
							<MenuPreco />
							<button className="subHeader__selectMobile__btnMobileSelect__first" >APLICAR</button>
	                		<button className="subHeader__selectMobile__btnMobileSelect" >LIMPAR</button>
	                    </div>	               
	                </div>                   
	            </div>	
	        </div>       
        );
    }
});

// *************** Componente pesponsável pelo filtro de cor do menu da versão mobile ************

var MenuCor = React.createClass({
		getInitialState: function(){
        return {
            click: true
	        };
	    },
	    dropMenuCor: function(){
        	this.setState({
            	click: !this.state.click
        	});
    	},

    render: function() {
    	var dropMenuCor = this.state.click ? 'dropmenuBlock' : 'dropmenuNone';
        return (
        	<div>
                <p onClick={ this.dropMenuCor }>CORES <span className="traco">-</span></p>
                <div className={ dropMenuCor }>
	               	<div>
	                <h1 className="cores">CORES</h1>
		                <div>
		                    <form action="" method="" className="content__Filtro__form">
			                    <ul>
			                    	<li>
				                        <input type="checkbox" name="cores" value="cores" id="amarelom"/>
				                        <label htmlFor="amarelom"><span className="labelSpan"></span>Amarelo</label>
			                    	</li>
			                    	<li>
			                        	<input type="checkbox" name="cores" value="cores" id="azulm"/>
			                        	<label htmlFor="azulm"><span className="labelSpan"></span>Azul</label>
			                        </li>
				                    <li>
					                    <input type="checkbox" name="cores" value="cores" id="brancom"/>
						                <label htmlFor="brancom"><span className="labelSpan"></span>Branco</label></li>
				                    <li>
					                    <input type="checkbox" name="cores" value="cores" id="cinzam"/>
					                    <label htmlFor="cinzam"><span className="labelSpan"></span>Cinza</label>
				                    </li>
				                    <li>
					                    <input type="checkbox" name="cores" value="cores" id="laranjam"/>
					                    <label htmlFor="laranjam"><span className="labelSpan"></span>Laranja</label>
				                    </li>
			                        <li>
				                        <input type="checkbox" name="cores" value="cores" id="verdem"/>
				                        <label htmlFor="verdem"><span className="labelSpan"></span>Verde</label>
			                        </li>
			                        <li>
				                        <input type="checkbox" name="cores" value="cores" id="vermelhom"/>
				                        <label htmlFor="vermelhom"><span className="labelSpan"></span>Vermelho</label>
			                        </li>
			                        <li>
			                        	<input type="checkbox" name="cores" value="cores" id="rosam"/>
			                        	<label htmlFor="rosam"><span className="labelSpan"></span>Rosa</label>
			                        </li>
			                        <li>
			                        	<input type="checkbox" name="cores" value="cores" id="vinhom"/>
			                        	<label htmlFor="vinhom"><span className="labelSpan"></span>Vinho</label>
			                        </li>
					            </ul>	                      
		                    </form>
		                </div>
	            	</div>
               	</div>
	        </div>       
        );
    }
});

// *************** Componente pesponsável pelo filtro de tamanho do menu da versão mobile ************

var MenuTamanho = React.createClass({
		getInitialState: function(){
        return {
            click: true
	        };
	    },
	    dropMenuTam: function(){
        	this.setState({
            	click: !this.state.click
        	});
    	},

    render: function() {
    	var dropMenuTam = this.state.click ? 'dropmenuBlock' : 'dropmenuNone';
        return (
        	<div>
                <p onClick={ this.dropMenuTam }>TAMANHO <span className="traco">-</span></p>
                <div className={ dropMenuTam }>
               		<ContentTamanhos />
               	</div>
	        </div>        
        );
    }
});

// *************** Componente pesponsável pelo filtro de preço do menu da versão mobile ************

var MenuPreco = React.createClass({
		getInitialState: function(){
        return {
            click: true
	        };
	    },
	    dropMenuPreco: function(){
        	this.setState({
            	click: !this.state.click
        	});
    	},

    render: function() {
    	var dropMenuPreco = this.state.click ? 'dropmenuBlock' : 'dropmenuNone';
        return (
        	<div>
                <p onClick={ this.dropMenuPreco }>PRECOS <span className="traco">-</span></p>
                <div className={ dropMenuPreco }>
               		<div>
		                <h1 className="preco">FAIXA DE PREÇO</h1>
		                <div>
		                	 <form action="" method="" className="content__Filtro__form">
			                    <ul>
			                    	<li>
				                        <input type="checkbox" name="precos" value="preco" id="de0m"/>
				                        <label htmlFor="de0m"><span className="labelSpan"></span>de R$ 0 até R$ 50</label>
			                    	</li><li>
				                        <input type="checkbox" name="precos" value="preco" id="de51m"/>
				                        <label htmlFor="de51m"><span className="labelSpan"></span>de R$ 51 até R$ 150</label>
			                    	</li><li>
				                        <input type="checkbox" name="precos" value="preco" id="de151m"/>
				                        <label htmlFor="de151m"><span className="labelSpan"></span>de R$ 151 até R$ 300</label>
			                    	</li><li>
				                        <input type="checkbox" name="precos" value="preco" id="de301m"/>
				                        <label htmlFor="de301m"><span className="labelSpan"></span>de R$ 301 até R$ 500</label>
			                    	</li><li>
				                        <input type="checkbox" name="precos" value="preco" id="de501m"/>
				                        <label htmlFor="de501m"><span className="labelSpan"></span>a partir de R$ 501</label>
			                    	</li>
		                    	</ul>
		                    </form>
		                </div>
            		</div>
               	</div>
	        </div> 
        );
    }
});

// *************** Componente pesponsável pelo esquelo do menu esquerdo da página (filtro) versão desktop ************

var ContentFiltro = React.createClass({
    render: function() {
        return (
            <div className="content__Filtro">
                <ContentCores />
                <ContentTamanhos />
                <ContentPrecos />
            </div>    
        );
    }
})

// *************** Componente pesponsável pelo conteudo lateral esquerdo da página (Cores) versão desktop ************

var ContentCores = React.createClass({

    getInitialState: function(){
        return {
            click: true,
        };
    },

    dropBlock: function(){
        this.setState({
            click: !this.state.click
        });
    },
	
    render: function() {
        var dropClass = this.state.click ? 'dropdownNone' : 'dropdownBlock';
        var arrowClass = this.state.click ? 'arrow' : 'arrow_down';
        return (
            <div>
                <h1 className="cores">CORES</h1>
                <div>
                    <form action="" method="" className="content__Filtro__form">
	                    <ul>
	                    	<li>
		                        <input type="checkbox" name="cores" value="amarelo" id="amarelo"/>
		                        <label htmlFor="amarelo"><span className="labelSpan"></span>Amarelo</label>
	                    	</li>
	                    	<li>
	                        	<input type="checkbox" name="cores" value="azul" id="azul"/>
	                        	<label htmlFor="azul"><span className="labelSpan"></span>Azul</label>
	                        </li>
		                    <li>
			                    <input type="checkbox" name="cores" value="branco" id="branco"/>
				                <label htmlFor="branco"><span className="labelSpan"></span>Branco</label></li>
		                    <li>
			                    <input type="checkbox" name="cores" value="cinza" id="cinza"/>
			                    <label htmlFor="cinza"><span className="labelSpan"></span>Cinza</label>
		                    </li>
		                    <li>
			                    <input type="checkbox" name="cores" value="laranja" id="laranja"/>
			                    <label htmlFor="laranja"><span className="labelSpan"></span>Laranja</label>
		                    </li>
	                   </ul>
	                        <div className="dropdown" className={ dropClass }>
		                        <ul>
			                        <li>
				                        <input type="checkbox" name="cores" value="verde" id="verde"/>
				                        <label htmlFor="verde"><span className="labelSpan"></span>Verde</label>
			                        </li>
			                        <li>
				                        <input type="checkbox" name="cores" value="vermelho" id="vermelho"/>
				                        <label htmlFor="vermelho"><span className="labelSpan"></span>Vermelho</label>
			                        </li>
			                        <li>
			                        	<input type="checkbox" name="cores" value="rosa" id="rosa"/>
			                        	<label htmlFor="rosa"><span className="labelSpan"></span>Rosa</label>
			                        </li>
			                        <li>
			                        	<input type="checkbox" name="cores" value="vinho" id="vinho"/>
			                        	<label htmlFor="vinho"><span className="labelSpan"></span>Vinho</label>
			                        </li>
			                    </ul>
	                        </div>
	                        <p onClick={ this.dropBlock }>Ver todas as cores</p><span className={ arrowClass }> &#x276f;</span>
                    </form>
                </div>
            </div>
        );
    }
})

// *************** Componente pesponsável pelo conteudo lateral esquerdo da página (Tamanhos) versão desktop ***********

var ContentTamanhos = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="tamanho">TAMANHOS</h1>
                <div className="content__Filtro__box">
                    <a href="#">P</a>
                    <a href="#">M</a>
                    <a href="#">G</a>
                    <a href="#">GG</a>
                    <a href="#">U</a>
                    <a href="#">36</a>
                    <a href="#">38</a>
                    <a href="#">40</a>
                    <a href="#">42</a>
                    <a href="#">44</a>
                    <a href="#">46</a>
                </div>
            </div>
        );
    }
})

// *************** Componente pesponsável pelo conteudo lateral esquerdo da página (Preco) versão desktop ***********

var ContentPrecos = React.createClass({

   render: function() {
        return (
            <div>
                <h1 className="preco">FAIXA DE PREÇO</h1>
                <div>
                	 <form action="" method="" className="content__Filtro__form">
	                    <ul>
	                    	<li>
		                        <input type="checkbox" name="precos" value="preco" id="de0"/>
		                        <label htmlFor="de0"><span className="labelSpan"></span>de R$ 0 até R$ 50</label>
	                    	</li><li>
		                        <input type="checkbox" name="precos" value="preco" id="de51"/>
		                        <label htmlFor="de51"><span className="labelSpan"></span>de R$ 51 até R$ 150</label>
	                    	</li><li>
		                        <input type="checkbox" name="precos" value="preco" id="de151"/>
		                        <label htmlFor="de151"><span className="labelSpan"></span>de R$ 151 até R$ 300</label>
	                    	</li><li>
		                        <input type="checkbox" name="precos" value="preco" id="de301"/>
		                        <label htmlFor="de301"><span className="labelSpan"></span>de R$ 301 até R$ 500</label>
	                    	</li><li>
		                        <input type="checkbox" name="precos" value="preco" id="de501"/>
		                        <label htmlFor="de501"><span className="labelSpan"></span>a partir de R$ 501</label>
	                    	</li>
                    	</ul>
                    </form>
                </div>
            </div>
        );
    }
});

// *************** Componente pesponsável pelo conteudo com os cards da página ************

var ContentCards = React.createClass({
	 getInitialState: function() {
	    return {
	      images: []
	    }
	  },

	  componentDidMount: function() {
	    var _this = this;
	    this.serverRequest = 
	      axios
	        .get("http://localhost:8000/data.json")
	        .then(function(result) {    
	          _this.setState({
	            images: result.data.images
	          });
	        })
	        .catch(error=>{});
	  },

	  componentWillUnmount: function() {
	    this.serverRequest.abort();
	  },

		render: function() {
          return (
          <div className="content__Card"><ul>
          {this.state.images.map(function(image) {
            return ( <li><a href="producao.html">
                              <div><img src={ "images/" + image.name + ".png"} alt={image.name} className="content__Card__img"/></div>
                              <div className="content__Card__block">
                                <p className="content__Card__block__title">{ image.messenger }</p>
                                <div className="content__Card__block__preco">
                                  <p className="content__Card__block__preco__total"><span className="content__Card__block__promo"> { image.promo }</span> R$  { image.preco }</p>
                                  <p className="content__Card__block__preco__parcela">até 5x de R${ image.preco/5 }</p>
                                </div>
                                <img src="../../images/car.png" alt="car" onClick="setCar()"/>
                            </div>
                            </a>
                            </li>
                            );                       
                          })}
                          </ul>
        <div className="content__Card__mais"><a href="producao.html">CARREGAR MAIS</a></div>
          </div>
          )
        }
    });


ReactDOM.render(
    <Page />,
    document.getElementById('page')
);