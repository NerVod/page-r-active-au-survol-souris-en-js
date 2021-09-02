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