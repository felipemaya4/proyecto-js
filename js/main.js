
$(document).ready(function(){
    //Slider
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1000,
        auto: true,
        stopAutoOnClick: true,
        responsive: true,
        pager: true
    });
    console.log("hola mundo");
    // posts
    moment.locale('es');
    let posts = [
        {
            title: 'prueba de titulo4',
            date: 'Publicado el '+moment().format('lll'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Possimus odio, impedit, earum facilis rerum nam omnis autem, expedita recusandae quo mollitia! Consectetur aut laboriosam, totam officiis inventore possimus aperiam eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam facilis quam vero aliquid, officia veniam, voluptatibus harum, debitis qui quisquam laboriosam tempora ipsam excepturi natus exercitationem cumque fuga ad'
        },
        {
            title: 'prueba de titulo1',
            date: 'Publicado el '+moment().format('lll'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Possimus odio, impedit, earum facilis rerum nam omnis autem, expedita recusandae quo mollitia! Consectetur aut laboriosam, totam officiis inventore possimus aperiam eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam facilis quam vero aliquid, officia veniam, voluptatibus harum, debitis qui quisquam laboriosam tempora ipsam excepturi natus exercitationem cumque fuga ad'
        },
        {
            title: 'prueba de titulo2',
            date: 'Publicado el '+moment().format('lll'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Possimus odio, impedit, earum facilis rerum nam omnis autem, expedita recusandae quo mollitia! Consectetur aut laboriosam, totam officiis inventore possimus aperiam eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam facilis quam vero aliquid, officia veniam, voluptatibus harum, debitis qui quisquam laboriosam tempora ipsam excepturi natus exercitationem cumque fuga ad'
        },
        {
            title: 'prueba de titulo3',
            date: 'Publicado el '+moment().format('lll'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Possimus odio, impedit, earum facilis rerum nam omnis autem, expedita recusandae quo mollitia! Consectetur aut laboriosam, totam officiis inventore possimus aperiam eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam facilis quam vero aliquid, officia veniam, voluptatibus harum, debitis qui quisquam laboriosam tempora ipsam excepturi natus exercitationem cumque fuga ad'
        }
    ];

   let div_posts = document.querySelector("#posts");

    posts.forEach(post=>{

       let articulo = `<article class="post">
        <h2>${post.title}</h2>
        <span class="date">${post.date}</span>
        <p>
        ${post.content}
        </p>
        <a href="#"class="button-more" >leer más</a>
        </article> `;
        console.log(articulo);
        $("#posts").append(articulo);
    })
});