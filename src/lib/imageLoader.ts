export interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'png' | 'jpg';
  aspectRatio?: '16:9' | '4:3' | '1:1' | '9:16' | 'editorial';
}

export function getImageSrc(path: string, options: ImageOptions = {}): string {
  if (!path) return '/placeholder.svg';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const queryParams: string[] = [];

  if (options.width) queryParams.push(`w=${options.width}`);
  if (options.height) queryParams.push(`h=${options.height}`);
  if (options.quality) queryParams.push(`q=${options.quality}`);
  if (options.format) queryParams.push(`fm=${options.format}`);

  const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  return `${cleanPath}${queryString}`;
}

export function getSrcSet(path: string, widths: number[] = [400, 800, 1200, 1600]): string {
  if (!path || path.startsWith('http://') || path.startsWith('https://')) return '';
  return widths.map((w) => `${getImageSrc(path, { width: w })} ${w}w`).join(', ');
}

export function getAspectRatioStyle(aspectRatio?: ImageOptions['aspectRatio']): string {
  switch (aspectRatio) {
    case '16:9':
      return 'aspect-[16/9]';
    case '4:3':
      return 'aspect-[4/3]';
    case '1:1':
      return 'aspect-square';
    case '9:16':
      return 'aspect-[9/16]';
    case 'editorial':
      return 'aspect-[4/5]';
    default:
      return 'aspect-auto';
  }
}
