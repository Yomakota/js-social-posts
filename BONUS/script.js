// BONUS
// 1. Formattare le date in formato italiano(gg / mm / aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

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

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

const container = document.getElementById('container');

// stampo ogni post presente nell'array nel DOM con un ciclo for
for (let i = 0; i < posts.length; i++) {
    const elementPost = posts[i];

    // uso la mia funzione per creare il template del post in modo dinamico
    const postTemplate = createTemplatePost(elementPost);

    // inserisco nel DOM
    container.innerHTML += postTemplate;
}

// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


const likeBtn = document.querySelectorAll('.js-like-button');
const likeCounter = document.querySelectorAll('.js-likes-counter');

// ciclo for per prendere singolarmente i button e salvarli in una variabile
for (let i = 0; i < likeBtn.length; i++) {
    const singleLikeBtn = likeBtn[i];

    singleLikeBtn.addEventListener('click', function (event) {
    event.preventDefault();

        const singleLikeCounter = likeCounter[i];
        let likeCounterNum = parseInt(singleLikeCounter.innerHTML);

        if (!this.classList.contains('like-button--liked')) {
            this.classList.add('like-button--liked');
            likeCounterNum++;
        
        } else { 
            this.classList.remove('like-button--liked');
            likeCounterNum--;
        }
        singleLikeCounter.innerHTML = likeCounterNum;
    });
}

//-----------
//Functions
//-----------

function createTemplatePost({ author, date, text_post, photo_post, likes }) {

    // operatore ternario
    let image_profile = (!author.image_profile) ? `<div class = 'profile-pic-default'>${initialsUserName(author.name)}</div>` : `<img class="profile-pic-default" src="${author.image_profile}" alt="${author.name}"></img>`;


    const postTemplate =
        `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${image_profile}
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time">${localDate(date)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${text_post}</div>
            <div class="post__image">
                <img src="${photo_post}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
    return postTemplate;
}

// 1. Formattare le date in formato italiano(gg / mm / aaaa)
function localDate(date) {

    // divido la stringa date in sottostringhe
    const userDate = date.split('-');

    // e le riordino in formato italiano
    let newDate = userDate[1] + '-' + userDate[0] + '-' + userDate[2];

    return newDate;
}

// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
function initialsUserName(name) {

    // divido la stringa del nome
    const userName = name.split(' ');

    let initialsUser = '';

    // con un ciclo for prendo solo le lettere in posizione '0' e li salvo in una variabile con stringa vuota
    for (let i = 0; i < userName.length; i++) {
        
        const elements = userName[i];
        initialsUser += elements[0];
    }
    return initialsUser;
}

