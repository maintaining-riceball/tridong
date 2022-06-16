import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
barba.use(barbaPrefetch);

barba.init({
    views: [{
        namespace: 'Home',
        beforeEnter() {
            {{ $index := resources.Match "js/index/**.js" }}
            {{ $index = $index | resources.Concat "tempIndex.js" | resources.ExecuteAsTemplate "index.js" . }}
            {{ $index = $index | js.Build }}
            fetch("{{ if .Site.IsServer }}./{{ else }}{{ $.Site.Params.brandUrl }}{{ end }}{{ $index.RelPermalink }}")
            .then(response => response.text())
            .then(txt => eval(txt))

        },
    }],
    transitions: [{
      sync: false,
      name: 'default-transition',
      leave(data) {
        // console.log('Barba Leave');
        const leave = gsap.timeline();
        leave.set('body', {overflow:"hidden"}, 0)
             .to('.barba-loading', {display: "flex",opacity: 1, duration: 0.75, ease: "power4.out"}, 0)
             
      },
      enter(data) {
        // console.log('Barba Enter');
        const enter = gsap.timeline();
        window.scrollTo(0, 0);
        enter.set("body", {overflow: "auto"}, 0)
             .delay(0.85)
             .to('.barba-loading', {display: "none", opacity: 0, duration: 0.75}, 0)
             .from(".gsap-heading", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"}, 0)
             .from(".gsap-list", {opacity: 0,translateY: 30, duration: .8, stagger: .1, ease: "power4.out"}, -.8)
             .from(".gsap-cta", {opacity: 0, duration: 1,delay: .2, stagger: .5, ease: "power4.out"}, 0)
             .from(".gsap-image", {translateY: 100, duration: 1,delay: .2, stagger: .1, ease: "power4.out"}, 0)
             .fromTo(".gsap-image",{opacity:0, clipPath:"clip-path: polygon(0 0, 100% 0, 100% 0, 0 0)"}, {opacity: 1,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 1,delay: .2, stagger: .15, ease: "power4.out"}, 0)
      },
      once(data) {
        // console.log('Barba Once');
        const once = gsap.timeline();
        window.scrollTo(0, 0);
        once.from(".gsap-heading", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"}, 0)
            .from(".gsap-list", {opacity: 0,translateY: 30, duration: .8, stagger: .1, ease: "power4.out"}, 0)
            .from(".gsap-cta", {opacity: 0, duration: 1,delay: .2, stagger: .5, ease: "power4.out"}, 0)
            .from(".gsap-image", {translateY: 100, duration: 1,delay: .2, stagger: .1, ease: "power4.out"}, 0)
            .fromTo(".gsap-image",{opacity:0}, {opacity: 1,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 1,delay: .2, stagger: .15, ease: "power4.out"}, 0)
      },
      

      before: ({ current, next, trigger }) => {
        // 
        // Reset active on navbar
        // 
        let menu = document.querySelector('#navlistMain');
        const menuActive = menu.querySelector('.navbarMain--active');
        // select the menu item depending on the next URL (you can do that in many ways)
        let nextItem = menu.querySelector(`a[href="${next.url.path}"]`);

        // reset the active menu item and set the next item as "active" (if there is one)
        if (nextItem !== null && menuActive !== null) {
          menuActive.classList.remove('navbarMain--active');
          nextItem.classList.add('navbarMain--active');
        }
      }

    }]
  });