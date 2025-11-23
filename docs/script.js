function filterArticles() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const list = document.getElementById('articleList');
  const articles = list.getElementsByClassName('article-item');

  for (let i = 0; i < articles.length; i++) {
    const title = articles[i].getElementsByTagName('h3')[0].textContent;
    const desc = articles[i].getElementsByTagName('p')[0].textContent;
    if (title.toLowerCase().includes(filter) || desc.toLowerCase().includes(filter)) {
      articles[i].style.display = "";
    } else {
      articles[i].style.display = "none";
    }
  }
}
