const div = document.querySelector('lang');
const btns = div.getElementsByClassName('btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        let current = document.getElementsByClassName('active');

        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    });
}