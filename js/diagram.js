let pc = 4.5;
let mac = 3.42;
let cb = 0.72;
let tuo1 = 200;
let tuo2 = 6;
let kulutus = (pc + mac + cb);
let kentta = document.getElementById("kentta");

document.getElementById("data").innerHTML = "(määrä * koneen kulutus * 6) + (määrä * koneen kulutus * 6) + (määrä * koneen kulutus * 6) kaavalla yhteis kulutus määrä on "
    + kulutus;

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
    let ajastin4;
    document.addEventListener('DOMContentLoaded', alusta);

    function alusta() {
        piirtoalusta = document.getElementById('kentta');
        konteksti = piirtoalusta.getContext('2d');

            palkki(50, 0, 25, 200, 'green', 100);
            palkki(100, 0, 25, 200, 'blue', 100);
            palkki(150, 0, 25, 200, 'red', 100);
            palkki(200, 0, 25, 200, 'purple', 100);

            pinta = 0;
            pinta2 = 0;
            pinta3 = 0;
            pinta4 = 0;

            ajastin = setInterval(function () {
                pinta++;
                piirra();
            }, 50);

            ajastin2 = setInterval(function () {
                pinta2++;
                piirra();
            }, 50);

            ajastin3 = setInterval(function () {
                pinta3++;
                piirra();
            }, 50);

            ajastin4 = setInterval(function () {
                pinta4++;
                piirra();
            }, 50);
    }

    function piirra() {
        if (pinta > tuo1) {
            clearInterval(ajastin);
        }

        if (pinta2 > kulutus) {
            clearInterval(ajastin2);
        }

        if (pinta3 > tuo2) {
            clearInterval(ajastin3);
        }
        
        if (pinta4 > kulutus) {
            clearInterval(ajastin4);
        }
        
        konteksti.clearRect(0, 0, piirtoalusta.width, piirtoalusta.height);
        palkki(50, 0, 25, 200, 'green', (100 - pinta));
        palkki(100, 0, 25, 200, 'blue', (100 - pinta2));
        palkki(150, 0, 25, 200, 'red', (100 - pinta3));
        palkki(200, 0, 25, 200, 'purple', (100 - pinta4));
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
})();