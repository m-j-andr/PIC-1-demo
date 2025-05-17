function Drawing(canvas, width, height, color) {
  this.canvas = canvas;
  this.canvas.width = width;
  this.canvas.height = height;

  this.context = canvas.getContext('2d');
  this.context.fillStyle = color;
}

Drawing.prototype.start = function() {
  this.canvas.addEventListener('click', e => {
    const rect = this.canvas.getBoundingClientRect();

    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    this.context.fillRect(xPos - 2, yPos - 2, 4, 4);
  });
};

const drawing_1 = new Drawing(document.getElementById('canvas_1'), 400, 300, 'red');
const drawing_2 = new Drawing(document.getElementById('canvas_2'), 200, 150, 'green');
const drawing_3 = new Drawing(document.getElementById('canvas_3'), 300, 225, 'blue');

drawing_1.start();
drawing_2.start();
drawing_3.start();
