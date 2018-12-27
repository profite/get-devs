			jQuery(document).ready(function(){	
              $('.webdoor').flexslider({
      				    animation: "fade",
      				    controls:true,
      				    page:true,
      				    prevText: "",
      				    nextText: ""
      				});
              $("#logo").click(function(){
                  if ($( window).width() < 991) {
                    $("#mobileMenu").toggleClass("on");
                    $("#logo").toggleClass("on");
                  }
              });
              $(window).on('resize', function () {
                  if ($( window).width() < 991) {
                    $("#mobileMenu,#logo").removeClass("on");
                  }
              });
	            $.ajax({
	                type:'post',
	                url:'store_items.php',
	                data:{
	                  total_cart_items:"totalitems"
	                },
	                success:function(response) {
	                  document.getElementById("total_items").value=response;
	                }
	            });
              var lastScrollTop = 0;

              $( window).scroll(function(event){
                 var st = $(this).scrollTop();
                 if (st > lastScrollTop){
                    $("#mobileMenu").removeClass("on");
                    $("#logo").removeClass("on");
                 }
                 lastScrollTop = st;
              }); 
			});	
			function cart(id)
            {
              var ele=document.getElementById(id);
              var img_src=ele.getElementsByTagName("img")[0].src;
              var name=document.getElementById(id+"_name").value;
              var price=document.getElementById(id+"_price").value;
            
              $.ajax({
                type:'post',
                url:'store_items.php',
                data:{
                  item_src:img_src,
                  item_name:name,
                  item_price:price
                },
                success:function(response) {
                  document.getElementById("total_items").value=response;
                }
              });
            
            }

            function show_cart()
            {
              $.ajax({
              type:'post',
              url:'store_items.php',
              data:{
                showcart:"cart"
              },
              success:function(response) {
                document.getElementById("carrinho").innerHTML=response;
                // 
                $("#carrinho").toggleClass("showCart");
                $("#cart_button").toggleClass("on");
              }
             });

            }