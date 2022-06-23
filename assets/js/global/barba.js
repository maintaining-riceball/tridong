import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
barba.use(barbaPrefetch);

function loadMermaidOnNeed(){
  if (document.querySelectorAll('.mermaid').length > 0) {
    // console.log('loadMermaid');
    {{ $mermaid := resources.Match "js/mermaid.js" }}
    {{ $mermaid = $mermaid | resources.Concat "tempMermaid.js" | resources.ExecuteAsTemplate "mermaid.js" . }}
    {{ $mermaid = $mermaid | js.Build }}
    fetch("{{ $mermaid.Permalink }}")
    .then(responsive => responsive.text())
    .then(txt => eval(txt))
    .catch((error) => {
      console.error('Error:', error);
    });

  }
}

function aimateLeave(){
  // console.log('aimateLeave');
  const leave = gsap.timeline();
  leave.set('body', {overflow:"hidden"}, 0)
       .to('.barba-loading', {display: "flex",opacity: 1, duration: 0.75, ease: "power4.out"}, 0)
}

function aimateEnter(){
  // console.log('aimateEnter');
  const enter = gsap.timeline();
  enter.set("body", {overflowY: "auto", overflowX: "hidden"}, 0)
       .to('.barba-loading', {display: "none", opacity: 0, duration: 0.75}, 0)
       .from(".gsap-list", {opacity: 0,translateY: 30, duration: .8, stagger: .1, ease: "power4.out"}, -1)
       .from(".gsap-heading", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"}, 0)
       .from(".gsap-cta", {opacity: 0, duration: 1,delay: .2, stagger: .5, ease: "power4.out"}, -.4)
       .from(".gsap-image", {translateY: 100, duration: 1,delay: .2, stagger: .1, ease: "power4.out"}, 0)
       .fromTo(".gsap-image",{opacity:0, clipPath:"clip-path: polygon(0 0, 100% 0, 100% 0, 0 0)"}, {opacity: 1,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 1,delay: .2, stagger: .15, ease: "power4.out"}, 0)
}

function aimateOnce(){
  // console.log('aimateOnce');
  const once = gsap.timeline();
  once.from(".gsap-heading", {opacity: 0,translateY: 100, duration: .8, stagger: .1, ease: "power4.out"}, 0)
      .from(".gsap-list", {opacity: 0,translateY: 30, duration: .8, stagger: .1, ease: "power4.out"}, 0)
      .from(".gsap-cta", {opacity: 0, duration: 1,delay: .2, stagger: .5, ease: "power4.out"}, 0)
      .from(".gsap-image", {translateY: 100, duration: 1,delay: .2, stagger: .1, ease: "power4.out"}, 0)
      .fromTo(".gsap-image",{opacity:0}, {opacity: 1,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 1,delay: .2, stagger: .15, ease: "power4.out"}, 0)
}

barba.init({
    views: [{
        namespace: 'Home',
        beforeEnter() {
          {{ $index := resources.Match "js/index/**.js" }}
          {{ $index = $index | resources.Concat "tempIndex.js" | resources.ExecuteAsTemplate "index.js" . }}
          {{ $index = $index | js.Build }}
          fetch("{{ if .Site.IsServer }}.{{ else }}{{ $.Site.Params.brandUrl }}{{ end }}{{ $index.RelPermalink }}")
          .then(response => response.text())
          .then(txt => eval(txt))
          .catch((error) => {
            console.error('Error:', error);
          });
        },
    }],
    transitions: [{
      sync: false,
      name: 'default-transition',
      leave(data) {
        aimateLeave(data)
        return gsap.from(data.next.container, {
          opacity: 0
        });
      },
      enter(data) {
        {{ if not .Site.IsServer }}window.scrollTo(0, 0);{{ end }}
        loadMermaidOnNeed()
        aimateEnter()
      },
      once(data) {
        {{ if not .Site.IsServer }}window.scrollTo(0, 0);{{ end }}
        loadMermaidOnNeed()
        aimateOnce()
      },
      before: ({ current, next, trigger}) => {
        // Reset active on navbar
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