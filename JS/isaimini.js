// fetch("../Assets/latestMovies.json").then(Response=>{
//     return Response.json();
//   }).then(item=>{
//     item.movieDetail.map(item=>{
//       document.querySelector("#slides").innerHTML+=`<div class="slide"><div class="slide-content"><a href=${item.redirect} target="_blank"><img src=${item.img} loading="lazy" /><div class="button-container"><span class="button">Watch</span></div></a></div></div></div>`
//     })
//   })

let xOffset = 0;
let isMouseIn = false;
const slides = document.getElementById("slides");

setInterval(translate, 0);

function translate() {
  let offsetIncrementor = isMouseIn ? 0.05 : 0.2;
  if (xOffset >= 258 * 7) xOffset = 0;
  else xOffset = xOffset + offsetIncrementor;
  slides.style.transform = "translateX(-" + xOffset + "px)";
}

slides.addEventListener("mouseover", function (event) {
  isMouseIn = true;
});

slides.addEventListener("mouseout", function (event) {
  isMouseIn = false;
});
