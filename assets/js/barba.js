import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';

// tell Barba to use the prefetch plugin
barba.use(barbaPrefetch);
barba.init({
    transitions: [{
      Sync: true, 
      name: 'opacity-transition',

      before: ({ current, next, trigger }) => {
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

      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 1,
          display: "none",
          ease: "power4.out"
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          duration: 1,
          ease: "power4.out"

        });
      }
    }]
  });



