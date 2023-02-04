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

//Permet de mettre la classe active sur la photo à afficher
function active(){
    items[count].classList.toggle('active');
}

//Permet de passer à la photo suivante
function slidenext(){
    active(items[count])
    
    if(count < nbSlide - 1){
        count++;
    }
    else{
        count = 0;
    }
    active(items[count])
    
    console.log(count)
}


//Permet de passer à la photo précédente
function slideprev(){
    active(items[count])

    if(count > 0){
        count--;
    }
    else{
        count = nbSlide - 1;
    }

    active(items[count])
}

//Active le boutton play pause pour un défilement automatique
let chrono
let play = false
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

//Permet d'activer le bouton pour un défilement aléatoire
function aleatoire(){
    active(items[count])
    let hasard = Math.floor( Math.random()*items.length) //on stocke un nombre aléatoire entre 0 et la taille du tableau dans la variable hasard
    count = hasard
    active(items[count])
}

//Active les fonctionnalités des boutons avec les touches du clavier
document.addEventListener("keydown", function(event) {
        
    switch(event.code) {
        case "Space": 
        playpause()
        break
        case "ArrowLeft":
            slideprev()
            break
        case "ArrowRight":
            slidenext()
            break
    }
})

btnplaypause.addEventListener('click', playpause)
btnrandom.addEventListener('click', aleatoire)
btnnext.addEventListener('click', slidenext)
btnprev.addEventListener('click', slideprev)

//Je n'ai pas réussi à faire les puces du slider
let layout = document.querySelector('.slider-layout')
let listpuces = document.createElement('ul')
layout.appendChild(listpuces)
listpuces.classList.add("slider-dots")


for (let i = 0; i < items.length; ++i) {
    // const slider = items[i];
    let dot = document.createElement('li')
    
    listpuces.appendChild(dot);
    dot.addEventListener("click", dotClick);
        
    if(i==0){
        dot.classList.add("active-dot");
    }
        
}

function changedots(index){
    dot.forEach(function(dots){
        if(dots.getAttribute('data-index') = index){
            dots.classList.add("active-dot")
        }
        else{
            dots.classList.remove('active-dots')
        }
    })
}

function dotClick(event) {
    console.log('coucou')
    
}