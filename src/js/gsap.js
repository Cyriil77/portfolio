import { gsap, TimelineLite, Expo, TweenLite } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);




window.addEventListener('load', () => {


    const chevronDownHomePage = document.querySelectorAll('.chevron-down-scroll i')[0];
    const destinationToScrollAboutMe = document.getElementById('ctnr-about-me');

    const chevronDownAboutMe = document.querySelectorAll('.chevron-down-scroll i')[1];
    const destinationToScrollMyProject = document.getElementById('my-projects');

    const chevronDownMyProject = document.querySelectorAll('.chevron-down-scroll i')[2];
    const destinationToScrollSkills = document.getElementById('my-projects');

    // Scroll to ctnr-about-me
    chevronDownHomePage.addEventListener('click', (e) => {
        e.preventDefault();

        const topPos = destinationToScrollAboutMe.offsetTop - 80;
        gsap.to(window, { duration: 0.5, scrollTo: { y: topPos } });
    })

    chevronDownAboutMe.addEventListener('click', (e) => {
        e.preventDefault();

        const topPos1 = document.getElementById('anchor-my-projects');
        gsap.to(window, { duration: 0.5, scrollTo: { y: topPos1 } });
    })

    chevronDownMyProject.addEventListener('click', (e) => {
        e.preventDefault();

        const topPos2 = document.getElementById('anchor-skills');
        gsap.to(window, { duration: 0.5, scrollTo: { y: topPos2 } });
    })




    // Animation social icon home-page
    let timeLine = new TimelineLite();

    const socialIcon = document.querySelectorAll('.social a');
    timeLine.staggerFrom(socialIcon, 0.7, { opacity: 0, y: -50 }, 0.3, 0.5);

    // Tween lite


    // Intersection observer

    // Ratio for detect intersection observer
    const ratio = .5;

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }

    const revealItem = document.querySelectorAll('.reveal')

    const v = document.querySelectorAll('.ctnr-project')


    const callback = (entries, observer) => {

        entries.forEach((entry, index) => {

            if (entry.intersectionRatio > ratio) {

                // After scroll > 1 observer is stopped
                observer.unobserve(entry.target);

                entry.target.classList.add('revealed')
                // console.log(entry.target, '->', index)

                // About me -> title
                if (entry.target == revealItem[0]) TweenLite.from(entry.target, 1, {x: -550, ease: Expo.easeOut });
                // About me -> text
                if (entry.target == revealItem[1]) TweenLite.from(entry.target, 1, {y: 50, ease: Expo.easeOut }, '-=0.4');
                // About me -> CV
                if (entry.target == revealItem[2]) TweenLite.from(entry.target, 1, {y: 50, ease: Expo.easeOut }, '-=0.4');
                // My project -> title
                if (entry.target == revealItem[3]) TweenLite.from(entry.target, 1, {y: 50, ease: Expo.easeOut });
                // project -> studentManager
                if (entry.target == revealItem[4])TweenLite.from(entry.target, 1, {y: 50, ease: Expo.easeOut });
                // project -> kwick
                if (entry.target == revealItem[5]) TweenLite.from(entry.target, 1, {y: 50, ease: Expo.easeOut });
                // project -> webgl
                if (entry.target == revealItem[6]) TweenLite.from(entry.target, 1, {y: 50, ease: Expo.easeOut });
                // project -> global magazine
                if (entry.target == revealItem[7]) TweenLite.from(entry.target, 1, {y: 100, ease: Expo.easeOut });
                // project -> crud
                if (entry.target == revealItem[8]) TweenLite.from(entry.target, 1, {y: 100, ease: Expo.easeOut });
                // project -> last
                if (entry.target == revealItem[9]) TweenLite.from(entry.target, 1, {y: 100, ease: Expo.easeOut });
                // Skill -> title
                if (entry.target == revealItem[10]) TweenLite.from(entry.target, 1, {x: -150, ease: Expo.easeOut });
                // HTML
                if (entry.target == revealItem[11]) TweenLite.from(entry.target, 1, {x: -150, ease: Expo.easeOut });
                // CSS
                if (entry.target == revealItem[12]) TweenLite.from(entry.target, 1, {y: -150, ease: Expo.easeOut });
                // JS
                if (entry.target == revealItem[13]) TweenLite.from(entry.target, 1, {x: 150, ease: Expo.easeOut });
                // Git
                if (entry.target == revealItem[14]) TweenLite.from(entry.target, 1, {x: -150, ease: Expo.easeOut });
                // PHP
                if (entry.target == revealItem[15]) TweenLite.from(entry.target, 1, {y: 150, ease: Expo.easeOut });
                // Indesign
                if (entry.target == revealItem[16]) TweenLite.from(entry.target, 1, {y: 150, ease: Expo.easeOut });
                // Illustrator
                if (entry.target == revealItem[17]) TweenLite.from(entry.target, 1, {y: 150, ease: Expo.easeOut });
                // Photoshop
                if (entry.target == revealItem[18]) TweenLite.from(entry.target, 1, {y: 150, ease: Expo.easeOut });
                // Première pro
                if (entry.target == revealItem[19]) TweenLite.from(entry.target, 1, {y: 150, ease: Expo.easeOut });


            }

        })

    }

    // Observe all element who get class reveal
    const observer = new IntersectionObserver(callback, options);
    document.querySelectorAll('.reveal').forEach((r) => {
        observer.observe(r);
    })


})