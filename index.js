const http = require('http');
const path = require('path');

const { host, port, sivut } = require('./config.json');

const kirjastopolku = path.join(__dirname, 'kirjasto');
const { lue } = require(path.join(kirjastopolku, 'tiedostokasittelija'));
const { laheta, onJoukossa } = require(path.join(kirjastopolku, 'resurssilahettaja'));

const resurssiReitit = ['/tyylit/'];

const sivutkansio = path.join(__dirname, sivut.kansio);
const valikkoPolku = path.join(sivutkansio, sivut.valikko);
const paneeliPolku = path.join(sivutkansio, sivut.paneeli);
const piirustusPolku = path.join(sivutkansio, sivut.piirustus);

const server = http.createServer(async (req, res) => {
    const { pathname } = new URL(`http://${host}:${port}${req.url}`);
    const reitti = decodeURIComponent(pathname);
    const metodi = req.method.toUpperCase();

    if (metodi === 'GET') {
        try {
            if (reitti === '/') {
                laheta(res, await lue(valikkoPolku), 200);
            } else if (reitti === '/paneeli') {
                laheta(res, await lue(paneeliPolku), 200);
            } else if (reitti === '/piirustus') {
                laheta(res, await lue(piirustusPolku), 200);
            } else if (onJoukossa(reitti, ...resurssiReitit)) {
                const resurssi = await lue(path.join(__dirname, reitti));
                laheta(res, resurssi, 200);
            }
        } catch(err) {
            console.log(`[ERROR]: ${err}`);
        }
    } else {
        console.log('[ERROR]: Metodi ei ole käytössä!');
    }
});

server.listen(port, (err) => {
    if (!err) {
        console.log(`Listening server ${host}:${port}`);
    } else {
        console.log(`[ERROR]: ${err}`);
    }
});