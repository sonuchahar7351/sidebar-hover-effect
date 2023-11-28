let sidebar=document.querySelector('.sidebar');
let closebtn=document.querySelector('#btn');
let search=document.querySelector(".bx-search");


closebtn.addEventListener('click',()=>{
    sidebar.classList.toggle("open");
    menubtnchange();
})

function menubtnchange(){
     if(sidebar.classList("open")){
       closebtn.classList.replace("bx-menu","bx-menu-alt-right");
     }
     else{
        closebtn.classList.replace("bx-menu-alt-right","bx-menu")
     }
}

search.addEventListener('click',()=>{
     sidebar.classList.toggle('open');
     menubtnchange();
})