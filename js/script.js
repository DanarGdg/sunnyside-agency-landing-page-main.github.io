const chk = document.getElementById('chk');
const hamburger = document.getElementById('hamburger');
const ul = document.getElementById('ul');

hamburger.addEventListener('click', function() {
    if(chk.checked == false){
        ul.classList.add('slide')
    }else{
        ul.classList.remove('slide')
    }
})