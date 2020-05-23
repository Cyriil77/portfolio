'use strict'

import './style/loader.css'
import './style/main.css';
import './style/mediaQueries.css'

// Header
import './js/menu.js';

// Animation
import './js/gsap.js'

// Home page
import './js/typed.js';

// Scroll bar
import './js/scroll.js';

// Hover project ->A A finir jeudi
import './js/projects.js'

// font awesome
import './lib/fit.fontawesome.js';



window.addEventListener("load", () => {

    // Home page add dynamically text
    const tel = document.querySelectorAll('a')[6];
    tel.href = 'tel:0617881934';

    const mail = document.querySelectorAll('a')[7];
    mail.href = 'mailto:marceau.cyril@hotmail.fr';

    const mailFooter = document.querySelectorAll('a')[16];
    mailFooter.href = 'mailto:marceau.cyril@hotmail.fr';

    // console.log(document.querySelectorAll('a'))

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    // Lazy load picture user
    const lazyLoadElement = document.querySelectorAll('.lazy-load')

    for (const element of lazyLoadElement) {

        if (element.complete) {
            const loader = document.querySelector('.loader');
            const header = document.getElementsByTagName('header')[0];
            const ctnrHomePage = document.getElementById('ctnr-home-page');
            const ctnrAboutMe = document.getElementById('ctnr-about-me');
            const ctnrMyProject = document.getElementById('ctnr-my-projects');
            const ctnrSkill = document.getElementById('ctnr-skills');
            const footer = document.getElementsByTagName('footer')[0];
            loader.remove()

            header.style.display = 'block';
            ctnrHomePage.style.display = 'block';
            ctnrAboutMe.style.display = 'block';
            ctnrMyProject.style.display = 'block';
            ctnrSkill.style.display = 'block';
            footer.style.display = 'block';

            setTimeout(() => {
                element.classList.add('loaded');
            }, 500);

        }

        // element.onload = () => {
        //     element.classList.add('loaded');
        // }

    }

    // Delete text on iphone SE / 5 and delete span
    if (window.innerWidth === 320) {
        const spanDeleteAboutMe = document.querySelectorAll('.datas-about-me span');
        spanDeleteAboutMe.forEach(element => {
            element.style.display = 'none';
        });
    }

});