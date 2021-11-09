window.addEventListener('DOMContentLoaded', function() {



var swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let tab = function () {
  let tabNav = document.querySelectorAll('.how-container__link-btn'),
    tabContent = document.querySelectorAll('.tab'),
      tabName;

  tabNav.forEach(item=> {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
    tabNav.forEach(item=> {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name');
    selectTabContent(tabName);
  };

  function selectTabContent(tabName) {
    tabContent.forEach(item=> {
      item.classList.contains(tabName)? item.classList.add('is-active'): item.classList.remove('is-active');
    });

  }

};

  tab();

  $( function() {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: 'content',
      text: '.faq__text'
    });
    // $('#accordion').accordion({
    //   heightStyle: 'content'
    // });
  });


//burger
  const burgerBtn = document.querySelector('.burger');
  const menuClose = document.querySelector('.menu-close');
  const menuBurger = document.querySelector('.nav');

  burgerBtn.addEventListener('click', () => {
    menuBurger.classList.add('burger-active');

  });

  menuClose.addEventListener('click', () => {
    menuBurger.classList.remove('burger-active');

  })
})
