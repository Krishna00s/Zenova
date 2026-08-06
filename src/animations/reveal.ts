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
  const { duration = 1.0, delay = 0 } = options;
  return gsap.fromTo(
    target,
    { opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' },
    { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration, delay, ease: 'power3.out' }
  );
}

export function cardReveal(target: gsap.TweenTarget, options: RevealOptions = {}): gsap.core.Tween {
  const { duration = 0.9, delay = 0, stagger = 0.12 } = options;
  return gsap.fromTo(
    target,
    { opacity: 0, y: 40, scale: 0.96 },
    { opacity: 1, y: 0, scale: 1.0, duration, delay, stagger, ease: 'power2.out' }
  );
}

export function scrollRevealCards(target: gsap.TweenTarget, triggerTarget: Element | string, options: RevealOptions = {}): void {
  const { duration = 0.9, stagger = 0.12 } = options;
  gsap.fromTo(
    target,
    { opacity: 0, y: 45, scale: 0.96 },
    {
      opacity: 1,
      y: 0,
      scale: 1.0,
      duration,
      stagger,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerTarget,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
}
