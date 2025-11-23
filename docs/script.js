function filterArticles() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const articles = document.getElementById('articleList').getElementsByClassName('article-item');

    for (let i = 0; i < articles.length; i++) {
        let title = articles[i].getElementsByTagName('h3')[0].innerText;
        let desc = articles[i].getElementsByTagName('p')[0].innerText;
        if (title.toLowerCase().indexOf(filter) > -1 || desc.toLowerCase().indexOf(filter) > -1) {
            articles[i].style.display = "";
        } else {
            articles[i].style.display = "none";
        }
    }
}
