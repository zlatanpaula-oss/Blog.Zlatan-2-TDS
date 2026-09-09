document.querySelectorAll('article').forEach(artigo => {
    const btnLike = artigo.querySelector('.btn-like');
    const btnDislike = artigo.querySelector('.btn-dislike');
    
    let likes = parseInt(btnLike.querySelector('span').innerText);
    let dislikes = parseInt(btnDislike.querySelector('span').innerText);

    btnLike.addEventListener('click', () => {
        if (!btnLike.classList.contains('active')) {
            likes++;
            btnLike.querySelector('span').innerText = likes;
            btnLike.classList.add('active');
            
            
            if (btnDislike.classList.contains('active')) {
                dislikes--;
                btnDislike.querySelector('span').innerText = dislikes;
                btnDislike.classList.remove('active');
            }
        } else {
            likes--;
            btnLike.querySelector('span').innerText = likes;
            btnLike.classList.remove('active');
        }
    });

    btnDislike.addEventListener('click', () => {
        if (!btnDislike.classList.contains('active')) {
            dislikes++;
            btnDislike.querySelector('span').innerText = dislikes;
            btnDislike.classList.add('active');
            
            
            if (btnLike.classList.contains('active')) {
                likes--;
                btnLike.querySelector('span').innerText = likes;
                btnLike.classList.remove('active');
            }
        } else {
            dislikes--;
            btnDislike.querySelector('span').innerText = dislikes;
            btnDislike.classList.remove('active');
        }
    });
});
