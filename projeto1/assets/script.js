let coracao = document.querySelectorAll('.noticia_data');
console.log(coracao);

coracao.forEach(e => {
    e.addEventListener("click", () => {
        e.className = 'noticia_data_clicada';
    })
});
