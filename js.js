let myContent = `<style>
    /* Adicionando estilo ao botão */
    button {
        cursor: pointer;
    }

    /* Adicionando estilo ao input de texto */
    #bananas input[type=text] {
        padding: 12px 20px;
        border: 1px solid #9D0C051;
        border-radius: 4px;
        box-sizing: border-box;
        background-color:rgba(1,0,0,0.1);
        margin-top:2px;
        margin-left: 2px;
        text-align: center;
        
        font-style: italic;
    }

    /* Criando o grid */
    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        border-color: rgba(154,0,0,0.2);
    }

    fieldset {
        background-color:rgba(1,0,0,0.1);
    margin-top: 20px;
            border: 1px solid #9D0C051;
        border-radius: 4px;

}

legend {
  color: rgba(1,0,0,1);
  padding: 5px 10px;
          border: 1px solid #9D0C051;
        border-radius: 4px;
}

</style>

<div class="grid-container">

    <div>
        <button id="button1">has
        </button>
        <input type="text" id="input1" placeholder="Item name">
    </div>

    <div>
        <button id="button2">skill</button>
        <input type="text" id="input2" placeholder="Skill name">
    </div>

     <div>
        <button id="button5">reaction</button>
        <input type="text" id="input5" placeholder="modifier">
    </div>

    <div>
        <button id="button6">odds</button>
        <input type="text" id="input6" placeholder="Success chance">
    </div>

    
    <div>
        <button id="button8">setsize</button>
        <input type="text" id="input8" placeholder="Size">
    </div>

    <div>
        <button id="button9">lights</button>
        <input type="text" id="input9" placeholder="on|off">
    </div>
   
    <div>
        <button id="button12">ra</button>
        <input type="text" id="input12" placeholder="Insert NH">
    </div>
    <div>
        <button id="button17">darkness</button>
        <input type="text" id="input17" placeholder="Modifier">
    </div>
</div>



  <fieldset>
    <legend>Personalia:</legend>
<div class="grid-container">

    <div>
        <button id="button4">
        <img src="icons/sundries/flags/banner-symbol-sun-gold-red.webp" style="margin-top: 5px;">
        showimage</button>
    </div>
  <div>
        <button id="button3">
        <img src="icons/skills/movement/figure-running-gray.webp" style="margin-top: 5px;">
        dodge</button>
    </div>

    <div>
        <button id="button7">
        <img src="icons/magic/death/blood-corruption-vomit-red.webp" style="margin-top: 5px;">
        disads</button>
    </div>
<div>
        <button id="button13">
        <img src="icons/magic/perception/shadow-stealth-eyes-purple.webp" style="margin-top: 5px;">
        sight</button>
        </div>
    <div>
        <button id="button14">
        <img src="icons/magic/defensive/illusion-evasion-echo-purple.webp" style="margin-top: 5px;">
        inv</button>
    </div>
    <div>
        <button id="button15">
        <img src="icons/sundries/flags/banner-yellow.webp" style="margin-top: 5px;" >
        GID</button>
    </div>
     <div>
        <button id="button16">
                <img src="icons/magic/symbols/ring-circle-smoke-blue.webp" style="margin-top: 5px;" >
                circle</button>
    </div>
        <div>
        <button id="button18">
                <img src="icons/magic/symbols/ring-circle-smoke-blue.webp" style="margin-top: 5px;" >
                light</button>
    </div>
    </div>
  </fieldset>



`

new Dialog({
  title: "YES! We have Bananas!",
  content: myContent,
  buttons: {},
  render: async (html) => listeners(html),
}, {
  resizable: true,
  id: "bananas",
  width: 400,
  height: 480,
}).render(true);


async function listeners(html) {
  // Ouvinte do Botão 1
  html.find("#button1").on("click", () => {
    let input1 = html.find("#input1").val();
    GURPS.executeOTF("/has " + input1);
  });

  // Ouvinte do Botão 2
  html.find("#button2").on("click", () => {
    let input2 = html.find("#input2").val();
    GURPS.executeOTF("/skill " + input2);
  });

  // Ouvinte do Botão 3
  html.find("#button3").on("click", () => {
    let input3 = html.find("#input3").val();
    GURPS.executeOTF("/dodge " + input3);
  });

  // Ouvinte do Botão 4
  html.find("#button4").on("click", () => {
    let input4 = html.find("#input4").val();
    GURPS.executeOTF("/showimage " + input4);
  });

 // Ouvinte do Botão 5
html.find("#button5").on("click", async () => {
  const table = game.tables.get("pczXgE5wTi6GS0dO");
  let input5 = html.find("#input5").val();
  let roll = new Roll(`3d6 + ${input5}`);
  await table.draw({roll});
});


  // Ouvinte do Botão 6
  html.find("#button6").on("click", () => {
    let input6 = html.find("#input6").val();
    GURPS.executeOTF("/odds " + input6);
  });

  // Ouvinte do Botão 7
  html.find("#button7").on("click", () => {
    let input7 = html.find("#input7").val();
    GURPS.executeOTF("/disads " + input7);
  });

  // Ouvinte do Botão 17
  html.find("#button17").on("click", () => {
    console.log("oi")
    let input17 = html.find("#input17").val();
    let tokens = canvas.tokens.controlled

    if (tokens && tokens.length > 0) {
      // create a new effect
      let effect = {
        icon: 'systems/gurps/icons/statuses/light.png',
        id: 'shadow',
        label: 'Shadow',
        changes: [{
          key: 'data.conditions.target.modifiers',
          value: `${input17}  Darkness`,
          mode: 2 // ADD
        }]
      }

      for (let token of tokens) {
        token.toggleEffect(effect)
      }
    }
  });

  // Ouvinte do Botão 8
  html.find("#button8").on("click", () => {
    let input8 = html.find("#input8").val();
    GURPS.executeOTF("/setsize " + input8);
  });

  // Ouvinte do Botão 9
  html.find("#button9").on("click", () => {
    let input9 = html.find("#input9").val();
    GURPS.executeOTF("/lights " + input9);
  });

  // Ouvinte do Botão 12
  html.find("#button12").on("click", () => {
    let input12 = html.find("#input12").val();
    GURPS.executeOTF(`/ra ${input12}`);
  });

  // Ouvinte do Botão 13
  html.find("#button13").on("click", () => {
    GURPS.executeOTF("/sight");
  });

  // Ouvinte do Botão 14
  html.find("#button14").on("click", () => {
    let active = !GURPS.LastActor.effects.some(e => e.flags.core.statusId === "invisible");
    GURPS.LastTokenDocument.toggleActiveEffect({ id: "invisible", icon: "icons/svg/invisible.svg", label: "EFFECT.StatusInvisible" }, { active: active });
  });

  // Ouvinte do Botão 15
  html.find("#button15").on("click", () => {
    InstantDefaults.skillChooser();
  });


  // Ouvinte do Botão 16
  html.find("#button16").on("click", () => {
    let tokens = canvas.tokens.controlled;
for(let token of tokens){
    
    const effects = Sequencer.EffectManager.getEffects({
        name: "*bordinha*",
        object: token,
    });
    if (effects.length) {
        console.log("removing effect")
        Sequencer.EffectManager.endEffects({ name: "*bordinha*", object: token });
    }
    else {
        new Sequence()
            .effect()
            .file(`/modules/gurps-instant-defaults/packs/borders/sides.webm`)
            .attachTo(token)
            .scale(0.37)
            .atLocation(token)
            .persist()
            .name("bordinha")
            .play();
    }
}})

 // Ouvinte do Botão 18
   html.find("#button18").on("click", () => {
    console.log("Hello World!")
       canvas.lighting.updateAll(light => ({hidden: !light.document.hidden})); 
  });



}

  
