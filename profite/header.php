              <?php
                    session_start();
              ?>
               <ul id="mobileMenu" class="b">
                    <li><a href="" title="Novidades">Novidades</a></li>
                    <li><a href="" title="Masculino">Masculino</a></li>
                    <li><a href="" title="Feminino">Feminino</a></li>
                    <li><a href="" title="Marcas">Marcas</a></li>
                    <li><a href="" title="Ofertas">Ofertas</a></li>   
               </ul>
               <header id="header" class="b">
                    <div class="header">
                         <div class="wrap">
                              <div>
                                  <form action="" name="" method="">
                                        <button class="pe-7s pe-7s-search"><!-- --></button>
                                        <input type="text" />
                                   </form>
                              </div>
                              <div>
                                   <a class="b" href="javascript:void(0)" id="logo" title="Profite - E-commerce Solutions"><img class="logo" src="images/logo.png" alt="Profite - E-commerce Solutions"></a>
                              </div>
                              <div class="cart">
                                   <div>
                                        <ul>
                                             <li><a href="" title="Login">Login</a></li>
                                             <li><a href="" title="Cadastre-se">Cadastre-se</a></li>
                                        </ul>
                                   </div>
                                   <div>
                                        <div><span class="pe-7s-cart" id="cart_button" onclick="show_cart();"><input class="cart-qt" type="button" id="total_items" value="" /></span> <p class="cart-preco">R$ <?php echo $_SESSION['total']; ?></p></div>
                                        <div id="carrinho">
                                             <div></div>
                                        </div>
                                   </div>
                              </div>
                         </div>     
                    </div>
                    <nav class="navgation pe-7s-menu">
                         <div class="wrap">
                              <ul>
                                   <li><a href="" title="Novidades">Novidades</a></li>
                                   <li><a href="" title="Masculino">Masculino</a></li>
                                   <li><a href="" title="Feminino">Feminino</a></li>
                                   <li><a href="" title="Marcas">Marcas</a></li>
                                   <li><a href="" title="Ofertas">Ofertas</a></li> 
                              </ul>
                         </div>
                    </nav>
			</header>
