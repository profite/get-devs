// Componente pesponsável pela construção da página

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

var SubHeader = React.createClass({
    render: function() {
        return (
            <div className="subHeader">
            <div className="subHeader__title">
                <h1>VESTIDOS</h1>
             </div>
             <div className	="subHeader__tab">
                <form action="" className="subHeader__form">
                    <select name="" id="" className="subHeader__select">
                        <option value="" selected hidden>Ordenar Por:</option>
                        <option value="recentes">Mais Recentes</option>
                        <option value="menor">Menor Preço</option>
                        <option value="maior">Maior Preço</option>
                    </select>
                </form>
            </div>
            </div>
        );
    }
});

// *************** Componente pesponsável pelo conteudo lateral esquerdo da página (filtro) ************

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

// *************** Componente pesponsável pelo conteudo lateral esquerdo da página (Cores) ************

var ContentCores = React.createClass({

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
        var dropClass = this.state.click ? 'dropdownNone' : 'dropdownBlock';
        var arrowClass = this.state.click ? 'arrow' : 'arrow_down';
        return (
            <div>
                <h1>CORES</h1>
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

// *************** Componente pesponsável pelo conteudo lateral esquerdo da página (Tamanhos) ************

var ContentTamanhos = React.createClass({
    render: function() {
        return (
            <div>
                <h1>TAMANHOS</h1>
                <div className="boxTamanhos">
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

// *************** Componente pesponsável pelo conteudo lateral esquerdo da página (Preços) ************

var ContentPrecos = React.createClass({

   render: function() {
        return (
            <div>
                <h1>PREÇOS</h1>
                <div>
                	 <form action="" method="" className="content__Filtro__form">
	                    <ul>
	                    	<li>
		                        <input type="checkbox" name="precos" value="de0" id="de0"/>
		                        <label htmlFor="de0"><span className="labelSpan"></span>de R$ 0 até R$ 50</label>
	                    	</li><li>
		                        <input type="checkbox" name="precos" value="de51" id="de51"/>
		                        <label htmlFor="de51"><span className="labelSpan"></span>de R$ 51 até R$ 150</label>
	                    	</li><li>
		                        <input type="checkbox" name="precos" value="de151" id="de151"/>
		                        <label htmlFor="de151"><span className="labelSpan"></span>de R$ 151 até R$ 300</label>
	                    	</li><li>
		                        <input type="checkbox" name="precos" value="de301" id="de301"/>
		                        <label htmlFor="de301"><span className="labelSpan"></span>de R$ 301 até R$ 500</label>
	                    	</li><li>
		                        <input type="checkbox" name="precos" value="de501" id="de501"/>
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
     render: function() {
        var images = [              
        {"name":"Layer221", "cor":"laranja", "tamanho":"p", "preco":"398", "data":"", "messenger":"bata bordada"},
        {"name":"Layer213", "cor":"verde", "tamanho":"g", "preco":"398", "data":"", "messenger":"chapéu de praia com fivela"},
        {"name":"Layer216", "cor":"azul", "tamanho":"g", "preco":"398", "data":"", "messenger":"vestido texturizado", "promo":"R$ 189"},
        {"name":"Layer217", "cor":"rosa", "tamanho":"p", "preco":"398", "data":"", "messenger":"bata bordada"},
        {"name":"Layer208", "cor":"branco", "tamanho":"p", "preco":"398", "data":"", "messenger":"chapéu de praia com fivela"},
        {"name":"Layer218", "cor":"branco", "tamanho":"m", "preco":"398", "data":"", "messenger":"vestido texturizado"},
        {"name":"Layer210", "cor":"azul", "tamanho":"m", "preco":"398", "data":"", "messenger":"bata bordada"},
        {"name":"Layer219", "cor":"laranja", "tamanho":"m", "preco":"398", "data":"", "messenger":"chapéu de praia com fivela"},
        {"name":"Layer220", "cor":"branco", "tamanho":"p", "preco":"398", "data":"", "messenger":"vestido texturizado"},           
        ];
        var imagesList = images.map(function(image){
                        return <li><a href="producao.html">
	                        	<div><img src={ "images/" + image.name + ".png"} alt={image.name} /></div>
		                        <div className="content__Card__block">
			                        <p className="content__Card__block__title">{ image.messenger }</p>
			                        <div className="content__Card__block__preco">
			                        	<p className="content__Card__block__preco__total"><span className="content__Card__block__promo"> { image.promo }</span> R$  { image.preco }</p>
			                        	<p>até 5x de R${ image.preco/5 }</p>
			                        </div>
			                        <img src="../../images/car.png" alt="car" onClick="setCar()"/>
			                    </div>
			                    </a>
	                        </li>;                        
	                      })

        return  <div className="content__Card"><ul>{ imagesList }</ul>
				<div className="content__Card__mais"><a href="producao.html">CARREGAR MAIS</a></div>
        	</div>
    }
});



ReactDOM.render(
    <Page />,
    document.getElementById('page')
);