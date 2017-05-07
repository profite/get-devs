"use strict";

// Componente pesponsável pela construção da página

var Page = React.createClass({
				displayName: "Page",


				render: function () {
								return React.createElement(
												"page",
												null,
												React.createElement(Header, null),
												React.createElement(SubHeader, null),
												React.createElement(
																"div",
																{ className: "content" },
																React.createElement(ContentFiltro, null),
																React.createElement(ContentCards, null)
												)
								);
				}
});

// *************** Componente pesponsável pelo header ************

var Header = React.createClass({
				displayName: "Header",

				render: function () {
								return React.createElement(
												"div",
												{ className: "header" },
												React.createElement(
																"div",
																{ className: "header-border" },
																React.createElement("img", { className: "header__logo", src: "images/logo.png" }),
																React.createElement(
																				"div",
																				null,
																				React.createElement("img", { className: "header__bag", src: "images/bag.png" }),
																				React.createElement(
																								"p",
																								null,
																								"3"
																				)
																)
												)
								);
				}
});

var SubHeader = React.createClass({
				displayName: "SubHeader",

				getInitialState: function () {
								return {
												click: true
								};
				},
				dropBlock: function () {
								this.setState({
												click: !this.state.click
								});
				},

				render: function () {
								var dropMenus = this.state.click ? 'dropmenuBlock' : 'dropmenuNone';
								var dropClass = this.state.click ? 'dropdownNone' : 'dropdownBlock';
								return React.createElement(
												"div",
												null,
												React.createElement(
																"div",
																{ className: "subHeader" },
																React.createElement(
																				"div",
																				{ className: "subHeader__title" },
																				React.createElement(
																								"h1",
																								null,
																								"VESTIDOS"
																				)
																),
																React.createElement(
																				"div",
																				{ className: "subHeader__tab" },
																				React.createElement(
																								"form",
																								{ action: "", className: "subHeader__form" },
																								React.createElement(
																												"select",
																												{ name: "", id: "", className: "subHeader__select" },
																												React.createElement(
																																"option",
																																{ value: "", selected: true, hidden: true },
																																"Ordenar Por:"
																												),
																												React.createElement(
																																"option",
																																{ value: "recentes" },
																																"Mais Recentes"
																												),
																												React.createElement(
																																"option",
																																{ value: "menor" },
																																"Menor Pre\xE7o"
																												),
																												React.createElement(
																																"option",
																																{ value: "maior" },
																																"Maior Pre\xE7o"
																												)
																								)
																				)
																)
												),
												React.createElement(
																"div",
																{ className: "subHeader__mobile" },
																React.createElement(
																				"button",
																				{ className: "subHeader__btnMobile", onClick: this.dropBlock },
																				"Filtrar"
																),
																React.createElement(
																				"button",
																				{ className: "subHeader__btnMobile" },
																				"Ordenar"
																),
																React.createElement(
																				"div",
																				{ className: "subHeader__selectMobile" },
																				React.createElement(
																								"div",
																								{ className: dropClass },
																								React.createElement(MenuCor, null),
																								React.createElement(MenuTamanho, null),
																								React.createElement(MenuPreco, null),
																								React.createElement(
																												"button",
																												{ className: "subHeader__selectMobile__btnMobileSelect__first" },
																												"APLICAR"
																								),
																								React.createElement(
																												"button",
																												{ className: "subHeader__selectMobile__btnMobileSelect" },
																												"LIMPAR"
																								)
																				)
																)
												)
								);
				}
});

var MenuCor = React.createClass({
				displayName: "MenuCor",

				getInitialState: function () {
								return {
												click: true
								};
				},
				dropMenuCor: function () {
								this.setState({
												click: !this.state.click
								});
				},

				render: function () {
								var dropMenuCor = this.state.click ? 'dropmenuBlock' : 'dropmenuNone';
								return React.createElement(
												"div",
												null,
												React.createElement(
																"p",
																{ onClick: this.dropMenuCor },
																"CORES ",
																React.createElement(
																				"span",
																				{ className: "traco" },
																				"-"
																)
												),
												React.createElement(
																"div",
																{ className: dropMenuCor },
																React.createElement(
																				"div",
																				null,
																				React.createElement(
																								"h1",
																								{ className: "cores" },
																								"CORES"
																				),
																				React.createElement(
																								"div",
																								null,
																								React.createElement(
																												"form",
																												{ action: "", method: "", className: "content__Filtro__form" },
																												React.createElement(
																																"ul",
																																null,
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "cores", value: "cores", id: "amarelom" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "amarelom" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"Amarelo"
																																				)
																																),
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "cores", value: "cores", id: "azulm" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "azulm" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"Azul"
																																				)
																																),
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "cores", value: "cores", id: "brancom" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "brancom" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"Branco"
																																				)
																																),
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "cores", value: "cores", id: "cinzam" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "cinzam" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"Cinza"
																																				)
																																),
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "cores", value: "cores", id: "laranjam" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "laranjam" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"Laranja"
																																				)
																																),
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "cores", value: "cores", id: "verdem" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "verdem" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"Verde"
																																				)
																																),
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "cores", value: "cores", id: "vermelhom" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "vermelhom" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"Vermelho"
																																				)
																																),
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "cores", value: "cores", id: "rosam" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "rosam" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"Rosa"
																																				)
																																),
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "cores", value: "cores", id: "vinhom" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "vinhom" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"Vinho"
																																				)
																																)
																												)
																								)
																				)
																)
												)
								);
				}
});
var MenuTamanho = React.createClass({
				displayName: "MenuTamanho",

				getInitialState: function () {
								return {
												click: true
								};
				},
				dropMenuTam: function () {
								this.setState({
												click: !this.state.click
								});
				},

				render: function () {
								var dropMenuTam = this.state.click ? 'dropmenuBlock' : 'dropmenuNone';
								return React.createElement(
												"div",
												null,
												React.createElement(
																"p",
																{ onClick: this.dropMenuTam },
																"TAMANHO ",
																React.createElement(
																				"span",
																				{ className: "traco" },
																				"-"
																)
												),
												React.createElement(
																"div",
																{ className: dropMenuTam },
																React.createElement(ContentTamanhos, null)
												)
								);
				}
});
var MenuPreco = React.createClass({
				displayName: "MenuPreco",

				getInitialState: function () {
								return {
												click: true
								};
				},
				dropMenuPreco: function () {
								this.setState({
												click: !this.state.click
								});
				},

				render: function () {
								var dropMenuPreco = this.state.click ? 'dropmenuBlock' : 'dropmenuNone';
								return React.createElement(
												"div",
												null,
												React.createElement(
																"p",
																{ onClick: this.dropMenuPreco },
																"PRECOS ",
																React.createElement(
																				"span",
																				{ className: "traco" },
																				"-"
																)
												),
												React.createElement(
																"div",
																{ className: dropMenuPreco },
																React.createElement(
																				"div",
																				null,
																				React.createElement(
																								"h1",
																								{ className: "preco" },
																								"FAIXA DE PRE\xC7O"
																				),
																				React.createElement(
																								"div",
																								null,
																								React.createElement(
																												"form",
																												{ action: "", method: "", className: "content__Filtro__form" },
																												React.createElement(
																																"ul",
																																null,
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "precos", value: "preco", id: "de0m" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "de0m" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"de R$ 0 at\xE9 R$ 50"
																																				)
																																),
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "precos", value: "preco", id: "de51m" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "de51m" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"de R$ 51 at\xE9 R$ 150"
																																				)
																																),
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "precos", value: "preco", id: "de151m" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "de151m" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"de R$ 151 at\xE9 R$ 300"
																																				)
																																),
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "precos", value: "preco", id: "de301m" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "de301m" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"de R$ 301 at\xE9 R$ 500"
																																				)
																																),
																																React.createElement(
																																				"li",
																																				null,
																																				React.createElement("input", { type: "checkbox", name: "precos", value: "preco", id: "de501m" }),
																																				React.createElement(
																																								"label",
																																								{ htmlFor: "de501m" },
																																								React.createElement("span", { className: "labelSpan" }),
																																								"a partir de R$ 501"
																																				)
																																)
																												)
																								)
																				)
																)
												)
								);
				}
});

// *************** Componente pesponsável pelo conteudo lateral esquerdo da página (filtro) ************

var ContentFiltro = React.createClass({
				displayName: "ContentFiltro",

				render: function () {
								return React.createElement(
												"div",
												{ className: "content__Filtro" },
												React.createElement(ContentCores, null),
												React.createElement(ContentTamanhos, null),
												React.createElement(ContentPrecos, null)
								);
				}
});

// *************** Componente pesponsável pelo conteudo lateral esquerdo da página (Cores) ************

var ContentCores = React.createClass({
				displayName: "ContentCores",


				getInitialState: function () {
								return {
												click: true
								};
				},

				dropBlock: function () {
								this.setState({
												click: !this.state.click
								});
				},

				render: function () {
								var dropClass = this.state.click ? 'dropdownNone' : 'dropdownBlock';
								var arrowClass = this.state.click ? 'arrow' : 'arrow_down';
								return React.createElement(
												"div",
												null,
												React.createElement(
																"h1",
																{ className: "cores" },
																"CORES"
												),
												React.createElement(
																"div",
																null,
																React.createElement(
																				"form",
																				{ action: "", method: "", className: "content__Filtro__form" },
																				React.createElement(
																								"ul",
																								null,
																								React.createElement(
																												"li",
																												null,
																												React.createElement("input", { type: "checkbox", name: "cores", value: "amarelo", id: "amarelo" }),
																												React.createElement(
																																"label",
																																{ htmlFor: "amarelo" },
																																React.createElement("span", { className: "labelSpan" }),
																																"Amarelo"
																												)
																								),
																								React.createElement(
																												"li",
																												null,
																												React.createElement("input", { type: "checkbox", name: "cores", value: "azul", id: "azul" }),
																												React.createElement(
																																"label",
																																{ htmlFor: "azul" },
																																React.createElement("span", { className: "labelSpan" }),
																																"Azul"
																												)
																								),
																								React.createElement(
																												"li",
																												null,
																												React.createElement("input", { type: "checkbox", name: "cores", value: "branco", id: "branco" }),
																												React.createElement(
																																"label",
																																{ htmlFor: "branco" },
																																React.createElement("span", { className: "labelSpan" }),
																																"Branco"
																												)
																								),
																								React.createElement(
																												"li",
																												null,
																												React.createElement("input", { type: "checkbox", name: "cores", value: "cinza", id: "cinza" }),
																												React.createElement(
																																"label",
																																{ htmlFor: "cinza" },
																																React.createElement("span", { className: "labelSpan" }),
																																"Cinza"
																												)
																								),
																								React.createElement(
																												"li",
																												null,
																												React.createElement("input", { type: "checkbox", name: "cores", value: "laranja", id: "laranja" }),
																												React.createElement(
																																"label",
																																{ htmlFor: "laranja" },
																																React.createElement("span", { className: "labelSpan" }),
																																"Laranja"
																												)
																								)
																				),
																				React.createElement(
																								"div",
																								{ className: "dropdown", className: dropClass },
																								React.createElement(
																												"ul",
																												null,
																												React.createElement(
																																"li",
																																null,
																																React.createElement("input", { type: "checkbox", name: "cores", value: "verde", id: "verde" }),
																																React.createElement(
																																				"label",
																																				{ htmlFor: "verde" },
																																				React.createElement("span", { className: "labelSpan" }),
																																				"Verde"
																																)
																												),
																												React.createElement(
																																"li",
																																null,
																																React.createElement("input", { type: "checkbox", name: "cores", value: "vermelho", id: "vermelho" }),
																																React.createElement(
																																				"label",
																																				{ htmlFor: "vermelho" },
																																				React.createElement("span", { className: "labelSpan" }),
																																				"Vermelho"
																																)
																												),
																												React.createElement(
																																"li",
																																null,
																																React.createElement("input", { type: "checkbox", name: "cores", value: "rosa", id: "rosa" }),
																																React.createElement(
																																				"label",
																																				{ htmlFor: "rosa" },
																																				React.createElement("span", { className: "labelSpan" }),
																																				"Rosa"
																																)
																												),
																												React.createElement(
																																"li",
																																null,
																																React.createElement("input", { type: "checkbox", name: "cores", value: "vinho", id: "vinho" }),
																																React.createElement(
																																				"label",
																																				{ htmlFor: "vinho" },
																																				React.createElement("span", { className: "labelSpan" }),
																																				"Vinho"
																																)
																												)
																								)
																				),
																				React.createElement(
																								"p",
																								{ onClick: this.dropBlock },
																								"Ver todas as cores"
																				),
																				React.createElement(
																								"span",
																								{ className: arrowClass },
																								" \u276F"
																				)
																)
												)
								);
				}
});

// *************** Componente pesponsável pelo conteudo lateral esquerdo da página (Tamanhos) ************

var ContentTamanhos = React.createClass({
				displayName: "ContentTamanhos",

				render: function () {
								return React.createElement(
												"div",
												null,
												React.createElement(
																"h1",
																{ className: "tamanho" },
																"TAMANHOS"
												),
												React.createElement(
																"div",
																{ className: "content__Filtro__box" },
																React.createElement(
																				"a",
																				{ href: "#" },
																				"P"
																),
																React.createElement(
																				"a",
																				{ href: "#" },
																				"M"
																),
																React.createElement(
																				"a",
																				{ href: "#" },
																				"G"
																),
																React.createElement(
																				"a",
																				{ href: "#" },
																				"GG"
																),
																React.createElement(
																				"a",
																				{ href: "#" },
																				"U"
																),
																React.createElement(
																				"a",
																				{ href: "#" },
																				"36"
																),
																React.createElement(
																				"a",
																				{ href: "#" },
																				"38"
																),
																React.createElement(
																				"a",
																				{ href: "#" },
																				"40"
																),
																React.createElement(
																				"a",
																				{ href: "#" },
																				"42"
																),
																React.createElement(
																				"a",
																				{ href: "#" },
																				"44"
																),
																React.createElement(
																				"a",
																				{ href: "#" },
																				"46"
																)
												)
								);
				}
});

// *************** Componente pesponsável pelo conteudo lateral esquerdo da página (Preços) ************

var ContentPrecos = React.createClass({
				displayName: "ContentPrecos",


				render: function () {
								return React.createElement(
												"div",
												null,
												React.createElement(
																"h1",
																{ className: "preco" },
																"FAIXA DE PRE\xC7O"
												),
												React.createElement(
																"div",
																null,
																React.createElement(
																				"form",
																				{ action: "", method: "", className: "content__Filtro__form" },
																				React.createElement(
																								"ul",
																								null,
																								React.createElement(
																												"li",
																												null,
																												React.createElement("input", { type: "checkbox", name: "precos", value: "preco", id: "de0" }),
																												React.createElement(
																																"label",
																																{ htmlFor: "de0" },
																																React.createElement("span", { className: "labelSpan" }),
																																"de R$ 0 at\xE9 R$ 50"
																												)
																								),
																								React.createElement(
																												"li",
																												null,
																												React.createElement("input", { type: "checkbox", name: "precos", value: "preco", id: "de51" }),
																												React.createElement(
																																"label",
																																{ htmlFor: "de51" },
																																React.createElement("span", { className: "labelSpan" }),
																																"de R$ 51 at\xE9 R$ 150"
																												)
																								),
																								React.createElement(
																												"li",
																												null,
																												React.createElement("input", { type: "checkbox", name: "precos", value: "preco", id: "de151" }),
																												React.createElement(
																																"label",
																																{ htmlFor: "de151" },
																																React.createElement("span", { className: "labelSpan" }),
																																"de R$ 151 at\xE9 R$ 300"
																												)
																								),
																								React.createElement(
																												"li",
																												null,
																												React.createElement("input", { type: "checkbox", name: "precos", value: "preco", id: "de301" }),
																												React.createElement(
																																"label",
																																{ htmlFor: "de301" },
																																React.createElement("span", { className: "labelSpan" }),
																																"de R$ 301 at\xE9 R$ 500"
																												)
																								),
																								React.createElement(
																												"li",
																												null,
																												React.createElement("input", { type: "checkbox", name: "precos", value: "preco", id: "de501" }),
																												React.createElement(
																																"label",
																																{ htmlFor: "de501" },
																																React.createElement("span", { className: "labelSpan" }),
																																"a partir de R$ 501"
																												)
																								)
																				)
																)
												)
								);
				}
});

// *************** Componente pesponsável pelo conteudo com os cards da página ************

var ContentCards = React.createClass({
				displayName: "ContentCards",

				render: function () {
								var images = [{ "name": "Layer221", "cor": "laranja", "tamanho": "p", "preco": "398", "data": "", "messenger": "bata bordada" }, { "name": "Layer213", "cor": "verde", "tamanho": "g", "preco": "398", "data": "", "messenger": "chapéu de praia com fivela" }, { "name": "Layer216", "cor": "azul", "tamanho": "g", "preco": "398", "data": "", "messenger": "vestido texturizado", "promo": "R$ 189" }, { "name": "Layer217", "cor": "rosa", "tamanho": "p", "preco": "398", "data": "", "messenger": "bata bordada" }, { "name": "Layer208", "cor": "branco", "tamanho": "p", "preco": "398", "data": "", "messenger": "chapéu de praia com fivela" }, { "name": "Layer218", "cor": "branco", "tamanho": "m", "preco": "398", "data": "", "messenger": "vestido texturizado" }, { "name": "Layer210", "cor": "azul", "tamanho": "m", "preco": "398", "data": "", "messenger": "bata bordada" }, { "name": "Layer219", "cor": "laranja", "tamanho": "m", "preco": "398", "data": "", "messenger": "chapéu de praia com fivela" }, { "name": "Layer220", "cor": "branco", "tamanho": "p", "preco": "398", "data": "", "messenger": "vestido texturizado" }];
								var imagesList = images.map(function (image) {
												return React.createElement(
																"li",
																null,
																React.createElement(
																				"a",
																				{ href: "producao.html" },
																				React.createElement(
																								"div",
																								null,
																								React.createElement("img", { src: "images/" + image.name + ".png", alt: image.name, className: "content__Card__img" })
																				),
																				React.createElement(
																								"div",
																								{ className: "content__Card__block" },
																								React.createElement(
																												"p",
																												{ className: "content__Card__block__title" },
																												image.messenger
																								),
																								React.createElement(
																												"div",
																												{ className: "content__Card__block__preco" },
																												React.createElement(
																																"p",
																																{ className: "content__Card__block__preco__total" },
																																React.createElement(
																																				"span",
																																				{ className: "content__Card__block__promo" },
																																				" ",
																																				image.promo
																																),
																																" R$  ",
																																image.preco
																												),
																												React.createElement(
																																"p",
																																{ className: "content__Card__block__preco__parcela" },
																																"at\xE9 5x de R$",
																																image.preco / 5
																												)
																								),
																								React.createElement("img", { src: "../../images/car.png", alt: "car", onClick: "setCar()" })
																				)
																)
												);
								});

								return React.createElement(
												"div",
												{ className: "content__Card" },
												React.createElement(
																"ul",
																null,
																imagesList
												),
												React.createElement(
																"div",
																{ className: "content__Card__mais" },
																React.createElement(
																				"a",
																				{ href: "producao.html" },
																				"CARREGAR MAIS"
																)
												)
								);
				}
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));