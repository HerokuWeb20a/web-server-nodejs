'use strict';
(function () {
    let piirtoalusta;
    let konteksti;
    let pinta = 0;
    let pinta2 = 0;
    let pinta3 = 0;
    let pinta4 = 0;
    let ajastin;
    let ajastin2;
    let ajastin3;
    let nayta = document.getElementById('nayta');
    document.addEventListener('DOMContentLoaded', alusta);

    function alusta() {
        piirtoalusta = document.getElementById('canvas');
        konteksti = piirtoalusta.getContext('2d');

            palkki(150, 0, 50, 100, 'green', 100);
            palkki(250, 0, 50, 100, 'blue', 100);
            palkki(350, 0, 50, 100, 'red', 100);
            palkki(450, 0, 50, 100, 'red', 100);

            pinta = 0;
            pinta2 = 0;
            pinta3 = 0;
            pinta4 = 0;

    function piirra() {
        if (pinta > document.getElementById('eka').value) {
        }
        if (pinta2 > document.getElementById('toka').value) {
        }
        if (pinta3 > document.getElementById('kolmas').value) {
        }
        
        if (pinta4 > document.getElementById('neljäs').value) {
        }
        konteksti.clearRect(0, 0, piirtoalusta.width, piirtoalusta.height);
        palkki(150, 0, 50, 100, 'green', (250 - pinta));
        palkki(250, 0, 50, 100, 'blue', (10 - pinta2));
        palkki(350, 0, 50, 100, 'red', (10 - pinta3));
        palkki(450, 0, 50, 100, 'red', (10 - pinta4));
    }
    

    function palkki(x, y, leveys, korkeus, vari, pinta) {
        konteksti.save();
        konteksti.translate(x, y);
        konteksti.beginPath();
        konteksti.rect(0, 0, leveys, korkeus);
        konteksti.clip();
        konteksti.stroke();
        konteksti.fillStyle = vari;
        konteksti.fillRect(0, pinta, leveys, korkeus);
        konteksti.restore();
    }
}
})();