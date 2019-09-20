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
		document.getElementById("registerhead").innerHTML = "Request A Free Demo";
		document.getElementById('formtitle').value="Request A Free Demo";
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
    /*Function for creating unique access token */
  	function uuidv4() {
    	  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    	    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    	  )
    }
    $('#contactSubmit').click(function(e){
    	 var first_name = $('#contactName').val();
       var email = $('#contactEmail').val();
       var subject = $('#contactSubject').val();
       var message = $('#contactMessage').val();
	     var o = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
       var uid = uuidv4();
	     if (first_name == '') {
          $('#name').css('display', 'block');
              return  false;
         }
         else {
          $('#name').css('display', 'none');
         }
         if (email == '' || email.search(o) == -1) {
          $('#email').css('display', 'block');
            return  false;
         }
         else {
          $('#email').css('display', 'none');
         }
          var form = new FormData();
          form.append("grant_type", "client_credentials");
          form.append("client_id", "c395a3fe-0638-3616-d4dc-5d7f5d7729be");
          form.append("client_secret", "K^&OOv#nvNTw");
          var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://crm.netspective.com/Api/access_token",
            "method": "POST",
            "headers": {
              "Accept": "application/vnd.api+json"
            },
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
          }
    $.ajax(settings).done(function (response) {
      var obj = $.parseJSON(response);
      var access_token= obj.access_token;
      var settings = {
          "url": "https://crm.netspective.com/Api/V8/module",
          "method": "POST",
          "headers": {
            "Accept": "application/vnd.api+json",
            "Authorization": "Bearer "+access_token+"",
            "Content-Type": "application/json"
           },
          "processData": false,
          "data": "{\r\n  \"data\": {\r\n    \"type\": \"Contacts\",\r\n    \"id\": \""+uid+ "\",\r\n    \"attributes\": {\r\n     \"first_name\":\""+first_name+"\",\r\n     \"email1\":\""+email+"\"\r\n,\r\n     \"description\":\""+message+"\"\r\n,\r\n     \"lead_source\":\"Web Site\"\r\n,\r\n     \"title\":\""+subject+"\"\r\n   }\r\n  }\r\n}\r\n"
        }
      $.ajax(settings).done(function (response) {
          var contactid = response.data.id;
          var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://crm.netspective.com/Api/V8/module/Accounts/be63b2af-97c4-d409-4b20-5d7f5cb06641/relationships",
            "method": "POST",
            "headers": {
              "Accept": "application/vnd.api+json",
              "Authorization": "Bearer "+access_token+"",
              "Content-Type": "application/json"
            },
            "processData": false,
            "data": "{  \r\n   \"data\":{  \r\n         \"type\":\"Contacts\",\r\n         \"id\":\""+contactid+"\"\r\n\t    \r\n      }\r\n}"
          }
          $.ajax(settings).done(function (response) {
            if(response.meta.message != ""){
                var url="https://formspree.io/Gunjan.siroya@netspective.com"; 
                $('#quickcontact').attr('action', url);
                $('#quickcontact').submit();
              }
          });

        }); 

    });

  });
  
});
