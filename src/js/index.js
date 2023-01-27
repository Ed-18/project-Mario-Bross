/* 



*/

console.log('', document);

console.log (document.querySelector('.button-trailer'));

// passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS

const botaoTrailer = document.querySelector('.button-trailer');
console.log(botaoTrailer);
const video = document.getElementById("video");
const modal = document.querySelector('.modal');
const closeButtonModal = document.querySelector('.close-modal');
const linkVideo = video.src;





// passo 2 - identificar quando o usuário clicar no botão

botaoTrailer.addEventListener("click", () =>{
   // passo 4 - abrir a "modal" na tela
   modal.classList.add("open");
   video.setAttribute("src" , linkVideo)
   
    
} );

// passo 3 - pegar o elemento "modal" no JS



// SEGUNDO OBJETIVO

// passo 1 - pegar o elemento para fechar a modal "close-button" no JS



// passo 2 - identificar quando o usuário clicar no "X"

closeButtonModal.addEventListener('click',() =>
{

// passo 3 - fechar a modal
modal.classList.remove("open");
video.setAttribute("src" , "");

});


