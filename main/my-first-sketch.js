
let t = 0; // variable de tiempo

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(200, 40, 40);
}

function draw() {
  background(10, 10); // fondo translúcido (crea estelas)

  // grilla de elipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // punto de partida de cada círculo depende de posición del ratón
      const anguloX = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const anguloY = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // y también varía según la posición de la partícula
      const angulo = anguloX * (x / width) + anguloY * (y / height);

      // cada partícula se mueve en forma circular
      const myX = x + 20 * cos(2 * PI * t + angulo);
      const myY = y + 20 * sin(2 * PI * t + angulo);

      ellipse(myX, myY, 10); // dibujar partícula
    }
  }

  t = t + 0.01; // actualizar tiempo
}

