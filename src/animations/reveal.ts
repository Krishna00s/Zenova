import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface RevealOptions {
  duration?: number;
  delay?: number;
  stagger?: number;
  trigger?: Element | string;
}

export function headingReveal(target: gsap.TweenTarget, options: RevealOptions = {}): gsap.core.Tween {
  const { duration = 0.6, delay = 0 } = options;
  return gsap.fromTo(
    target,
    { opacity: 0, y: 20, clipPath: 'inset(0 0 100% 0)' },
    { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration, delay, ease: 'power3.out' }
  );
}

export function cardReveal(target: gsap.TweenTarget, options: RevealOptions = {}): gsap.core.Tween {
  const { duration = 0.5, delay = 0, stagger = 0.07 } = options;
  return gsap.fromTo(
    target,
    { opacity: 0, y: 20, scale: 0.98 },
    { opacity: 1, y: 0, scale: 1.0, duration, delay, stagger, ease: 'power3.out' }
  );
}

export function scrollRevealCards(target: gsap.TweenTarget, triggerTarget: Element | string, options: RevealOptions = {}): void {
  const { duration = 0.5, stagger = 0.07 } = options;
  gsap.fromTo(
    target,
    { opacity: 0, y: 22, scale: 0.98 },
    {
      opacity: 1,
      y: 0,
      scale: 1.0,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: triggerTarget,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
    }
  );
}
