let lis = document.querySelectorAll("ul li");

// console.log(lis);

lis.forEach((li) => {
  li.onclick = function () {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    this.classList.add("active");
  };
});

//collapse

let nav = document.querySelector("#sidebar");
let btn = document.querySelector("#button");

// console.log(nav);
// console.log(btn);

btn.addEventListener("click", () => {
  nav.classList.toggle("transform");
  btn.classList.toggle("translate");
});

// Animation bubbles

function bubbles() {
  const col = document.getElementById("bubbles");
  const dot = document.createElement("div");
  const span = document.createElement("span");
  const size = Math.random() * 60;
  dot.className = "dot";
  dot.appendChild(span);
  col.appendChild(dot);

  span.style.width = size + "px";
  span.style.height = size + "px";
  span.style.left = Math.random() * innerWidth + "px";
}
const time = Math.random() * 4000;
setInterval(bubbles, time);
