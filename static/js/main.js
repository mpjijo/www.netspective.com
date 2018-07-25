$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // menu hover
    function is_touch_device() {
        return 'ontouchstart' in window        // works on most browsers 
        || navigator.maxTouchPoints;       // works on IE10/11 and Surface
    };

    if(!is_touch_device() && $('.navbar-toggle:hidden')){
      $('.dropdown-menu', this).css('margin-top',0);
      $('.dropdown').hover(function(){ 
          $('.dropdown-toggle', this).trigger('click');
          //uncomment below to make the parent item clickable
          $('.dropdown-toggle', this).toggleClass("disabled"); 
      });			
    } 

    $(".scroll-to").on('click', function(e) {
	    e.preventDefault();
	    var target = $(this).attr('href');
	    $('html, body').animate({
	       scrollTop: ($(target).offset().top)
	    }, 2000);
    });
    
    $(".scroll-top").on('click', function(e) {
    	e.preventDefault();
    	jQuery('html,body').animate({scrollTop:0},2000);
    });

    $(document).scroll(function() {
	  var y = $(this).scrollTop();
	  if (y > 800) {
	    $('.scroll-top').fadeIn();
	  } else {
	    $('.scroll-top').fadeOut();
	  }
	});

	$('.-accordion').asAccordion({
	    namespace: '-accordion',
	    skin: null,

	    // breakpoint for mobile devices. WIP
	    mobileBreakpoint: 768,

	    // initial index panel
	    initialIndex: 0,

	    // CSS3 easing effects.
	    easing: 'ease-in-out',

	    // animation speed.
	    speed: 500,

	    // vertical or horizontal
	    direction: 'horizontal',

	    // jQuery mouse events. click, mousehover, etc.
	    event: 'click',

	    // multiple instance
	    multiple: false

    });
	var url = window.location.search;
	url = url.replace("?q=", ''); 
	if(url == '1'){
		document.getElementById("registerhead").innerHTML = "Get a Free Consultation";
		document.getElementById('formtitle').value="Get a Free Consultation";
	}
	else if(url == '2'){
		document.getElementById("registerhead").innerHTML = "Get a Free Consultation Today";
		document.getElementById('formtitle').value ="Get a Free Consultation Today";
	}
	else if(url == '3'){
		document.getElementById("registerhead").innerHTML = "Get in Touch With Our Experts";
		document.getElementById('formtitle').value ="Get in Touch With Our Experts";
	}
	else if(url == '4'){
		document.getElementById("registerhead").innerHTML = "Get a Free Basic Risk Assessment Today";
		document.getElementById('formtitle').value ="Get a Free Basic Risk Assessment Today";
	}
    $('#signup').on('click', function(e){
    	
         var first_name = $('#firstname').val();
         var email = $('#emailaddress').val();
	     var o = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	         if (first_name == '') {
				$('#name').css('display', 'block');
	      		return  false;
	      		e.preventDefault();
	    	 }
	    	 if (email == '' || email.search(o) == -1 ) {
	      		$('#email').css('display', 'block');
	      		return  false;
	      		 e.preventDefault();
	    	 }
	    	 if(first_name != ''){
	          $('#name').css('display', 'none');
	          return  true;  
			 }
			 if(email != ''){
	          $('#email').css('display', 'none');
	          return  true;  
 		}

    });
    $('#resetform').on('click', function(e){
    	 $('#firstname').val('');
    	 $('#emailaddress').val('');
    	 $('#job_title').val('');
    	 $('#organization').val('');
    	 $('#address').val('');
    	 $('#country').val('');
    	 $('#postalcode').val('');
    	 $('#phonenumber').val('');
    	 $('#remarks').val('');
    	 $('#name').css('display', 'none');
    	 $('#email').css('display', 'none');
    	 e.preventDefault();
    });
  

});
