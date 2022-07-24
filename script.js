let chance = [false, true, false, false];

let selected = chance[Math.floor(Math.random() * chance.length)];

console.log(selected);

if (selected) slideShow();

function slideShow() {
      let abcdefghi = 0;
      let abcdefghik = document.querySelectorAll("div.abcdefghijklmnopqrstuvwxy span");
      let abcdefghikl = document.querySelectorAll("div.abcdefghijklmnopqrstuvwx span");
      let abcdefghiklm = 360 / abcdefghik.length;
      document.documentElement.style.setProperty("--d", abcdefghiklm);
      console.log(abcdefghik, abcdefghikl);

      const animation = setInterval(() => {
            abcdefghi += abcdefghiklm;
            document.documentElement.style.setProperty("--r", `${abcdefghi}deg`);
            for (let i = 0; i < abcdefghikl.length; i++) {
                  if (abcdefghikl[i].classList[0] == 'abcdefghiklmn') {
                        abcdefghikl[i].classList.remove('abcdefghiklmn');
                  }
            }
            abcdefghikl[abcdefghi / abcdefghiklm - (5 * Math.floor((abcdefghi / abcdefghiklm) / abcdefghik.length))].classList.add("abcdefghiklmn");
      }, 1500);

      for (let i = 0; i < abcdefghikl.length; i++) {
            abcdefghikl[i].addEventListener("click", (e) => {
                  let id = e.target.id;
                  abcdefghi = (id - 1) * abcdefghiklm;
                  document.documentElement.style.setProperty("--r", `${abcdefghi}deg`);
                  for (let i = 0; i < abcdefghikl.length; i++) {
                        if (abcdefghikl[i].classList[0] == 'abcdefghiklmn') {
                              abcdefghikl[i].classList.remove('abcdefghiklmn');
                        }
                  }
                  abcdefghikl[id - 1].classList.add("abcdefghiklmn");
            });
      }

      document.querySelector(".abcdefghijklmnopqrstuvw").addEventListener("click", () => {
            document.head.innerHTML += `
            <style>
                  body {
                        overflow: auto !important;
                        user-select: auto !important;
                  }

                  ::webkit-scorllbar {
                        display: block !important;
                  }
            </style>`;
            document.getElementsByClassName('fart')[0].remove();
            document.getElementsByClassName('abcdefghijklmnopqrstuvwxyz')[0].remove();
            clearInterval(animation);
      });
}