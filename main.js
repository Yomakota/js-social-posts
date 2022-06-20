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
        photo_post: 'https://unsplash.it/600/300?image=2',
        likes: 120
    },

];

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

const container = document.getElementById('container');

// stampo ogni post presente array nel DOM con un ciclo for
for (let i = 0; i < posts.length; i++) {

    const elementPost = posts[i];
     
    // creo template dinamico
    const postTemplate = 

        `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${elementPost.author.image_profile}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${elementPost.author.name}</div>
                        <div class="post-meta__time">${elementPost.date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="${elementPost.photo_post}" alt="">
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
                        Piace a <b id="like-counter-1" class="js-likes-counter">${elementPost.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;


    // ad ogni giro lo stampo nel DOM
    container.innerHTML += postTemplate;
    console.log(posts);

}

// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.