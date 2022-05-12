
gsap.registerPlugin(ScrollTrigger);

const image = gsap.timeline();
const text = gsap.timeline();
const list = gsap.timeline();
const cta = gsap.timeline();

list.from(".gsap-list", {opacity: 0,translateY: 30, duration: .8, stagger: .1, ease: "power4.out"});
image.from(".gsap-image", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"});
text.from(".gsap-heading", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"});
cta.from(".gsap-cta", {opacity: 0, duration: 1,delay: .4, stagger: .5, ease: "power4.out"});


