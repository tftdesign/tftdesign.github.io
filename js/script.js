$(document).ready(function () {

  function checkVisability() {
    var row = $('.inview-el');
    var sixed_step_el = $('.six_el');
    var why_bubble = $('.why-us .center-el');
    // var we_do = $('.we-do .illus');

    row.each(function(){
      if ($(this).inView("both")) {
        $(this).addClass("visible").delay(1000).queue(function () {
          $(this).addClass("animate");
        });
      }
    });
    sixed_step_el.each(function() {
      if ($(this).inView("both")) {
        $(".steps-wrap").addClass("show-line");
      }
    });
    why_bubble.each(function() {
      if ($(this).inView("both")) {
        $(".bubble-blank").addClass("animate");
      }
    });

    // we_do.each(function() {
    //   if ($(this).inView("both")) {
    //     $(this).delay(4000).removeClass('centered');
    //   }
    // });
  }

  checkVisability();

  $(window).scroll(function() {
    checkVisability();
  });




  // Lottie Animations

  var wrapper = document.getElementById('hero-illus');
  var service_anim = document.getElementById('service_illus');
  var process_anim = document.getElementById('process_illus');
  var we_do_anim = document.getElementById('we_do_illus');
  
  var animData = {
    wrapper: wrapper,
    animType: 'svg',
    loop: false,
    speed: 0.6,
    prerender: true,
    autoplay: true,
    path: '../json/hero.json'
  };

  var anim = bodymovin.loadAnimation(animData);

  anim.addEventListener('complete', function(){  
    anim.playSegments([347, 525], true);
  });



  var animData2 = {
    wrapper: service_anim,
    animType: 'svg',
    loop: false,
    speed: 0.6,
    prerender: true,
    autoplay: false,
    path: '../json/service.json'
  };

  var isActive = false;
  $(window).scroll(function() {
    if ($(this).scrollTop() > 6500){
      if(!isActive ){
          bodymovin.loadAnimation(animData2).play();
          isActive = true;
      }
    }
  });


  var animData4 = {
    wrapper: we_do_anim,
    animType: 'svg',
    loop: false,
    speed: 0.8,
    prerender: true,
    autoplay: false,
    path: '../json/we-do.json'
  };
  var isActive3 = false;
  var anims4 = bodymovin.loadAnimation(animData4);
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000){
      if(!isActive3 ){
        anims4.play();
          // var anims = bodymovin.loadAnimation(animData3);
          
          // anims.addEventListener('complete', function(){  
          //   anims.playSegments([159, 299], true);
          // })
          isActive3 = true;
      }
    }
  });
  anims4.addEventListener('complete', function(){  
    anims4.playSegments([62, 162], true);
  });


  var animData3 = {
    wrapper: process_anim,
    animType: 'svg',
    loop: false,
    speed: 0.6,
    prerender: true,
    autoplay: false,
    path: '../json/process.json'
  };
  var isActive2 = false;
  var anims = bodymovin.loadAnimation(animData3);
  $(window).scroll(function() {
    if ($(this).scrollTop() > 2800){
      if(!isActive2 ){
        anims.play();
          // var anims = bodymovin.loadAnimation(animData3);
          
          // anims.addEventListener('complete', function(){  
          //   anims.playSegments([159, 299], true);
          // })
          isActive2 = true;
      }
    }
  });
  anims.addEventListener('complete', function(){  
    anims.playSegments([142, 192], true);
  })



  // // When the animation is loaded run our firstLoop function 
  // anim.addEventListener('DOMLoaded',firstLoop);
  // // Create our playback functions
  // function firstLoop() {
  //     anim.playSegments([0,200], true);
  // };
  // function secondLoop() {
  //     anim.playSegments([200,500], true);
  // };
  // // Listen for a click event
  // container.addEventListener('click', function(event) {
  //     anim.addEventListener( 'loopComplete', secondLoop);
  // });



  window.onload = function() {
    lax.setup() // init
  
    const updateLax = () => {
      lax.update(window.scrollY)
      window.requestAnimationFrame(updateLax)
    }
  
    window.requestAnimationFrame(updateLax)
  }


  // Clickable Vertical Tabs

  $(".clickable-tabs .item").click(function () {
    var aherf = $(this).attr("rel");
    var targetEl = $(this).parents('.clickable-tabs').siblings('.clickable-tab-content-wrapper').find('.clickable-tab-content');
    targetEl.removeClass("active");
    targetEl.each(function () {
      if ($(this).attr('id') === aherf) {
        $(this).toggleClass("active");
      }
    });
    $(this).parents(".clickable-tabs").find('.item').removeClass('active');
    $(this).addClass('active');

  });


  // Hoverable Vertical Tabs

  $(".hoverable-tabs .item").hover(function () {
    var aherf = $(this).attr("rel");
    var targetEl = $(this).parents('.hoverable-tabs').siblings('.hoverable-content-wrapper').find('.hoverable-tab-content');
    targetEl.removeClass("active");
    targetEl.each(function () {
      if ($(this).attr('id') === aherf) {
        $(this).toggleClass("active");
      }
    });
    $(this).parents(".hoverable-tabs").find('.item').removeClass('active');
    $(this).addClass('active');
  });


  // Popup form toasters

  $(".popup-form-trigger").click(function () {
    $('body').addClass('pop-form-open');
    var aherf = $(this).attr("rel");
    var targetEl = $(document).find('.fixed-form-wrapper');
    targetEl.removeClass("active");
    targetEl.each(function () {
      if ($(this).attr('id') === aherf) {
        $(this).addClass("active");
      }
    });
  });

  $(".popup-close").click(function () {
    $('body').removeClass('pop-form-open');
    $('.fixed-form-wrapper,.contact-popup-wrap').removeClass('active');
  });


  /* Fixed Navigation */
  if ($(window).width() > 768) {
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = 100;
    // var navbarHeight = $('.main-header').outerHeight();


    $(window).bind('scroll', function () {
        didScroll = true;
        if ($(window).scrollTop() > navbarHeight) {
            $('body').addClass('fixednav');
        } else {
            $('body').removeClass('fixednav');
        }
    });

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 120);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('.main-header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.main-header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
  }



});



// Cache selectors
var lastId,
  topMenu = $("#sticky-tabs"),
  topMenuHeight = topMenu.outerHeight() + 0,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });



// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 600);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }
});

$(function () {
	var filterList = {
		init: function () {
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixItUp({
				selectors: {
  			  target: '.portfolio_item',
  			  filter: '.p_filter'	
  		  	},
  		  	load: {
    		  filter: '.web_site, .mobile_app, .branding' // show app tab on first load
    		}     
			});								
		}
	};
	// Run the show!
	filterList.init();
  });	
  