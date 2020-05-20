'use strict';

window.addEventListener("load", () => {
    //Icon header
    const displayMenu = document.querySelector('.display-menu-list');

    //Div container menu
    const parentMenu = document.querySelector('.ctnr-name-list-menu');

    displayMenu.addEventListener('click', (e) => {
        e.preventDefault();

        displayMenu.classList.toggle('open');
        parentMenu.classList.toggle('open');

        parentMenu.parentNode.style.height = 0;
        displayMenu.style.display = 'none';
    })

    //Icon close
    const closeMenu = document.querySelector('.close-menu');

    closeMenu.addEventListener('click', (e) => {
        e.preventDefault();

        displayMenu.classList.toggle('open');
        parentMenu.classList.toggle('open');

        parentMenu.parentNode.style.height = 80 + 'px';
        displayMenu.style.display = 'flex';
    })

    //Change color and background for page active
    //Get section who is active
    const menuActive = document.getElementsByClassName('active')[0];

    if (menuActive) {
        menuActive.children[0].style.color = 'white';
        menuActive.children[0].style.backgroundColor = 'black';
        menuActive.children[0].style.border = 'none';
    }
});

