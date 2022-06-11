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
             .delay(1.5)
             .to('.barba-loading', {display: "none", opacity: 0, duration: 0.75}, 0)
             .from(".gsap-heading", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"}, 0)
             .from(".gsap-cta", {opacity: 0, duration: 1,delay: .2, stagger: .5, ease: "power4.out"}, 0)
             .from(".gsap-list", {opacity: 0,translateY: 30, duration: .8, stagger: .1, ease: "power4.out"}, "-1.2")
        window.scrollTo(0, 0);
      },
      once(data) {
        console.log('Barba Once');

        const once = gsap.timeline();
        once.from(".gsap-heading", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"}, 0)
            .from(".gsap-list", {opacity: 0,translateY: 30, duration: .8, stagger: .1, ease: "power4.out"}, 0)
            .from(".gsap-cta", {opacity: 0, duration: 1,delay: .2, stagger: .5, ease: "power4.out"}, 0)
        
      },
      

    //   before: ({ current, next, trigger }) => {
    //     // 
    //     // Reset active on navbar
    //     // 
    //     let menu = document.querySelector('#navlistMain');

    //     // select the menu item depending on the next URL (you can do that in many ways)
    //     let nextItem = menu.querySelector(`a[href="${next.url.path}"]`);

    //     if (nextItem === null){
    //         console.log(nextItem);
    //     }

    //     // reset the active menu item and set the next item as "active" (if there is one)
    //     if (nextItem !== null) {
    //         menu.querySelector('.navbarMain--active').classList.remove('navbarMain--active');
    //         nextItem.classList.add('navbarMain--active');
    //     }
    //   }


    }]
  });