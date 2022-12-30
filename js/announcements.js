let a = new Date();
let time = a.getFullYear() + "" + a.getMonth() + "" + a.getDate();
var localstorage = window.localStorage | {};
class Announcement {
  constructor(a, b, c) {
    this.title = a;
    this.content = b;
    this.id = c;
  }
  ce() {
    let d = document.createElement("div");
    let z = document.getElementById("popupHolder");
    d.classList.add("a" + this.id)
    if (window.localStorage["a" + this.id] !== "lol") {
      d.id = this.id + "a";
      d.classList.add("announcementPopup"); // Not to be confused with class popup
      d.innerHTML += `
          <h1>${this.title}</h1>
          <div style="margin: 35px">${this.content}</div>
          <div>
            <a class="button" onclick="document.querySelector('.a${this.id}').style.display = 'none'; window.localStorage['a' + ${this.id}] = 'lol'">Mark As Read</a>
            <a class="button2" onclick="document.querySelector('.a${this.id}').style.display = 'none'">Ignore</a>
          </div>  
      `;
      z.appendChild(d)
    }
  }
}
fetch("https://api.oxyrex.xyz/announcements.json").then(response => response.json()).then(data => {
  for (let ind of data.announcements) {
    console.log(data);
    if (+time >= ind.timestamp) (new Announcement(ind.title, ind.text, ind.id)).ce();
  }
});

console.log("The current timestamp is " + time);