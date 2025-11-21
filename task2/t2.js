document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchValue = document.getElementById('query').value;
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchValue)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});