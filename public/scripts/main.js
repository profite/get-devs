//HEADER
var Header = React.createClass({
	render: function() {
		return(
			<div className="headerInner">
				<div className="container">
					<div className="row headerTop">
						<HeaderSearch />
						<HeaderLogo logoUrl={this.props.logoUrl} />
						<HeaderLoginBox />
					</div>
				</div>
				<div className="container">
					<div className="row headerBottom">
						<HeaderNav />
					</div>
				</div>
			</div>
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
			<h1 className="col-xs-12 col-md-10">
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
			<div className="loginBox col-xs-12 col-md-5">
				<Cart />
				<a href="#" className="loginLink"><span>Login / Cadastre-se</span></a>
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
					<div id="cartCount">
						{cartCount}
					</div>
				</div>
				<span id="cartTotal">
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
	componentDidUpdate: function() {
		bannerInit("#banner");
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
			<div className="bannerContainer">
				<div className="controls container">
					<BannerArrows />
					<div className="paginationGroup row">
						{paginationNodes}
					</div>
				</div>
				<section id="banner">
					{bannerNodes}
				</section>
			</div>
		);
	}
});

var BannerArrows = React.createClass({
	render: function() {
		return(
			<div className="arrows row">
				<div className="left"></div>
				<div className="right"></div>
			</div>
		);
	}
});

var BannerPagination = React.createClass({
	render: function() {
		return(
			<span className="bannerPagination"></span>
		);
	}
});

var BannerItem = React.createClass({
	render: function() {
		return(
			<div className="item" style={{backgroundImage: 'url(' + this.props.imgUrl + ')'}}>
				<div className="container">
					<div className="row">
						<div className="smallText">{this.props.smallText}</div>
						<h2>{this.props.bigText}</h2>
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
	addToCart: function(productData) {
		$.ajax({
			url: '/api/cart',
			dataType: 'json',
			type: 'POST',
			data: productData,
			success: function(data) {
			}.bind(this),
			error: function(xhs, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	render: function() {
		var productData = this.props;
		var addToCart = this.addToCart;
		var times = this.props.times;
		var price = this.props.price;
		var resultPrice = price/times;
		var freeShipping;
		var isItNew;
		var money;
		var divisor;
		var pTimes;
		if (this.props.freeShipping) {
			freeShipping = <div className="productLabel">Frete Grátis</div>;
		}
		if (this.props.isItNew) {
			isItNew = <div className="productLabel">Novidade</div>;
		}
		if(this.props.oldPrice) {
			money = "R$ ";
			divisor = " | "
		}
		if(this.props.times) {
			pTimes = <div className="pTimes">ou <span className="mPrice"> {times} x</span> de <span className="mPrice">R$ {resultPrice}</span></div>;
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
					<div className="textContainer">
						<div className={"classification class" + this.props.classification}>
						</div>
						<h4>{this.props.name}</h4>
						<div className="priceContainer">
							<span className="oldprice">{money}{this.props.oldPrice}{divisor}</span>
							<span className="price">R$ {this.props.price}</span>
							{pTimes}
						</div>
					</div>
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
				<div className="col-xs-12 col-md-4">
					<img src="/media/img/sale.png" alt="Cadastre-se" title="Cadastre-se" />
				</div>
				<div className="col-xs-12 col-md-5 text">
					<span>Cadastre-se e ganhe</span><span><br />5% de desconto<br /></span><span>na sua primeira compra</span>
				</div>
				<div className="quickSign">
					<form>
						<div className="inputWrap col-xs-12 col-md-4">
							<label htmlFor="name">Nome</label>
							<input type="text" id="name" />
						</div>
						<div className="inputWrap col-xs-12 col-md-4">
							<label htmlFor="email">E-mail</label>
							<input type="text" id="email" />
						</div>
						<div className="inputWrap col-xs-12 col-md-3">
							<input type="submit" value="Cadastrar"/>
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
		);
	}
});

var FooterLogo = React.createClass({
	render: function(){
		var logoUrl = this.props.logoUrl;
		return(
			<h1 className="col-xs-12 col-md-4">
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
			<nav>
				<div className="footerColumn col-xs-12 col-md-3">
					<div className="footerTitle">Navegue</div>
					<ul>
						{navNodes}
					</ul>
				</div>
				<div className="footerColumn col-xs-12 col-md-3">
					<div className="footerTitle">Institucional</div>
					<ul>
						<li><a href="#">Lorem</a></li>
						<li><a href="#">Ipsum</a></li>
						<li><a href="#">Dolor</a></li>
						<li><a href="#">Sit</a></li>
						<li><a href="#">Amet</a></li>
					</ul>
				</div>
				<div className="footerColumn col-xs-12 col-md-3">
					<div className="footerTitle">Lorem Ipsum</div>
					<ul>
						<li><a href="#">Lorem</a></li>
						<li><a href="#">Ipsum</a></li>
						<li><a href="#">Dolor</a></li>
						<li><a href="#">Sit</a></li>
						<li><a href="#">Amet</a></li>
					</ul>
				</div>
			</nav>
		);
	}
});

var FooterPayment = React.createClass({
	render: function() {
		return(
			<div className="footerColumn payment col-xs-12 col-md-7">
				<div className="footerTitle">Formas de pagamento</div>
				<ul>
					<li className="pay pay1"></li>
					<li className="pay pay2"></li>
					<li className="pay pay3"></li>
					<li className="pay pay4"></li>
					<li className="pay pay5"></li>
					<li className="pay pay6"></li>
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

function bannerInit(el) {
	var $el=$(el),
	currentItem = 0,
	itemWidth=$("#banner .item").width(),
	autoPlay=5000,
	banner= {
		el: $el,
		size: $el.children(".item").length,
		children: $el.children(".item"),
		width: $el.children(".item").length*itemWidth
	};
	$($(".controls .bannerPagination")[0]).addClass("active");
	$el.width(banner.width);

	function nextItem() {
		currentItem++;
		if (currentItem>=banner.size) {
			currentItem=0;
		}
		else if (currentItem<0) {
			currentItem=banner.size-1;
		}
		$el.css("left", -itemWidth*currentItem + "px");
		refreshPagination();
	}

	function previousItem() {
		currentItem--;
		if (currentItem>=banner.size) {
			currentItem=0;
		}
		else if (currentItem<0) {
			currentItem=banner.size-1;
		}
		$el.css("left", -itemWidth*currentItem + "px");
		refreshPagination();
	}

	$(".arrows .left").click(function(){
		previousItem();
		refreshPagination();
		clearInterval(timer);
		timer = setInterval(nextItem, autoPlay);
	});

	$(".arrows .right").click(function(){
		nextItem();
		refreshPagination();
		clearInterval(timer);
		timer = setInterval(nextItem, autoPlay);
	});

	function refreshPagination() {
		$(".controls .bannerPagination").removeClass("active");
		$($(".controls .bannerPagination")[currentItem]).addClass("active");
	}

	function goToItem(i) {
		currentItem=i;
		if (currentItem>=banner.size) {
			currentItem=0;
		}
		else if (currentItem<0) {
			currentItem=banner.size-1;
		}
		$el.css("left", -itemWidth*currentItem + "px");
		refreshPagination();
	}

	$(".controls .bannerPagination").click(function(){
		goToItem($(this).index());
	});

	var timer = setInterval(nextItem, autoPlay);
}
