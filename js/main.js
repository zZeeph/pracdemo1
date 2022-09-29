'use strict';
{

  const nav = document.querySelector('header');
  const btn = document.querySelector('.toggle-btn');
  const mask = document.querySelector('.mask');
 
  btn.onclick = () => {
    nav.classList.toggle('open');
  }

  mask.onclick = () => {
    nav.classList.toggle('open');
  }
  


  function callback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
    });
  }

  const observer = new IntersectionObserver(callback, {
    threshold:0.5,
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });

}
// jquery

$(function() {
  $('.slider').slick({
    centerMode: true,
    arrows: false,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1
        }
      }
    ]
  });
});
