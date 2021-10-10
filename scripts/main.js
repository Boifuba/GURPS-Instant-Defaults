import GurpsWiring from '/systems/gurps/module/gurps-wiring.js'
import {parselink} from '/systems/gurps/lib/parselink.js'

function parseOtF(otf) {
    return parselink(otf.trim().match(/\[(.+)\]/)[1]).text
}
function hookUp(html) {
    GurpsWiring.hookupGurps(html);
    GurpsWiring.hookupGurpsRightClick(html);
}

async function skillChooser() {
    const compendium = game.packs.get("gurps-instant-defaults.Defaults");
    const journal = (await compendium.getDocuments())[0];
    const content = $(journal.data.content);
    const otfRows = [...content.find('tr')].filter(e => e.innerText.trim().startsWith('["'))

    const rowsProcessed = otfRows.map(r => ({otf: r.children[0].innerText, reference: r.children[1].innerText}));
    rowsProcessed.forEach(r => r.name = r.otf.trim().match(/^\["(?<name>[^"]+)"/).groups.name.toLowerCase());

    function getFilteredOtfs(key) {
        return rowsProcessed.filter(r => r.name.includes(key)).map(r => `<p>
            ${parseOtF(r.reference)}
            ${parseOtF(r.otf)}
        </p>`).join('\n');
    }

    const dialogHtml = await new Promise(resolve => {
        new Dialog({
        title: 'Skill Chooser',
        content: `<input id="filter">
    <div id="result">${getFilteredOtfs('')}</div>`,
        buttons: {},
        render: html => {
            hookUp(html);
            resolve(html);
        },
    }, {height:500}).render(true);
    })
    const resultElement = dialogHtml.find('#result')[0]
    dialogHtml.find('#filter').on('input',function(e){
        resultElement.innerHTML = getFilteredOtfs(e.target.value);
        hookUp($(resultElement));
    });
}

window.InstantDefaults = {skillChooser}