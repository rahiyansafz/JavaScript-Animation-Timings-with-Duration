// timing functions - easein etc
import {timings} from './timings.js';

export function animate({duration = 1000, timing, draw}) {
  // if we only have one argument as function given
  (typeof arguments[0] === 'function') && (draw = arguments[0]);

  // set timing function
  (typeof timing === 'string') && (timing = timings[timing]);

  timing = timing || (t => t);

  const start = performance.now();
  // return promise, so that user can take after action
  return new Promise(function(resolve) {
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      (timeFraction > 1) && (timeFraction = 1);
      draw(timing(timeFraction));
      timeFraction < 1 ? 
        requestAnimationFrame(animate) : resolve(true);
    });
  });

}