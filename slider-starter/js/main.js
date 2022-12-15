'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

/**
 * Code principal : code JavaScript exécuté dès le chargement de la page
 *
 * Pour s'assurer que le DOM est chargé (puisqu'on va le manipuler), on écoute l'événement 'DOMContentLoaded'
 * sur le document entier. Cet événement est lancé lorsque le navigateur a terminé de constuire le DOM.
 *
 * https://developer.mozilla.org/fr/docs/Web/Events/DOMContentLoaded
 *
 * On utilise en général comme fonction gestionnaire d'événement associée une fonction anonyme car
 * on ne l'appellera jamais ailleurs nous-même.
*/

    
let items = document.querySelectorAll('.slider-figure');
let nbSlide = items.length;
let btnprev = document.querySelector('#prev');
let btnnext = document.querySelector('#next');
let btnplaypause = document.querySelector('#play-pause');
let btnrandom = document.querySelector('#random');
let count = 0;

function slidenext(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    }
    else{
        count = 0;
    }

    items[count].classList.add('active');
    console.log(count)
}
btnnext.addEventListener('click', slidenext)


function slideprev(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    }
    else{
        count = nbSlide - 1;
    }

    items[count].classList.add('active');
}
btnprev.addEventListener('click', slideprev)

let chrono
let play
function playpause(){
    if (!play){
        chrono = setInterval(slidenext, 2000);
        play = true
    }
    else{
        clearInterval(chrono)
        play = false
    }
}


let hasard
function aleatoire(){
    
    if(!hasard){
        chrono = Math.floor(Math.random(setInterval(, 2000)));
        hasard = true
    }
    else{
        clearInterval(chrono)
        hasard = false
    }
}

function keypress(e){
    if(e.keyCode == '37'){
        slideprev()
    }
    else if(e.keyCode == '39'){
        slidenext()
    }
    else if(e.keyCode == '32' ){
        playpause()
    }
}

document.addEventListener('keydown', keypress)
btnplaypause.addEventListener('click', playpause)
btnrandom.addEventListener('click', aleatoire)