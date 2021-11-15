(function(){

    document.addEventListener('DOMContentLoaded', alusta);

    async function alusta(){
        try{
            const data = await fetch('/paneeli'); 
            const paneelit = await data.json();
            const paneeliData=document.getElementById('paneeliData');
            for(let paneeli of paneelit){
                const tr = document.createElement('tr');
                tr.appendChild(teeSolu(paneeli.id));
                tr.appendChild(teeSolu(paneeli.pvm_1));
                tr.appendChild(teeSolu(paneeli.tuotanto_1));
                tr.appendChild(teeSolu(paneeli.paiste_1));
                tr.appendChild(teeSolu(paneeli.pvm_2));
                tr.appendChild(teeSolu(paneeli.tuotanto_2));
                tr.appendChild(teeSolu(paneeli.paiste_2));
                paneeliData.appendChild(tr);
            }

        }
        catch(virhe){
            document.getElementById('viestialue').innerHTML=`
            <p class="virhe">${virhe.message}</p>`;
        }
    }

    function teeSolu(tieto){
        const td = document.createElement('td');
        td.textContent=tieto;
        return td;
    }

})();