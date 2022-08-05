// Calling an external API and injecting data to three cards (recent projects in html)
function threeRecentProjects() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        //Targeting the common class for the three cards
        const card = document.getElementsByClassName("card-text");
        //Loop to get only the three first articles and inject the info
        for (let i = 0; i < 3; i++) {
            //Injecting the info and manipulating it a little bit (first capital letter) and showing less letters than the original string
            card[i].children[0].innerHTML = res[i].title.slice(0,1).toUpperCase() + res[i].title.slice(1,11);
            card[i].children[1].innerHTML = res[i].body.slice(0,1).toUpperCase() + res[i].body.slice(1,30);
        }});
    };

threeRecentProjects();