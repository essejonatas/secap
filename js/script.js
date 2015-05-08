$(function() {

    var galerias = {
        "crer": {
            "imagens": ["http://lorempixel.com/400/400", "http://lorempixel.com/400/400", "http://lorempixel.com/400/400"],
            "conteudo": "conteudo",
        },

        "secap": {
            "imagens": ["http://lorempixel.com/400/400", "http://lorempixel.com/400/400", "http://lorempixel.com/400/400"],
            "conteudo": "conteudo",
        },

        "secap-mais": {
            "imagens": ["http://lorempixel.com/400/400", "http://lorempixel.com/400/400", "http://lorempixel.com/400/400"],
            "conteudo": "conteudo",
        },

        "secap-radio": {
            "imagens": ["http://lorempixel.com/400/400", "http://lorempixel.com/400/400", "http://lorempixel.com/400/400"],
            "conteudo": "conteudo",
        },

        "geracao-saber": {
            "imagens": ["http://lorempixel.com/400/400", "http://lorempixel.com/400/400", "http://lorempixel.com/400/400"],
            "conteudo": "conteudo",
        },
    }

    function mostraGaleria(galeriaNome) {
        var slider = $(".projeto-slider")[0];
        var conteudo = $(".projeto-conteudo")[0];
        var imagens = galerias[galeriaNome].imagens;
        var conteudoTexto = galerias[galeriaNome].conteudo;


        slider.innerHTML = "";

        for (i in imagens) {
            var imagem = imagens[i];
            var item = document.createElement("div");
            var img = document.createElement("img");
            img.className = "projeto-imagem-item";
            img.src = imagem;
            item.appendChild(img);
            slider.appendChild(item);
        }

        $(".projeto-slider").owlCarousel({
            singleItem: true,
        });

        conteudo.innerHTML = conteudoTexto;


    }

    $(document).ready(function() {
        $(document).scroll(function(e) {
            e.preventDefault();

            $(document).animate({
                scrollTop: $(document).scrollTop(),
            }, 200);

            var movement = $(document).scrollTop() * 0.2;
            $(".slider").css("background-position-y", movement + "px");
        });
    });


    $(document).ready(function() {
        $("body").smoothWheel(0);
    });

    $(document).ready(function() {
        var galeriaNome = "crer";

        mostraGaleria(galeriaNome);
    });
});
