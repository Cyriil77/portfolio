'use strict';

window.addEventListener("load", () => {

  // Scroll bar on left side
  function scrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-bar-percent").style.height = scrolled + "%";
  }

  window.onscroll = () => {
    scrollIndicator();
  }

});