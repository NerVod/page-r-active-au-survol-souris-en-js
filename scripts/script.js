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
// fonction avec retour text de l'action réalisée ( clic sur tel ou tel bouton)
function callback(e)
{
    console.log('Le bouton ' + $(e.currentTarget).text() + ' a été cliqué !');
}

$('nav').on('click', 'label', callback);

//    si ajout d'un nouveau bouton, par délégation d'vénement, la fonction call backréagit toujours via le même écouteur posé
$('nav').append('<label>Bouton trois</label>');
*/


///////////////////////////////////////////////////////////////////////////////



/*
//fonction pour modifier l'apparence d'un élément par "trigger" quand une condition est remplie

function verifierSiArticleNonLu()
{
    return $('article:not(.articleLu)').length > 0;
}

function marquerArticle(e)
{
    $(e.currentTarget).addClass('articleLu');
    if(!verifierSiArticleNonLu()) // S'il n'y a rien a lire on déclenche
    {
        $('.articleContainer').trigger('ToutEstLu');
    }
}

//pose d'un écouteur en délégation  pour marquer les articles
$('.articleContainer').on('click', 'article', marquerArticle);

//puis pose d'un écouteur  sur l'événement personalisé
$('.articleContainer').on('ToutEstLu', e => {$('article').css('color', 'tomato'); console.log('Vous avez lu tous les articles de la page !');})
*/

////////////////////////////////////////////////////////////////////////////////

/*
// fonction .hide() pour masquer un élément HTML avec durée d'animation
//     $('article:eq(2)').hide(2000);

// autre méthode avec fonction callback a exécuter à la fin de l'animation ( ici cacher chap 1 une fois que  chap3 est chaché )
$('article:eq(2)').hide(3000, 'linear', e => {$('article:eq(0)').hide(2000);});

*/
////////////////////////////////////////////////////////////////////////////////

/*
// fonction fadeTo pour modifier l'opacité des éléments
$('article:lt(2)').fadeTo(2000, .6);
$('article:gt(2)').fadeTo(2000, .2);
*/

////////////////////////////////////////////////////////////////////////////////

/*
// fonction .animate() pour modifier un élément selon timing souhaité
$('article>p:eq(3)').animate({width: 660, fontSize: 24}, 2000);
*/

////////////////////////////////////////////////////////////////////////////////

/*
// autre exemple fonction animate: grossissement bordure top

$('.articleContainer').css('borderTop', 'solid 1px dodgerblue');// initialisation de la bordure si pas présente en CSS
$('.articleContainer').animate({borderTopWidth: 12}, 2000);
// ensuite animation sur la bordure qui s'épaissit pendant 2 secondes
*/


////////////////////////////////////////////////////////////////////////////////
                // CHAINAGE DE FONCTIONS .queue() et .dequeue()
/*
// chainage de fonctions sur une seule ligne de code qui revient à la méthode .queue()
$('article:eq(2)').slideUp(6000).fadeIn(15000);
*/
/*
// chainage de fonctions via fonction .queue()
$('article:eq(2)').queue(function() {console.log('Animation terminée !');$(this).css('backgroundColor', 'red');});
*/


/*
// chainage de fonctions en queue puis forçage du passage après l'éxécution de la fonction callback
// pour la dernière fonction avec .dequeue()
$("article:eq(3)")
.animate({height: "+=200px"}, 2500)
.queue(function() {
    $(this).css("background", "red");
                    }
        )
        .dequeue()      // fonction suivante non gérée si pas acticée par .dequeue()
        .animate({height: "-=200px"}, 1000);

*/

////////////////////////////////////////////////////////////////////////////////


