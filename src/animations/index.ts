
import anime from 'animejs/lib/anime.es.js';
export function slideUp(args: Array<{ target: string, endPosition?: number, endDelay?: number }>) {
    args.forEach(element => {
        anime.timeline({
            endDelay: element.endDelay ?? 0,
            duration: 1000,
            direction: 'reverse',
            easing: 'easeInOutSine'

        }).add({ targets: element.target, opacity: '0', translateY: element.endPosition ?? 450, }, 0);
    });
}
export function slideLeft(args: Array<{ target: string, endPosition?: number, endDelay?: number }>) {
    args.forEach(element => {
        anime.timeline({
            endDelay: element.endDelay ?? 0,
            duration: 1000,
            direction: 'reverse',
            easing: 'easeInOutSine'

        }).add({ targets: element.target, opacity: '0', translateX: element.endPosition ?? -450, }, 0);
    });
}
