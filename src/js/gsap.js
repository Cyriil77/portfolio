import { gsap, TimelineMax, Expo, TweenMax } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(ScrollToPlugin);

const chevronDownHomePage = document.querySelectorAll('.chevron-down-scroll i')[0];
const destinationToScrollAboutMe = document.getElementById('ctnr-about-me');



chevronDownHomePage.addEventListener('click', (e) => {
    e.preventDefault();
    const topPos = destinationToScrollAboutMe.offsetTop - 80;
    gsap.to(window, { duration: 0.5, scrollTo: { y: topPos } });
})

let timeLine = new TimelineMax();

// const socialIcon = document.querySelectorAll('.social a');
// timeLine.staggerFrom(socialIcon, 0.7, { opacity: 0, y: -50 }, 0.3, 0.5);


const revealElements = document.querySelectorAll('.reveal');

const revealItems = [];
const scrollY = window.scrollY;

for (const _element of revealElements) {
    const item = {}
    item.revealed = false
    item.element = _element


    const bounding = _element.getBoundingClientRect()
    item.top = bounding.top + scrollY
    item.height = bounding.height

    revealItems.push(item)
}

window.addEventListener('resize', () => {
    for (const _item of revealItems) {
        const bounding = _item.element.getBoundingClientRect()
        _item.top = bounding.top + scrollY
        _item.height = bounding.height
    }
})

window.addEventListener('scroll', () => {
    const limit = window.scrollY + window.innerHeight

    for (const _item of revealItems) {
        if (!_item.revealed && limit > _item.top + _item.height) {
            console.log(revealItems)
            _item.revealed = true
            if(_item.revealed == true) console.log(_item.element)

            // _item.element.classList.add('revealed')
            // TweenMax.to(revealItems[0].element, 1, { opacity: 1, x: -60, ease: Expo.easeInOut });
            // TweenMax.to(revealItems[1].element, 1, { opacity: 1, x: -60, ease: Expo.easeInOut });
            // timeLine
            // TweenMax.to(revealItems[0].element, {opacity: 1, y:-60, ease: Expo.easeInOut})
            // TweenMax.to(revealItems[1].element,{opacity: 1, x:-60, ease: Expo.easeInOut})
        }
    }
})
