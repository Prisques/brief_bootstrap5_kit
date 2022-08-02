let icone = document.querySelector('.ndong');
let menu_cache = document.querySelector('.cycy');
icone.addEventListener('click',(e) =>{
    e.preventDefault();
    if(!menu_cache.classList.contains('.cycy2')){
        menu_cache.classList.add('cycy2')   
   }
   icone.addEventListener('click',() =>menu_cache.classList.remove('cycy2'))
});

let bouton_du_bas = document.querySelector('.message');
let form1 = document.querySelector('#form1');



bouton_du_bas.addEventListener('click',() =>{
    form1.style.display = 'block';
    if(form1.style.display == 'block'){
        bouton_du_bas.addEventListener('click', () => form1.style.display= 'none')
    }
});
