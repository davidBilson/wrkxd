let copyRightYear = document.querySelector('#copyright-year').textContent = new Date().getFullYear();

let mintMins = document.getElementById('mintMins');
let mintAdd = document.getElementById('mintAdd');
let x = 0;

mintAdd.addEventListener('click', function(){
    let mintNmb = document.getElementById('mintNmb').value = ++x; 
});
mintMins.addEventListener('click', function(){
    let mintNmb = document.getElementById('mintNmb').value = --x;
});

let popBtn = document.getElementById('mintBtn');
let modal = document.getElementById('myModal');
let span = document.getElementById('close');
let clos = document.getElementById('closeBtn');

popBtn.addEventListener('click', function(){
    modal.style.display = 'block';
});

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
};

span.addEventListener('click', function() {
    modal.style.display = 'none';
});

clos.addEventListener('click', function() {
    modal.style.display = 'none';
});
