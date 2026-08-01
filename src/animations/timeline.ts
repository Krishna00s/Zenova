import gsap from 'gsap';

export function createEditorialTimeline(defaults: gsap.TimelineVars = {}): gsap.core.Timeline {
  return gsap.timeline({
    defaults: {
      ease: 'power2.out',
      duration: 0.8,
      ...defaults,
    },
  });
}
