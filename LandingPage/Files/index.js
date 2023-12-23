


var storeMenu=document.querySelector(".menu"); 
var storeOpenIcon=document.querySelector(".fa-bars-staggered");   
var storeCloseIcon=document.querySelector(".fa-circle-xmark"); 


function opneMenu(){
  storeMenu.style.display="block"
  storeOpenIcon.style.display="none"
  storeCloseIcon.style.display="block" 
}

function closeMenu(){
	 storeMenu.style.display="none";
   storeOpenIcon.style.display="block"
}