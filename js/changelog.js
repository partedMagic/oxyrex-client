!async function() {
    const t = await fetch(`../json/changelogs.json`).then(e => e.json());
    t.Changelog.forEach(e => {
        null == t[e.type] && (t[e.type] = []), t[e.type].push(e)
    });
    const c = document.getElementById("changelogs");

    function n(e) {
        c.innerHTML = "", t[e] && t[e].forEach(e => {
            const t = document.createElement("b");
            t.textContent = `${e.type} | ${e.date}${e.name?` | ${e.name}`:""}`;
            const n = document.createElement("ul");
            e.content.forEach(e => n.innerHTML += `<li>${e}</li>`), c.appendChild(t), c.appendChild(n), c.innerHTML += "<hr><br>"
        })
    }
    document.querySelectorAll("selector").forEach(e => {
        e.onclick = () => {
            document.querySelectorAll("selector").forEach(e => e.classList.remove("selected")), e.classList.add("selected"), n(e.id)
        }
    }), n("Changelog")
}();