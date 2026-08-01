import gsap from 'gsap';

export interface FadeOptions {
  duration?: number;
  delay?: number;
  yOffset?: number;
  ease?: string;
  stagger?: number;
}

export function fadeIn(target: gsap.TweenTarget, options: FadeOptions = {}): gsap.core.Tween {
  const { duration = 0.8, delay = 0, yOffset = 20, ease = 'power2.out' } = options;
  return gsap.fromTo(
    target,
    { opacity: 0, y: yOffset },
    { opacity: 1, y: 0, duration, delay, ease }
  );
}

export function staggerFadeIn(targets: gsap.TweenTarget, options: FadeOptions = {}): gsap.core.Tween {
  const { duration = 0.8, delay = 0, yOffset = 24, ease = 'power2.out', stagger = 0.15 } = options;
  return gsap.fromTo(
    targets,
    { opacity: 0, y: yOffset },
    { opacity: 1, y: 0, duration, delay, ease, stagger }
  );
}
