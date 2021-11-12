'use strict';

const path = require('path');

const { varastotiedosto } = require('./varastoConfig.json');

const varastoTiedostoPolku = path.join(__dirname,varastotiedosto);

const { lueVarasto, kirjoitaVarasto } = require('./varastokasittelija');

async function haeKaikkiVarastosta(){
    return lueVarasto(varastoTiedostoPolku);
}

module.exports = {
    haeKaikkiVarastosta
}