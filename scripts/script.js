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
    console.log('passeElementEnGris', e.innerHTML.length);
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

///////////////////////////////////////////////////////////////////////////////////

/*
// fonction pour remplacer un élément par un autre en conservant la numérotation
$('article > label').replaceWith(function (i, e) { return '<button class="realButton">' + e + '</button>';});
*/

///////////////////////////////////////////////////////////////////////////////////

/*
// remplacer un élément par le clone d'un autre (ex dupliquer un paragraphe à la place d'un autre)
$('article:eq(3)').replaceWith($('article:eq(0)').clone());
//article en position 3 (donc le 4°) sera remplacé par copie de l'article en position 0 (donc du premier)
/*

///////////////////////////////////////////////////////////////////////////////////

/*
// insertion d'un élément placé devant un autre ( ex insérer un praragraphe avec ".before") ( peut se faire après avec ".after")
$('article:eq(2)').before('<article><label>Nouvel Article</label><p>Ceci est un exemple d\'article 2bis.</p></article>');
//Article en position 2 pour référence        puis ajout d'un nouvel article qui prend place devant lui.
*/

///////////////////////////////////////////////////////////////////////////////////

/*
// autre méthode d'insertion de paragraphe / élément, avec '.insertAfter', 
$("<article><label>Article 3.5</label><p>Voici un nouvel article 3 bis.</p></article>").insertAfter("article:eq(2)");
//               prend en référence l'élément à ajouter                   puis la zone d'insertion
*/

///////////////////////////////////////////////////////////////////////////////////

/*
// fonction  pour supprimer conflit avec utilisation $ si plusieurs bibliothèques avec Jquery
jQuery.noConflict()
// l'alias $ est disponible et ne référence plus la fonction jQuery
let jQ = jQuery.noConflict()
//jQ() devient l'alias remplaçant $() et équivalent à la fonction jQuery()
*/


///////////////////////////////////////////////////////////////////////////////////

/*
//  fonction callback mouseenter puis mouseleave 
function callbackMe()
{
    console.log("Réaction à un événement Mouse enter !");
}

function callbackML()
{
    console.log("Réaction à un événement Mouse Leave !");
}

// pose d'écouteurs popur appel aux fonctions séparément
$('article > label')
.on("mouseenter", callbackMe);
$('article > label')
.on("mouseleave", callbackML);
*/

///////////////////////////////////////////////////////////////////////////////////

/*
// fonction callback avec retour différent selon l'événement écouté ( mouseenter ou mouseleave)
function callbackMEML(e)
{
    console.log("Réaction à un événement " + e.type);
}

$('article > label')
.on ("mouseenter mouseleave", callbackMEML) ;
*/

///////////////////////////////////////////////////////////////////////////////

/*
// fonction avec retour console du texte de l'action réalisée ( clic sur tel ou tel bouton)
function callback(e)
{
    console.log('Le bouton ' + $(e.currentTarget).text() + ' a été cliqué !');
}

$('nav').on('click', 'label', callback);
*/
