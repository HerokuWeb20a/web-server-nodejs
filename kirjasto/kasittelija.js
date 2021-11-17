function muodostaOlio(arvot) {
    const avaimet = {};

    for (let kentta of Object.keys(arvot)) {
        if (typeof arvot[kentta] === 'object') {
            for (let avain of Object.keys(arvot[kentta])) {
                avaimet[`##${kentta.toUpperCase()}.${avain.toUpperCase()}##`] = arvot[kentta][avain];
            }
        } else {
            avaimet[`##${kentta.toUpperCase()}##`] = arvot[kentta];
        }
    }

    return avaimet;
}

function muodostaSivu(sivu, olio) {
    for (let kentta of Object.keys(olio)) {
        do {
            sivu = sivu.replace(kentta, olio[kentta]);
        } while(sivu.indexOf(kentta) > 0);
    }

    return sivu;
}

function muodostaRivit(taulukko) {
    let rivit = '';

    for (let alkio of taulukko) {
        rivit += '<tr>';

        for (let soluarvo of Object.values(alkio)) {
            rivit += `<td>${soluarvo}</td>`;
        }
        
        rivit += '</tr>\n';
    }

    return rivit;
}

module.exports = { muodostaOlio, muodostaSivu, muodostaRivit };