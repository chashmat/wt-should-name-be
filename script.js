document.head.innerHTML += `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />`;

document.body.innerHTML += `
<div class=cover>
      <span class="material-symbols-outlined">
            close
      </span>
      <div class="slider">
            <span style="--i:1"><img src="./images/1.jpg" alt="mountain"></span>
            <span style="--i:2"><img src="./images/2.jpg" alt="mountain"></span>
            <span style="--i:3"><img src="./images/3.jpg" alt="mountain"></span>
            <span style="--i:4"><img src="./images/4.jpg" alt="mountain"></span>
            <span style="--i:5"><img src="./images/5.jpg" alt="mountain"></span>
      </div>
      <div class="btn">
            <span id="1" class="active"></span>
            <span id="2"></span>
            <span id="3"></span>
            <span id="4"></span>
            <span id="5"></span>
      </div>
</div>`;

let rotation = 0;
let pictures = document.querySelectorAll("div.slider span");
let button = document.querySelectorAll("div.btn span");
let distance = 360 / pictures.length;
document.documentElement.style.setProperty("--d", distance);
console.log(pictures, button);

setInterval(() => {
      rotation += distance;
      document.documentElement.style.setProperty("--r", `${rotation}deg`);
      for (let i = 0; i < button.length; i++) {
            if (button[i].classList[0] == 'active') {
                  button[i].classList.remove('active');
            }
      }
      button[rotation / distance - (5 * Math.floor((rotation / distance) / pictures.length))].classList.add("active");
}, 1500);

for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", (e) => {
            let id = e.target.id;
            rotation = (id - 1) * distance;
            document.documentElement.style.setProperty("--r", `${rotation}deg`);
            for (let i = 0; i < button.length; i++) {
                  if (button[i].classList[0] == 'active') {
                        button[i].classList.remove('active');
                  }
            }
            button[id - 1].classList.add("active");
      });
}

document.querySelectorAll(".material-symbols-outlined")[0].addEventListener("click", () => {
      document.querySelector(".cover").style.display = "none";
});