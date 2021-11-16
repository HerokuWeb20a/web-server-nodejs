const { haeKaikkiVarastosta } = require('./varastoapu');

module.exports = class Tietovarasto {
    haeKaikki() {
        return haeKaikkiVarastosta();
    }
}