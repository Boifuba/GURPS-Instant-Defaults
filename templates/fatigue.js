/*
Only works in GURPS Game Aid.(how are you feeling now DnD'ers?)
Select your party e click to run the macro. The FP adjustmentes will be made based
on your actual encumbrance. When use it to calculate FP on Hiking, stop the hiking
and recalculate when the first character is 1/3 FP.
I hope you enjoy it!
*/
let actors = canvas.tokens.controlled.map((i) => i.actor);
if (!actors.length)
  actors = game.users
    .filter((i) => i.active && !!i.character)
    .map((i) => i.character);
for (const actor of actors) {
  const encumbrance = actor.data.data.encumbrance;
  const FP = actor.data.data.FP;
  const current = Object.values(encumbrance).find((i) => i.current);
  const key = current.key;
  const value = actor.data.data.FP.value;
  if (key === "enc0") await actor.update({ "data.FP.value": value - 1 });
  else if (key === "enc1") await actor.update({ "data.FP.value": value - 2 });
  else if (key === "enc2") await actor.update({ "data.FP.value": value - 3 });
  else if (key === "enc3") await actor.update({ "data.FP.value": value - 4 });
  else if (key === "enc4") await actor.update({ "data.FP.value": value - 5 });
  ChatMessage.create({
    content: `<p>${actor.name} have <b>${FP.value} FP</b></p>`,
  });
}
