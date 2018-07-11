const converter = "https://api.rss2json.com/v1/api.json?rss_url=";
const mediumLink = "https%3A%2F%2Fmedium.com%2Ffeed%2F%40NickyWoolf%3Fformat%3Djson";
const endpoint = converter + mediumLink;

document.addEventListener("DOMContentLoaded", function() {
  pullMedium(endpoint);
});

function pullMedium(url) {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      handleMedium(data);
    })
    .catch(function(err) {
      console.log(err);
    });
}

function handleMedium(data) {
  let posts = data.items;

  let squares = ["#square1", "#square2", "#square3", "#square4"];
  // let dates = ["#date1", "#date2", "#date3", "#date4"];
  // let links = ["#link1", "#link2", "#link3", "#link4"];

  for (var i = 0; i < squares.length; i++) {
    let title = posts[i].title;
    let link = posts[i].link;
    var options = {
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    let date = new Date(posts[i].pubDate + "Z").toLocaleDateString();

    console.log(`\n Title: ${title} \n Link: ${link} \n Date: ${date}`);

    document.querySelector(squares[i]).innerHTML =
      `<a href="${link}" target="_blank" class="post" id="${squares[i]}">
        <h2>${title}</h2>
        <div>
          <h4><span>Blog</span></h4>
          <h4 id="date1">${date}</h4> 
        </div>
      </a>`;
  }
}

function toggleSideMenu() {
  let menu = document.getElementById("side-menu");
  let links = document.getElementById("side-links");
  let close = document.getElementById("btn-close");

  if (menu.style.width !== "100vw") {
    menu.style.width = "100vw";
    links.style.opacity = 1;
    close.style.opacity = .9;
  } else {
    menu.style.width = "0px";
    links.style.opacity = 0;
    close.style.opacity = 0;
  }
}