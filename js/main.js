$(function () {
  $(document).ready(function () {
    $(".menu__link, .header__link, .logo").on("click", function (e) {
      e.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1000);
    });

  });
  
  $('.menu__burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__burger').on('click', function () {
    $('.menu__burger').toggleClass('active');
  });

  $('.menu__link').on('click', function () {
    $('.menu__list').removeClass('menu__list--active');
    $('.menu__burger').removeClass('active');
  });

  $('.logo').on('click', function () {
    $('.menu__list').removeClass('menu__list--active');
  });

  const menu = document.querySelector('.menu');
  const header = document.querySelector('.header');
  const menuHeight = menu.offsetHeight;
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance >= menuHeight) {
      menu.classList.add('menu--fixed');
      header.style.marginTop = '${headerHeight}px';
    } else {
      menu.classList.remove('menu--fixed');
      header.style.marginTop = null;
    }
  })


  var mixer = mixitup('.stuff__content');
});