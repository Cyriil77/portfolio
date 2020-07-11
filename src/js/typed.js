'use strict';

import Typed from 'typed.js'

window.addEventListener("load", () => {

    // Typed.js
    const typed = new Typed('.name-home-page', {
        startDelay: 300,
        loop: false,
        strings: ['Marceau Cyril^700'],
        typeSpeed: 75,
        onComplete: function (self) { self.cursor.remove(), typedFront(), parentWhere.appendChild(createLive) }
    });

    const typedFront = () => {

        const typed1 = new Typed('.front-end-home-page', {
            startDelay: 100,
            loop: true,
            strings: ['Développeur front-end^500', 'Développeur javaScript^500', 'Développeur React^500', 'Développeur HTML^500', 'Développeur CSS^500'],
            typeSpeed: 75,
        });

    };

    // Where I work create
    const createLive = document.createElement('p');
    createLive.classList.add('base-home-page');

    const appendText = document.createTextNode('Basé à Paris');
    const parentWhere = document.querySelector('.base-to-paris');
    createLive.appendChild(appendText);

});
