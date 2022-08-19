let castertoken = canvas.tokens.controlled[0];
if (castertoken) { return; }
const effects = Sequencer.EffectManager.getEffects({ name: "*ShadowOfMoi*", object: castertoken  });



if(effects.length){
Sequencer.EffectManager.endEffects({ name: "*ShadowOfMoi*" });
Sequencer.EffectManager.endEffects({ name: "*ShadowOfMoilDarkness*" });
}else{

new Sequence()
    .effect()
    .file("jb2a.extras.tmfx.runes.circle.inpulse.necromancy")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .opacity(0.5)
    .filter("Glow", { color: 0xffffff })
    .scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 })
    .waitUntilFinished(-500)

.effect()
    .fadeIn(500)
    .file("jb2a.energy_strands.complete.dark_red.01")
    .persist()
    .scale(0.2)
    .attachTo(casterToken)
    .name(`ShadowOfMoi`)
    .wait(1000)

.effect()
    .fadeIn(500)
    .file("jb2a.darkness.black")
    .belowTokens()
    .opacity(0.3)
    .size(canvas.grid.size * 5)
    .persist()
    .attachTo(casterToken)
    .name(`ShadowOfMoilDarkness`)

.play();
}