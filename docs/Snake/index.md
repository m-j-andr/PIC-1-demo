# PIC 1 - Snake

<p style="font-family:monospace;display:inline;">Click on the game to start... </p>
<canvas id="snake">This should be a canvas for playing Snake.</canvas><br>

<textarea id="code" rows="11" cols="78" style="font-family:monospace">def update_snake(direction, snake, apple):
  head = snake[0]

  if   direction ==  "left":  new_head = [head[0] - 1, head[1]]
  elif direction == "right":  new_head = [head[0] + 1, head[1]]
  elif direction ==    "up":  new_head = [head[0], head[1] - 1]
  elif direction ==  "down":  new_head = [head[0], head[1] + 1]

  snake.insert(0, new_head)

  if new_head[0] != apple[0] or new_head[1] != apple[1]: return snake.pop()</textarea>
<input type="button" value="Submit code" id="submit_button">

<script src="https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js"></script>
<script src="snake-python.js" defer></script>
<script src="snake-logic.js" defer></script>
<script src="snake-drawing.js" defer></script>
