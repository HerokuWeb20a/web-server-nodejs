const path = require('path');
const varastoTiedostoPolku = path.join(__dirname, '/paneeli.json');
const { lueVarasto, kirjoitaVarasto } = require('./varastokasittelija');

async function haeKaikkiVarastosta(){
    return lueVarasto(varastoTiedostoPolku);
}

module.exports = { haeKaikkiVarastosta };