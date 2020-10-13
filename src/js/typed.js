'use strict';

import Typed from 'typed.js'

window.addEventListener("load", () => {

    document.getElementsByTagName('h1')[0].childNodes[0].nodeValue = ''


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
            strings: [
                'Avec des compétences en HTML / CSS^500',
                'Avec des compétences en JavaScript^500',
                'Avec des compétences en React^500',
            ],
            typeSpeed: 75,
        });

    };

    // Where I work create
    const createLive = document.createElement('p');
    createLive.classList.add('base-home-page');

    const appendText = document.createTextNode('Dévelopeur front-end basé à Paris');
    const parentWhere = document.querySelector('.base-to-paris');
    createLive.appendChild(appendText);

});
