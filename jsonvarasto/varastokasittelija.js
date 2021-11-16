const fs = require('fs').promises;

async function lueVarasto(varastoTiedosto) {
    try {
        const data = await fs.readFile(varastoTiedosto, 'utf8');
        return JSON.parse(data);
    } catch(err) {
        return [];
    }
}

async function kirjoitaVarasto(varastoTiedosto, data) {
    try {
        await fs.writeFile(varastoTiedosto, JSON.stringify(data, null, 4), {
            encoding:'utf8',
            flag:'w'
        });

        return true;
    } catch(err) {
        return false;
    }
}

module.exports = { lueVarasto, kirjoitaVarasto };