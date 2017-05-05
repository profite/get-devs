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
                React.createElement("img", { className: "header__bag", src: "images/bag.png" })
            )
        );
    }
});

var SubHeader = React.createClass({
    displayName: "SubHeader",

    render: function () {
        return React.createElement(
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
                null,
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
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
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
                        "Ver todas as cores  ",
                        React.createElement(
                            "span",
                            { className: "arrow" },
                            "\u276F"
                        )
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
                null,
                "TAMANHOS"
            ),
            React.createElement(
                "div",
                { className: "boxTamanhos" },
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
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "PRE\xC7OS"
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
                            React.createElement("input", { type: "checkbox", name: "precos", value: "de0", id: "de0" }),
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
                            React.createElement("input", { type: "checkbox", name: "precos", value: "de51", id: "de51" }),
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
                            React.createElement("input", { type: "checkbox", name: "precos", value: "de151", id: "de151" }),
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
                            React.createElement("input", { type: "checkbox", name: "precos", value: "de301", id: "de301" }),
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
                            React.createElement("input", { type: "checkbox", name: "precos", value: "de501", id: "de501" }),
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
        var images = [{ "name": "Layer208", "cor": "branco", "tamanho": "p", "preco": "398", "data": "" }, { "name": "Layer210", "cor": "azul", "tamanho": "m", "preco": "398", "data": "" }, { "name": "Layer213", "cor": "verde", "tamanho": "g", "preco": "398", "data": "" }, { "name": "Layer216", "cor": "azul", "tamanho": "g", "preco": "398", "data": "" }, { "name": "Layer217", "cor": "rosa", "tamanho": "p", "preco": "398", "data": "" }, { "name": "Layer218", "cor": "branco", "tamanho": "m", "preco": "398", "data": "" }, { "name": "Layer219", "cor": "laranja", "tamanho": "m", "preco": "398", "data": "" }, { "name": "Layer220", "cor": "branco", "tamanho": "p", "preco": "398", "data": "" }, { "name": "Layer221", "cor": "laranja", "tamanho": "p", "preco": "398", "data": "" }];
        var imagesList = images.map(function (image) {
            return React.createElement(
                "li",
                null,
                React.createElement("img", { src: "images/" + image.name + ".png", alt: image.name }),
                React.createElement(
                    "p",
                    null,
                    image.cor
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
            )
        );
    }
});

ReactDOM.render(React.createElement(Page, null), document.getElementById('page'));