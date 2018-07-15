// Preloader
var overlay = document.querySelector("#overlay");
var preloader = document.querySelector(".spinner");
setTimeout(() => {
  preloader.style.opacity = 1;
}, 150);

window.addEventListener("load", function() {
  setTimeout(() => {
    preloader.style.opacity = 0;
  }, 1200);
  setTimeout(() => {
    overlay.style.opacity = 0;
    overlay.style["z-index"] = "-99";
    // preloader.style.opacity = 0;
  }, 1500);
});

// Custom Medium API
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

  for (var i = 0; i < squares.length; i++) {
    let title = posts[i].title;
    let link = posts[i].link;
    let date = posts[i].pubDate;
    date = date.replace(/-/g, "/").replace(/ .*/, "");
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

// Mobile menu
function toggleSideMenu() {
  let menu = document.getElementById("side-menu");
  let links = document.getElementById("side-links");
  let close = document.getElementById("btn-close");

  if (menu.style.width !== "80vw") {
    menu.style.width = "80vw";
    links.style.opacity = 1;
    close.style.opacity = .9;
  } else {
    menu.style.width = "0px";
    links.style.opacity = 0;
    close.style.opacity = 0;
  }
}

// Service menu
let textBox1 = document.querySelector("#service-box-1");
let textBox2 = document.querySelector("#service-box-2");
let textBox3 = document.querySelector("#service-box-3");

let btn1 = document.querySelector("#btn-service-1");
let btn2 = document.querySelector("#btn-service-2");
let btn3 = document.querySelector("#btn-service-3");

btn1.addEventListener("click", function(e) {
  textBox1.style.display = "block";
  textBox2.style.display = "none";
  textBox3.style.display = "none";
  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
});
btn2.addEventListener("click", function(e) {
  textBox1.style.display = "none";
  textBox2.style.display = "block";
  textBox3.style.display = "none";
  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");
});

btn3.addEventListener("click", function(e) {
  textBox1.style.display = "none";
  textBox2.style.display = "none";
  textBox3.style.display = "block";
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
});