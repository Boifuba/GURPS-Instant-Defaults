tokenD = canvas.tokens.controlled[0];
if (!token) return;
const targets = Array.from(game.user.targets);
const gridSize = canvas.grid.size;
const startPoint = { x: tokenD.x, y: tokenD.y };
let messageData = "<h2>Grenade Distance</h2><br>";

function d6(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const threeD6 = d6(3, 18);
let cut = threeD6 * 1.5;

targets.forEach(async (target) => {
  const distance = canvas.grid
    .measureDistance(startPoint, target, { gridSpaces: true })
    .toFixed(1);
  let c = 0;
  while (c <= 6) {
    if (distance == c)
      messageData += `<b>${target.name}</b> Is <b>${c} yards </b>from grenade <br>`;

    c++;
  }
});
ChatMessage.create({ content: messageData });
