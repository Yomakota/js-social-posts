// Descrizione:

// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano(mm - gg - yyyy),
// - testo del post,
// - immagine(non tutti i post devono avere una immagine),
// - numero di likes.

// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano(mm - gg - yyyy),
// - testo del post,
// - immagine(non tutti i post devono avere una immagine),
// - numero di likes.


// Creiamo il nostro array di oggetti che rappresentano ciascun post.
const posts = [

    {
        id: 1,
        author: {
            name: 'Phil Mangione',
            image_profile: 'https://unsplash.it/300/300?image=15',
        },
        date: '06-25-2021',
        text_post: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        photo_post: 'https://unsplash.it/600/300?image=171',
        likes: 80
    },
    {
        id: 2,
        author: {
            name: 'Sofia Perlari',
            image_profile: 'https://unsplash.it/300/300?image=1',
        },
        date: '9-3-2021',
        text_post: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        photo_post: 'https://unsplash.it/600/300?image=28',
        likes: 120
    },
    {
        id: 3,
        author: {
            name: 'Giulio Cesare',
            image_profile: 'https://unsplash.it/300/300?image=34',
        },
        date: '10-5-2021',
        text_post: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        photo_post: 'https://unsplash.it/600/300?image=33',
        likes: 55
    },
    {
        id: 4,
        author: {
            name: 'Marco Antonio Lopez',
            image_profile: 'https://unsplash.it/300/300?image=55',
        },
        date: '11-9-2021',
        text_post: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        photo_post: 'https://unsplash.it/600/300?image=82',
        likes: 110
    },
    {
        id: 5,
        author: {
            name: 'Luca Formicola',
            image_profile: null,
        },
        date: '12-6-2021',
        text_post: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        photo_post: 'https://unsplash.it/600/300?image=67',
        likes: 235
    },

];

drawAllPosts(posts);

// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

//-----------------
//EVENTS LISTENERS
//-----------------


// seleziono dal DOM e li salvo in una variabile js i button per Mi piace e il contenuto del counter
const likeBtn = document.querySelectorAll('.js-like-button');
const likeCounter = document.querySelectorAll('.js-likes-counter');

// ciclo for per prendere singolarmente i button e salvarli in una variabile
for(let i = 0; i < likeBtn.length; i++) {
    const singleLikeBtn = likeBtn[i];

    // al click
    singleLikeBtn.addEventListener('click', function(event) {

        // preventDefault per togliere l'atteggiamneto di default di
        event.preventDefault();

        // solo se singleLikeBtn non contiene la classe 'like-button--liked'
        if (!this.classList.contains('like-button--liked')) {
            // aggiungo la classe 'like-button--liked'
            this.classList.add('like-button--liked');

            // prendo il singolo elemento di likeCounter
            const singleLikeCounter = likeCounter[i];
            // converto il suo contenuto in numero per poterlo incrementare
            let likeCounterNum = parseInt(singleLikeCounter.innerHTML);
            // incremento di 1
            likeCounterNum++;
            // e lo sostituisco col valore incrementato
            singleLikeCounter.innerHTML = likeCounterNum;
        }
    });
}

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

//-----------
//Functions
//-----------

function drawAllPosts(array) {

    const container = document.getElementById('container');

    // stampo ogni post presente nell'array nel DOM con un ciclo for
    for (let i = 0; i < array.length; i++) {
        const elementPost = array[i];

        // uso la mia funzione per creare il template del post in modo dinamico
        const postTemplate = createTemplatePost(elementPost);

        // inserisco nel DOM
        container.innerHTML += postTemplate;
    }

}

function createTemplatePost ({id, author, date, text_post, photo_post, likes}) {

    let image_profile = (!author.image_profile) ? `<div class = 'profile-pic-default'>${author.name}</div>` : `<img class="profile-pic-default" src="${author.image_profile}" alt="${author.name}"></img>`;


    const postTemplate =
        `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${image_profile}
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${text_post}</div>
            <div class="post__image">
                <img src="${photo_post}" alt="${author.name}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
    return postTemplate;
}