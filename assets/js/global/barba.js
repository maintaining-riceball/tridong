import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
barba.use(barbaPrefetch);

barba.init({
    views: [{
        namespace: 'Home',
        beforeEnter() {
            console.log('Barba Home beforeEnter');
            matterIndex();
        }
    }],
    transitions: [{
      sync: false,
      name: 'default-transition',
      leave(data) {
        console.log('Barba Leave');

        const leave = gsap.timeline();
        leave.to('body', {overflow:"hidden"}, 0)
             .to('.barba-loading', {display: "flex",opacity: 1, duration: 0.75, ease: "power4.out"}, 0)
      },
      enter(data) {
        console.log('Barba Enter');

        const enter = gsap.timeline();
        enter.to("body", {overflow: "auto"}, 0)
             .delay(1)
             .to('.barba-loading', {display: "none", opacity: 0, duration: 0.75}, 0)
             .from(".gsap-heading", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"}, 0)
             .from(".gsap-cta", {opacity: 0, duration: 1,delay: .2, stagger: .5, ease: "power4.out"}, 0)
             .from(".gsap-list", {opacity: 0,translateY: 30, duration: .8, stagger: .1, ease: "power4.out"}, "-1.2")

      },
      once(data) {
        console.log('Barba Once');

        const once = gsap.timeline();
        once.from(".gsap-heading", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"}, 0)
            .from(".gsap-list", {opacity: 0,translateY: 30, duration: .8, stagger: .1, ease: "power4.out"}, 0)
            .from(".gsap-cta", {opacity: 0, duration: 1,delay: .2, stagger: .5, ease: "power4.out"}, 0)
        
      }


    }]
  });