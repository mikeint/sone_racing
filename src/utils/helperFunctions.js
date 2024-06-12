import confetti from "canvas-confetti";
export function callConffeti() {
    var scalar = 2;
    var unicorn = confetti.shapeFromText({ text: '🚘', scalar });
    
    var defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn],
      scalar
    };
    
    function shoot() {
      confetti({
        ...defaults,
        particleCount: 30
      });
    
      confetti({
        ...defaults,
        particleCount: 5,
        flat: true
      });
    
      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ['circle']
      });
    }
    
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
}