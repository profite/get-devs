<?php 
    include("head.php");  
?>
    <body class="pg-home"> 
		<div id="wrap">
            <?php include("header.php"); ?>
			<main id="main">
                <div id="webdoor" class="b">
					<div class="webdoor">
					  <ul class="slides">
					    <li>
					   		<div class="slideContent">
					   			<div>
					   				<div>
					   					<div>
					   						<h2 class="b">Coleção</h2>
					   						<h1 class="b">Lorem ipsum dolor sit</h1>
					   						<a href="#" class="b btn" title="Confira">Conferir</a>
					   					</div>
					   				</div>
					   			</div>
					   		</div>
					      	<img class="b" alt="Lorem ipsum dolor sit amet." src="images/webdoor/banner1.jpg" />
					    </li>
					    <li>
					   		<div class="slideContent">
					   			<div>
					   				<div>
					   					<div>
					   						<h2 class="b">Coleção</h2>
					   						<h1 class="b">Lorem ipsum dolor sit</h1>
					   						<a href="#" class="b btn" title="Confira">Conferir</a>
					   					</div>
					   				</div>
					   			</div>
					   		</div>
					      	<img class="b" alt="Lorem ipsum dolor sit amet." src="images/webdoor/banner1.jpg" />
					    </li>
					  </ul>
					</div>                	
                </div>
                <div id="banners" class="b">
                	<div class="wrap">
                		<ul>
                			<li>
                				<div>
                					<div>
                						<div>
                							<h1 class="b">Lorem ipsum.</h1>
                						</div>
                					</div>
                				</div>
                				<img class="b" src="images/banners/banner1.jpg" alt="">
                			</li>
                			<li>
                				<div>
                					<div>
                						<div>
                							<h1 class="b">Lorem ipsum.</h1>
                						</div>
                					</div>
                				</div>
                				<img class="b" src="images/banners/banner2.jpg" alt="">
                			</li>
                			<li>
                				<div>
                					<div>
                						<div>
                							<h1 class="b">Lorem ipsum.</h1>
                						</div>
                					</div>
                				</div>
                				<img class="b" src="images/banners/banner3.jpg" alt="">
                			</li>
                		</ul>
                	</div>
                </div>
                <div class="wrap">
                    <div id="products" class="b">
                        <div>
                            <h1 class="mega-title">Mais Comprados</h1>
                            <ul id="mais-comprados" class="vitrine b">  
                            </ul>
                            <script id="productTemplate" type="text/x-jquery-tmpl">
                                <li class="items" id="item${id}">
                                    <img src="{{if imagem != ""}} ${imagem} {{else}}images/no_image.png{{/if}}" alt="${nome}" /> 
                                    <ul class="rating rating-${rating}">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <div class="product-info">
                                        <h1 class="b">${nome}</h1>
                                        <p class="product-preco">  {{if precoEspecial != ""}} <span class="old">R$ ${preco}</span><span class="special"> R$ ${precoEspecial}</span> {{else}}  R$ ${preco} {{/if}} </p>  
                                        {{if parcela != ""}} <p class="product-extra">${parcela}</p> {{/if}}  
                                    </div>
                                    <button class="btn2 b pe-7s-cart" onclick="cart('item${id}')">Adicionar ao Carrinho</button>
                                    <input type="hidden" id="item${id}_name" value="${nome}">
                                    <input type="hidden" id="item${id}_price" value="{{if precoEspecial != ""}}${precoEspecial}{{else}}${preco}{{/if}}">
                                </li>
                            </script>
                            <script type="text/javascript">
                                $(document).ready(function(){
                                    $.getJSON('produtos.json', function(data){
                                        $('#productTemplate').template('myTemplate');
                                        $.tmpl('myTemplate', data.produtos).appendTo('#mais-comprados');
                                    });
                                });
                            </script>
                        </div>
                    </div>
                    <div id="newsletter" class="b">
                        <div>
                            <img src="images/newsletter.png" alt="Cadastre-se e ganhe 5% de desconto na sua primeira compra">
                            <div>
                                <form action="" name="" method="GET">
                                    <div>
                                        <label for="nome" class="b">Nome</label>
                                        <input name="nome" type="text" required="required" />
                                    </div>
                                    <div>
                                        <label for="email" class="b">E-mail</label>
                                        <input name="email" type="email" required="required" />
                                    </div>
                                    <div>
                                        <button class="submit b btn2">Cadastrar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
			</main>
<?php include("footer.php"); ?>