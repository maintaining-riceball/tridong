import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
barba.use(barbaPrefetch);

barba.init({
    transitions: [{
      sync: true,
      name: 'opacity-transition',
      leave(data) {
          console.log('leave');

      },
      enter(data) {
          console.log('enter');

      }
    }]
  });