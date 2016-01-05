//HEADER
var Header = React.createClass({
	render: function() {
		return(
			<header>
				<div className="container">
					<div className="row">
						<HeaderSearch />
						<HeaderLogo logoUrl={this.props.logoUrl} />
						<HeaderLoginBox />
					</div>
				</div>
				<div className="container">
					<div className="row">
						<HeaderNav />
					</div>
				</div>
			</header>
		);
	}
});

var HeaderSearch = React.createClass({
	render: function() {
		return(
			<div id="headerSearch" className="col-xs-12 col-md-5">
				<i className="fa fa-search"></i><input type="search" />
			</div>
		);
	}
});

var HeaderLogo = React.createClass({
	render: function() {
		var logoUrl = this.props.logoUrl;
		return(
			<h1>
				<a href="#">
					<img src={logoUrl} />
				</a>
			</h1>
		);
	}
});

var HeaderLoginBox = React.createClass({
	render: function() {
		return(
			<div className="loginBox">
				<a href="#" className=""><span>Login / Cadastre-se</span></a>
				<Cart />
			</div>
		);
	}
});

var Cart = React.createClass({
	loadCart: function() {
		$.ajax({
			url: '/api/cart',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadCart();
		setInterval(this.loadCart, 1000);
	},
	render: function() {
		var cartCount=0;
		var cartTotal=0;
		var cartLoop = this.state.data.map(function(product){
			cartCount++;
			cartTotal+=product.price;
		});
		return(
			<div id="cart">
				<div className="cartSprite">
				</div>
				<div id="cartCount">
					{cartCount}
				</div>
				<span>
					R$ {cartTotal}
				</span>
			</div>
		);
	}
});

var HeaderNav = React.createClass({
	loadNav: function() {
		$.ajax({
			url: '/api/nav',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadNav();
	},
	render: function() {
		var navNodes = this.state.data.map(function(li) {
			return(
				<NavOpt title={li.title} url={li.url} key={li.id} />
			);
		});
		return(
			<nav>
				<ul>
					{navNodes}
				</ul>
			</nav>
		);
	}
});

var NavOpt = React.createClass({
	render: function() {
		return(
			<li>
				<a href={this.props.url} title={this.props.title}>
					{this.props.title}
				</a>
			</li>
		);
	}
});

//CONTENT
var Content = React.createClass({
	render: function() {
		return(
			<div className="contentInner">
				<Banner />
				<div className="container">
					<MainSectionsGroup />
					<ProductsGroup />
					<SignUp />
				</div>
			</div>
		);
	}
});

var Banner = React.createClass({
	loadBanners: function() {
		$.ajax({
			url: '/api/banners',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadBanners();
	},
	render: function() {
		var bannerNodes = this.state.data.map(function(item) {
			return(
				<BannerItem 
					imgUrl={item.imgUrl}
					smallText={item.smallText}
					bigText={item.bigText}
					linkText={item.linkText}
					linkUrl={item.linkUrl}
					key={item.id} />
			);
		});
		var paginationNodes = this.state.data.map(function(item){
			return(
				<BannerPagination key={item.id} />
			);
		});
		return(
			<section id="banner">
				{bannerNodes}
				<div className="controls">
					<BannerArrows />
					{paginationNodes}
				</div>
			</section>
		);
	}
});

var BannerArrows = React.createClass({
	render: function() {
		return(
			<div className="arrows">
				<div className="left">I am left</div>
				<div className="right">I am right</div>
			</div>
		);
	}
});

var BannerPagination = React.createClass({
	render: function() {
		return(
			<span>I am banner pagination.</span>
		);
	}
});

var BannerItem = React.createClass({
	render: function() {
		return(
			<div className="item" style={{backgroundImage: 'url(' + this.props.imgUrl + ')'}}>
				<div className="container">
					<div className="row">
						<h2><span>{this.props.smallText}</span> {this.props.bigText}</h2>
						<a href={this.props.linkUrl} title={this.props.linkText}>
							<span>
								{this.props.linkText}
							</span>
						</a>
					</div>
				</div>
			</div>
		);
	}
});

var MainSectionsGroup = React.createClass({
	loadSections: function() {
		$.ajax({
			url: '/api/sections',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadSections();
	},
	render: function() {
		var mainSectionsNodes = this.state.data.map(function(section) {
			return(
				<MainSection 
					imgUrl={section.imgUrl}
					text={section.text}
					linkUrl={section.linkUrl}
					key={section.id} />
			);
		});
		return(
			<section id="mainsectionsgroup" className="row">
				{mainSectionsNodes}
			</section>
		);
	}
});

var MainSection = React.createClass({
	render: function() {
		return(
			<div className="mainsection" style={{backgroundImage: 'url(' + this.props.imgUrl + ')'}} >
				<a href={this.props.linkUrl} title={this.props.text}>
					<div className="mainsection-hover">
						<span>{this.props.text}</span>
					</div>
				</a>
			</div>
		);
	}
});

var ProductsGroup = React.createClass({
	loadProducts: function() {
		$.ajax({
			url: '/api/products',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadProducts();
	},
	render: function() {
		var productsNodes = this.state.data.map(function(product) {
			return(
				<Product 
					name={product.name}
					imgUrl={product.imgUrl}
					price={product.price}
					oldPrice={product.oldPrice}
					classification={product.classification}
					freeShipping={product.freeShipping}
					isItNew={product.isItNew}
					customLabel={product.customLabel}
					key={product.id}
					times={product.times}
					linkUrl={product.linkUrl}
					inCart={product.inCart}
					productData={product} />
			);
		});
		return(
			<section id="popularProducts" className="row">
				<h3>Mais Comprados</h3>
				<div className="productsContainer">
					{productsNodes}
				</div>
			</section>
		);
	}
});

var Product = React.createClass({
	// loadCommentsFromServer: function() {
	// 	$.ajax({
	// 		url: this.props.url,
	// 		dataType: 'json',
	// 		cache: false,
	// 		success: function(data) {
	// 			this.setState({data: data});
	// 		}.bind(this),
	// 		error: function(xhr, status, err) {
	// 			console.error(this.props.url, status, err.toString());
	// 		}.bind(this)
	// 	});
	// },
	addToCart: function(productData) {
		$.ajax({
			url: '/api/cart',
			dataType: 'json',
			type: 'POST',
			data: productData,
			success: function(data) {
				// this.setState({data: data});
			}.bind(this),
			error: function(xhs, status, err) {
				// this.setState({data: comments});
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		// this.loadCommentsFromServer();
		// setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function() {
		var productData = this.props;
		var addToCart = this.addToCart;
		var freeShipping;
		var isItNew;
		if (this.props.freeShipping) {
			freeShipping = <div className="productLabel">Frete Grátis</div>;
		}
		if (this.props.isItNew) {
			isItNew = <div className="productLabel">Novidade</div>;
		}
		return(
			<div className="productContainer">
				<div className="product">
					<div className="productLabels">
						{freeShipping}
						{isItNew}
						<div className="productLabel">{this.props.customLabel}</div>
					</div>
					<img src={this.props.imgUrl} alt={this.props.name} title={this.props.name} />
					<div className={"classification class" + this.props.classification}>
					</div>
					<h4>{this.props.name}</h4>
					<div className="priceContainer">
						<span className="oldprice">{this.props.oldPrice}</span>
						<span className="price">{this.props.price}</span>
					</div>
					<span>{this.props.name}</span>
				</div>
				<button type="button" onClick={function(){addToCart(productData)}}><span>Adicionar ao carrinho</span><i className="fa fa-cart-plus"></i></button>
			</div>
		);
	}
});

var SignUp = React.createClass({
	render: function() {
		return(
			<section id="signUp" className="row">
				<img src="/media/img/sale.png" alt="Cadastre-se" title="Cadastre-se" />
				<div>
					Cadastre-se e ganhe <span>5% de desconto</span> na sua primeira compra
				</div>
				<div className="quickSign">
					<form>
						<div className="inputWrap">
							<label htmlFor="name">Nome</label>
							<input type="text" id="name" />
						</div>
						<div className="inputWrap">
							<label htmlFor="email">E-mail</label>
							<input type="text" id="email" />
						</div>
						<div className="inputWrap">
							<input type="submit" />
						</div>
					</form>
				</div>
			</section>
		);
	}
});

//FOOTER
var Footer = React.createClass({
	render: function() {
		return(
			<footer>
				<div className="container">
					<div className="mainFooter row">
						<FooterLogo logoUrl={this.props.logoUrl} />
						<FooterNav />
						<FooterPayment />
					</div>
					<div className="secondFooter row">
						<p>© 2015  Profite.  Todos os direitos reservados</p>
					</div>
				</div>
			</footer>
		);
	}
});

var FooterLogo = React.createClass({
	render: function(){
		var logoUrl = this.props.logoUrl;
		return(
			<h1 className="col-md-4">
				<a href="#">
					<img src={logoUrl} />
				</a>
			</h1>
		);
	}
});

var FooterNav = React.createClass({
	loadNav: function() {
		$.ajax({
			url: '/api/nav',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadNav();
	},
	render: function() {
		var navNodes = this.state.data.map(function(li) {
			return(
				<NavOpt title={li.title} url={li.url} key={li.id} />
			);
		});
		return(
			<nav className="col-md-9">
				<div className="footerTitle">Navegue</div>
				<ul>
					{navNodes}
				</ul>
				<div className="footerTitle">Institucional</div>
				<ul>
					<li>Lorem</li>
					<li>Ipsum</li>
					<li>Dolor</li>
					<li>Sit</li>
					<li>Amet</li>
				</ul>
				<div className="footerTitle">Lorem Ipsum</div>
				<ul>
					<li>Lorem</li>
					<li>Ipsum</li>
					<li>Dolor</li>
					<li>Sit</li>
					<li>Amet</li>
				</ul>
				<div className="footerTitle">Lorem Ipsum</div>
				<ul>
					<li>Lorem</li>
					<li>Ipsum</li>
					<li>Dolor</li>
					<li>Sit</li>
					<li>Amet</li>
				</ul>
			</nav>
		);
	}
});

var FooterPayment = React.createClass({
	render: function() {
		return(
			<div className="payment col-md-7">
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
					<li>6</li>
				</ul>
			</div>
		);
	}
});

ReactDOM.render(
	<Header logoUrl={'uploads/logo.png'} />,
	document.getElementById('header')
);
ReactDOM.render(
	<Content />,
	document.getElementById('content')
);
ReactDOM.render(
	<Footer logoUrl={'uploads/footer-logo.png'} />,
	document.getElementById('footer')
);