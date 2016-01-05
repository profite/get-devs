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
	render: function() {
		return(
			<div id="cart">
				<div className="cartSprite">
				</div>
				<div id="cartCount">
					{this.props.count}
				</div>
				<span>
					R$ {this.props.total}
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
		console.log('mounted');
	},
	render: function() {
		var navNodes = this.state.data.map(function(li) {
			return(
				<NavOpt title={li.title} url={li.url} id={li.id} />
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
			<header>
				<div className="container">
					<div className="row">
						Hello, I am content.
					</div>
				</div>
			</header>
		);
	}
});

//FOOTER
var Footer = React.createClass({
	render: function() {
		return(
			<header>
				<div className="container">
					<div className="row">
						Hello, I am footer.
					</div>
				</div>
			</header>
		);
	}
});

var data = [
	{id: 1, author: "Pete Hunt", text: "This is one comment"},
	{id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
	<Header logoUrl={'uploads/logo.png'} />,
	document.getElementById('header')
);
ReactDOM.render(
	<Content />,
	document.getElementById('content')
);
ReactDOM.render(
	<Footer />,
	document.getElementById('footer')
);