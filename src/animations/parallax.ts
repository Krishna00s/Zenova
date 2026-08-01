import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initParallax(target: gsap.TweenTarget, speed: number = 0.2): gsap.core.Tween {
  return gsap.to(target, {
    yPercent: -20 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: target as Element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}
