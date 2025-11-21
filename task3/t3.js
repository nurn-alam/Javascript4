'use strict';

const tvForm = document.querySelector('#tv-form');
const target = document.querySelector('#results');

tvForm.addEventListener('submit', async function(evt){
    evt.preventDefault();
    target.innerHTML = '';

    const keyword = document.querySelector('input[name=q]').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${keyword}`);
        const jsonData = await response.json();
        console.log(jsonData);

        for (const tvShow of jsonData){
            const article = document.createElement('article');

            const h2 = document.createElement('h2');
            h2.innerText = tvShow.show.name;
            article.appendChild(h2);

            const a = document.createElement('a');
            a.href = tvShow.show.url;
            a.target = '_blank';
            a.innerText = 'View Details';
            article.appendChild(a);
            article.appendChild(document.createElement('br'));

            if (tvShow.show.image?.medium) {
                const img = document.createElement('img');
                img.src = tvShow.show.image.medium;
                img.alt = tvShow.show.name;
                article.appendChild(img);
                article.appendChild(document.createElement('br'));
            }

            if (tvShow.show.summary) {
                const summary = document.createElement('div');
                summary.innerHTML = tvShow.show.summary;
                article.appendChild(summary);
            }

            target.appendChild(article);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});