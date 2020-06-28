$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close'),
      modalSuccess = $ ('.modal__success'),
      successCloseBtn = $('.modal__success__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  successCloseBtn.on('click', function () {
    modalSuccess.toggleClass('modal__success--visible');
  });



  //плавная прокрутка вверх
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      $('#upbutton').fadeIn();
    } else {
      $('#upbutton').fadeOut();
    }
  });

  $('#upbutton').click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
  });

  //валидация формы модального окна
  $('.modal__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10
      },
      // правило-объект
      userMessage: {
        required: true,
        minlength: 10
      }
    },
    errorElement: "em",
    errorClass: "invalid",
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв"
      }, 
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Введите телефон полностью" 
      },
      userMessage: {
        required: "Напишите что-нибудь",
        minlength: "Напишите больше"
      },

    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "telegram.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          $('.modal__success').addClass('modal__success--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса' + response);
        }
      });
    }  
  });
  $('.feedback__form').validate({
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10
      },
      // правило-объект
      userMessage: {
        required: true,
        minlength: 10
      }
    },
    errorElement: "ef",
    errorClass: "invalid",
    //сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее 15 букв"
      }, 
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Введите телефон полностью" 
      },
      userMessage: {
        required: "Напишите что-нибудь",
        minlength: "Напишите больше"
      },

    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "telegram.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          $('.modal__success').addClass('modal__success--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса' + response);
        }
      });
    }  
  });

 
  // маска для телефона
  $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7(000)000-00-00"});

});


// прокрутка якорных ссылок
$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
  $('.js-nav-menu').removeClass('navigation-menu--open');
});

// бургер-меню
(function($) {
  $('.js-nav-menu-toggle').on('click', function() {
    $(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
  });
  
  $('html').on('click', function(e) {
    if(!$(e.target).closest('.js-nav-menu').length &&
      ($('.js-nav-menu').hasClass('navigation-menu--open'))) {
        $('.js-nav-menu').removeClass('navigation-menu--open');
    }
  });
})(jQuery);

// появление бургер-меню при скролле
var scrolled;

window.onscroll = function() {
  if( window.innerWidth >= 995 ){
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 50){
      $(".js-nav-menu").css({"display": "table"})
    }
    if(50 > scrolled){
        $(".js-nav-menu").css({"display": "none"})         
    }
  } else {
      $(".js-nav-menu").css({"display": "table"})
  }
    
}

;(function() {
  // Initialize
  var bLazy = new Blazy();
})();

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



