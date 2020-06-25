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


  new WOW().init();

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
      userEmail: {
        required: true,
        email: true
      },
      // валидация чекбокса
      policyCheckbox: {
        required: true
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
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      },
      policyCheckbox: "Согласитесь с обработкой данных"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
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

  // валидация формы онлайн-контроль
  $(".control__form").validate({
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
      // валидация чекбокса
      policyCheckbox: {
        required: true
      }
    },
    errorElement: "ec",
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
      policyCheckbox: "Согласитесь с обработкой данных"
    },  
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          $('.modal__success').addClass('modal__success--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса' + response);
        }
      });
    }
  });

  $("#footerForm").validate({
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
      userQuestion: {
        required: true,
        minlength: 10
      },
      // валидация чекбокса
      policyCheckbox: {
        required: true
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
      userQuestion: {
        required: "Хочешь спросить - спрашивай",
        minlength: "Напиши больше" 
      },
      policyCheckbox: "Согласитесь с обработкой данных"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          $('.modal__success').addClass('modal__success--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса' + response);
        }
      });
    }  
  });

  // маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона:"});
  //видеоплеер
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay,
      }
    });
  })

});


// прокрутка якорных ссылок
$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
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
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 50){
        $(".js-nav-menu").css({"display": "table"})
    }
    if(50 > scrolled){
        $(".js-nav-menu").css({"display": "none"})         
    }
}

;(function() {
  // Initialize
  var bLazy = new Blazy();
})();



