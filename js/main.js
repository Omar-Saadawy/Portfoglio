let lis = document.querySelectorAll("ul li");

console.log(lis);

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

console.log(nav);
console.log(btn);
btn.addEventListener("click", () => {
  nav.classList.toggle("transform");
});
