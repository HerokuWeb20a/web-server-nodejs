const { haeKaikkiVarastosta } = require('./apufunktiot');

module.exports = class Tietovarasto {
    haeKaikki() {
        return haeKaikkiVarastosta();
    }
}