import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
barba.use(barbaPrefetch);

barba.init({
    transitions: [{
      sync: true,
      views: [{
        namespace: 'Home',
        beforeEnter() {
            console.log('Barba Home beforeEnter');
            matterIndex();
        }
    }],
      name: 'default-transition',
      leave(data) {
        console.log('Barba Leave');
      },
      enter(data) {
        console.log('Barba Enter');
      },
      once(data) {
        console.log('Barba Once');
        
      }


    }]
  });