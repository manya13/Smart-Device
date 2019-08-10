'use strict';

var margin = -30;
  $("a").click(function() {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top+margin+ "px" 
  }, {
    duration: 1000,
    easing: "swing"
  });
    return false;
  });

  $("#phone").mask("+7(999)999-99-99");


  $(function () {
    $('.main-nav__cb').magnificPopup({
      type: 'inline',
    });
    $("#phone-cb").mask("+7(999)999-99-99");
    $(document).on('click', '.consultation__close', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
    });
  });

  $('.footer__top-nav nav h3 span').click(function() {
    if ($('.footer__top-nav ul').css('display') === "block") {
      $('.footer__top-nav nav h3 span').text('+');
    } else if ($('.footer__top-nav ul').css('display') === "none") {
      $('.footer__top-nav nav h3 span').text('-');
    }
    $('.footer__top-nav ul').slideToggle( "slow", function() {
    });
  });

  $('.footer__top-nav-contacts h3 span').click(function() {
    if ($('.footer__top-nav-contacts div').css('display') === "block") {
      $('.footer__top-nav-contacts h3 span').text('+');
    } else if ($('.footer__top-nav-contacts div').css('display') === "none") {
      $('.footer__top-nav-contacts h3 span').text('-');
    }
    $('.footer__top-nav-contacts div').slideToggle( "slow", function() {
    });
  });
  


  