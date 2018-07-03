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
  let dates = ["#date1", "#date2", "#date3", "#date4"];
  let links = ["#link1", "#link2", "#link3", "#link4"];

  for (var i = 0; i < squares.length; i++) {
    let title = posts[i].title;
    let link = posts[i].link;
    var options = { year: "numeric", month: "short", day: "numeric" };
    let date = new Date(posts[i].pubDate + "Z").toLocaleDateString("en-GB", options);

    console.log(`\n Title: ${title} \n Link: ${link} \n Date: ${date}`);

    // document.querySelector(squares[i]).textContent = title;
    document.querySelector(squares[i]).innerHTML = `<div onclick="window.open('${link}','mywindow');" style="cursor: pointer;"><h3>${title}</h3></div>`;
    document.querySelector(dates[i]).textContent = date;
    // document.querySelector(links[i]).innerHTML = `<a id="${links[i]}" href="${link}" target="_blank"><p>Read</p></a>`;
  }
}