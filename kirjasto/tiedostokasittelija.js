const fs = require('fs').promises;
const path = require('path');

const tiedostotyypit = {
    '.html': { tyyppi: 'text/html', koodaus: 'utf8' },
    '.js': { tyyppi: 'text/javascript', koodaus: 'utf8' },
    '.css': { tyyppi: 'text/css', koodaus: 'utf8' },
    '.json': { tyyppi: 'application/json', koodaus: 'utf8' },
    '.png': { tyyppi: 'image/png', koodaus: 'binary' },
    '.ico': { tyyppi: 'image/vnd.microsoft.icon', koodaus: 'binary' }
}

function lue(polku) {
    const extension = path.extname(polku).toLowerCase();
    const tiedosto = tiedostotyypit[extension] || { tyyppi: 'application/octet-stream', koodaus: 'binary' };

    return new Promise(async (resolve, reject) => {
        try {
            const tiedostoData = await fs.readFile(polku, tiedosto.koodaus);
            resolve({tiedostoData, tiedosto})
        } catch(err) {
            reject(err);
        }
    });
}

module.exports = { lue };