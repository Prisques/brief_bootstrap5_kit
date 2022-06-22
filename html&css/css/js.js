let icone = document.querySelector('.ndong');
let menu_cache = document.querySelector('.cycy');
icone.addEventListener('click',(e) =>{
    e.preventDefault();
    if(!menu_cache.classList.contains('.cycy2')){
        menu_cache.classList.add('cycy2')   
   }
   icone.addEventListener('click',() =>menu_cache.classList.remove('cycy2'))
});

