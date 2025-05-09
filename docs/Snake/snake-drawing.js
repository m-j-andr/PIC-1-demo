const canvas = document.getElementById('snake');
const P = 18;




function draw_frame() {
  canvas.width = (2 * X + 1) * P;
  canvas.height = (2 * Y + 1) * P;


  const context = canvas.getContext('2d');


  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);


  context.fillStyle = 'yellow';
  context.fillRect((2 * apple[0] + 1) * P, (2 * apple[1] + 1) * P, P, P);


  context.fillStyle = 'white';

  for (let s of snake) {
    context.fillRect((2 * s[0] + 1) * P, (2 * s[1] + 1) * P, P, P);
  }

  for (let i = 1; i < snake.length; ++i) {
    const s0 = snake[i - 1];
    const s1 = snake[i];

    context.fillRect((s0[0] + s1[0] + 1) * P, (s0[1] + s1[1] + 1) * P, P, P);
  }
}


draw_frame();




canvas.addEventListener('click', function() {
  playing = !playing;
});




function play() {
  if (playing) {
    update_state();
  }

  draw_frame();
  setTimeout(play, period);
}


play();