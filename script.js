//fonctionalité 1 

const footer = document.querySelector('footer');
let clic = 0;

footer.addEventListener("click", function(){
    clic ++;
    console.log('clique' + clic)
});

//fonctionalité 2

const navbarHeader = document.querySelector('#navbarHeader');
const hamburgerBtn = document.querySelector('.navbar-toggler');


hamburgerBtn.addEventListener("click", function(){
    navbarHeader.classList.toggle('collapse');
});

//fonctionalité 3

const card1 = document.querySelector("body > main > div > div > div > div:nth-child(1)");
const editBtn1 = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

editBtn1.addEventListener("click", function(){
    card1.style.color = "red";
});

//fonctionalité 4

const card2 = document.querySelector("body > main > div > div > div > div:nth-child(2)");
const editBtn2 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

editBtn2.addEventListener("click", function(){
    if (card2.style.color === ''){
        card2.style.color = 'red' ;
    }else if(card2.style.color === 'red'){
        card2.style.color = '' ;
    }
});

//fonctionalité 5

const bootstrap = document.querySelector("head > link");
const navbar = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow");

navbar.addEventListener("dblclick", function(){
    bootstrap.remove();
});

//fonctionalité 6

// Sélection de toutes les cards
const cards = document.querySelectorAll('.card');

// Fonction pour gérer le survol sur une card
function handleCardHover(card) {
  // Sélection des éléments à modifier dans la card
  const text = card.querySelector('.card-text');
  const image = card.querySelector('img');
  const viewBtn = card.querySelector('.btn')
  // Ajout d'un écouteur d'événement au survol d un bouton view
  viewBtn.addEventListener('mouseover', function() {
    if(text.style.display === ''){
        text.classList.toggle('collapse');
        image.style.transform = 'scale(0.2)';
    }else{
        text.classList.toggle('');
        image.style.transform = '';
    }
  });
}

// Boucle pour appliquer l'interaction à toutes les cards
for (let i = 0; i < cards.length; i++) {
  handleCardHover(cards[i]);
}

//fonctionnalité 7


// Sélection du bouton gris (==>)
const rotateButton1 = document.querySelector("body > main > section > div > p > a.btn.btn-secondary.my-2");

// Sélection du noeud-parent des cards
const cardContainer = document.querySelector("body > main > div > div > div > div:nth-child(6)").parentNode

// Fonction pour effectuer la rotation des cards
function rotateCards() {
  // Sélection de la dernière card
  const lastCard = cardContainer.lastElementChild;

  // Déplacement de la dernière card en premier
  cardContainer.insertBefore(lastCard, cardContainer.firstElementChild);
}

// Ajout d'un écouteur d'événement au clic sur le bouton de rotation
rotateButton1.addEventListener('click', rotateCards);


//fonctionnalité 8


const rotateButton2 = document.querySelector("body > main > section > div > p > a.btn.btn-primary.my-2");

rotateButton2.addEventListener('click', function(e){
    e.preventDefault()
});

//fonctionnalité 9

const brand = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > a");
const body = document.querySelector("body");

brand.addEventListener("keypress", function(e) {
    e.preventDefault()
    console.log(e.code)
    if(e.code == "KeyA"){
        body.classList.add('col-4')
    } else if(e.code == "KeyY"){
        body.classList.add('offset-md-4')
    } else if(e.code == "KeyP"){
        body.classList.add('offset-md-8')
    } else if(e.code == "KeyB"){
        body.classList.add('col-12')
    } 
})


