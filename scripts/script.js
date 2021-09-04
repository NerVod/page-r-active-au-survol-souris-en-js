// écouter un événement et produire une action 

function  maFonction(e)
{
    alert('Roquet to Mars...')
}

document.querySelector('article[data-order="3"] > label').addEventListener('click', maFonction);
document.querySelector('article[data-order="3"] > label').addEventListener('click', e =>{alert('BooM !');});







// modifier en javascript l'apparence du texte selon événement de souris

let lesArticles = document.querySelectorAll ("article") ;

for (let articleEnCours of lesArticles)
{
    articleEnCours.addEventListener (
        'mouseenter', e => {
            e.currentTarget.style.fontWeight = 'bold';
            e.currentTarget.fontStyle = 'italic';
            e.currentTarget.style.color ='dodgerblue';
        }
    );
    articleEnCours.addEventListener (
        'mouseleave', e => {
            e.currentTarget.style.fontWeight = 'normal';
            e.currentTarget.style.fontStyle = 'normal';
            e.currentTarget.style.color = 'black';
        }
    );
}













// fonction pour modifier la taille du texte selon click bouton un ou bouton deux

function changeTaille(mode)
{
    let lesArticles = document.querySelectorAll('article > p');
    for(let articleEnCours of lesArticles)
    {
        articleEnCours.style.fontSize = mode =='gros' ? '130%' : '100%';
    }
}

// pose des écouteurs pour les boutons concernés
document
.querySelectorAll('nav > label')[1]
.addEventListener('click', e =>{changeTaille('gros');});
document
.querySelectorAll('nav > label') [2]
.addEventListener('click', e => {changeTaille('normal');});












/*
 //fonction pour changer apparence du texte après un clic pour signaler déjà lu

// cette fonction créé conflit avec fonctions précédentes


let lesArticles = document.querySelectorAll('article');

for (let articleEnCours of lesArticles)
{
    articleEnCours
    .addEventListener ('click',
    e => {
        e.target.style.fontStyle= "italic";
        e.target.style.color = 'gainsboro';
    }
    );
}
*/










// autrem manière de modifier le texte au clic en passant par l'élément parent
document
.querySelector('.articleContainer')
.addEventListener ('click' , e => {
    e.target.style.fontStyle = "italic";
    e.target.style.color = 'gainsboro';
});





// fonction pour passer les paragraphes en gris les uns parès les autres ( avec sortie console de la longueur de chaque fonction)






function passeElementEnGris(e)
{
    e.style.color = 'gainsboro';
}

function passeEnGris ()
{
    let lesArticles = document.querySelectorAll('article > p');
    let cpt = 0;
    for (let article of lesArticles)
    {
        console.log('passeEnGris', article.innerHTML.length);
        (function (art)
        {
            setTimeout(function(){passeElementEnGris(art);}, ++cpt * 1000);
        }
       ) (article);
    }
}
document.querySelector('nav #pageUne').addEventListener('click', passeEnGris);



