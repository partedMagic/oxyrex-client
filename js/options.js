window.initOptions = () => {
  let i = document.createElement("div");
  (i.id = "optionsMenu"),
    (i.style.width = "50%"),
    (i.style.borderRadius = "10px"),
    (i.style.background = "#eeeeee"),
    (i.style.display = "block"),
    (i.style.position = "absolute"),
    (i.style.padding = "10px"),
    (i.style.margin = "10px"),
    (i.style.top = "0px"),
    (i.style.left = "-1000px"),
    (i.innerHTML += "<center><h2>Options Menu:</h2></center>");
  for (var e in window.Woomy)
    ((t) => {
      if (t.dropDown.status) {
        let e = `${t.name}: <select id="Woomy_${t.key}" tabindex="-1" value="${t.value}">`;
        for (var o of t.dropDown.options)
          e += `<option value="${o}">${((o = o.split("")),
            (o[0] = o[0].toUpperCase()),
            (o = o.join("")),
            `${o} ${t.dropDown.suffix}`)
            }</option>`;
        return (e += "</select><br/>"), (i.innerHTML += e);
      }
      switch (t.type) {
        case "boolean":
          var e = `${t.name}: <label><input id="Woomy_${t.key
            }" tabindex="-1" class="checkbox" type="checkbox"${t.value ? " checked" : ""
            }></label></br>`;
          i.innerHTML += e;
          break;
        case "number":
          var n = `${t.name}: <label><input id="Woomy_${t.key}" tabindex="-1" class="optionInput" type="number" step="0.01" min="0" max="100" value="${t.value}"></label></br>`;
          i.innerHTML += n;
          break;
        case "string":
          n = `${t.name}: <label><input id="Woomy_${t.key}" tabindex="-1" class="optionInput" type="text" value="${t.value}"></label></br>`;
          i.innerHTML += n;
      }
    })(window.Woomy[e]);
  (i.innerHTML +=
    '<button id="saveOptions">Save Options</button><button id="resetOptions">Reset Options</button>'),
    document.body.appendChild(i),
    (document.getElementById("Woomy_theme").value = Woomy.Theme.value);
  let t = document.createElement("div");
  (t.id = "settings-button"),
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|android|mobi/i.test(
      navigator.userAgent
    ) || document.body.appendChild(t);
  let o = !1,
    n = () => {
      var e = animations.optionsMenu.get();
      (i.style.left = e + "px"),
        0.05 < Math.abs(e) - animations.optionsMenu.to && setTimeout(n, 10);
    };
  t.onclick = () => {
    var e =
      (+document.getElementById("optionsMenu").style.width.replace("%", "") /
        100) *
      innerWidth;
    o
      ? ((animations.optionsMenu.start = 20),
        (animations.optionsMenu.to = 1.1 * -e),
        document.getElementById("gameCanvas").focus())
      : ((animations.optionsMenu.start = 1.1 * -e),
        (animations.optionsMenu.to = 0)),
      animations.optionsMenu.reset(),
      (o = !o),
      n();
  };
  let a = document.getElementById("saveOptions"),
    s = document.getElementById("resetOptions");
  (a.onclick = () => {
    for (var o in window.Woomy) {
      let e = window.Woomy[o];
      o = document.getElementById(`Woomy_${e.key}`);
      let t = o.value;
      "checkbox" === o.type && (t = o.checked), e.set(t);
    }
    console.log("Saved settings.");
  }),
    (s.onclick = () => {
      for (var o in window.Woomy) {
        let e = window.Woomy[o],
          t = document.getElementById(`Woomy_${e.key}`);
        "checkbox" === t.type ? (t.checked = e.default) : (t.value = e.default),
          e.set("checkbox" === t.type ? t.checked : t.value);
      }
      console.log("Resetted settings.");
    });
};
