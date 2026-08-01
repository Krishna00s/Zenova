import gsap from 'gsap';

export interface RevealOptions {
  duration?: number;
  delay?: number;
  stagger?: number;
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
    { opacity: 0, y: 35, scale: 0.98 },
    { opacity: 1, y: 0, scale: 1.0, duration, delay, stagger, ease: 'power2.out' }
  );
}
