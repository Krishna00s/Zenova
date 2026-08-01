import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function registerScrollDefaults() {
  ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
    markers: false,
  });
}

export function createScrollObserver(
  triggerElement: Element | string,
  onEnter?: () => void,
  onLeaveBack?: () => void
) {
  return ScrollTrigger.create({
    trigger: triggerElement,
    start: 'top 80%',
    onEnter,
    onLeaveBack,
  });
}
