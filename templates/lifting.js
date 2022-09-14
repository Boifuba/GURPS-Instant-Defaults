let macroPoker = game.macros.getName("teste");
let value = { foo: "$350", bar: "$540", zip: "$400" };

await macroPoker.setFlag("world", "poder", value);
macroPoker.getFlag("world", "poder").foo;
//returns $350
