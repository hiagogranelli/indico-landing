var target = Array.prototype.slice.call(document.querySelectorAll("[data-animation]"), 0);
var animationClass = 'animate';

if (window.innerWidth <= 576) {
  var animeScrollMobile = function animeScrollMobile() {
    var windowTop = window.pageYOffset + window.innerHeight * 3 / 5;
    target.forEach(function (element) {
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      }
    });
  };

  animeScrollMobile();

  if (target.length) {
    window.addEventListener('scroll', animeScrollMobile);
  }
}

if (window.innerWidth >= 577) {
  var animeScrollDesktop = function animeScrollDesktop() {
    var windowTop = window.pageYOffset;
    target.forEach(function (element) {
      if (windowTop > element.offsetTop - window.innerHeight / 2.5) {
        element.classList.add(animationClass);
      }
    });
  };

  animeScrollDesktop();

  if (target.length) {
    window.addEventListener('scroll', animeScrollDesktop);
  }
}

//ENVIAR FORMULARIO

document.querySelector('#submit').addEventListener('click', function() {
  $.ajax({url:'/teste', type:'post', 
  data: {
    nome: document.querySelector('#nome').value,
    telefone: document.querySelector('#telefone').value,
    email: document.querySelector('#email').value,
  },
  success: function(result){
    console.log(result)
  }
})
})
console.log(document.querySelector('#submit'))


