//calling an external API to inject one article
function article() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((res) => {
        const article = document.getElementById("selected-project-title");
        const content = document.getElementById("projects-text");
        article.innerHTML = res.title.slice(0,1).toUpperCase() + res.title.slice(1,11);
        content.innerHTML = res.body.slice(0,1).toUpperCase() + res.body.slice(1);
    });
}

article();