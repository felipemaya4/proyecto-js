
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
        },
        {
            title: 'prueba de titulo5',
            date: 'Publicado el '+moment().format('lll'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Possimus odio, impedit, earum facilis rerum nam omnis autem, expedita recusandae quo mollitia! Consectetur aut laboriosam, totam officiis inventore possimus aperiam eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam facilis quam vero aliquid, officia veniam, voluptatibus harum, debitis qui quisquam laboriosam tempora ipsam excepturi natus exercitationem cumque fuga ad'
        },
        {
            title: 'prueba de titulo6',
            date: 'Publicado el '+moment().format('lll'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Possimus odio, impedit, earum facilis rerum nam omnis autem, expedita recusandae quo mollitia! Consectetur aut laboriosam, totam officiis inventore possimus aperiam eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam facilis quam vero aliquid, officia veniam, voluptatibus harum, debitis qui quisquam laboriosam tempora ipsam excepturi natus exercitationem cumque fuga ad'
        }
    ];

   let div_posts = document.querySelector("#posts");
    // esta funcion toma los datos del array de json y los maqueta para  luego ser insertado en la pagina
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
    });
   


    // codigo selector de temas para la  pagina
    let theme = $("#theme"); // id del link que tiene el css del los colores del tema
    if(localStorage.getItem("theme") == null || localStorage.getItem("theme") == undefined ){
        localStorage.setItem("theme","css/green.css");
    }else{
        theme.attr("href",localStorage.getItem("theme"));
    }

    $("#to-green").click(function name(params) {
        theme.attr("href", "css/green.css");
        localStorage.setItem("theme","css/green.css");

    });
    $("#to-red").click(function name(params) {
        theme.attr("href", "css/red.css");
        localStorage.setItem("theme","css/red.css");
        
    });
    $("#to-blue").click(function name(params) {
        theme.attr("href", "css/blue.css");
        localStorage.setItem("theme","css/blue.css");
        
    });
});