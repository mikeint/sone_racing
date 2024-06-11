import confetti from "canvas-confetti";
export function callConffeti() {
    var end = Date.now() + (15 * 20);
    var colors = ['#fff', '#000'];
    (function frame() {
        confetti({
            particleCount: 10,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 10,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}