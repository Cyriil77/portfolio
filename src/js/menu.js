'use strict';

window.addEventListener("load", () => {

    //Icon header
    const displayMenu = document.querySelector('.display-menu-list');

    //Div container menu in mobile with name / icon / menu
    const parentMenu = document.querySelector('.ctnr-name-list-menu');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            if (window.innerWidth <= 991.98) {
                parentMenu.classList.add('open');
                parentMenu.parentNode.style.height = 80 + 'px';
                displayMenu.style.display = 'flex';
            }

        });
    });

    displayMenu.addEventListener('click', (e) => {
        e.preventDefault();

        parentMenu.classList.add('open');
        parentMenu.classList.remove('close');

        parentMenu.parentNode.style.height = 0;
        displayMenu.style.display = 'none';
    })

    //Icon close
    const closeMenu = document.querySelector('.close-menu');

    closeMenu.addEventListener('click', (e) => {
        e.preventDefault();


        parentMenu.classList.remove('open');
        parentMenu.classList.add('close');
        // parentMenu.style.transform = 'translateY(500px)'
        // parentMenu.style.transitionDuration = '2s';
        // parentMenu.transitionProperty = 'opacity';
        // parentMenu.style.opacity = '0';

        // Display header 80px
        parentMenu.parentNode.style.height = 80 + 'px';

        // Display icon
        displayMenu.style.display = 'flex';


    })


    // Active menu
    // Ratio for detect
    const section = document.querySelectorAll('section');

    let ratio = .1;

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const callback = (entries) => {

        entries.forEach((entry) => {

            // if (entry.isIntersecting == true) {
            //     console.log(entry.target, '=>', entry.intersectionRatio)
            // }


            if (window.innerWidth < 991.98) {
                if (entry.intersectionRatio > options.threshold) {
                    
                    console.clear()
                    console.log('visible:', entry.target)
                    const menuActive = document.getElementsByClassName('list-menu-icon');

                    if (entry.target == section[0]) {
                        menuActive[0].classList.add('active')
                    } else {
                        menuActive[0].classList.remove('active')
                    }

                    if (entry.target == section[1]) {
                        menuActive[1].classList.add('active');
                    } else {
                        menuActive[1].classList.remove('active');
                    }

                    if (entry.target == section[2]) {
                        menuActive[2].classList.add('active');
                    } else {
                        menuActive[2].classList.remove('active');
                    }

                    if (entry.target == section[3]) {
                        menuActive[3].classList.add('active');
                    } else {
                        menuActive[3].classList.remove('active');
                    }

                } else {
                    // console.log("invisible," , entry.target)
                }
            } else {

                ratio = .5

                console.log(ratio)
                if (entry.intersectionRatio > options.threshold) {

                    console.clear()
                    console.log('visible:', entry.target)

                    // console.log('visible')
                    const menuActive = document.getElementsByClassName('list-menu-icon');

                    if (entry.target == section[0]) {

                        menuActive[0].classList.add('active')
                    } else {
                        menuActive[0].classList.remove('active')
                    }

                    if (entry.target == section[1]) {

                        menuActive[1].classList.add('active');
                    } else {
                        menuActive[1].classList.remove('active');
                    }

                    if (entry.target == section[2]) {

                        menuActive[2].classList.add('active');
                    } else {
                        menuActive[2].classList.remove('active');
                    }

                    if (entry.target == section[3]) {

                        menuActive[3].classList.add('active');
                    } else {
                        menuActive[3].classList.remove('active');
                    }
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

