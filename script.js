const artigos = document.querySelectorAll("article");

artigos.forEach(function (artigo) {
    const btnLike = artigo.querySelector(".btn-like");
    const btnDislike = artigo.querySelector(".btn-dislike");
    let statusReacao = null; 

    btnLike.addEventListener("click", function() {
        let contadorLike = btnLike.querySelector("span");
        let contadorDislike = btnDislike.querySelector("span");

        if (statusReacao === "like") {
            contadorLike.textContent = parseInt(contadorLike.textContent) - 1;
            btnLike.classList.remove("ativo-like");
            statusReacao = null;
        } else {
            if (statusReacao === "dislike") {
                contadorDislike.textContent = parseInt(contadorDislike.textContent) - 1;
                btnDislike.classList.remove("ativo-dislike");
            }
            contadorLike.textContent = parseInt(contadorLike.textContent) + 1;
            btnLike.classList.add("ativo-like");
            statusReacao = "like";
        }
    });

    btnDislike.addEventListener("click", function() {
        let contadorLike = btnLike.querySelector("span");
        let contadorDislike = btnDislike.querySelector("span");

        if (statusReacao === "dislike") {
            contadorDislike.textContent = parseInt(contadorDislike.textContent) - 1;
            btnDislike.classList.remove("ativo-dislike");
            statusReacao = null;
        } else {
            if (statusReacao === "like") {
                contadorLike.textContent = parseInt(contadorLike.textContent) - 1;
                btnLike.classList.remove("ativo-like");
            }
            contadorDislike.textContent = parseInt(contadorDislike.textContent) + 1;
            btnDislike.classList.add("ativo-dislike");
            statusReacao = "dislike";
        }
    });
});
