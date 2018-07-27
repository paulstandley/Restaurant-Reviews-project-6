/* heplfull video https://www.youtube.com/watch?v=BfL3pprhnms */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function (reg) {
    if (reg.installing) {
      console.log('service worker installing');
    }
    else if (reg.waiting) {
      console.log('service worker installed');
    }
    else if (reg.active) {
      console.log('service worker active');
    }
    console.log('Registation succeeded. scope is ', reg.scope);
  }).catch(function (error) {
    console.log('Registation failed with ', error);
  });
}