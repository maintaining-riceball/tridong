
gsap.registerPlugin(ScrollTrigger);

const image = gsap.timeline();
const text = gsap.timeline();
const list = gsap.timeline();
const cta = gsap.timeline();




const imageReveal = document.querySelectorAll('.gsap-imageReveal')

imageReveal.forEach((el) => {
  const image = el.querySelector('img')
  
  el.addEventListener('mouseenter', (e) => {
    gsap.to(image, { autoAlpha: 1, translateY: -50,duration:.8 , ease: "power4.out"})
  })
  
   el.addEventListener('mouseleave', (e) => {
    gsap.to(image, { autoAlpha: 0, translateY: 50,duration:.8 , ease: "power4.out" })
  })
  
  el.addEventListener('mousemove', (e) => {
    gsap.set(image, { x: e.offsetX - 100, ease: "power4.out" })
    gsap.set(image, { y: e.offsetY - 100, ease: "power4.out" })
  })
})





list.from(".gsap-list", {opacity: 0,translateY: 30, duration: .8, stagger: .1, ease: "power4.out"});
image.from(".gsap-image", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"});
text.from(".gsap-heading", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"});
cta.from(".gsap-cta", {opacity: 0, duration: 1,delay: .4, stagger: .5, ease: "power4.out"});


