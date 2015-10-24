jQuery(document).ready(function($)
{
	console.log("Jquery Ready");

	startMenu();
	startSliders();
	startResponsiveActions();



	function startMenu(){

  		$("#nav-mobile").mmenu({
		    "classes": "mm-light",
		    classNames: {
		        fixedElements: {
		           fixedTop: 	"header",
		           fixedBottom: "footer"
		        },
		        toggles: {
		           toggle: "a"
		        }
		    },
		    "labels": true,
		    offCanvas: {
		      position  : "left",
		      zposition : "front"
		    }
		});


  		$("#nav-mobile")
	  	.mmenu()
	    .on( "opening.mm", function() {
	    	$('.bt-mobile-menu').removeClass('open');
	      	$('.bt-mobile-menu').addClass('close');
	     	
	     	//Menu Abriu
	      	$('.bt-mobile-menu.close').bind('click', function() { $('#nav-mobile').trigger('close'); });
	    })
	    .on( "closing.mm", function() {
	    	$('.bt-mobile-menu').removeClass('close');
	      	$('.bt-mobile-menu').addClass('open');
	      	//Menu Fechou
		});

	    
	}
	

	function startSliders(){

		$('#full-width-slider').royalSlider({
        	imageScaleMode : 'fill'
      	});
      	//$('#full-width-slider .rsArrow').wrapAll('<div class="container">')
	}

	function startResponsiveActions(){

		scrollMenu();
		function scrollMenu()
		{
			var _scrollY = $(window).scrollTop();
			var limit = 168;

			$(window).scroll(function() 
			{
				var offset = 225;
				var _scrollY = $(window).scrollTop();
				var limit = 168;

				if(_scrollY  >= limit)
					$("#h").addClass('fixed-header');
				else
					$("#h").removeClass('fixed-header');
				
			})
		}

	}

});