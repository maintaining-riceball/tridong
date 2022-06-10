import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';


barba.use(barbaPrefetch);

function leave() {
    var leave = gsap.timeline();
    console.log('leave')
    leave.to('body', {overflow:"hidden"}, 0)
         .to('.barba-loading', {display: "flex",opacity: 1, duration: 0.75, ease: "power4.out"}, 0)
}

function enter() {
    const enter = gsap.timeline();
    console.log('enter')
    enter.to("body", {overflow: "auto"}, 0)
         .to('.barba-loading', {display: "none", opacity: 0, duration: 0.75}, 0)

         .from(".gsap-heading", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"}, 0)
         .from(".gsap-cta", {opacity: 0, duration: 1,delay: .2, stagger: .5, ease: "power4.out"}, 0)
         .from(".gsap-list", {opacity: 0,translateY: 30, duration: .8, stagger: .1, ease: "power4.out"}, "-1.2")

}

function once() {
    const once = gsap.timeline();
    console.log('enter')
    once.from(".gsap-heading", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"}, 0)
        .from(".gsap-list", {opacity: 0,translateY: 30, duration: .8, stagger: .1, ease: "power4.out"}, 0)
        .from(".gsap-cta", {opacity: 0, duration: 1,delay: .2, stagger: .5, ease: "power4.out"}, 0)
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({
    sync: true,
    transitions: [{
        name: 'default-transition',
        leave(data) {
            leave();
        },

        async enter(data) {
            const done = this.async();
            await delay(1500);
            enter();
            window.scrollTo(0, 0);
            matterIndex();
            done();
        },

        once(data) {
            once();
        },
        
        before: ({ current, next, trigger }) => {
            // 
            // Reset active on navbar
            // 
            let menu = document.querySelector('#navlistMain');

            // select the menu item depending on the next URL (you can do that in many ways)
            console.log(menu)
            console.log(next)
            let nextItem = menu.querySelector(`a[href="${next.url.path}"]`);
    
            // reset the active menu item and set the next item as "active" (if there is one)
            if (nextItem !== null) {
                menu.querySelector('.navbarMain--active').classList.remove('navbarMain--active');
                nextItem.classList.add('navbarMain--active');
            }
          },
    }]
  });


