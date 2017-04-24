$.getJSON("assets/js/produtos.json", function (data) {
    var items = [];
    $.each(data, function (id, title) {
        items.push('<li class="grid-20 mobile-grid-50 main-products-list-items">\n\
                        <img src="' + id + '" title="' + title + '" >\n\
                    </li>');
    });

    $("<ul/>", {
        "class": "main-products-list",
        html: items.join("")
    }).appendTo("#main-products");
});