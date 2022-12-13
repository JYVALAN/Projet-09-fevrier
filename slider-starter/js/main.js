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
// let sliders = [
//     {
//         title:'Graffiti par Joenomias',
//         image:'img/1.jpg',
//     },
//     {
//         title:'Rue urbaine par Wimkantona',
//         image:'img/2.jpg',
//     },
//     {
//         title:'Velo Vintage par _cristina',
//         image:'img/3.jpg',
//     },
//     {
//         title:"Escalier par Pasja1000",
//         image: 'img/4.jpg',
//     },
//     {
//         title:"Penang Asia par Onyva",
//         image: 'img/5.jpg',
//     },
//     {
//         title:"Artiste de rue par Wobbut",
//         image: 'img/6.jpg',
//     },
// ];

// let slider = document.querySelector('.slider-layout');

// class Slider{
//     constructor(title,image){
//         this.title = title
//         this.image = image
//     }
    
//     display(){
        
//             return `<figure class="slider-figure">
//             <img class="slider-picture" src="${this.image}" alt="">
//             <figcaption class="slider-legend">${this.title}</figcaption>
//           </figure>`;
        
//     }
// }

// let objSliders = []
// for(let i=0;i<sliders.length;i++){
//     let slide = new Slider(sliders[i].title,sliders[i].image);

//     objSliders.push(slide)
//     console.log(slide)

//     let html = slide.display();
//     slider.innerHTML += html;
    
// }
// let btnprev = document.querySelector('#prev')
// let btnnext = document.querySelector('#next')
// let pictures = document.querySelectorAll('.slider-figure')
// let active = 0;

// btnnext.addEventListener('onclick', function(){
//     // number = number + sens
//     for(i = 0; i<active, i++){
//        let pictures[i].classList.add("active");
//     }
//             // if (active < 0){
//             //     active = picture.length - 1;
//             // }    
    
//     // document.getElementById("next").src = pictures[i];
        
// })

// btnprev.addEventListener('onclick', function(sens){
//     number = number + sens
//     for(let picture of pictures){
//             if (number > 0){
//                 number = picture.length - 1;
//             }     
//     }
//     document.getElementById("prev").src = pictures[i];
        
// })
    
let items = document.querySelectorAll('.slider-figure');
let nbSlide = items.length;
let btnprev = document.querySelector('#prev');
let btnnext = document.querySelector('#next');
let playpause = document.querySelector('#play-pause')
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

setInterval("slidenext()", 4000);

function playpause()

function keypress(e){
    if(e.keyCode == '37'){
        slideprev()
    }
    else if(e.keyCode == '39'){
        slidenext()
    }
    else if (e.keyCode == '32'){

    }
}
document.addEventListener('keydown', keypress)
