'use strict';

window.addEventListener("load", () => {
    //Icon header
    const displayMenu = document.querySelector('.display-menu-list');

    //Div container menu
    const parentMenu = document.querySelector('.ctnr-name-list-menu');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

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


    // Active menu
    // Ratio for detect
    const section = document.querySelectorAll('section');
    const ratio = .7;

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const callback = (entries) => {

        entries.forEach((entry) => {

            if (entry.intersectionRatio > ratio) {
                // console.log('visible')
                const menuActiveHomePage = document.getElementsByClassName('active')[0];
                const menuActiveAboutMe = document.getElementsByClassName('active')[1];
                const menuActiveProjects = document.getElementsByClassName('active')[2];
                const menuActiveSkills = document.getElementsByClassName('active')[3];

                if (entry.target == section[0]) {
                    menuActiveHomePage.children[0].style.color = 'white';
                    menuActiveHomePage.children[0].style.backgroundColor = 'black';
                    menuActiveHomePage.children[0].style.border = 'none';
                } else {
                    menuActiveHomePage.children[0].style.color = 'black';
                    menuActiveHomePage.children[0].style.backgroundColor = 'rgba(236, 236, 236, 0.4)';
                    menuActiveHomePage.children[0].style.border = 'none';
                }

                if (entry.target == section[1]) {
                    menuActiveAboutMe.children[0].style.color = 'white';
                    menuActiveAboutMe.children[0].style.backgroundColor = 'black';
                    menuActiveAboutMe.children[0].style.border = 'none';
                } else {
                    menuActiveAboutMe.children[0].style.color = 'black';
                    menuActiveAboutMe.children[0].style.backgroundColor = 'rgba(236, 236, 236, 0.4)';
                    menuActiveAboutMe.children[0].style.border = 'none';
                }

                if (entry.target == section[2]) {
                    menuActiveProjects.children[0].style.color = 'white';
                    menuActiveProjects.children[0].style.backgroundColor = 'black';
                    menuActiveProjects.children[0].style.border = 'none';
                } else {
                    menuActiveProjects.children[0].style.color = 'black';
                    menuActiveProjects.children[0].style.backgroundColor = 'rgba(236, 236, 236, 0.4)';
                    menuActiveProjects.children[0].style.border = 'none';
                }

                if (entry.target == section[3]) {
                    menuActiveSkills.children[0].style.color = 'white';
                    menuActiveSkills.children[0].style.backgroundColor = 'black';
                    menuActiveSkills.children[0].style.border = 'none';
                } else {
                    menuActiveSkills.children[0].style.color = 'black';
                    menuActiveSkills.children[0].style.backgroundColor = 'rgba(236, 236, 236, 0.4)';
                    menuActiveSkills.children[0].style.border = 'none';
                }

            }

        })

    }

    // Observe section
    const observer = new IntersectionObserver(callback, options);
    section.forEach((r) => {
        observer.observe(r);
    })

});

