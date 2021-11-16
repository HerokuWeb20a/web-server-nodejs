function laheta(res, data, statuskoodi) {
    res.writeHead(statuskoodi, {
        'Content-Type': data.tiedosto.tyyppi,
        'Content-Length': Buffer.byteLength(data.tiedostoData, data.tiedosto.koodaus)
    });

    res.end(data.tiedostoData, data.tiedosto.koodaus);
}

function lahetaJson(res, jsonresurssi, statuskoodi) {
    const jsonData = JSON.stringify(jsonresurssi);

    res.writeHead(statuskoodi, {
        'Content-Type':'application/json'
    });

    res.end(jsonData);
}

function onJoukossa(reitti, ...reittienAlkuosat) {
    for (let alku of reittienAlkuosat) {
        if (reitti.startsWith(alku)) {
            return true;
        }
    }

    return false;
}

module.exports = { laheta, onJoukossa, lahetaJson };