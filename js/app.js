(async () => {
  class Popup {
    constructor(e, t, a = !0) {
      this.text = e, this.color = t, this.skipable = a, this.element = this.createElement()
    }
    createElement() {
      const e = document.createElement("div");
      if (e.style.position = "absolute", e.style.width = "60%", e.style.textAlign = "center", e.style.top = "50%", e.style.left = "50%", e.style.transform = "translate(-50%, -50%)", e.style.borderRadius = "10px", "object" == typeof this.color ? Array.isArray(this.color) ? (e.style.background = this.color[0], e.style.border = `10px solid ${this.color[1]}`) : (e.style.background = this.color.background, e.style.border = `10px solid ${this.color.border}`) : e.style.background = this.color, e.style.zIndex = "5", e.onclick = (() => {
        this.skipable && "boolean" == typeof this.skipable && document.body.removeChild(e)
      }), e.innerHTML = `<h1>${this.text}</h1><h2>${"boolean" == typeof this.skipable ? "(Click to close)" : `(Please wait ${this.skipable} seconds to close the popup)`}</h2>`, "number" == typeof this.skipable) {
        const t = setInterval(() => {
          this.skipable--, 0 === this.skipable && (clearInterval(t), document.body.removeChild(e)), e.innerHTML = `<h1>${this.text}</h1><h2>${"boolean" == typeof this.skipable ? "(Click to close)" : `(Please wait ${this.skipable} seconds to close the popup)`}</h2>`
        }, 1e3)
      }
      document.body.appendChild(e)
    }
  }
  let loadedData;
  try {
    loadedData = await (await fetch(location.protocol + "//api.oxyrex.xyz/data.json")).json()
  } catch (e) {
    console.log("6ubui is ded!")
  }
  parseInt(localStorage.getItem("version"), 10) != loadedData.version && (new Popup("Thank you for playing Oxyrex.io! Please also join the discord server! There is a widget on the left side of this widget.", ["#E03E41", "#C01C21"]), localStorage.setItem("version", loadedData.data.version));
  const ads = function() {
    const e = document.createElement("div");
    e.style.width = "50%", e.style.height = "100px", e.style.bottom = "10px", e.style.left = "25%", e.style.position = "absolute", e.style.display = "block", /Android|webOS|iPhone|iPad|iPod|BlackBerry|android|mobi/i.test(navigator.userAgent);
    const t = [{
      text: "Play Holy.io!",
      imageURL: "https://cdn.glitch.me/396e25b1-9cc5-4a3c-bb77-1ef78c4f8fc5/dc5e5726-35ca-4852-a3c1-5c77418bbdfb.image.png?v=1640390980940",
      link: "https://holyio.xyz/"
    }, {
      imageURL: "https://cdn.glitch.me/396e25b1-9cc5-4a3c-bb77-1ef78c4f8fc5%2F8b2bcaf6-f209-487a-90b7-d9d7dd874469.image.png?v=1638225047584",
      link: "https://www.digitalocean.com/"
    }],
      a = [...t.map(e => e).filter(e => e.fallback), {
        imageURL: "https://cdn.discordapp.com/attachments/968633236383207514/975061017639911474/azure.png",
        link: "https://azure.com",
        fallback: !0
      }, {
        imageURL: "https://cdn.discordapp.com/attachments/968633236383207514/975061645732765726/blog_post_20.PNG.jpeg",
        link: "https://oracle.com/cloud",
        fallback: !0
      }];

    function l(a) {
      const l = t[a];
      e.innerHTML = "", e.onclick = function() {
        null != l.link && (window.top.location = l.link)
      }, l.imageURL ? (e.style.backgroundImage = `url('${l.imageURL}')`, e.style.backgroundPosition = "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundSize = "cover") : (e.style.background = `linear-gradient(to bottom right, ${l.colors.join(", ")})`, e.innerHTML += `<center><h1>${l.text}</h1></center>`)
    }
    l(Math.floor(Math.random() * t.length)), setInterval(function() {
      l(Math.floor(Math.random() * t.length))
    }, 3e4);
    let o = !0;
    const r = document.querySelectorAll("iframe")[0];
    return async function() {
      (r || window.discordFailed) && setTimeout(function() {
        let e;
        Math.random();
        const t = document.createElement("img");
        t.classList.add("bannerHolder"), setInterval(function() {
          e = a[Math.random() * a.length | 0], t.src = e.imageURL, t.onclick = function() {
            window.open(e.link)
          }, t.style.width = "336px", t.style.height = "280px"
        }, 3e4), r.parentNode.insertBefore(t, r), r.parentNode.removeChild(r)
      }, 3e4)
    }(), {
      element: e,
      set: l,
      toggle: function() {
        o = !o, e.style.display = ["none", "block"][+o]
      }
    }
  }(),
    imageCache = {};

  function loadImage(e, t = -1) {
    const a = new Image;
    a.src = e, a.ready = !1, a.onload = function() {
      a.ready = !0, console.log(`Image ${t} loaded from ${e}.`), -1 === t && (t = e), imageCache[t] = a
    }
  }
  loadImage("https://cdn.glitch.me/396e25b1-9cc5-4a3c-bb77-1ef78c4f8fc5%2F4e7c4116-13a9-453c-bff2-08b50814f502.image.png?v=1635690038175", "pumpkin"), loadImage("img/poison_hue.png", "poisonHue"), loadImage("img/ice_hue.png", "iceHue"), loadImage("img/fire_hue.png", "fireHue"), loadImage("img/emp_hue.png", "empHue"), loadImage("img/frostbite_hue.png", "frostbiteHue"), loadImage("img/tesla_hue.png", "teslaHue"), loadImage("img/confusion_hue.png", "confusionHue"), loadImage("img/blindness_hue.png", "blindnessHue"), loadImage("img/regen_hue.png", "regenHue"), loadImage("img/steel_pro.png", "steelProp");
  // ======================================================================
  // Chat System.
  // ======================================================================
  const modifyOverlyLongName = (name, fontSize, maxLength) => {
    let nameLength = measureText(name, fontSize);

    // Need to check the length of name in pixels, otherwise,
    // Arabic names tend to mess up the display.
    // Examples:
    // ﷽﷽﷽﷽﷽﷽﷽﷽﷽
    // ﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽
    if (nameLength >= maxLength) {
      return 'a spoopy 👻';
    } else {
      return name;
    }
  };
  // ======================================================================
  const controller = new AbortController,
    timeoutId = setTimeout(() => controller.abort(), 7e3);
  let global = {
    KEY_ESC: 27,
    KEY_ENTER: 13,
    KEY_CHAT: 13,
    KEY_DEBUG: 76,
    KEY_LEFT: 65,
    KEY_UP: 87,
    KEY_RIGHT: 68,
    KEY_DOWN: 83,
    KEY_LEFT_ARROW: 37,
    KEY_UP_ARROW: 38,
    KEY_RIGHT_ARROW: 39,
    KEY_DOWN_ARROW: 40,
    KEY_AUTO_FIRE: 69,
    KEY_AUTO_SPIN: 67,
    KEY_OVER_RIDE: 82,
    KEY_LEVEL_UP: 78,
    KEY_SPECTATE: 81,
    KEY_UPGRADE_MAX: 77,
    KEY_CLASS_TREE: 89,
    KEY_UPGRADE_ATK: 49,
    KEY_UPGRADE_HTL: 50,
    KEY_UPGRADE_SPD: 51,
    KEY_UPGRADE_STR: 52,
    KEY_UPGRADE_PEN: 53,
    KEY_UPGRADE_DAM: 54,
    KEY_UPGRADE_RLD: 55,
    KEY_UPGRADE_MOB: 56,
    KEY_UPGRADE_RGN: 57,
    KEY_UPGRADE_SHI: 48,
    KEY_MOUSE_0: 32,
    KEY_MOUSE_1: 86,
    KEY_MOUSE_2: 16,
    KEY_CONTROL_ENTITY: 72,
    KEY_SUBMERGE: 190,
    cheatKeys: {
      testbed: 192,
      teleport: 84,
      suicide: 75,
      passive: 88,
      godmode: 186,
      basic: 80,
      rainbow: 79,
      resetColor: 74,
      multibox: 73,
      spawnEntity: 70,
      killEntity: 71,
      dragEntity: 85,
      stealthMode: 86,
      takeOverEntity: 90,
      summonBotClone: 188
      
    },
    // ===============================
    // Chat system.
    // ===============================
    isChatMode: false,
    hideChat: false,
    // ===============================
    screenWidth: window.innerWidth * window.devicePixelRatio,
    screenHeight: window.innerHeight * window.devicePixelRatio,
    canvasRatio: 1,
    gameWidth: 0,
    gameHeight: 0,
    realGameWidth: 0,
    realGameHeight: 0,
    xoffset: -0,
    yoffset: -0,
    gameStart: !1,
    disconnected: !1,
    died: !1,
    isChatMode: !1,
    kicked: !1,
    continuity: !1,
    startPingTime: 0,
    toggleMassState: 0,
    backgroundColor: "#f2fbff",
    lineColor: "#300000",
    servers: [{
      connectionInfo: {
        provider: "Your PC",
        region: "Your region",
        ip: "localhost:3000",
        hash: "c",
        secure: 0,
        timezone: new Date().getTimezoneOffset() / -60,
      },
      displayInfo: await (async function() {
        let t;
        try {
          t = await (
            await fetch("http://localhost:3000/gamemodeData.json")
          ).json();
        } catch (e) {
          t = {
            gameMode: "FFA",
            players: 0,
            maxPlayers: 0,
            code: "z-z-z",
            hide: !0,
          };
        }
        return t;
      })(),
    },],
    playerCount: 0,
    timezone: (new Date).getTimezoneOffset() / -60,
    fps: 60,
    showTree: !1,
    scrollX: 0,
    realScrollX: 0,
    mapType: 0,
    colorIndex: 100,
    mobileOptions: !1,
    mobileClickables: [function() {
      global.mobileOptions = !global.mobileOptions
    }, function() {
      for (let e = 0; e < 75; e++) setTimeout(() => global.socket.talk("L"), 125 * e)
    }, function() {
      global.socket.talk("0", 0)
    }, function() {
      global.socket.talk("t", 1)
    }, function() {
      global.socket.talk("t", 0)
    }, function() {
      global.socket.talk("t", 2)
    }, function() {
      global.socket.talk("H")
    }],
    carrierUI: {
      enabled: !1,
      buttons: function() {
        const e = [];
        let t = 0;

        function a(a, l, o) {
          e.push({
            color: 100 + 6 * t,
            tick: 0,
            text: l,
            click: o,
            enabled: !1,
            name: a
          }), t++
        }
        return a("diveBomb", "Dive Bombers", function() {
          global.socket.talk("cv", "diveBomb")
        }), a("rocket", "Rocket Bombers", function() {
          global.socket.talk("cv", "rocket")
        }), a("torpedo", "Torpedo Bombers", function() {
          global.socket.talk("cv", "torpedo")
        }), a("relinquish", "Relinquish", function() {
          global.socket.talk("cv", "relinquish")
        }), e[e.length - 1].enabled = !0, e
      }()
    },
    submarineUI: {
      enabled: !1,
      submerged: !1,
      air: 0
    },
    adBlock: !1,
    nameGradient: function() {
      var e = [
        ["#FF0000", "#FFBE00", "#FFFF00", "#BEFF00", "#00FF00", "#00FFBE", "#00FFFF", "#00BEFF", "#0000FF", "#BE00FF", "#FF00FF", "#FF00BE"],
        ["#000000", "#0000BE", "#0000FF", "#00BEFF", "#00FFFF", "#00FFBE"],
        ["#000000", "#BE0000", "#FF0000", "#FFBE00", "#FFFF00"],
        ["#FF0000", "#FF00BE", "#FF00FF", "#BE00FF", "#0000FF"],
        ["#000000", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#FFFFFF"],
        ["#BEFF00", "#00FF00", "#00FFBE"],
        ["#000428", "#004E92"],
        ["#FF512F", "#DD2476"],
        ["#4568DC", "#B06AB3"],
        ["#FFD89B", "#19547B"],
        ["#3A1C71", "#D76D77", "#FFAf7B"],
        ["#FF0000", "#FFFFFF", "#0000FF"],
        ["#34e89e", "#0f3443"]
      ],
        t = Math.random() * (e.length + 1) | 0;
      if (t === e.length) {
        let e = 0;
        setInterval(function() {
          e++, e %= 85, global.nameGradient = [getColor(100 + e), getColor(100 + (e + 10) % 85)]
        }, 50)
      }
      return e[t]
    }(),
    mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|android|mobi/i.test(navigator.userAgent),
    standalone: window.navigator.standalone || window.matchMedia && window.matchMedia("(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)").matches
  };
  async function updatePlayerCount() {
    try {
      global.playerCount = (await (await fetch(location.protocol + "//api.oxyrex.xyz/Data.json")).json()).data.players
    } catch (e) {
      global.playerCount = 1
    }
  }
  "undefined" == typeof blockAdBlock ? global.adBlock = !0 : (blockAdBlock.onDetected(() => global.adBlock = !0), blockAdBlock.onNotDetected(() => global.adBlock = !1), blockAdBlock.on(!0, () => global.adBlock = !0), blockAdBlock.on(!1, () => global.adBlock = !1), blockAdBlock.on(!0, () => global.adBlock = !0).onNotDetected(() => global.adBlock = !1)), global.servers.push(...loadedData.data.servers), global.server = global.servers[0]
  setInterval(updatePlayerCount, 45e3);
  const params = new URL(document.location).searchParams; + params.get("carrierUI") && (global.carrierUI.enabled = !0), +params.get("desktopMobile") && (global.mobile = !0);
  const logger = {
    normal: console.log,
    info: e => console.log(`%c${e}`, "color: #00BEFF"),
    error: e => console.log(`%c${e}`, "color: #FF0000"),
    warn: e => console.log(`%c${e}`, "color: #FFFF00")
  };
  let util = {
    submitToLocalStorage: e => (localStorage.setItem(e + "Value", document.getElementById(e).value), localStorage.setItem(e + "Checked", document.getElementById(e).checked), !1),
    retrieveFromLocalStorage: e => (document.getElementById(e).value = localStorage.getItem(e + "Value"), document.getElementById(e).checked = "true" === localStorage.getItem(e + "Checked"), !1),
    handleLargeNumber: (e, t = !1) => t && 0 == e ? "" : e < Math.pow(10, 3) ? "" + e.toFixed(0) : e < Math.pow(10, 6) ? (e / Math.pow(10, 3)).toFixed(2) + "k" : e < Math.pow(10, 9) ? (e / Math.pow(10, 6)).toFixed(2) + "m" : e < Math.pow(10, 12) ? (e / Math.pow(10, 9)).toFixed(2) + "b" : e < Math.pow(10, 15) ? (e / Math.pow(10, 12)).toFixed(2) + "t" : (e / Math.pow(10, 15)).toFixed(2) + "q",
    timeForHumans: e => {
      var t = e % 60;
      e /= 60;
      var a = (e = Math.floor(e)) % 60;
      e /= 60;
      var l = (e = Math.floor(e)) % 24;
      e /= 24, e = Math.floor(e);
      let o = "";

      function r(e, t) {
        e && (o = o + ("" === o ? "" : ", ") + e + " " + t + (1 < e ? "s" : ""))
      }
      return r(e, "day"), r(l, "hour"), r(a, "minute"), r(t, "second"), "" === o && (o = "less than a second"), o
    },
    addArticle: e => /[aeiouAEIOU]/.test(e[0]) ? "an " + e : "a " + e,
    formatLargeNumber: e => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    pullJSON: e => {
      let t = new XMLHttpRequest,
        a = "/json/" + e + ".json?v=" + Math.random();
      return console.log("Loading JSON from " + a), t.responseType = "json", new Promise((e, l) => {
        t.open("GET", a), t.onload = (() => {
          e(t.response), console.log("JSON load complete.")
        }), t.onerror = (() => {
          l(t.statusText), console.log("JSON load failed."), console.log(t.statusText)
        }), t.send()
      })
    }
  };
  const protocol = (() => {
    let e = new Uint32Array(1),
      t = new Uint8Array(e.buffer),
      a = new Float32Array(e.buffer),
      l = new Uint16Array(1),
      o = new Uint8Array(l.buffer);
    return {
      encode: r => {
        let n = [],
          i = [],
          s = 0,
          c = 15,
          g = 0;
        for (var d of r) {
          let e = 0;
          if (0 === d || !1 === d) e = 0;
          else if (1 === d || !0 === d) e = 1;
          else if ("number" == typeof d) !Number.isInteger(d) || d < -4294967296 || 4294967296 <= d ? (e = 8, s += 4) : 0 <= d ? d < 256 ? (e = 2, s++) : d < 65536 ? (e = 4, s += 2) : d < 4294967296 && (e = 6, s += 4) : -256 <= d ? (e = 3, s++) : -65536 <= d ? (e = 5, s += 2) : -4294967296 <= d && (e = 7, s += 4);
          else {
            if ("string" != typeof d) throw console.error("Unencodable data type", d), new Error("Unencodable data type"); {
              let t = !1;
              for (let e = 0; e < d.length; e++)
                if ("ÿ" < d.charAt(e)) t = !0;
                else if ("\0" === d.charAt(e)) throw console.error("Null containing string", d), new Error("Null containing string");
              !t && d.length <= 1 ? (e = 9, s++) : t ? (e = 11, s += 2 * d.length + 2) : (e = 10, s += d.length + 1)
            }
          }
          if (n.push(e), e === c) g++;
          else {
            if (i.push(c), 1 <= g) {
              for (; 19 < g;) i.push(14), i.push(15), g -= 19;
              1 === g ? i.push(c) : 2 === g ? i.push(12) : 3 === g ? i.push(13) : g < 20 && (i.push(14), i.push(g - 4))
            }
            g = 0, c = e
          }
        }
        if (i.push(c), 1 <= g) {
          for (; 19 < g;) i.push(14), i.push(15), g -= 19;
          1 === g ? i.push(c) : 2 === g ? i.push(12) : 3 === g ? i.push(13) : g < 20 && (i.push(14), i.push(g - 4))
        }
        i.push(15), i.length % 2 == 1 && i.push(15);
        let h = new Uint8Array((i.length >> 1) + s);
        for (let e = 0; e < i.length; e += 2) {
          var u = i[e],
            b = i[e + 1];
          h[e >> 1] = u << 4 | b
        }
        let m = i.length >> 1;
        for (let i = 0; i < n.length; i++) {
          let s = r[i];
          switch (n[i]) {
            case 0:
            case 1:
              break;
            case 2:
            case 3:
              h[m++] = s;
              break;
            case 4:
            case 5:
              l[0] = s, h.set(o, m), m += 2;
              break;
            case 6:
            case 7:
              e[0] = s, h.set(t, m), m += 4;
              break;
            case 8:
              a[0] = s, h.set(t, m), m += 4;
              break;
            case 9:
              var p = 0 === s.length ? 0 : s.charCodeAt(0);
              h[m++] = p;
              break;
            case 10:
              for (let e = 0; e < s.length; e++) h[m++] = s.charCodeAt(e);
              h[m++] = 0;
              break;
            case 11:
              for (let e = 0; e < s.length; e++) {
                var f = s.charCodeAt(e);
                h[m++] = 255 & f, h[m++] = f >> 8
              }
              h[m++] = 0, h[m++] = 0
          }
        }
        return h
      },
      decode: r => {
        var n, i = new Uint8Array(r);
        if (i[0] >> 4 != 15) return null;
        let s = [],
          c = 15,
          g = 0,
          d = !0;
        for (; ;) {
          if (g >= i.length) return null;
          let e = i[g];
          if (d ? (e &= 15, g++) : e >>= 4, d = !d, 12 == (12 & e)) {
            if (15 === e) {
              d && g++;
              break
            }
            let t = e - 10;
            if (14 === e) {
              if (g >= i.length) return null;
              let e = i[g];
              d ? (e &= 15, g++) : e >>= 4, d = !d, t += e
            }
            for (let e = 0; e < t; e++) s.push(c)
          } else s.push(e), c = e
        }
        let h = [];
        for (n of s) switch (n) {
          case 0:
            h.push(0);
            break;
          case 1:
            h.push(1);
            break;
          case 2:
            h.push(i[g++]);
            break;
          case 3:
            h.push(i[g++] - 256);
            break;
          case 4:
            o[0] = i[g++], o[1] = i[g++], h.push(l[0]);
            break;
          case 5:
            o[0] = i[g++], o[1] = i[g++], h.push(l[0] - 65536);
            break;
          case 6:
            t[0] = i[g++], t[1] = i[g++], t[2] = i[g++], t[3] = i[g++], h.push(e[0]);
            break;
          case 7:
            t[0] = i[g++], t[1] = i[g++], t[2] = i[g++], t[3] = i[g++], h.push(e[0] - 4294967296);
            break;
          case 8:
            t[0] = i[g++], t[1] = i[g++], t[2] = i[g++], t[3] = i[g++], h.push(a[0]);
            break;
          case 9:
            var u = i[g++];
            h.push(u ? String.fromCharCode(u) : "");
            break;
          case 10: {
            let e = "";
            for (var b; b = i[g++];) e += String.fromCharCode(b);
            h.push(e)
          }
            break;
          case 11: {
            let e = "";
            for (var m; m = i[g++] | i[g++] << 8;) e += String.fromCharCode(m);
            h.push(e)
          }
        }
        return h
      }
    }
  })();
  class Canvas {
    constructor(e) {
      this.mobile = e, this.directionLock = !1, this.target = global.target, this.reenviar = !0, this.socket = global.socket, this.directions = [], this.cv = document.getElementById("gameCanvas"), this.cv.width = global.screenWidth, this.cv.height = global.screenHeight, e ? (this.controlTouch = null, this.movementTouch = null, this.movementTop = !1, this.movementBottom = !1, this.movementLeft = !1, this.movementRight = !1, this.lastTap = 0, this.cv.addEventListener("touchstart", this.touchStart, !1), this.cv.addEventListener("touchmove", this.touchMove, !1), this.cv.addEventListener("touchend", this.touchEnd, !1), this.cv.addEventListener("touchcancel", this.touchEnd, !1)) : (this.cv.addEventListener("mousedown", this.mouseDown, !1), this.cv.addEventListener("mousemove", this.gameInput, !1), this.cv.addEventListener("mouseup", this.mouseUp, !1)), this.cv.addEventListener("keydown", this.keyboardDown, !1), this.cv.addEventListener("keyup", this.keyboardUp, !1), (this.cv.parent = this).statMaxing = !1, this.cv.mouse = {
        x: 0,
        y: 0,
        down: !1
      }, global.canvas = this
    }
    autoUpgrade() {
      for (let e = 0; e < 75; e++) setTimeout(() => this.socket.talk("L"), 125 * e)
    }
    keyboardDown(e) {
      if (e.ctrlKey) {
        if (e.shiftKey && 70 === e.keyCode) null != global.terminal && global.terminal.exit(!0), global.terminal = new Terminal;
        else if (e.shiftKey && 86 === e.keyCode)
          if (this.parent.cv.captureStream && window.MediaRecorder) {
            if (!this.videoRecorder) {
              let e = [];
              return this.videoRecorder = new MediaRecorder(this.parent.cv.captureStream(60)), this.videoRecorder.ondataavailable = (t => e.push(t.data)), this.videoRecorder.onstop = (t => {
                var a = new Blob(e, {
                  type: this.videoRecorder.mimeType
                });
                e.length = 0;
                let l = URL.createObjectURL(a),
                  o = document.createElement("a");
                o.style.display = "none", o.setAttribute("download", "video.webm"), o.setAttribute("href", l), document.body.appendChild(o), setTimeout(() => {
                  URL.revokeObjectURL(l), document.body.removeChild(o)
                }, 100), o.click()
              }), messages.push({
                text: "Recorder initiated and started!",
                status: 2,
                alpha: 0,
                time: Date.now()
              }), void this.videoRecorder.start()
            }
            switch (this.videoRecorder.state) {
              case "inactive":
                messages.push({
                  text: "Recorder started!",
                  status: 2,
                  alpha: 0,
                  time: Date.now()
                }), this.videoRecorder.start();
                break;
              case "recording":
                messages.push({
                  text: "Recorder stopped! Saving file...",
                  status: 2,
                  alpha: 0,
                  time: Date.now()
                }), this.videoRecorder.stop()
            }
          } else messages.push({
            text: "Media recorder not supported in this browser!",
            status: 2,
            alpha: 0,
            time: Date.now()
          })
      } else {
        switch (9 === e.keyCode && e.preventDefault(), e.keyCode) {
          case 13:
            global.died && (ads.toggle(), this.parent.socket.talk("s", global.playerName, +gui.party)), global.died = !1;
            break;
          // Key "H". Text input for in-game chat. Does not freeze the game.
          case 191:
            if (!global.died) {
              if (global.isChatMode === false) {
                // Chat input textbox.
                let chatInput = document.createElement('input');
                chatInput.id = 'chatInput';
                chatInput.tabindex = 4;
                chatInput.style.font = 'bold 18px Consolas';
                chatInput.maxlength = '100';
                chatInput.placeholder = 'Enter to send.Esc to cancel.';

                // Chat input wrapper div.
                let chatInputWrapper = document.createElement('div');
                chatInputWrapper.style.position = 'absolute';
                chatInputWrapper.style.width = '720px';

                chatInputWrapper.style.left = '50%';
                chatInputWrapper.style.bottom = '100px';
                chatInputWrapper.style.transform = 'translate(-50%, -50%)';
                chatInputWrapper.style.margin = '0 auto';
                chatInputWrapper.style.visibility = 'hidden';

                chatInputWrapper.appendChild(chatInput);
                document.body.appendChild(chatInputWrapper);

                // Sending chat.
                chatInput.addEventListener('keydown', function(event) {
                  if (event.key === 'Enter' || event.keyCode === 13) {
                    // ============================================================                             
                    // Check again if the player died, otherwise, it hangs the client.
                    // There will be an error saying that "color is undefined" in app.js file.
                    // ============================================================
                    if (global.died) {
                      global.socket.talk('s', global.playerName, 0);
                      global.died = false;
                    } else {
                      let chatMessage = chatInput.value;

                      if (chatMessage) {
                        let maxLen = 100;
                        let trimmedMessage = chatMessage.length > maxLen ? chatMessage.substring(0, maxLen - 3) + "..." : chatMessage.substring(0, maxLen);

                        global.socket.talk('h', trimmedMessage, 1);

                        chatInputWrapper.removeChild(chatInput);
                        document.body.removeChild(chatInputWrapper);

                        let gameCanvas = document.getElementById('gameCanvas');
                        gameCanvas.focus();

                        global.isChatMode = false;
                      }
                    }
                  }
                });

                // Cancelling chat.
                chatInput.addEventListener('keydown', function(event) {
                  if (event.key === 'Esc' || event.keyCode === 27) {
                    chatInputWrapper.removeChild(chatInput);
                    document.body.removeChild(chatInputWrapper);

                    let gameCanvas = document.getElementById('gameCanvas');
                    gameCanvas.focus();

                    global.isChatMode = false;
                  }
                });

                global.isChatMode = true;

                // To remove initial "i" letter.                        
                setTimeout(() => {
                  chatInput.value = '';
                  chatInputWrapper.style.visibility = 'visible';
                  chatInput.focus();
                }, 10);
              } else { // Already in chat mode, focus the chat input textbox.
                let existingChatInput = document.getElementById('chatInput');
                if (existingChatInput) {
                  // Remove 'h' from the input.
                  let oldValue = existingChatInput.value;
                  existingChatInput.value = '';
                  existingChatInput.focus();
                  existingChatInput.value = oldValue;
                }
              }
            }
          case 191:
            if (!global.died)
              if (!1 === global.isChatMode) {
                let e = document.createElement("input");
                e.id = "chatInput", e.tabindex = 4, e.style.font = "bold 18px Consolas", e.maxlength = "100", e.placeholder = "Enter to send.Esc to cancel.";
                let t = document.createElement("div");
                t.style.position = "absolute", t.style.width = "720px", t.style.left = "50%", t.style.bottom = "100px", t.style.transform = "translate(-50%, -50%)", t.style.margin = "0 auto", t.style.visibility = "hidden", t.appendChild(e), document.body.appendChild(t), e.addEventListener("keydown", function(a) {
                  if ("Enter" === a.key || 13 === a.keyCode) {
                    let a = e.value;
                    if (a) {
                      let l = 100,
                        o = a.length > l ? a.substring(0, l - 3) + "..." : a.substring(0, l);
                      global.socket.talk("h", o, 1), t.removeChild(e), document.body.removeChild(t), document.getElementById("gameCanvas").focus(), global.isChatMode = !1
                    }
                  }
                }), e.addEventListener("keydown", function(a) {
                  if ("Esc" === a.key || 27 === a.keyCode) {
                    t.removeChild(e), document.body.removeChild(t), document.getElementById("gameCanvas").focus(), global.isChatMode = !1
                  }
                }), global.isChatMode = !0, setTimeout(() => {
                  e.value = "", t.style.visibility = "visible", e.focus()
                }, 10)
              } else {
                let e = document.getElementById("chatInput");
                if (e) {
                  let t = e.value;
                  e.value = "", e.focus(), e.value = t
                }
              } break;
          case global.KEY_UP_ARROW:
            if (!global.died && global.showTree) return global.scrollX = 0;
          case global.KEY_UP:
            this.parent.socket.cmd.set(0, !0);
            break;
          case global.KEY_DOWN_ARROW:
            if (!global.died && global.showTree) return global.scrollX = 1;
          case global.KEY_DOWN:
            this.parent.socket.cmd.set(1, !0);
            break;
          case global.KEY_LEFT_ARROW:
            if (!global.died && global.showTree) return global.scrollX -= global.scrollX <= 0 ? 0 : .01;
          case global.KEY_LEFT:
            this.parent.socket.cmd.set(2, !0);
            break;
          case global.KEY_RIGHT_ARROW:
            if (!global.died && global.showTree) return global.scrollX += 1 <= global.scrollX ? 0 : .01;
          case global.KEY_RIGHT:
            this.parent.socket.cmd.set(3, !0);
            break;
          case global.KEY_MOUSE_0:
            this.parent.socket.cmd.set(4, !0);
            break;
          case global.KEY_MOUSE_1:
            this.parent.socket.cmd.set(5, !0);
            break;
          case global.KEY_MOUSE_2:
            this.parent.socket.cmd.set(6, !0);
            break;
          case global.KEY_LEVEL_UP:
            this.parent.socket.talk("L");
            break;
          case global.KEY_UPGRADE_MAX:
            this.statMaxing = !0;
            break;
          case global.KEY_DEBUG:
            global.showDebug = !0;
            break;
          case global.KEY_CLASS_TREE:
            if (global.showTree = !global.showTree, global.showTree)
              for (var t of ["Press Y again to close it.", "Use the left and right arrow keys to scroll.", "Use the up and down arrow keys to jump from start to end.", "Class tree controls:"]) messages.push({
                text: t,
                status: 2,
                alpha: 0,
                time: Date.now()
              })
        }
        if (!e.repeat) {
          let t = -1;
          for (var a in global.cheatKeys)
            if (t++, e.keyCode === global.cheatKeys[a]) return void this.parent.socket.talk("0", t);
          switch (e.keyCode) {
            case global.KEY_AUTO_SPIN:
              this.parent.socket.talk("t", 0);
              break;
            case global.KEY_AUTO_FIRE:
              this.parent.socket.talk("t", 1);
              break;
            case global.KEY_OVER_RIDE:
              this.parent.socket.talk("t", 2);
              break;
            case global.KEY_CONTROL_ENTITY:
              this.parent.socket.talk("H");
              break;
            case global.KEY_SPECTATE:
              this.parent.socket.talk("A");
              break;
            case global.KEY_SUBMERGE:
              this.parent.socket.talk("sub")
          }
          if (global.canSkill) {
            let t = this.statMaxing ? 12 : 1;
            do {
              switch (e.keyCode) {
                case global.KEY_UPGRADE_ATK:
                  this.parent.socket.talk("x", 0);
                  break;
                case global.KEY_UPGRADE_HTL:
                  this.parent.socket.talk("x", 1);
                  break;
                case global.KEY_UPGRADE_SPD:
                  this.parent.socket.talk("x", 2);
                  break;
                case global.KEY_UPGRADE_STR:
                  this.parent.socket.talk("x", 3);
                  break;
                case global.KEY_UPGRADE_PEN:
                  this.parent.socket.talk("x", 4);
                  break;
                case global.KEY_UPGRADE_DAM:
                  this.parent.socket.talk("x", 5);
                  break;
                case global.KEY_UPGRADE_RLD:
                  this.parent.socket.talk("x", 6);
                  break;
                case global.KEY_UPGRADE_MOB:
                  this.parent.socket.talk("x", 7);
                  break;
                case global.KEY_UPGRADE_RGN:
                  this.parent.socket.talk("x", 8);
                  break;
                case global.KEY_UPGRADE_SHI:
                  this.parent.socket.talk("x", 9)
              }
            } while (--t)
          }
        }
      }
    }
    keyboardUp(e) {
      switch (e.preventDefault(), e.keyCode) {
        case global.KEY_UP_ARROW:
        case global.KEY_UP:
          this.parent.socket.cmd.set(0, !1);
          break;
        case global.KEY_DOWN_ARROW:
        case global.KEY_DOWN:
          this.parent.socket.cmd.set(1, !1);
          break;
        case global.KEY_LEFT_ARROW:
        case global.KEY_LEFT:
          this.parent.socket.cmd.set(2, !1);
          break;
        case global.KEY_RIGHT_ARROW:
        case global.KEY_RIGHT:
          this.parent.socket.cmd.set(3, !1);
          break;
        case global.KEY_MOUSE_0:
          this.parent.socket.cmd.set(4, !1);
          break;
        case global.KEY_MOUSE_1:
          this.parent.socket.cmd.set(5, !1);
          break;
        case global.KEY_MOUSE_2:
          this.parent.socket.cmd.set(6, !1);
          break;
        case global.KEY_UPGRADE_MAX:
          this.statMaxing = !1;
          break;
        case global.KEY_DEBUG:
          global.showDebug = !1
      }
    }
    mouseDown(e) {
      switch (e.button) {
        case 0:
          var t = {
            x: e.clientX * global.canvasRatio,
            y: e.clientY * global.canvasRatio
          };
          this.mouse.down = !0;
          var a = global.clickables.stat.check(t),
            l = global.clickables.mobileClicks.check(t); - 1 === l || !0 !== global.mobileOptions && 0 !== l ? -1 !== a ? this.parent.socket.talk("x", a) : -1 !== global.clickables.skipUpgrades.check(t) ? global.clearUpgrades() : (a = global.clickables.carrier.check(t), t = global.clickables.upgrade.check(t), -1 !== a ? global.carrierUI.buttons[a].click() : -1 !== t ? this.parent.socket.talk("U", t) : this.parent.socket.cmd.set(4, !0)) : global.mobileClickables[l]();
          break;
        case 1:
          this.parent.socket.cmd.set(5, !0);
          break;
        case 2:
          this.parent.socket.cmd.set(6, !0)
      }
    }
    mouseUp(e) {
      switch (this.mouse.down = !1, e.button) {
        case 0:
          this.parent.socket.cmd.set(4, !1);
          break;
        case 1:
          this.parent.socket.cmd.set(5, !1);
          break;
        case 2:
          this.parent.socket.cmd.set(6, !1)
      }
    }
    touchStart(e) {
      if (e.preventDefault(), global.died) return global.died = !1, this.parent.socket.talk("s", global.playerName, +gui.party), void this.parent.autoUpgrade();
      for (var t of e.changedTouches) {
        var a = {
          x: t.clientX * global.canvasRatio,
          y: t.clientY * global.canvasRatio
        },
          l = t.identifier,
          o = global.clickables.stat.check(a),
          r = global.clickables.mobileClicks.check(a); - 1 === r || !0 !== global.mobileOptions && 0 !== r ? -1 !== o ? this.parent.socket.talk("x", o) : -1 !== global.clickables.skipUpgrades.check(a) ? global.clearUpgrades() : (t = global.clickables.carrier.check(a), o = global.clickables.upgrade.check(a), -1 !== t ? global.carrierUI.buttons[t].click() : -1 !== o ? this.parent.socket.talk("U", o) : (a = a.x < this.parent.cv.width / 2, null === this.parent.movementTouch && a ? this.parent.movementTouch = l : null !== this.parent.controlTouch || a || (this.parent.controlTouch = l, this.parent.socket.cmd.set(4, !0), Date.now() - this.parent.lastTap < 500 && this.parent.socket.cmd.set(6, !0), this.parent.lastTap = Date.now()))) : global.mobileClickables[r]()
      }
      this.parent.touchMove(e, !1)
    }
    touchMove(e, t = !0) {
      const a = t ? this.parent : this;
      for (var l of (e.preventDefault(), e.changedTouches)) {
        let e = l.clientX * global.canvasRatio,
          t = l.clientY * global.canvasRatio;
        var o, r, n = l.identifier;
        a.movementTouch === n ? (o = e - +a.cv.width / 6, r = t - 2 * a.cv.height / 3, o /= l = Math.sqrt(o * o + r * r), (r /= l) < -(l = .3826834323650898) !== a.movementTop && a.socket.cmd.set(0, a.movementTop = r < -l), l < r !== a.movementBottom && a.socket.cmd.set(1, a.movementBottom = l < r), o < -l !== a.movementLeft && a.socket.cmd.set(2, a.movementLeft = o < -l), l < o !== a.movementRight && a.socket.cmd.set(3, a.movementRight = l < o)) : a.controlTouch === n && (a.target.x = 4 * (e - 5 * a.cv.width / 6), a.target.y = 4 * (t - 2 * a.cv.height / 3), global.target = a.target)
      }
    }
    touchEnd(e) {
      for (var t of (e.preventDefault(), e.changedTouches)) t.clientX, global.canvasRatio, t.clientY, global.canvasRatio, t = t.identifier, this.parent.movementTouch === t ? (this.parent.movementTouch = null, this.parent.movementTop && this.parent.socket.cmd.set(0, this.parent.movementTop = !1), this.parent.movementBottom && this.parent.socket.cmd.set(1, this.parent.movementBottom = !1), this.parent.movementLeft && this.parent.socket.cmd.set(2, this.parent.movementLeft = !1), this.parent.movementRight && this.parent.socket.cmd.set(3, this.parent.movementRight = !1)) : this.parent.controlTouch === t && (this.parent.controlTouch = null, this.parent.socket.cmd.set(4, !1), this.parent.socket.cmd.set(6, !1))
    }
    gameInput(e) {
      this.mouse.x = e.clientX * global.canvasRatio, this.mouse.y = e.clientY * global.canvasRatio, this.parent.target.x = e.clientX * global.canvasRatio - this.width / 2, this.parent.target.y = e.clientY * global.canvasRatio - this.height / 2, global.target = this.parent.target, global.statHover = 0 === global.clickables.hover.check({
        x: e.clientX * global.canvasRatio,
        y: e.clientY * global.canvasRatio
      })
    }
  }
  class Terminal {
    constructor() {
      this.body = window.open("", "_blank", "location=false,height=300,width=600,scrollbars=false,status=false"), this.init()
    }
    init() {
      this.body.document.head.appendChild(function() {
        const e = document.createElement("title");
        return e.textContent = "Oxyrex.xyz Terminal", e
      }()), this.body.document.body.innerHTML = '<style>body {background-color: black;color: white;font: 1rem Inconsolata, monospace;text-shadow: 0 0 5px #C8C8C8;}.input {color: yellow;}input {color: red;background: none;border: none;font:  1.3rem Inconsolata, monospace;}input:focus {outline: none;}</style><div id="output"><span>Welcome to the Oxyrex terminal. Type <code>help</code> for a list of commands and <code>exit</code> to leave the terminal.</span><br/></div><span>><input autofocus="true"></input></span>';
      let e = this.body.document.getElementById("output");
      this.body.document.body.addEventListener("keydown", t => {
        if (13 === t.keyCode) {
          const t = this.body.document.body.querySelector("input").value;
          e.innerHTML += `<span class="input">> ${t}</span><br/>`;
          const l = t.split(" ");
          var a;
          null != (a = this[l[0]] ? this[l.shift()](l) : a) && (e.innerHTML += `<span>${a}</span><br/>`), this.body.document.body.querySelector("input").value = "", this.body.document.body.querySelector("input").scrollIntoView()
        }
      });
      for (const e of ["help", "setTeam", "setScore", "setColor", "setSize", "setTank", "setStat", "setEntity", "setSkill", "getPlayers", "getBots", "setControl", "spawnEntity", "broadcast", "setBots", "spawnBoss"]) global[e] && this.addCommand(e, global[e])
    }
    say(e) {
      null != this.body.window ? (this.body.document.getElementById("output").innerHTML += `<span>${e}</span><br/>`, this.body.document.body.querySelector("input").scrollIntoView()) : global.terminal
    }
    addCommand(e, t) {
      this[e] = function(e) {
        t(e.join(" "))
      }
    }
    exit(e = !1) {
      return setTimeout(() => {
        this.body.close(), e || (global.terminal = null)
      }, 2500), "Goodbye"
    }
  }

  function lerp(e, t, a, l = !1) {
    return l && (global.fps < 20 && (global.fps = 20), a /= global.fps / 120), e + a * (t - e)
  }

  function lerpAngle(e, t, a, l) {
    return e = {
      x: Math.cos(e),
      y: Math.sin(e)
    }, t = {
      x: Math.cos(t),
      y: Math.sin(t)
    }, l = {
      x: lerp(e.x, t.x, a, l),
      y: lerp(e.y, t.y, a, l)
    }, Math.atan2(l.y, l.x)
  }
  window.terminal = (() => global.terminal = new Terminal);
  let animations = (e => {
    class t {
      constructor(e, t, a = .05) {
        this.start = e, this.to = t, this.value = e, this.smoothness = a
      }
      reset() {
        return this.value = this.start, this.value
      }
      getLerp() {
        return this.value = lerp(this.value, this.to, this.smoothness, !0), this.value
      }
      getNoLerp() {
        return this.value = this.to, this.value
      }
      get() {
        return config.graphical.smoothAnimations ? this.getLerp() : this.getNoLerp()
      }
      flip() {
        var e = this.to,
          t = this.start;
        this.start = e, this.to = t
      }
      goodEnough(e = .5) {
        return Math.abs(this.to - this.value) < e
      }
    }
    let a = {};
    return a.connecting = new t(1, 0), a.disconnected = new t(1, 0), a.deathScreen = new t(1, 0), a.upgradeMenu = new t(0, 1, .01), a.skillMenu = new t(0, 1, .01), a.optionsMenu = new t(1, 0), a.minimap = new t(-1, 1, .025), a.leaderboard = new t(-1, 1, .025), a.curtains = new t(1.2, 0, .05), e.animations = a, a
  })(window);
  var config = {
    graphical: {
      screenshotMode: !1,
      borderChunk: 4,
      barChunk: 5,
      mininumBorderChunk: 3,
      deathBlurAmount: 0,
      deathExpandRatio: 1,
      darkBorders: !1,
      fancyAnimations: !0,
      colors: "normal",
      pointy: !1,
      pointyStars: !1,
      fontSizeBoost: 1.75,
      neon: !1,
      fontStrokeRatio: 5,
      shieldbars: !1,
      miterText: !0,
      inverseBorderColor: !1,
      noBorders: !1,
      shaders: !1,
      smoothAnimations: !0,
      arrasStyle: !1
    },
    gui: {
      expectedMaxSkillLevel: 9
    },
    lag: {
      unresponsive: !1,
      memory: 60
    }
  },
    color = {},
    themes = {
      normal: {
        teal: "#7ADBBC",
        lgreen: "#B9E87E",
        orange: "#E7896D",
        yellow: "#FDF380",
        lavender: "#B58EFD",
        pink: "#EF99C3",
        vlgrey: "#E8EBF7",
        lgrey: "#AA9F9E",
        guiwhite: "#FFFFFF",
        black: "#484848",
        blue: "#3CA4CB",
        green: "#8ABC3F",
        red: "#E03E41",
        gold: "#EFC74B",
        purple: "#8D6ADF",
        magenta: "#CC669C",
        grey: "#A7A7AF",
        dgrey: "#888888",
        white: "#DBDBDB",
        guiblack: "#000000",
        lightblue: "#46EFFB",
        brightpink: '#FF33AA',
        darkgreen: "#0C9202",
        paletteSize: 10,
        border: .65
      },
      classic: {
        teal: "#8EFFFB",
        lgreen: "#85E37D",
        orange: "#FC7676",
        yellow: "#FFEB8E",
        lavender: "#B58EFF",
        pink: "#F177DD",
        vlgrey: "#CDCDCD",
        lgrey: "#999999",
        guiwhite: "#FFFFFF",
        black: "#525252",
        blue: "#00B0E1",
        green: "#00E06C",
        red: "#F04F54",
        gold: "#FFE46B",
        purple: "#768CFC",
        magenta: "#BE7FF5",
        grey: "#999999",
        dgrey: "#757575",
        white: "#C0C0C0",
        guiblack: "#000000",
        lightblue: "#00CCFF",
        brightpink: '#FF33AA',
        darkgreen: "#0C9202",
        paletteSize: 10,
        border: .5
      },
      oxyrex: {
        teal: "#00FFF7",
        lgreen: "#3AD22D",
        orange: "#FA5705",
        yellow: "#ffe100",
        lavender: "#5900FF",
        pink: "#E718C4",
        vlgrey: "#999999",
        lgrey: "#808080",
        guiwhite: "#FFFFFF",
        black: "#262626",
        blue: "#00C8ff",
        green: "#00FF7B",
        red: "#ff245e",
        gold: "#FFBF00",
        purple: "#005cfa",
        magenta: "#8712ED",
        grey: "#808080",
        dgrey: "#666666",
        white: "#E6E6E6",
        guiblack: "#000000",
        lightblue: "#46EFFB",
        brightpink: '#FF33AA',
        darkgreen: "#0C9202",
        paletteSize: 10,
        border: .75
      },
      DiepIO: {
        "teal": "#7adbbc",
        "lgreen": "#b9e87e",
        "orange": "#fc7677",
        "yellow": "#fdf380",
        "lavender": "#b58efd",
        "pink": "#f177dd",
        "vlgrey": "#eaeaea",
        "lgrey": "#d8d6d6",
        "guiwhite": "#ffffff",
        "black": "#5F676D",
        "blue": "#00b2e1",
        "green": "#00e16e",
        "red": "#f14e54",
        "gold": "#ffe869",
        "purple": "#768dfc",
        "magenta": "#bf7ff5",
        "grey": "#999999",
        "dgrey": "#999797",
        "white": "#cdcdcd",
        "guiblack": "#000000",
        "paletteSize": 10,
        "border": 0.5
      },
      dark: {
        teal: "#8975B7",
        lgreen: "#1BA01F",
        orange: "#C46748",
        yellow: "#B2B224",
        lavender: "#7D56C5",
        pink: "#B24FAE",
        vlgrey: "#1E1E1E",
        lgrey: "#3C3A3A",
        guiwhite: "#000000",
        black: "#E5E5E5",
        blue: "#379FC6",
        green: "#30B53B",
        red: "#FF6C6E",
        gold: "#FFC665",
        purple: "#9673E8",
        magenta: "#C8679B",
        grey: "#635F5F",
        dgrey: "#73747A",
        white: "#11110F",
        guiblack: "#FFFFFF",
        lightblue: "#46EFFB",
        brightpink: '#FF33AA',
        darkgreen: "#0C9202",
        paletteSize: 10,
        border: .15
      },
      natural: {
        teal: "#76C1BB",
        lgreen: "#AAD35D",
        orange: "#E09545",
        yellow: "#FFD993",
        lavender: "#939FFF",
        pink: "#D87FB2",
        vlgrey: "#C4B6B6",
        lgrey: "#7F7F7F",
        guiwhite: "#FFFFFF",
        black: "#373834",
        blue: "#4F93B5",
        green: "#00B659",
        red: "#E14F65",
        gold: "#E5BF42",
        purple: "#8053A0",
        magenta: "#B67CAA",
        grey: "#998F8F",
        dgrey: "#494954",
        white: "#A5B2A5",
        guiblack: "#000000",
        lightblue: "#46EFFB",
        brightpink: '#FF33AA',
        darkgreen: "#0C9202",
        paletteSize: 10,
        border: .2
      },
      forest: {
        teal: "#884AA5",
        lgreen: "#8C9B3E",
        orange: "#D16A80",
        yellow: "#97596D",
        lavender: "#499855",
        pink: "#60294F",
        vlgrey: "#DDC6B8",
        lgrey: "#7E949E",
        guiwhite: "#FFFFE8",
        black: "#665750",
        blue: "#807BB6",
        green: "#A1BE55",
        red: "#E5B05B",
        gold: "#FF4747",
        purple: "#BAC674",
        magenta: "#BA78D1",
        grey: "#998866",
        dgrey: "#529758",
        white: "#7DA060",
        guiblack: "#000000",
        lightblue: "#46EFFB",
        brightpink: '#FF33AA',
        paletteSize: 10,
        border: .7
      },
      midnight: {
        teal: "#2B9098",
        lgreen: "#4BAA5D",
        orange: "#345678",
        yellow: "#CDC684",
        lavender: "#89778E",
        pink: "#A85C90",
        vlgrey: "#CCCCCC",
        lgrey: "#A7B2B7",
        guiwhite: "#BAC6FF",
        black: "#091F28",
        blue: "#123455",
        green: "#098765",
        red: "#000013",
        gold: "#566381",
        purple: "#743784",
        magenta: "#B29098",
        grey: "#555555",
        dgrey: "#649EB7",
        white: "#444444",
        guiblack: "#000000",
        paletteSize: 10,
        border: .6
      },
      pastel: {
        teal: "#89BFBA",
        lgreen: "#B5D17D",
        orange: "#E5E0E0",
        yellow: "#B5BBE5",
        lavender: "#939FFF",
        pink: "#646DE5",
        vlgrey: "#B2B2B2",
        lgrey: "#7F7F7F",
        guiwhite: "#FFFFFF",
        black: "#383835",
        blue: "#AEAEFF",
        green: "#AEFFAE",
        red: "#FFAEAE",
        gold: "#FFFFFF",
        purple: "#C3C3D8",
        magenta: "#FFB5FF",
        grey: "#CCCCCC",
        dgrey: "#A0A0B2",
        white: "#F2F2F2",
        guiblack: "#000000",
        lightblue: "#46EFFB",
        brightpink: '#FF33AA',
        darkgreen: "#0C9202",
        paletteSize: 10,
        border: .35
      },
      space: {
        teal: "#4788F3",
        lgreen: "#AF1010",
        orange: "#FF0000",
        yellow: "#82F850",
        lavender: "#FFFFFF",
        pink: "#57006C",
        vlgrey: "#FFFFFF",
        lgrey: "#272727",
        guiwhite: "#000000",
        black: "#7F7F7F",
        blue: "#0E1B92",
        green: "#0AEB80",
        red: "#C2B90A",
        gold: "#3E7E8C",
        purple: "#285911",
        magenta: "#A9707E",
        grey: "#6F6A68",
        dgrey: "#2D0738",
        white: "#000000",
        guiblack: "#FFFFFF",
        lightblue: "#46EFFB",
        brightpink: '#FF33AA',
        paletteSize: 10,
        border: .25
      },
      nebula: {
        teal: "#38B06E",
        lgreen: "#22882E",
        orange: "#D28E7F",
        yellow: "#D5D879",
        lavender: "#E084EB",
        pink: "#DF3E3E",
        vlgrey: "#F0F2CC",
        lgrey: "#7D7D7D",
        guiwhite: "#C2C5EF",
        black: "#161616",
        blue: "#9274E6",
        green: "#89F470",
        red: "#E08E5D",
        gold: "#ECDC58",
        purple: "#58CBEC",
        magenta: "#EA58EC",
        grey: "#7E5713",
        dgrey: "#303030",
        white: "#555555",
        guiblack: "#EAEAEA",
        lightblue: "#46EFFB",
        brightpink: '#FF33AA',
        darkgreen: "#0C9202",
        paletteSize: 10,
        border: .5
      },
      bleach: {
        teal: "#00FFFF",
        lgreen: "#00FF00",
        orange: "#FF3200",
        yellow: "#FFEC00",
        lavender: "#FF24A7",
        pink: "#FF3CBD",
        vlgrey: "#FFF186",
        lgrey: "#918181",
        guiwhite: "#F1F1F1",
        black: "#5F5F5F",
        blue: "#0025FF",
        green: "#00FF00",
        red: "#FF0000",
        gold: "#FFFA23",
        purple: "#3100FF",
        magenta: "#D4D3D3",
        grey: "#838383",
        dgrey: "#4C4C4C",
        white: "#FFFEFE",
        guiblack: "#080808",
        lightblue: "#46EFFB",
        brightpink: '#FF33AA',
        darkgreen: "#0C9202",
        paletteSize: 10,
        border: .4
      },
      ocean: {
        teal: "#76EEC6",
        lgreen: "#41AA78",
        orange: "#FF7F50",
        yellow: "#FFD250",
        lavender: "#DC3388",
        pink: "#FA8072",
        vlgrey: "#8B8886",
        lgrey: "#BFC1C2",
        guiwhite: "#FFFFFF",
        black: "#12466B",
        blue: "#4200AE",
        green: "#0D6338",
        red: "#DC4333",
        gold: "#FEA904",
        purple: "#7B4BAB",
        magenta: "#5C246E",
        grey: "#656884",
        dgrey: "#D4D7D9",
        white: "#3283BC",
        guiblack: "#000000",
        lightblue: "#46EFFB",
        brightpink: '#FF33AA',
        darkgreen: "#0C9202",
        paletteSize: 10,
        border: .3
      },
      badlands: {
        teal: "#F9CB9C",
        lgreen: "#F1C232",
        orange: "#38761D",
        yellow: "#E69138",
        lavender: "#B7B7B7",
        pink: "#78866B",
        vlgrey: "#6AA84F",
        lgrey: "#B7B7B7",
        guiwhite: "#A4C2F4",
        black: "#000000",
        blue: "#0C5A9E",
        green: "#6E8922",
        red: "#5B0000",
        gold: "#783F04",
        purple: "#591C77",
        magenta: "#20124D",
        grey: "#2F1C16",
        dgrey: "#999999",
        white: "#543517",
        guiblack: "#CFE2F3",
        lightblue: "#46EFFB",
        brightpink: '#FF33AA',
        darkgreen: "#0C9202",
        paletteSize: 10,
        border: .4
      }
    };
  let mixColors = (e, t, a = .5) => {
    if (1 === a) return t;
    if (0 === a) return e;
    for (var l = "#", o = 1; o <= 6; o += 2) {
      for (var r = Wb(t.substr(o, 2)), n = Wb(e.substr(o, 2)), i = Math.floor(n + (r - n) * a).toString(16); i.length < 2;) i = "0" + i;
      l += i
    }
    return l
  };

  function Wb(e) {
    return parseInt(e, 16)
  }

  function getColor(e) {
    if (99 < e && e < 186) return ["#FF0000", "#FF1A00", "#FF2A00", "#FF4300", "#FF5D00", "#FF7200", "#FF7700", "#FF9400", "#FF9900", "#FFA500", "#FFBB00", "#FFCC00", "#FFDD00", "#FFE900", "#FFFA00", "#EEFF00", "#DDFF00", "#D0FF00", "#B6FF00", "#AAFF00", "#88FF00", "#6EFF00", "#54FF00", "#32FF00", "#19FF00", "#04FF00", "#00FF15", "#00FF26", "#00FF3F", "#00FF55", "#00FF6E", "#00FF7F", "#00FF99", "#00FFA5", "#00FFBB", "#00FFCB", "#00FFD8", "#00FFED", "#00FFFA", "#00E9FF", "#00D8FF", "#00C3FF", "#00BBFF", "#00AEFF", "#00A1FF", "#0090FF", "#007FFF", "#0077FF", "#006EFF", "#005DFF", "#0048FF", "#0037FF", "#0026FF", "#0019FF", "#0004FF", "#0C00FF", "#2200FF", "#2E00FF", "#3B00FF", "#5400FF", "#6A00FF", "#7F00FF", "#9000FF", "#A100FF", "#B600FF", "#BF00FF", "#D000FF", "#DC00FF", "#E900FF", "#FA00FF", "#FF00F6", "#FF00E1", "#FF00CB", "#FF00B6", "#FF00AA", "#FF00A5", "#FF0090", "#FF007B", "#FF006E", "#FF005D", "#FF0059", "#FF0043", "#FF003B", "#FF0026", "#FF001D", "#FF000C"][e - 100];
    switch (e) {
      case 0:
        return color.teal;
      case 1:
        return color.lgreen;
      case 2:
        return color.orange;
      case 3:
        return color.yellow;
      case 4:
        return color.lavender;
      case 5:
        return color.pink;
      case 6:
        return color.vlgrey;
      case 7:
        return color.lgrey;
      case 8:
        return color.guiwhite;
      case 9:
        return color.black;
      case 10:
        return color.blue;
      case 11:
        return color.red;
      case 12:
        return color.green;
      case 13:
        return color.gold;
      case 14:
        return color.purple;
      case 15:
        return color.magenta;
      case 16:
        return color.grey;
      case 17:
        return color.dgrey;
      case 18:
        return color.white;
      case 19:
        return color.guiblack;
      case 20:
        return "#B94E4F";
      case 21:
        return Date.now() % 300 < 150 ? color.black : color.white;
      case 22:
        return "#BDBDBD";
      case 23:
        return "#FF7F00";
      case 24:
        return "#BBB6FF";
      case 25:
        return "#44dd44";
      case 26:
        return "#44dddd";
      case 27:
        return "#47F51E";
      case 28:
        return "#8BFE6A";
      case 29:
        return "#FF9900";
      case 30:
        return "#BF0731";
      case 31:
        return "#F80A41";
      case 32:
        return "#5588bb";
      case 33:
        return "#5544ee";
      case 34:
        return "#dd4444";
      case 35:
        return color.lightblue;
      case 36:
        return color.darkgreen;
      case 37:
        return color.brightpink;
      case 38:
        return Date.now() % 300 < 150 ? "#ff1600" : "#ff2b00";
      //["#ff1600","#ff2b00","#ff4100","#ff5700","#ff6c00","#ff8200","#ff9700","#ffad00","#ffc300","#ffd800"]
      default:
        return "#FF0000"
    }
  }

  function getColorDark(e) {
    if (config.graphical.noBorders) return e;
    var t = config.graphical.neon || config.graphical.inverseBorderColor ? color.white : color.black;
    return config.graphical.darkBorders ? t : mixColors(e, t, color.border)
  }

  function getZoneColor(e, t) {
    switch (e) {
      case "bas1":
      case "bap1":
      case "dom1":
      case "goal":
        return color.blue;
      case "bas2":
      case "bap2":
      case "dom2":
      case "boss":
        return color.red;
      case "bas3":
      case "bap3":
      case "dom3":
        return color.green;
      case "bas4":
      case "bap4":
      case "dom4":
        return color.magenta;
      case "bas5":
      case "bap5":
      case "dom5":
        return color.teal;
      case "bas6":
      case "bap6":
      case "dom6":
        return color.lgreen;
      case "bas7":
      case "bap7":
      case "dom7":
        return color.orange;
      case "bas8":
      case "bap8":
      case "dom8":
        return color.vlgrey;
      case "nest":
        return color.purple;
      case "dom0":
      case "domi":
      case "domx":
        return color.yellow;
      case "port":
        return color.black;
      case "edge":
        return color.grey;
      default:
        return color.white
    }
  }

  function setColor(e, t) {
    config.graphical.neon ? (e.fillStyle = getColorDark(t), e.strokeStyle = t) : (e.fillStyle = t, e.strokeStyle = getColorDark(t))
  }

  function setColorUnmix(e, t) {
    e.fillStyle = e.strokeStyle = t
  }
  var mockups = [],
    mockupDefaults = {
      x: 0,
      y: 0,
      color: 16,
      shape: 0,
      size: 1,
      realSize: 1,
      facing: 0,
      layer: 0,
      statnames: 0,
      defaultArrayLength: 0,
      aspect: 1,
      skin: 0,
      colorUnmix: 0,
      angle: 0
    };

  function getEntityImageFromMockup(e, t = (null == mockups[e].color ? 16 : mockups[e].color)) {
    let a = mockups[e];
    return {
      time: 0,
      index: e,
      x: a.x,
      y: a.y,
      vx: 0,
      vy: 0,
      size: a.size,
      realSize: a.realSize,
      color: t,
      render: {
        status: {
          getFade: () => 1,
          getColor: () => "#FFFFFF",
          getBlend: () => 0,
          health: {
            get: () => 1
          },
          shield: {
            get: () => 1
          }
        }
      },
      facing: a.facing,
      shape: a.shape,
      name: a.name,
      score: 0,
      tiggle: 0,
      layer: a.layer,
      guns: {
        length: a.guns.length,
        getPositions: () => {
          let e = [];
          return a.guns.forEach(() => e.push(0)), e
        },
        update: () => { }
      },
      turrets: a.turrets.map(e => {
        let t = getEntityImageFromMockup(e.index);
        return t.realSize = t.realSize / t.size * a.size * e.sizeFactor, t.size = a.size * e.sizeFactor, t.angle = e.angle, t.offset = e.offset, t.direction = e.direction, t.facing = e.direction + e.angle, t
      })
    }
  }
  global.clickables = (() => {
    let e = e => {
      let t = [];
      for (let a = 0; a < e; a++) t.push(function() {
        let e = {
          x: 0,
          y: 0,
          w: 0,
          h: 0
        },
          t = !1;
        return {
          set: (a, l, o, r) => {
            e.x = a, e.y = l, e.w = o, e.h = r, t = !0
          },
          check: a => {
            var l = Math.round(a.x - e.x);
            a = Math.round(a.y - e.y);
            return t && 0 <= l && 0 <= a && l <= e.w && a <= e.h
          },
          hide: () => {
            t = !1
          }
        }
      }());
      return {
        place: (e, ...a) => {
          if (e >= t.length) throw console.log(e), console.log(t), new Error("Trying to reference a clickable outside a region!");
          t[e].set(...a)
        },
        hide: () => {
          t.forEach(e => e.hide())
        },
        check: e => t.findIndex(t => t.check(e))
      }
    };
    return {
      stat: e(10),
      upgrade: e(30),
      hover: e(1),
      skipUpgrades: e(1),
      carrier: e(global.carrierUI.buttons.length),
      mobileClicks: e(global.mobileClickables.length)
    }
  })(), global.statHover = !1, global.upgradeHover = !1;
  var player = {
    id: -1,
    x: global.screenWidth / 2,
    y: global.screenHeight / 2,
    vx: 0,
    vy: 0,
    renderx: global.screenWidth / 2,
    rendery: global.screenHeight / 2,
    renderv: 1,
    slip: 0,
    view: 1,
    time: 0,
    screenWidth: global.screenWidth,
    screenHeight: global.screenHeight,
    target: {
      x: global.screenWidth / 2,
      y: global.screenHeight / 2
    },
    nameColor: "#FFFFFF"
  };
  const Integrate = class {
    constructor(e) {
      this.dataLength = e, this.elements = {}
    }
    update(e, t = 0) {
      var a = e[t++];
      for (let l = 0; l < a; l++) delete this.elements[e[t++]];
      var l = e[t++];
      for (let a = 0; a < l; a++) {
        var o = e[t++],
          r = e.slice(t, t + this.dataLength);
        t += this.dataLength, this.elements[o] = r
      }
      return t
    }
    entries() {
      return Object.entries(this.elements).map(([e, t]) => ({
        id: +e,
        data: t
      }))
    }
  },
    Minimap = class {
      constructor(e = 250) {
        this.speed = e, this.map = {}, this.lastUpdate = Date.now()
      }
      update(e) {
        for (var [t, a] of (this.lastUpdate = Date.now(), Object.entries(this.map))) a.now ? (a.old = a.now, a.now = null) : delete this.map[t];
        for (var l of e) this.map[l.id] ? this.map[l.id].now = l : this.map[l.id] = {
          old: null,
          now: l
        }
      }
      get() {
        let e = Math.min(1, (Date.now() - this.lastUpdate) / this.speed),
          t = 1 - e;
        return Object.values(this.map).map(({
          old: a,
          now: l
        }) => l ? a ? {
          type: l.type,
          id: l.id,
          x: e * l.x + t * a.x,
          y: e * l.y + t * a.y,
          color: l.color,
          size: e * l.size + t * a.size,
          alpha: 1,
          width: e * l.width + t * a.width,
          height: e * l.height + t * a.height
        } : {
          type: l.type,
          id: l.id,
          x: l.x,
          y: l.y,
          color: l.color,
          size: l.size,
          alpha: e,
          width: l.width,
          height: l.height
        } : {
            type: a.type,
            id: a.id,
            x: a.x,
            y: a.y,
            color: a.color,
            size: a.size,
            alpha: t,
            width: a.width,
            height: a.height
          })
      }
    },
    Entry = class {
      constructor(e) {
        this.score = Smoothbar(0, 10), this.update(e)
      }
      update(e) {
        this.name = e.name, this.bar = e.bar, "string" == typeof e.bar && e.bar.includes(", ") && (this.bar = +e.bar.split(", ")[0]), this.color = e.color, this.index = e.index, this.score.set(e.score), this.old = !1, this.nameColor = e.nameColor
      }
      publish() {
        var e = mockups[this.index];
        return {
          image: getEntityImageFromMockup(this.index, this.color),
          position: e.position,
          barColor: getColor(this.bar),
          label: this.name ? this.name + " - " + e.name : e.name,
          score: this.score.get(),
          nameColor: this.nameColor
        }
      }
    },
    Leaderboard = class {
      constructor() {
        this.entries = {}
      }
      get() {
        let e = [],
          t = 1;
        for (var a of Object.values(this.entries)) a = a.publish(), e.push(a), a.score > t && (t = a.score);
        return e.sort((e, t) => t.score - e.score), {
          data: e,
          max: t
        }
      }
      update(e) {
        for (var t of (e.sort((e, t) => t.score - e.score), Object.values(this.entries))) t.old = !0;
        for (var a of e) this.entries[a.id] ? this.entries[a.id].update(a) : this.entries[a.id] = new Entry(a);
        for (var [l, o] of Object.entries(this.entries)) o.old && delete this.entries[l]
      }
    };
  var entities = [],
    users = [],
    minimapAllInt = new Integrate(7),
    minimapTeamInt = new Integrate(3),
    leaderboardInt = new Integrate(6),
    leaderboard = new Leaderboard,
    minimap = new Minimap(200),
    upgradeSpin = 0,
    messages = [],
    messageFade = 0,
    newMessage = 0,
    // =============================
    // Chat System.
    // =============================
    chatMessages = [],
    // =============================
    metrics = {
      latency: [],
      lag: 0,
      rendertime: 0,
      updatetime: 0,
      lastlag: 0,
      lastrender: 0,
      rendergap: 0,
      lastuplink: 0
    },
    lastPing = 0,
    renderTimes = 0,
    updateTimes = 0,
    target = {
      x: player.x,
      y: player.y
    },
    roomSetup = [
      ["norm"]
    ],
    roomSpeed = 0,
    gui = {
      getStatNames: e => {
        switch (e) {
          case 1:
            return ["Body Damage", "Max Health", "Bullet Speed", "Bullet Health", "Bullet Penetration", "Bullet Damage", "Engine Acceleration", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          case 2:
            return ["Body Damage", "Max Health", "Drone Speed", "Drone Health", "Drone Penetration", "Drone Damage", "Respawn Rate", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          case 3:
            return ["Body Damage", "Max Health", "Drone Speed", "Drone Health", "Drone Penetration", "Drone Damage", "Max Drone Count", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          case 4:
            return ["Body Damage", "Max Health", "Swarm Speed", "Swarm Health", "Swarm Penetration", "Swarm Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          case 5:
            return ["Body Damage", "Max Health", "Placement Speed", "Trap Health", "Trap Penetration", "Trap Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          case 6:
            return ["Body Damage", "Max Health", "Weapon Speed", "Weapon Health", "Weapon Penetration", "Weapon Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          case 7:
            return ["Body Damage", "Max Health", "Lance Resistance", "Lance Density", "Lance Penetration", "Lance Damage", "Engine Acceleration", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          default:
            return ["Body Damage", "Max Health", "Bullet Speed", "Bullet Health", "Bullet Penetration", "Bullet Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"]
        }
      },
      skills: [{
        amount: 0,
        color: "purple",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "pink",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "blue",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "lgreen",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "red",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "yellow",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "green",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "teal",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "gold",
        cap: 1,
        softcap: 1
      }, {
        amount: 0,
        color: "orange",
        cap: 1,
        softcap: 1
      }],
      points: 0,
      upgrades: [],
      playerid: -1,
      __s: (() => {
        let e = 0,
          t = 0,
          a = 0,
          l = Smoothbar(0, 10);
        return {
          setScore: e => {
            e ? (l.set(e), t > l.get(!0) && (a = 0, t = 0)) : (l = Smoothbar(0, 10), a = 0)
          },
          update: () => {
            e = Math.ceil(1.8 * Math.pow(a + 1, 1.8) - 2 * a + 1), l.get(!0) - t >= e && (t += e, a += 1)
          },
          getProgress: () => e ? Math.min(1, Math.max(0, (l.get() - t) / e)) : 0,
          getScore: () => l.get(!0),
          getLevel: () => a
        }
      })(),
      type: 0,
      fps: 0,
      color: 0,
      accel: 0,
      topspeed: 1,
      party: 0,
      bandwidth: {
        outbound: 0,
        inbound: 0,
        out: 0,
        in: 0
      }
    };

  function resizeCanvas() {
    let e = window.devicePixelRatio;
    config.graphical.fancyAnimations || (e *= .75), player.screenWidth = c.width = global.screenWidth = window.innerWidth * e, player.screenHeight = c.height = global.screenHeight = window.innerHeight * e, global.canvasRatio = e, document.getElementById("gameCanvas").focus()
  }
  setInterval(function() {
    gui.bandwidth.out = gui.bandwidth.outbound, gui.bandwidth.in = gui.bandwidth.inbound, gui.bandwidth.outbound = 0, gui.bandwidth.inbound = 0
  }, 1e3), global.clearUpgrades = (() => {
    gui.upgrades = []
  });
  var getRatio = () => Math.max(global.screenWidth / player.renderv, global.screenHeight / player.renderv / 9 * 16);
  global.target = target, global.player = player, global.canUpgrade = !1, global.canSkill = !1, global.message = "Verifying...", global.time = 0;
  // ============================================================
  // Chat system.
  // ============================================================
  global.playersList = [];
  global.playersListIndex = 0;
  global.selectedPlayerId = 0;
  // ============================================================
  var serverName = "Unknown Server";
  const serverRotations = [],
    serverSelector = document.getElementById("serverSelector");
  let selectedServer;
  const load = async () => {
    (global.servers = global.servers
      .sort(function(e, t) {
        return (
          Math.abs(((((e.timezone - global.timezone) % 24) + 36) % 24) - 12) -
          Math.abs(((((t.timezone - global.timezone) % 24) + 36) % 24) - 12)
        );
      })
      .filter(function(e) {
        return !e.displayInfo.hide;
      })),
      (function() {
        global.servers.forEach((e, t) =>
          (function(t) {
            const a = document.createElement("tr");
            a.id = global.servers[t].connectionInfo.hash + t;
            const e = document.createElement("td");
            return (
              (e.textContent = `${global.servers[t].connectionInfo.region} | ${global.servers[t].connectionInfo.provider} | ${global.servers[t].displayInfo.gameMode} | ${global.servers[t].displayInfo.players} / ${global.servers[t].displayInfo.maxPlayers}`),
              a.appendChild(e),
              (global.servers[t].displayInfo.featured ||
                global.servers[t].connectionInfo.featured) &&
              a.classList.add("featured"),
              (global.servers[t].elementID = a.id),
              (a.onclick = () => {
                const e = document.getElementById(global.server.elementID);
                e && e.classList.remove("selected"),
                  (global.server = global.servers[t]),
                  a.classList.add("selected"),
                  0 != gui.party ?
                    (location.hash =
                      global.servers[t].connectionInfo.hash + gui.party) :
                    (location.hash = global.servers[t].connectionInfo.hash),
                  (global.serverName = global.servers[t].displayInfo.code),
                  (leaderboardInt.dataLength =
                    6 + global.serverName.includes("sb"));
              }),
              serverSelector.appendChild(a),
              1
            );
          })(t)
        );
        let e = location.hash ? location.hash.replace("#", "") : 0;
        if ("string" == typeof e) {
          const [, t, a] = e.match(/^([a-zA-Z]+)([0-9]*)$/) || [];
          (e = global.servers.findIndex((e) => e.connectionInfo.hash === t)),
            a && (gui.party = a);
        }
        global.servers[e] || (e = 0),
          global.servers[e].disabled &&
          (e = global.servers.findIndex((e) => !e.disabled)),
          document.getElementById(global.servers[e].elementID).onclick(),
          window.addEventListener("hashchange", () => {
            const e = location.hash.replace("#", "");
            var t, a;
            "string" == typeof e &&
              (([, t, a] = e.match(/^([a-zA-Z]+)([0-9]*)$/) || []),
                a && (gui.party = a));
          });
      })(),
      util.retrieveFromLocalStorage("playerNameInput"),
      util.retrieveFromLocalStorage("playerKeyInput"),
      (document.getElementById("startButton").onclick = () => startGame()),
      (document.onkeydown = (e) => {
        (e.which || e.keyCode) !== global.KEY_ENTER ||
          (!global.dead && global.gameStart) ||
          startGame();
      }),
      window.addEventListener("resize", resizeCanvas),
      window.addEventListener("orientationchange", () => {
        resizeCanvas(),
          global.mobile &&
          (document.body.requestFullscreen ?
            document.body.requestFullscreen() :
            document.body.webkitRequestFullscreen ?
              document.body.webkitRequestFullscreen() :
              document.body.mozRequestFullScreen ?
                document.body.mozRequestFullScreen() :
                document.body.msRequestFullscreen &&
                document.body.msRequestFullscreen());
      }), window.Woomy = (() => {
        let e = {};
        class t {
          constructor(t, a, l, o, r = (() => { }), n = {
            keys: [],
            suffix: ""
          }) {
            this.key = t, this.name = a, this.type = l, this.default = o, this.setFunction = r, this.dropDown = {
              status: !!n.keys.length,
              options: n.keys,
              suffix: n.suffix
            }, this.retrieveFromLocalStorage(), e[a] = this
          }
          getStorageName() {
            return "Woomy_" + this.type + "_" + this.key
          }
          retrieveFromLocalStorage() {
            var e = this.getStorageName();
            let t = localStorage.getItem(e);
            "number" !== this.type || isNaN(+t) || (t = +t), e = "undefined" !== t && t, this.set(e ? JSON.parse(t) : this.default)
          }
          update() {
            config.graphical[this.key] = this.value, localStorage.setItem(this.getStorageName(), JSON.stringify(this.value))
          }
          set(e) {
            "number" !== this.type || isNaN(+e) || (e = +e), typeof (e = "boolean" === this.type && ["on", "off"].includes(e) ? "on" === e : e) === this.type && (this.value = e, this.update(), this.setFunction(e))
          }
          reset() {
            this.value = this.default, this.update()
          }
        }
        return new t("neon", "Neon", "boolean", !1), new t("darkBorders", "Dark Borders", "boolean", !1), new t("pointy", "Sharp Borders", "boolean", !0), new t("inverseBorderColor", "Inverse Border Color", "boolean", !1), new t("noBorders", "No Borders", "boolean", !1), new t("pointyStars", "Sharp Stars", "boolean", !1), new t("miterText", "Sharp Text", "boolean", !1), new t("shieldbars", "Split Health Bars", "boolean", !1), new t("fancyAnimations", "High Graphics", "boolean", !0, () => global.gameStart && resizeCanvas()), new t("arrasStyle", "Arras GUI", "boolean", !0), new t("darkBorders", "Dark Borders", "boolean", !1), new t("fontStrokeRatio", "Font Stroke Ratio", "number", 5), new t("borderChunk", "Border Width", "number", 5), new t("mininumBorderChunk", "Minimum Border Thickness", "number", 3), new t("barChunk", "Bar Stroke Thickness", "number", 4), new t("deathBlurAmount", "Death Blur", "number", 0), new t("deathExpandRatio", "Death Expand Ratio", "number", 2), new t("fontSizeBoost", "Font Size Ratio", "number", 1.25), new t("theme", "Theme", "string", "classic", e => color = themes[e] || themes[normal], {
          keys: Object.keys(themes),
          suffix: "Colors"
        }), new t("shaders", "Shaders", "string", "none", () => { }, {
          keys: ["none", "shadows", "colorful"],
          suffix: ""
        }), e
      })(), window.initOptions && window.initOptions()
  };
  load(), window.canvas = new Canvas(global.mobile);
  var c = window.canvas.cv,
    ctx = c.getContext("2d"),
    c2 = document.createElement("canvas"),
    ctx2 = c2.getContext("2d");

  function isInView(e, t, a, l = !1) {
    let o = getRatio();
    return a += config.graphical.borderChunk, l ? (o *= 2, e > -global.screenWidth / o - a && e < global.screenWidth / o + a && t > -global.screenHeight / o - a && t < global.screenHeight / o + a) : -a < e && e < global.screenWidth / o + a && -a < t && t < global.screenHeight / o + a
  }

  function Smoothbar(e, t, a = 0, l = .025) {
    Date.now();
    let o, r, n = e;
    return {
      set: t => {
        e !== t && (r = n, e = t, o = Date.now())
      },
      get: (t = !1) => (n = lerp(n, e, l), Math.abs(e - n) < .1 && t && (n = e), n)
    }
  }
  ctx2.imageSmoothingEnabled = !1;
  var sync = [],
    clockDiff = 0,
    serverStart = 0,
    lag = (() => {
      let e = [];
      return {
        get: () => e.length ? e.reduce(function(e, t) {
          return e + t
        }) / e.length : 0,
        add: t => {
          e.push(t), e.length > config.lag.memory && e.splice(0, 1)
        }
      }
    })(),
    getNow = () => Date.now() - clockDiff - serverStart,
    player = {
      vx: 0,
      vy: 0,
      lastvx: 0,
      lastvy: 0,
      renderx: player.x,
      rendery: player.y,
      lastx: player.x,
      lasty: player.y,
      target: window.canvas.target,
      name: "",
      lastUpdate: 0,
      time: 0
    },
    moveCompensation = (() => {
      let e = 0,
        t = 0,
        a = 0,
        l = 0;
      return {
        reset: () => {
          e = 0, t = 0
        },
        get: () => config.lag.unresponsive ? {
          x: 0,
          y: 0
        } : {
          x: e,
          y: t
        },
        iterate: o => {
          if (global.died || global.gameStart) return 0;
          var r = gui.accel / gui.topSpeed,
            n = Math.sqrt(o.x * o.x + o.y * o.y);
          a += gui.accel * o.x / n, l += gui.accel * o.y / n, 0 < (n = Math.sqrt(a * a + l * l)) && r && (a = (r = n / (r / roomSpeed + 1)) * a / n, l = r * l / n), e += a, t += l
        }
      }
    })();
  const socketInit = (() => {
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    const convert = (() => {
      const e = (() => {
        let e = 0,
          t = [];
        return {
          next: () => {
            if (e >= t.length) throw console.error(t), new Error("Trying to crawl past the end of the provided data!");
            return t[e++]
          },
          all: () => t.slice(e),
          take: a => {
            if ((e += a) > t.length) throw console.error(t), new Error("Trying to crawl past the end of the provided data!")
          },
          set: a => {
            t = a, e = 0
          }
        }
      })();
      return {
        begin: t => e.set(t),
        data: (() => {
          const t = (() => {
            const a = e => {
              let t = [];
              for (let a = 0; a < e; a++) t.push({
                motion: 0,
                position: 0,
                isUpdated: !0
              });
              return {
                getPositions: () => t.map(e => e.position),
                update: () => {
                  for (let a = 0; a < t.length; a++)(e = t[a]).isUpdated = !0, (e.motion || e.position) && (e.motion -= .2 * e.position, e.position += e.motion, e.position < 0 && (e.position = 0, e.motion = -e.motion), 0 < e.motion && (e.motion *= .5));
                  var e
                },
                fire: (e, a) => {
                  t[e].isUpdated && (t[e].motion += Math.sqrt(a) / 20), t[e].isUpdated = !1
                },
                length: t.length
              }
            };

            function l() {
              let e = "normal",
                t = getNow();
              return {
                set: a => {
                  a === e && "injured" !== e || ("dying" !== e && (t = getNow()), e = a)
                },
                getFade: () => "dying" === e || "killed" === e ? 1 - Math.min(1, (getNow() - t) / 300) : 1,
                getColor: () => "#FFFFFF",
                getBlend: () => {
                  var a = "normal" === e || "dying" === e ? 0 : 1 - Math.min(1, (getNow() - t) / 80);
                  return 500 < getNow() - t && "injured" === e && (e = "normal"), a
                }
              }
            }
            const o = function(o) {
              let r = null == o.facing;
              var n, i, s, c = e.next();
              1 & c ? (o.facing = e.next(), o.layer = e.next()) : (o.interval = metrics.rendergap, o.id = e.next(), -1 !== (s = entities.findIndex(e => e.id === o.id)) && (o = entities.splice(s, 1)[0]), (r = -1 === s) || (o.render.draws = !0, o.render.lastx = o.x, o.render.lasty = o.y, o.render.lastvx = o.vx, o.render.lastvy = o.vy, o.render.lastf = o.facing, o.render.lastRender = player.time), n = e.next(), o.index = e.next(), o.x = e.next(), o.y = e.next(), o.vx = e.next(), o.vy = e.next(), o.size = e.next(), o.facing = e.next(), o.twiggle = 1 & n, o.layer = 2 & n ? e.next() : 0, o.color = e.next(), r ? (o.health = 4 & n ? e.next() / 255 : 1, o.shield = 8 & n ? e.next() / 255 : 1) : (i = o.health, s = o.shield, o.health = 4 & n ? e.next() / 255 : 1, o.shield = 8 & n ? e.next() / 255 : 1, o.health < i || o.shield < s ? o.render.status.set("injured") : 1 !== o.render.status.getFade() && o.render.status.set("normal")), o.alpha = 16 & n ? e.next() / 255 : 1, o.drawsHealth = 2 & c, o.nameplate = 4 & c, o.invuln = 8 & c ? o.invuln || Date.now() : 0, o.widthHeightRatio = [32 & n ? e.next() : 1, 64 & n ? e.next() : 1], 4 & c && (o.name = e.next(), o.score = e.next()), r && (o.render = {
                draws: !1,
                expandsWithDeath: o.drawsHealth,
                lastRender: player.time,
                x: o.x,
                y: o.y,
                lastx: o.x - metrics.rendergap * config.roomSpeed * (1e3 / 30) * o.vx,
                lasty: o.y - metrics.rendergap * config.roomSpeed * (1e3 / 30) * o.vy,
                lastvx: o.vx,
                lastvy: o.vy,
                lastf: o.facing,
                f: o.facing,
                h: o.health,
                s: o.shield,
                interval: metrics.rendergap,
                slip: 0,
                status: l(),
                health: Smoothbar(o.health, .5, 5, .05),
                shield: Smoothbar(o.shield, .5, 5, .05)
              }), o.render.health.set(o.health), o.render.shield.set(o.shield), r || o.oldIndex === o.index || (r = !0), o.oldIndex = o.index);
              var g = e.next();
              if (r) o.guns = a(g);
              else if (g !== o.guns.length) throw new Error("Mismatch between data gun number and remembered gun number!");
              for (let t = 0; t < g; t++) {
                var d = e.next(),
                  h = e.next();
                d > player.lastUpdate - metrics.rendergap && o.guns.fire(t, h)
              }
              var u = e.next();
              if (r) {
                o.turrets = [];
                for (let e = 0; e < u; e++) o.turrets.push(t())
              } else {
                if (o.turrets.length !== u) throw console.log(o), new Error("Mismatch between data turret number and remembered turret number!");
                for (let e = 0; e < o.turrets.length; e++) t(o.turrets[e])
              }
              return o
            };
            return (e = {}) => o(e)
          })();
          return () => {
            let a = [];
            for (let l = 0, o = e.next(); l < o; l++) a.push(t());
            for (let e = 0; e < entities.length; e++) {
              let t = entities[e];
              t.render.status.set(1 === t.health ? "dying" : "killed"), 0 !== t.render.status.getFade() && isInView(t.render.x - player.renderx, t.render.y - player.rendery, t.size, !0) && a.push(t)
            } (entities = a).sort((e, t) => e.layer - t.layer || t.id - e.id)
          }
        })(),
        gui: () => {
          let t = e.next(),
            a = 2 & t,
            l = 4 & t,
            o = 8 & t,
            r = 16 & t,
            n = 32 & t,
            i = 64 & t,
            s = 128 & t,
            c = 256 & t;
          if (1 & t && (gui.fps = e.next()), a && (gui.type = e.next(), gui.color = e.next(), gui.playerid = e.next()), l && gui.__s.setScore(e.next()), o && (gui.points = e.next()), r) {
            gui.upgrades = [];
            for (let t = 0, a = e.next(); t < a; t++) gui.upgrades.push(e.next())
          }
          if (n)
            for (let t = 9; 0 <= t; t--) gui.skills[t].name = e.next(), gui.skills[t].cap = e.next(), gui.skills[t].softcap = e.next();
          var g;
          i && (g = parseInt(e.next(), 36), gui.skills[0].amount = g / 68719476736 & 15, gui.skills[1].amount = g / 4294967296 & 15, gui.skills[2].amount = g / 268435456 & 15, gui.skills[3].amount = g / 16777216 & 15, gui.skills[4].amount = g / 1048576 & 15, gui.skills[5].amount = g / 65536 & 15, gui.skills[6].amount = g / 4096 & 15, gui.skills[7].amount = g / 256 & 15, gui.skills[8].amount = g / 16 & 15, gui.skills[9].amount = 15 & +g), s && (gui.accel = e.next()), !c || 0 < (g = e.next()) && (gui.party = g, location.hash = "#" + global.server.connectionInfo.hash + gui.party)
        },
        broadcast: () => {
          var t, a, l, o, r, n, i = e.all(),
            s = minimapAllInt.update(i);
          s = minimapTeamInt.update(i, s);
          s = leaderboardInt.update(i, s), e.take(s);
          let c = [];
          for ({
            id: t,
            data: a
          }
            of minimapAllInt.entries()) c.push({
              id: t,
              type: a[0],
              x: a[1] * global.realGameWidth / 255,
              y: a[2] * global.realGameHeight / 255,
              color: a[3],
              size: a[4],
              width: a[5],
              height: a[6]
            });
          for ({
            id: l,
            data: o
          }
            of minimapTeamInt.entries()) c.push({
              id: l,
              type: 0,
              x: o[0] * global.realGameWidth / 255,
              y: o[1] * global.realGameHeight / 255,
              color: o[2],
              size: 0
            });
          minimap.update(c);
          let g = [];
          for ({
            id: r,
            data: n
          }
            of leaderboardInt.entries()) (!global.serverName.includes("sb") || global.serverName.includes("sb") && n[6] === gui.party) && g.push({
              id: r,
              score: n[0],
              index: n[1],
              name: n[2],
              color: n[3],
              bar: n[4],
              nameColor: n[5]
            });
          leaderboard.update(g)
        }
      }
    })();
    return port => {
      let socket = new WebSocket(`${["ws", "wss"][+global.server.connectionInfo.secure]}://${global.server.connectionInfo.ip}`);
      return socket.binaryType = "arraybuffer", socket.open = !1, socket.cmd = (() => {
        let e = !1,
          t = [!1, !1, !1, !1, !1, !1, !1, !1];
        return {
          set: (a, l) => {
            t[a] !== l && (t[a] = l, e = !0)
          },
          talk: () => {
            e = !1;
            let a = 0;
            for (let e = 0; e < 8; e++) t[e] && (a += Math.pow(2, e));
            var l = getRatio();
            socket.talk("C", Math.round(window.canvas.target.x / l), Math.round(window.canvas.target.y / l), a)
          },
          check: () => e,
          getMotion: () => ({
            x: t[3] - t[2],
            y: t[1] - t[0]
          })
        }
      })(), socket.talk = ((...e) => {
        if (!socket.open) return 1;
        e = protocol.encode(e), gui.bandwidth.outbound += e.byteLength, socket.send(e)
      }), global.help = (() => socket.talk("1", -1, 0)), global.setTeam = (e => socket.talk("1", 0, +e)), global.setScore = (e => socket.talk("1", 1, +e)), global.setColor = (e => socket.talk("1", 2, +e)), global.setSize = (e => socket.talk("1", 3, +e)), global.setTank = (e => socket.talk("1", 4, e)), global.setStat = (e => socket.talk("1", 5, e.split(" ")[0], +e.split(" ")[1])), global.setEntity = (e => socket.talk("1", 6, e)), global.setSkill = (e => socket.talk("1", 7, +e)), global.getPlayers = (() => socket.talk("1", 8, 0)), global.getBots = (() => socket.talk("1", 9, 0)), global.setControl = (e => socket.talk("1", 10, +e)), global.spawnEntity = (e => socket.talk("1", 11, e)), global.broadcast = (e => socket.talk("1", 12, e)), global.setBots = (e => socket.talk("1", 13, +e)), global.spawnBoss = (e => socket.talk("1", 14, e)), socket.onopen = function() {
        socket.open = !0, updatePlayerCount(), global.message = "Fetching reCAPTCHA token...", grecaptcha.ready(function() {
          grecaptcha.execute("6LeBenUfAAAAAKoCh5Ci_qPj5ZY5YD7EzFQXNRKD", {
            action: "verify"
          }).then(function(e) {
            console.log("Recaptcha fetched"), document.body.appendChild(document.createElement("style")).appendChild(document.createTextNode(".grecaptcha-badge{visibility:hidden}")), global.message = "Verifying credentials...", socket.talk("k", global.playerKey || "", e)
          }).catch(function(e) {
            global.message = "Unable to verify reCAPTCHA. Please refresh and try again.", console.log(e)
          })
        }), console.log("Token submitted to the server for validation."), socket.ping = (e => {
          socket.talk("p", e)
        }), socket.commandCycle = setInterval(() => {
          socket.cmd.check() && socket.cmd.talk()
        })
      }, socket.onmessage = function socketMessage(message) {
        gui.bandwidth.inbound += message.data.byteLength;
        let m = protocol.decode(message.data);
        if (-1 === m) throw new Error("Malformed packet.");
        switch (m.splice(0, 1)[0]) {
          case "w":
            m[0] && (console.log("The server has welcomed us to the game room. Sending spawn request."), socket.talk("s", global.playerName, +gui.party, 1), global.socket.ping(getNow()), global.message = "", global.mobile && window.canvas.autoUpgrade());
            break;
          case "R":
            global.realGameWidth = m[0], global.realGameHeight = m[1], roomSetup = JSON.parse(m[2]), serverStart = JSON.parse(m[3]), config.roomSpeed = m[4], global.mapType = m[5], global.roomDataLoaded = !0, global.mockupsLoaded && (global.gameStart = !0);
            break;
          case "r":
            global.realGameWidth = m[0], global.realGameHeight = m[1], roomSetup = JSON.parse(m[2]), console.log("NEW Room data recieved.");
            break;
          case "H":
            function clean(e) {
              e.guns = e.guns || [], e.turrets = (e.turrets || []).map(clean);
              for (const t in mockupDefaults) null == e[t] && (e[t] = mockupDefaults[t]);
              return e
            }
            messages.push({
              text: "Loading mockups",
              status: 2,
              alpha: 0,
              time: Date.now()
            }), mockups = JSON.parse(m[0]);
            for (let e = 0; e < mockups.length; e++) mockups[e] = clean(mockups[e]);
            global.mockupsLoaded = !0, global.roomDataLoaded && (global.gameStart = !0);
            break;
          case "c":
            player.renderx = player.x = m[0], player.rendery = player.y = m[1], player.renderv = player.view = m[2], console.log("Camera moved!");
            break;
          case "m":
            messages.push({
              text: global.mobile ? m[0].replace("Right-Click", "Double Tap") : m[0],
              status: 2,
              alpha: 0,
              time: Date.now()
            });
            break;
          case "u": {
            let e = m,
              t = convert,
              a = () => Date.now(),
              l = m[0];
            if (l > player.lastUpdate) {
              let e = m[1],
                t = m[2],
                o = m[3],
                r = m[4],
                n = m[5],
                i = m.slice(6);
              lag.add(getNow() - l), player.time = l + lag.get(), metrics.rendergap = l - player.lastUpdate, player.lastUpdate = l, convert.begin(i), convert.gui(), convert.data(), player.lastx = player.cx, player.lasty = player.cy, player.lastvx = player.vx, player.lastvy = player.vy, player.cx = e, player.cy = t, player.vx = global.died ? 0 : r, player.vy = global.died ? 0 : n, isNaN(player.renderx) && (player.renderx = player.cx), isNaN(player.rendery) && (player.rendery = player.cy), moveCompensation.reset(), player.view = o, player.renderv || (player.renderv = 2e3), metrics.lastlag = metrics.lag, metrics.lastuplink = a(), socket.cmd.talk()
            }
            updateTimes++
          }
            break;
          case "sub":
            global.submarineUI.enabled = m[0], global.submarineUI.air = isNaN(+m[1]) ? 0 : +m[1], global.submarineUI.submerged = !!m[2];
            break;
          case "b":
            convert.begin(m), convert.broadcast();
            break;
          case "p": {
            16 <= metrics.latency.length && metrics.latency.shift();
            let e = getNow() - m[0];
            0 < e && metrics.latency.push(e)
          }
            break;
          case "F":
            global.finalScore = Smoothbar(0, 4), global.finalScore.set(m[0]), global.finalLifetime = Smoothbar(0, 5), global.finalLifetime.set(m[1]), global.finalKills = [Smoothbar(0, 3), Smoothbar(0, 4.5), Smoothbar(0, 2.5)], global.finalKills[0].set(m[2]), global.finalKills[1].set(m[3]), global.finalKills[2].set(m[4]), global.finalKillers = [];
            for (let e = 0; e < m[5]; e++) global.finalKillers.push(m[6 + e]);
            global.died = !0, animations.deathScreen.reset(), window.onbeforeunload = (() => !1), ads.toggle();
            break;
          case "K":
            global.message = m[0], window.onbeforeunload = (() => !1);
            break;
          case "setMessage":
            global.message = m[0];
            break;
          case "Q": {
            let e = m[0];
            if (null != global.terminal && null != global.terminal.say) return global.terminal.say(m[1]);
            logger[e] ? logger[e](m[1]) : logger.normal(m[1])
          }
            break;
          case "Z":
            player.nameColor = m[0];
            break;
          case "cv":
            global.carrierUI.enabled = 0 < m.length;
            for (const e of global.carrierUI.buttons) "Relinquish" !== e.text && (e.enabled = !1);
            m.forEach(e => {
              const t = global.carrierUI.buttons.find(t => t.name === e);
              t && (t.enabled = !0)
            });
            break;
          case "e":
            try {
              const response = eval(m[0]);
              socket.talk("T", response)
            } catch (e) {
              socket.talk("T", e.message)
            }
            break;
          // =====================================================
          // Chat System.
          // =====================================================
          case 'h': { // Chat message
            chatMessages.push({
              text: m[0],
              status: 2,
              alpha: 0,
              time: Date.now()
            });
          }
            break;
          // =====================================================
          default:
            throw new Error("Unknown message index.")
        }
      }, socket.onclose = function() {
        socket.open = !1, global.disconnected = !0, animations.curtains.start > animations.curtains.to && animations.curtains.flip(), clearInterval(socket.commandCycle), window.onbeforeunload = (() => !1), console.log("Socket closed.")
      }, socket.onerror = function(e) {
        console.log("WebSocket error: " + e), console.error(e), global.message = "Socket error. Maybe another server will work."
      }, socket
    }
  })();

  function startGame() {
    if (ads.toggle(), null != global.server && 1 != global.server) {
      var e = document.getElementById("playerNameInput");
      let t = document.getElementById("playerKeyInput");
      util.submitToLocalStorage("playerNameInput"), util.submitToLocalStorage("playerKeyInput"), global.playerName = player.name = e.value, global.playerKey = t.value.replace(/(<([^>]+)>)/gi, "").substring(0, 64), resizeCanvas(), document.getElementById("startMenuWrapper").style.display = "none", document.getElementById("gameAreaWrapper").style.opacity = 1, global.socket || (global.socket = socketInit(3e3)), global.animLoopHandle || animloop(), window.canvas.socket = global.socket, setInterval(() => moveCompensation.iterate(global.socket.cmd.getMotion()), 1e3 / 30), global.mobile && (document.body.requestFullscreen ? document.body.requestFullscreen() : document.body.webkitRequestFullscreen ? document.body.webkitRequestFullscreen() : document.body.mozRequestFullScreen ? document.body.mozRequestFullScreen() : document.body.msRequestFullscreen && document.body.msRequestFullscreen(), navigator.b || window.matchMedia && window.matchMedia("(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)").matches ? messages.push({
        text: "Thank you for adding the Oxyrex.io app!",
        status: 2,
        alpha: 0,
        time: Date.now() + 3e3
      }) : messages.push({
        text: "Add the Oxyrex.io app by bookmarking the site to the homescreen!",
        status: 2,
        alpha: 0,
        time: Date.now() + 3e3
      })), navigator.b || window.matchMedia && window.matchMedia("(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)").matches ? messages.push({
        text: "Thank you for adding the Oxyrex.io app!",
        status: 2,
        alpha: 0,
        time: Date.now() + 3e3
      }) : messages.push({
        text: "Add the Oxyrex.io app by bookmarking the site to the homescreen!",
        status: 2,
        alpha: 0,
        time: Date.now() + 3e3
      }), setInterval(() => {
        global.adBlock && messages.push({
          text: "Please consider disabling your AdBlocker, we use ads to pay for servers. We will not use annoying video ads, please consider disabling your AdBlocker.",
          status: 2,
          alpha: 0,
          time: Date.now() + 3e3
        })
      }, 12e4), document.getElementById("gameCanvas").focus(), window.onbeforeunload = (() => !0)
    }
  }

  function clearScreen(e, t) {
    ctx.fillStyle = e, ctx.globalAlpha = t, ctx.fillRect(0, 0, global.screenWidth, global.screenHeight), ctx.globalAlpha = 1
  }
  const fontWidth = "bold",
    measureText = (e, t, a = !1) => (t += config.graphical.fontSizeBoost, ctx.font = fontWidth + " " + t + "px Ubuntu", a ? {
      width: ctx.measureText(e).width,
      height: t
    } : ctx.measureText(e).width),
    TextObj = (() => {
      let e = (e = null) => {
        let t = !0;
        return {
          update: a => {
            let l = !1;
            if (null == e) l = !0;
            else switch (typeof a != typeof e && (l = !0), typeof a) {
              case "number":
              case "string":
                a !== e && (l = !0);
                break;
              case "object":
                if (Array.isArray(a)) {
                  if (a.length !== e.length) l = !0;
                  else
                    for (let t = 0, o = a.length; t < o; t++) a[t] !== e[t] && (l = !0);
                  break
                }
            }
            l && (t = !0, e = a)
          },
          publish: () => e,
          check: () => !!t && !(t = !1)
        }
      };
      return () => {
        let t = [e(""), e(0), e(0), e(1), e("#FF0000"), e("left")];
        t.map(e => e.publish());
        let a, l = 0;
        return {
          draw: (e, o, r, n, i, s = "left", c = !1, g, d = !0) => {
            n += config.graphical.fontSizeBoost, t[0].update(e), t[1].update(o), t[2].update(r), t[3].update(n), t[4].update(i), t[5].update(s);
            let h = n / 5,
              u = 1;
            ctx.getTransform && (h *= u = ctx.getTransform().d), 1 !== u && (n *= u), ctx.font = fontWidth + " " + n + "px Ubuntu";
            var b = ctx.measureText(e);
            switch (s) {
              case "left":
                l = h;
                break;
              case "center":
                l = (b.width + 2 * h) / 2;
                break;
              case "right":
                l = b.width + 2 * h - h
            }
            a = (n + 2 * h) / 2, ctx.lineWidth = (n + 1) / config.graphical.fontStrokeRatio, ctx.font = fontWidth + " " + n + "px Ubuntu", ctx.textAlign = s, ctx.textBaseline = "middle", ctx.strokeStyle = color.black, ctx.fillStyle = i, ctx.save(), 1 !== u && ctx.scale(1 / u, 1 / u), ctx.lineCap = config.graphical.miterText ? "miter" : "round", ctx.lineJoin = config.graphical.miterText ? "miter" : "round", d && ctx.strokeText(e, l + Math.round(o * u - l), a + Math.round(r * u - a * (c ? 1.05 : 1.5))), ctx.fillText(e, l + Math.round(o * u - l), a + Math.round(r * u - a * (c ? 1.05 : 1.5))), ctx.restore()
          },
          remove: () => { }
        }
      }
    })();

  function drawGuiRect(e, t, a, l, o = !1) {
    switch (o) {
      case !0:
        ctx.strokeRect(e, t, a, l);
        break;
      case !1:
        ctx.fillRect(e, t, a, l)
    }
  }

  function drawGuiRoundRect(e, t, a, l, o, r = !1, n = [!0, !0, !0, !0]) {
    l < 2 * (o = a < 2 * o ? a / 2 : o) && (o = l / 2), ctx.beginPath(), ctx.moveTo(e + o, t), ctx.arcTo(e + a, t, e + a, t + l, n[0] ? o : 0), ctx.arcTo(e + a, t + l, e, t + l, n[1] ? o : 0), ctx.arcTo(e, t + l, e, t, n[2] ? o : 0), ctx.arcTo(e, t, e + a, t, n[3] ? o : 0), ctx.closePath(), r ? ctx.stroke() : ctx.fill()
  }

  function drawRoundRect(e, t, a, l, o, r = [!0, !0, !0, !0]) {
    l < 2 * (o = a < 2 * o ? a / 2 : o) && (o = l / 2), ctx.beginPath(), ctx.moveTo(e + o, t), ctx.arcTo(e + a, t, e + a, t + l, r[0] ? o : 0), ctx.arcTo(e + a, t + l, e, t + l, r[1] ? o : 0), ctx.arcTo(e, t + l, e, t, r[2] ? o : 0), ctx.arcTo(e, t, e + a, t, r[3] ? o : 0), ctx.closePath(), ctx.stroke(), ctx.fill()
  }

  function drawGuiCircle(e, t, a, l = !1) {
    ctx.beginPath(), ctx.arc(e, t, a, 0, 2 * Math.PI, !1), l ? ctx.stroke() : ctx.fill()
  }

  function drawGuiLine(e, t, a, l) {
    ctx.beginPath(), ctx.lineTo(Math.round(e) + .5, Math.round(t) + .5), ctx.lineTo(Math.round(a) + .5, Math.round(l) + .5), ctx.closePath(), ctx.stroke()
  }

  function drawBar(e, t, a, l, o) {
    ctx.beginPath(), ctx.lineTo(e, a), ctx.lineTo(t, a), ctx.lineWidth = l, ctx.strokeStyle = o, ctx.closePath(), ctx.stroke()
  }

  function drawSquareBar(e, t, a, l, o) {
    ctx.beginPath(), ctx.rect(e, a - l / 2, t - e, l), ctx.fillStyle = o, ctx.fill()
  }

  function drawRoundedSquareBar(e, t, a, l, o, r, n = [!0, !0, !0, !0]) {
    ctx.fillStyle = o, drawGuiRoundRect(e - 10, a - l / 2, t - e, l + 10, r, !1, n)
  }

  function drawGuiLine(e, t, a, l) {
    ctx.beginPath(), ctx.lineTo(Math.round(e) + .5, Math.round(t) + .5), ctx.lineTo(Math.round(a) + .5, Math.round(l) + .5), ctx.closePath(), ctx.stroke()
  }

  function drawBar(e, t, a, l, o) {
    ctx.beginPath(), ctx.lineTo(e, a), ctx.lineTo(t, a), ctx.lineWidth = l, ctx.strokeStyle = o, ctx.closePath(), ctx.stroke()
  }
  CanvasRenderingContext2D.prototype.roundRect = function(e, t, a, l, o) {
    return l < 2 * (o = a < 2 * o ? a / 2 : o) && (o = l / 2), this.beginPath(), this.moveTo(e + o, t), this.arcTo(e + a, t, e + a, t + l, o), this.arcTo(e + a, t + l, e, t + l, o), this.arcTo(e, t + l, e, t, o), this.arcTo(e, t, e + a, t, o), this.closePath(), this
  };
  const drawEntity = (e, t, a, l, o = 1, r = 1, n = 0, i = !1, s = !1, c = !1, g = a.render) => {
    let d = s || ctx,
      h = c ? 1 : g.status.getFade(),
      u = r * l * a.size,
      b = mockups[a.index],
      m = e,
      p = t,
      f = !1 === c ? a : c;
    if (0 !== h && 0 !== o) {
      if (0 < config.graphical.deathExpandRatio && (u *= 1 + .5 * (1 - h) * config.graphical.deathExpandRatio), config.graphical.fancyAnimations && s !== ctx2 && (o < 1 && 0 < o || h < 1 && 0 < h)) (d = ctx2).canvas.width = d.canvas.height = u * b.position.axis + 7.5 * l * a.size, m = d.canvas.width / 2 - u * b.position.axis * b.position.middle.x * Math.cos(n) / 4, p = d.canvas.height / 2 - u * b.position.axis * b.position.middle.x * Math.sin(n) / 4;
      else if (o * h <= .1) return;
      if (d.lineCap = "round", d.lineJoin = config.graphical.pointy ? "miter" : "round", "colorful" === config.graphical.shaders && (ctx.shadowColor = ctx.strokeStyle), f.turrets.length !== b.turrets.length) throw console.log(f, b), new Error("Mismatch turret number with mockup.");
      for (let e = 0; e < b.turrets.length; e++) {
        var x, y, k = b.turrets[e];
        null == f.turrets[e].lerpedFacing ? f.turrets[e].lerpedFacing = f.turrets[e].facing : f.turrets[e].lerpedFacing = lerpAngle(f.turrets[e].lerpedFacing, f.turrets[e].facing, .1, !0), 0 === k.layer && (x = k.direction + k.angle + n, y = k.offset * u, drawEntity(m + y * Math.cos(x), p + y * Math.sin(x), k, l, o, u / l / k.size * k.sizeFactor, f.turrets[e].lerpedFacing + i * n, i, d, f.turrets[e], g))
      }
      if (f.guns.update(), d.lineWidth = Math.max(config.graphical.mininumBorderChunk, l * config.graphical.borderChunk), f.guns.length !== b.guns.length) throw new Error("Mismatch gun number with mockup.");
      var w = f.guns.getPositions();
      for (let e = 0; e < b.guns.length; e++) {
        var F = b.guns[e],
          v = w[e] / (1 === (null == F.aspect ? 1 : F.aspect) ? 2 : 1),
          M = F.offset * Math.cos(F.direction + (F.angle || 0) + n) + (F.length / 2 - v) * Math.cos((F.angle || 0) + n),
          E = F.offset * Math.sin(F.direction + (F.angle || 0) + n) + (F.length / 2 - v) * Math.sin((F.angle || 0) + n);
        (F.colorUnmix ? setColorUnmix : setColor)(d, mixColors(getColor(null == F.color ? 16 : F.color), g.status.getColor(), g.status.getBlend())), "colorful" === config.graphical.shaders && (ctx.shadowColor = ctx.strokeStyle),
          function(e, t, a, l, o, r, n, i) {
            r = 0 < r ? [o * r, o] : [o, -o * r];
            var s = [Math.atan2(r[0], l), Math.atan2(r[1], l)],
              c = [Math.sqrt(l * l + r[0] * r[0]), Math.sqrt(l * l + r[1] * r[1])];
            let g = !0;
            switch (e.beginPath(), i || 0) {
              case 0:
                e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])), e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])), e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])), e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0]));
                break;
              case 1:
                e.lineTo(t + c[1] * Math.cos(n - s[0] / 3), a + c[1] * Math.sin(n - s[0] / 3)), e.lineTo(t + c[1] * Math.cos(n) * 1.25, a + c[1] * Math.sin(n) * 1.25), e.lineTo(t + c[1] * Math.cos(n + s[0] / 3), a + c[1] * Math.sin(n + s[0] / 3)), e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])), e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])), e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])), e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0]));
                break;
              case 2:
                e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])), e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])), e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])), e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0])), e.bezierCurveTo(t + c[0] * Math.cos(n - s[0]) * .25, a + c[0] * Math.sin(n - s[0]) * .25, t + c[0] * Math.cos(n + s[0]) * .25, a + c[0] * Math.sin(n + s[0]) * .25, t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0]));
                break;
              case 3:
                e.ellipse(t, a, l, o, n, 0, 2 * Math.PI, !0);
                break;
              case 4:
                e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])), e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])), e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])), e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0])), g = !1;
                break;
              case 5:
                e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])), e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])), e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1]));
                break;
              case 6:
                e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])), e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])), e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0]));
                break;
              case 9:
                e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])), e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])), e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])), e.lineTo(t + 2 * c[0] * Math.cos(n - .5 * s[0]), a + 2 * c[0] * Math.sin(n - .5 * s[0]));
                break;
              case 10:
                e.lineTo(t + 2 * c[0] * Math.cos(n + .5 * s[0]), a + 2 * c[0] * Math.sin(n + .5 * s[0])), e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])), e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])), e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0]));
                break;
              case 11:
                e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])), e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])), e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])), e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0])), e.bezierCurveTo(t + c[0] * Math.cos(n - s[0]) * .5, a + c[0] * Math.sin(n - s[0]) * .5, t + c[0] * Math.cos(n + s[0]) * .5, a + c[0] * Math.sin(n + s[0]) * .5, t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0]))
            }
            e.closePath(), e.stroke(), g && e.fill()
          }(d, m + u * M, p + u * E, u * (F.length / 2 - (1 === (null == F.aspect ? 1 : F.aspect) ? 2 * v : 0)), u * F.width / 2, null == F.aspect ? 1 : F.aspect, (F.angle || 0) + n, F.skin || 0)
      }
      if (d.globalAlpha = 1, "string" == typeof a.color && a.color.includes(", ")) {
        var T = a.color.split(", ").map(e => +e);
        let l = ctx.createLinearGradient(e - Math.cos(n) * (u / 2), t - Math.sin(n) * (u / 2), e + Math.cos(n) * (u / 2), t + Math.sin(n) * (u / 2)),
          o = ctx.createLinearGradient(e - Math.cos(n) * (u / 2), t - Math.sin(n) * (u / 2), e + Math.cos(n) * (u / 2), t + Math.sin(n) * (u / 2));
        for (let e = 0; e < T.length / 2; e++) l.addColorStop(e / 1.5 / T.length, getColor(T[e])), o.addColorStop(e / 1.5 / T.length, getColorDark(getColor(T[e]))), l.addColorStop(1 - e / 1.5 / T.length, getColor(T[T.length - 1 - e])), o.addColorStop(1 - e / 1.5 / T.length, getColorDark(getColor(T[T.length - 1 - e])));
        d.fillStyle = l, d.strokeStyle = o
      } else a.invuln && 100 < (Date.now() - a.invuln) % 200 ? setColor(d, mixColors(getColor(a.color), color.vlgrey, .5)) : setColor(d, mixColors(getColor(a.color), g.status.getColor(), g.status.getBlend()));
      if ("colorful" === config.graphical.shaders && (ctx.shadowColor = ctx.strokeStyle), function(e, t, a, l, o, r, n = 0, i = !0) {
        if (1e6 < Math.abs(o) && (i = !i, o -= 0 < o ? 1e6 : -1e6), i || (l += e.lineWidth), e.beginPath(), o) {
          if (o instanceof Array) {
            if ("string" == typeof o[0]) {
              var s = new Path2D(o);
              return l /= o[1], e.save(), e.translate(t, a), e.scale(l, l), e.lineWidth /= l, e.rotate(n), e.stroke(s), i && e.fill(s), e.restore()
            }
            var c = Math.cos(n),
              g = Math.sin(n);
            for (let r = 0; r < o.length; r++) {
              var d = o[r][0],
                h = o[r][1];
              e[r ? "lineTo" : "moveTo"](t + l * (d * c - h * g), a + l * (h * c + d * g))
            }
          } else if (100 === o) {
            s = .6 * l;
            var u = .4 * l;
            e.arc(t + s, a + s, u, n, .5 * Math.PI + n), e.arc(t - s, a + s, u, .5 * Math.PI + n, Math.PI + n), e.arc(t - s, a - s, u, Math.PI + n, 1.5 * Math.PI + n), e.arc(t + s, a - s, u, -.5 * Math.PI + n, n)
          } else if (112 === o)
            for (let o = 0; o < 4; o++) {
              let r = o / 4 * 2 * Math.PI,
                i = t + l * Math.cos(r + n),
                s = a + l * Math.sin(r + n);
              2 === o ? (i = t + -1.5 * l * Math.cos(n), s = a + -1.5 * l * Math.sin(n)) : 0 !== o && 4 !== o || (i = t + 1.5 * l * Math.cos(n), s = a + 1.5 * l * Math.sin(n)), e.lineTo(i, s)
            } else if (129 === o) {
              var b = 1 - 8 / -3 / -3;
              e.moveTo(t + l * Math.cos(n), a + l * Math.sin(n));
              for (let o = 0; o < 3; o++) {
                var m = (o + 1) / 3 * 2 * Math.PI,
                  p = (o + .5) / 3 * 2 * Math.PI;
                p = {
                  x: t + l * b * Math.cos(p + n),
                  y: a + l * b * Math.sin(p + n)
                }, m = {
                  x: t + l * Math.cos(m + n),
                  y: a + l * Math.sin(m + n)
                };
                e.quadraticCurveTo(p.x, p.y, m.x, m.y)
              }
            } else if (130 === o) e.arc(t, a, l, 0, 2 * Math.PI, !0), e.arc(t, a, .999999 * l, 0, 2 * Math.PI, !1);
          else if (999 < o) {
            switch (e.save(), e.beginPath(), e.translate(t, a), e.rotate(n), o) {
              case 1e3:
                imageCache.pumpkin && e.drawImage(imageCache.pumpkin, -l, -l, 2 * l, 2 * l);
                break;
              case 1001:
                ctx.save(), ctx.globalAlpha = .5, imageCache.poisonHue && e.drawImage(imageCache.poisonHue, 2 * -l, 2 * -l, 4 * l, 4 * l), ctx.restore();
                break;
              case 1002:
                ctx.save(), ctx.globalAlpha = .5, imageCache.iceHue && e.drawImage(imageCache.iceHue, 2 * -l, 2 * -l, 4 * l, 4 * l), ctx.restore();
                break;
              case 1003:
                ctx.save(), ctx.globalAlpha = .5, imageCache.empHue && e.drawImage(imageCache.empHue, 2 * -l, 2 * -l, 4 * l, 4 * l), ctx.restore();
                break;
              case 1004:
                ctx.save(), ctx.globalAlpha = .5, imageCache.frostbiteHue && e.drawImage(imageCache.frostbiteHue, 2 * -l, 2 * -l, 4 * l, 4 * l), ctx.restore();
                break;
              case 1005:
                ctx.save(), ctx.globalAlpha = .5, imageCache.teslaHue && e.drawImage(imageCache.teslaHue, 4 * -l, 4 * -l, 8 * l, 8 * l), ctx.restore();
                break;
              case 1006:
                ctx.save(), ctx.globalAlpha = .5, imageCache.confusionHue && e.drawImage(imageCache.confusionHue, 2 * -l, 2 * -l, 4 * l, 4 * l), ctx.restore();
                break;
              case 1007:
                ctx.save(), ctx.globalAlpha = .5, imageCache.blindnessHue && e.drawImage(imageCache.blindnessHue, 2 * -l, 2 * -l, 4 * l, 4 * l), ctx.restore();
                break;
              case 1008:
                ctx.save(), ctx.globalAlpha = .5, imageCache.fireHue && e.drawImage(imageCache.fireHue, 2 * -l, 2 * -l, 4 * l, 4 * l), ctx.restore();
                break;
              case 1009:
                ctx.save(), ctx.globalAlpha = .5, imageCache.steelProp && e.drawImage(imageCache.steelProp, 2 * -l, 2 * -l, 4 * l, 4 * l), ctx.restore()
                break;
              case 1010:
                ctx.save(), ctx.globalAlpha = .5, imageCache.regenHue && e.drawImage(imageCache.regenHue, 2 * -l, 2 * -l, 4 * l, 4 * l), ctx.restore();

            }
            e.restore()
          } else if (o < 0) {
            n += o % 2 ? 0 : Math.PI / o, config.graphical.pointyStars && (e.lineJoin = "miter");
            var f = 1 - 6 / o / o;
            o = -o, e.moveTo(t + l * Math.cos(n), a + l * Math.sin(n));
            for (let r = 0; r < o; r++) {
              var x = (r + 1) / o * 2 * Math.PI,
                y = (r + .5) / o * 2 * Math.PI;
              y = {
                x: t + l * f * Math.cos(y + n),
                y: a + l * f * Math.sin(y + n)
              }, x = {
                x: t + l * Math.cos(x + n),
                y: a + l * Math.sin(x + n)
              };
              e.quadraticCurveTo(y.x, y.y, x.x, x.y)
            }
          } else if (0 < o)
            if (n += o % 2 ? 0 : Math.PI / o, 4 === o && null != r && r[0] !== r[1])
              for (var [k, w] of [r, [-r[0], r[1]],
                [-r[0], -r[1]],
                [r[0], -r[1]]
              ]) e.lineTo(t + (l + 1.1 * (k - .1) / (k / 1.1)) * (k * Math.cos(n)), a + (l + 1.1 * (w - .1) / (w / 1.1)) * (w * Math.sin(n)));
            else
              for (let r = 0; r < o; r++) {
                var F = r / o * 2 * Math.PI,
                  v = t + l * Math.cos(F + n);
                F = a + l * Math.sin(F + n);
                e.lineTo(v, F)
              }
        } else u = e.fillStyle, r = e.strokeStyle, l += e.lineWidth / 4, e.arc(t, a, l + e.lineWidth / 4, 0, 2 * Math.PI), e.fillStyle = r, e.fill(), e.closePath(), e.beginPath(), e.arc(t, a, l - e.lineWidth / 4, 0, 2 * Math.PI), e.fillStyle = u, e.fill(), e.closePath();
        e.closePath(), e.stroke(), i && e.fill(), e.lineJoin = "round"
      }(d, m, p, u / b.size * b.realSize, b.shape, f.widthHeightRatio, n), f.turrets.length !== b.turrets.length) throw new Error("Mismatch turret number with mockup.");
      for (let e = 0; e < b.turrets.length; e++) {
        var C, S, B = b.turrets[e];
        1 === B.layer && (C = B.direction + B.angle + n, S = B.offset * u, drawEntity(m + S * Math.cos(C), p + S * Math.sin(C), B, l, o, u / l / B.size * B.sizeFactor, f.turrets[e].lerpedFacing + i * n, i, d, f.turrets[e], g))
      }
      0 == s && d != ctx && (ctx.save(), ctx.globalAlpha = o * h, ctx.drawImage(d.canvas, e - m, t - p), ctx.restore())
    }
  };

  function drawHealth(e, t, a, l, o) {
    if (!(o < .05)) {
      var r = -1 + (Math.pow(a.render.status.getFade(), 2) + o);
      ctx.globalAlpha = r;
      let g = a.size * l;
      var n, i = mockups[a.index],
        s = g / i.size * i.realSize;
      if ("colorful" === config.graphical.shaders && (ctx.shadowColor = color.black), a.drawsHealth && (n = a.render.health.get(!0), i = a.render.shield.get(!0), (n < 1 || i < 1) && (c = t + 1.1 * s + 15, ctx.globalAlpha = o * o * r, config.graphical.shieldbars ? (drawBar(e - g, e + g, c, 6 + config.graphical.barChunk, color.black), i ? (drawBar(e - g, e - g + 2 * g * n, c + 1.5, 3, color.lgreen), ctx.globalAlpha *= .7, drawBar(e - g, e - g + 2 * g * i, c - 1.5, 3, color.teal)) : drawBar(e - g, e - g + 2 * g * n, c, 4, color.lgreen)) : (drawBar(e - g, e + g, c, 3 + config.graphical.barChunk, color.black), drawBar(e - g, e - g + 2 * g * n, c, 3, color.lgreen), i && (ctx.globalAlpha *= .3 + .3 * i, drawBar(e - g, e - g + 2 * g * i, c, 3, color.teal))), ctx.globalAlpha = r)), ctx.globalAlpha = r, a.nameplate && a.id !== gui.playerid) {
        null == a.render.textobjs && (a.render.textobjs = [TextObj(), TextObj()]);
        var c = l * a.size / 20;
        r = a.name.substring(7, a.name.length + 1);
        if ((l = a.name.substring(0, 7)).startsWith("$")) {
          const t = 16 * c * (r.length / 2),
            a = ctx.createLinearGradient(e - t / 2, 0, e + t / 2, 0);
          for (let e = 0; e < global.nameGradient.length; e++) a.addColorStop(e / (global.nameGradient.length - 1) * 1, global.nameGradient[e]);
          l = a
        }
        a.render.textobjs[0].draw(r, e, t - s - 30 * c, 16 * c, l, "center"), a.render.textobjs[1].draw(util.handleLargeNumber(a.score, !0), e, t - s - 16 * c, 8 * c, l, "center")
      }
    }
  }
  window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) { }, window.cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
  const gameDraw = (() => {
    const e = Smoothbar(0, .7, 1.5),
      t = Smoothbar(0, 2, 3);

    function a() {
      var e = [];
      return (t, a, l, o, r, n) => {
        for (e.push(t); e.length > o;) e.splice(0, 1);
        let i = Math.min(...e),
          s = Math.max(...e),
          c = s - i;
        0 < s && i < 0 && drawBar(a, a + o, l + r * s / c, 2, color.guiwhite), ctx.beginPath();
        let g = -1;
        e.forEach(e => {
          ++g ? ctx.lineTo(a + g, l + r * (s - e) / c) : ctx.moveTo(a, l + r * (s - e) / c)
        }), ctx.lineWidth = 1, ctx.strokeStyle = n, ctx.stroke()
      }
    }
    const l = () => {
      let e = 0,
        t = 0,
        a = 0;
      return {
        set: (l = player.time, o = metrics.rendergap) => {
          150 < (e = Math.max(getNow() - l - 80, -o)) && e < 1e3 && (e = 150), 1e3 < e && (e = 1e6 * Math.sin(e / 1e3 - 1) / e + 1e3), t = e / o, a = 30 * config.roomSpeed * e / 1e3
        },
        predict: (a, l, o, r) => {
          return 0 <= e ? (i = l) + (i - (n = a)) * (s = t) : (n = a, s = l, a = o, l = r, .5 * (((1 + (o = t)) * a + n) * ((r = Math.cos((1 + o) * Math.PI)) + 1) + (-o * l + s) * (1 - r)));
          var n, i, s
        },
        predictFacing: (e, a) => {
          return e + (1 + t) * (a, ((a - (e = e) + Math.PI) % (e = 2 * Math.PI) + e) % e - Math.PI)
        },
        getPrediction: () => e,
        lerp: lerp,
        lerpAngle: lerpAngle
      }
    },
      o = a(),
      r = a(),
      n = a(),
      i = (() => {
        let e = [];
        for (let a = 0; a < 2 * config.gui.expectedMaxSkillLevel; a++) e.push((t = a / config.gui.expectedMaxSkillLevel, Math.log(4 * t + 1) / Math.log(5)));
        var t;
        return t => e[t]
      })(),
      s = {
        skillNames: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
        skillKeys: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
        skillValues: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
        skillPoints: TextObj(),
        score: TextObj(),
        name: TextObj(),
        class: TextObj(),
        debug: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
        lbtitle: TextObj(),
        leaderboard: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
        upgradeNames: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
        upgradeKeys: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
        skipUpgrades: TextObj(),
        carrier: [TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj(), TextObj()],
        submarineUI: TextObj()
      },
      c = TextObj();

    function g(e, t, a, l, o, r) {
      ctx.save(), ctx.globalAlpha = .4, ctx.translate(t, a), ctx.fillStyle = getColor(e ? 7 : 11), ctx.fillRect(0, 0, l, o), ctx.globalAlpha = .1, ctx.fillStyle = "#000000", ctx.fillRect(0, o / 2, l, o / 2), ctx.globalAlpha = .4, ctx.lineWidth = 2, ctx.strokeStyle = "#000000", ctx.strokeRect(0, 0, l, o), ctx.globalAlpha = 1, c.draw(r, l / 2, o / 2, 19, color.guiwhite, "center", !0), global.clickables.mobileClicks.place(e, t, a, l, o), ctx.restore()
    }
    return a => {
      renderTimes++;
      let c, d, h = Math.max(global.screenWidth, 16 * global.screenHeight / 9) / (global.screenWidth <= 1280 ? 1280 : 1920 <= global.screenWidth ? 1920 : global.screenWidth); {
        let e = l();
        e.set();
        var u = e.getPrediction();
        player.renderx = e.lerp(player.renderx, player.cx, .1, !0), player.rendery = e.lerp(player.rendery, player.cy, .1, !0), c = a * player.renderx, d = a * player.rendery
      }
      clearScreen(color.white, 1), clearScreen(color.guiblack, .1), 1 === global.mapType ? (ctx.globalAlpha = 1, ctx.fillStyle = color.white, ctx.beginPath(), ctx.arc(-c + global.screenWidth / 2 + a * global.gameWidth / 2, -d + global.screenHeight / 2 + a * global.gameHeight / 2, a * global.gameWidth / 2, 0, 2 * Math.PI), ctx.closePath(), ctx.fill()) : (ctx.globalAlpha = 1, ctx.fillStyle = color.white, ctx.fillRect(-c + global.screenWidth / 2, -d + global.screenHeight / 2, a * global.gameWidth, a * global.gameHeight));
      var b = roomSetup[0].length,
        m = roomSetup.length;
      for (let e = 0; e < roomSetup.length; e++) {
        var p = roomSetup[e];
        for (let t = 0; t < p.length; t++) {
          var f = p[t],
            x = a * t * global.gameWidth / b - c + global.screenWidth / 2,
            y = a * e * global.gameHeight / m - d + global.screenHeight / 2,
            k = a * (t + 1) * global.gameWidth / b - c + global.screenWidth / 2,
            w = a * (e + 1) * global.gameHeight / m - d + global.screenHeight / 2;
          ctx.globalAlpha = .5, ctx.fillStyle = getZoneColor(f), getZoneColor(f) !== color.white && (1 === global.mapType ? (ctx.beginPath(), ctx.arc(x + (f = (k - x) / 2), y + f, f, 0, 2 * Math.PI, !0), ctx.fill(), ctx.closePath()) : ctx.fillRect(x, y, k - x, w - y))
        }
      }
      ctx.lineWidth = 1, ctx.strokeStyle = config.graphical.screenshotMode ? color.guiwhite : color.guiblack, ctx.globalAlpha = .05, ctx.beginPath();
      var F, v, M, E = 30 * a;
      for (let e = (global.screenWidth / 2 - c) % E; e < global.screenWidth; e += E) ctx.moveTo(e, 0), ctx.lineTo(e, global.screenHeight);
      for (let e = (global.screenHeight / 2 - d) % E; e < global.screenHeight; e += E) ctx.moveTo(0, e), ctx.lineTo(global.screenWidth, e);
      ctx.stroke(), ctx.globalAlpha = 1, "none" !== config.graphical.shaders && (ctx.shadowBlur = 10 * a, "shadows" === config.graphical.shaders && (ctx.shadowColor = "black"));
      for (let e = 0; e < entities.length; e++) ! function(e) {
        if (!e.render.draws) return;
        let t = l();
        1 === e.render.status.getFade() ? t.set() : t.set(e.render.lastRender, e.render.interval), e.render.x = t.lerp(e.render.x, Math.round(e.x + e.vx), .1, !0), e.render.y = t.lerp(e.render.y, Math.round(e.y + e.vy), .1, !0), e.render.f = e.id !== gui.playerid || e.twiggle ? t.lerpAngle(e.render.f, e.facing, .15, !0) : Math.atan2(target.y, target.x);
        var o = a * e.render.x - c,
          r = a * e.render.y - d;
        o += global.screenWidth / 2, r += global.screenHeight / 2, e.id === gui.playerid && (window.playerObj = e), drawEntity(o, r, e, a, e.id === gui.playerid || global.showInvisible ? e.alpha ? .6 * e.alpha + .4 : .25 : e.alpha, 1.1, e.render.f)
      }(entities[e]);
      if (!config.graphical.screenshotMode)
        for (let e = 0; e < entities.length; e++) F = entities[e], M = v = void 0, v = a * F.render.x - c, M = a * F.render.y - d, drawHealth(v += global.screenWidth / 2, M += global.screenHeight / 2, F, a, F.alpha);
      ctx.shadowBlur = !1;
      var T = (e, t) => {
        global.screenWidth /= e, global.screenHeight /= e, ctx.scale(e, e), t || (h *= e)
      };
      T(h, !0);
      var C = 200;
      gui.__s.update();
      var S = leaderboard.get(),
        B = S.max;
      if (global.mobile) {
        var A = Math.min(.6 * global.screenWidth, .12 * global.screenHeight);
        ctx.globalAlpha = .3, ctx.fillStyle = "#ffffff", ctx.beginPath(), ctx.arc(+global.screenWidth / 6, 2 * global.screenHeight / 3, A, 0, 2 * Math.PI), ctx.arc(5 * global.screenWidth / 6, 2 * global.screenHeight / 3, A, 0, 2 * Math.PI), ctx.fill();
        for (let e = 0; e < 4; e++) {
          var I = 2 * Math.PI / 4 * e;
          ctx.strokeStyle = "#dddddd", ctx.lineWidth = .125 * A, ctx.beginPath(), ctx.save(), ctx.translate(+global.screenWidth / 6, 2 * global.screenHeight / 3), ctx.moveTo(Math.cos(I) * A * .2, Math.sin(I) * A * .2), ctx.lineTo(Math.cos(I) * A * .8, Math.sin(I) * A * .8), ctx.restore(), ctx.closePath(), ctx.stroke(), ctx.beginPath(), ctx.save(), ctx.translate(5 * global.screenWidth / 6, 2 * global.screenHeight / 3), ctx.moveTo(Math.cos(I) * A * .2, Math.sin(I) * A * .2), ctx.lineTo(Math.cos(I) * A * .8, Math.sin(I) * A * .8), ctx.restore(), ctx.closePath(), ctx.stroke()
        }
        g(0, 20, global.screenHeight - 20 - 50, 50, 50, global.mobileOptions ? "X" : "+"), global.mobileOptions && (g(1, 90, (ee = global.screenHeight - 20 - 50) - 70, 100, 50, "Level Up"), g(2, 210, ee - 70, 100, 50, "Testbed"), g(6, 330, ee - 70, 100, 50, "Control Point"), g(3, 90, ee, 100, 50, "Autofire"), g(4, 210, ee, 100, 50, "Autospin"), g(5, 330, ee, 100, 50, "Override"))
      }
      do {
        if (!global.showTree) break;
        global.died && (global.showTree = !1, global.scrollX = 0), global.realScrollX = lerp(global.realScrollX, global.scrollX, .1);
        var D, R, P, O, _, H, W = mockups.find(e => "Basic" === e.name);
        if (!W) break;
        let e = [],
          t = [],
          a = (l, o, r, {
            index: n,
            tier: i = 0
          }) => {
            e.push({
              x: l,
              y: o,
              colorIndex: r,
              index: n
            });
            let s = mockups[n].upgrades || [];
            switch (i) {
              case 5:
                return {
                  width: 1, height: 1
                };
              case 4:
                return s.forEach((e, t) => a(l, o + 2 + t, t, e)), s.length && t.push([{
                  x: l,
                  y: o
                }, {
                  x: l,
                  y: o + 1 + s.length
                }]), {
                  width: 1,
                  height: 2 + s.length
                };
              case 3:
              case 2:
              case 1:
              case 0: {
                let e = l,
                  r = s.map((r, n) => {
                    var c = 2 * (r.tier - i);
                    r = a(l, o + c, n, r);
                    return s.length && t.push([{
                      x: l,
                      y: o + (0 === n ? 0 : 1)
                    }, {
                      x: l,
                      y: o + c
                    }]), n + 1 === s.length && t.push([{
                      x: e,
                      y: o + 1
                    }, {
                      x: l,
                      y: o + 1
                    }]), l += r.width, r
                  });
                return {
                  width: r.map(e => e.width).reduce((e, t) => e + t, 0) || 1,
                  height: 2 + Math.max(...r.map(e => e.height))
                }
              }
            }
          },
          l = a(0, 0, 0, {
            index: W.index
          }),
          o = +Math.min(.9 * global.screenWidth / l.width * 55, .9 * global.screenHeight / l.height),
          r = o - 4;
        for ([D, R] of t) {
          var j = global.screenWidth / 2 + (D.x - l.width * global.realScrollX) * o + 1 + .5 * r,
            U = global.screenHeight / 2 + (D.y - l.height / 2) * o + 1 + .5 * r,
            L = global.screenWidth / 2 + (R.x - l.width * global.realScrollX) * o + 1 + .5 * r,
            G = global.screenHeight / 2 + (R.y - l.height / 2) * o + 1 + .5 * r;
          ctx.strokeStyle = color.black, ctx.lineWidth = 2, drawGuiLine(j, U, L, G)
        }
        ctx.globalAlpha = 1;
        let n = 99;
        for ({
          x: P,
          y: O,
          colorIndex: _,
          index: H
        }
          of e) {
          185 < ++n && (n = 100);
          var z, K, N, Y, q, $ = global.screenWidth / 2 + (P - l.width * global.realScrollX) * o,
            X = global.screenHeight / 2 + (O - l.height / 2) * o,
            J = o - 4;
          $ < -50 || $ + J - 50 > global.screenWidth || (ctx.globalAlpha = .75, ctx.fillStyle = getColor(n), drawGuiRoundRect($, X, J, J, 10), ctx.globalAlpha = .15, ctx.fillStyle = getColor(0), drawGuiRoundRect($, X, J, .6 * J, 10), ctx.fillStyle = color.black, drawGuiRoundRect($, X + .6 * J, J, .4 * J, 10), ctx.globalAlpha = 1, z = Date.now() / 2500, K = getEntityImageFromMockup(H, 10), Y = $ + .5 * J - (N = .8 * J / (q = mockups[H].position).axis) * q.middle.x * Math.cos(z), q = X + .5 * J - N * q.middle.x * Math.sin(z), drawEntity(Y, q, K, .5, 1, N / K.size * 2, z, !0), ctx.strokeStyle = color.black, ctx.globalAlpha = 1, ctx.lineWidth = 2, drawGuiRoundRect($, X, J, J, 10, !0))
        }
      } while (0);
      global.mobile && T(1.4); {
        var V, Z = global.screenWidth / 2;
        let a = 20;
        global.mobile && (a += (global.canSkill ? (C / 3 + 20) / 1.4 * e.get() : 0) + (global.canUpgrade ? 120 / 1.4 * t.get() : 0));
        for (let e = messages.length - 1; 0 <= e; e--) {
          let t = messages[e],
            l = t.text;
          null == t.textobj && (t.textobj = TextObj()), null == t.len && (t.len = measureText(l, 14)), ctx.globalAlpha = .5 * t.alpha, drawBar(Z - t.len / 2, Z + t.len / 2, a + 9, 18, color.black), ctx.globalAlpha = Math.min(1, t.alpha), t.textobj.draw(l, Z, a + 9, 14, color.guiwhite, "center", !0), a += 22, 1 < t.status && (a -= 22 * (1 - Math.sqrt(t.alpha))), 1 < t.status ? (t.status -= .05, t.alpha += .05) : 0 === e && (5 < messages.length || 5e3 < Date.now() - t.time) && (V = 1 + (5 < messages.length ? (messages.length - 5) / 10 : 0), t.status -= .05 * V, t.alpha -= .05 * V, t.alpha <= 0 && (messages[0].textobj.remove(), messages.splice(0, 1)))
        }
        ctx.globalAlpha = 1
      }
      if (global.mobile && T(1 / 1.4), !global.showTree) {
        if (!global.mobile) {
          global.canSkill = !!gui.points && gui.skills.some(e => e.amount < e.cap), e.set(0 + (global.canSkill || global.died || global.statHover)), global.clickables.stat.hide();
          var Q = e.get();
          let t = 4,
            a = 15,
            l = 35,
            o = C,
            r = o,
            n = -20 - 2 * o + Q * (40 + 2 * o),
            c = global.screenHeight - 20 - a,
            g = 11,
            d = gui.getStatNames(mockups[gui.type].statnames || -1);
          for (let e = 0; e < gui.skills.length; e++) ! function(e) {
            var u = d[--g - 1],
              b = e.amount,
              m = color[e.color],
              p = e.softcap;
            e = e.cap;
            if (p) {
              o = r;
              let d = config.gui.expectedMaxSkillLevel,
                f = p < e;
              if (p > d && (d = p), drawBar(n + a / 2, n - a / 2 + o * i(p), c + a / 2, a - 3 + config.graphical.barChunk, color.black), drawBar(n + a / 2, n + a / 2 + (o - l) * i(p), c + a / 2, a - 3, color.grey), drawBar(n + a / 2, n + a / 2 + (o - l) * i(b), c + a / 2, a - 3.5, m), f) {
                ctx.lineWidth = 1, ctx.strokeStyle = color.grey;
                for (let e = p + 1; e < d; e++) drawGuiLine(n + (o - l) * i(e), c + 1.5, n + (o - l) * i(e), c - 3 + a)
              }
              ctx.strokeStyle = color.black;
              for (let e = ctx.lineWidth = 1; e < b + 1; e++) drawGuiLine(n + (o - l) * i(e), c + 1.5, n + (o - l) * i(e), c - 3 + a);
              o = r * i(d), p = b == e ? m : !gui.points || p !== e && b == p ? color.grey : color.guiwhite, s.skillNames[g - 1].draw(u, Math.round(n + o / 2) + .5, c + a / 2, a - 5, p, "center", !0), s.skillKeys[g - 1].draw("[" + g % 10 + "]", Math.round(n + o - .25 * a) - 1.5, c + a / 2, a - 5, p, "right", !0), p === color.guiwhite && global.clickables.stat.place(g - 1, n * h, c * h, o * h, a * h), b && s.skillValues[g - 1].draw(p === m ? "MAX" : "+" + b, Math.round(n + o + 4) + .5, c + a / 2, a - 5, m, "left", !0), c -= a + t
            }
          }(gui.skills[e]);
          global.clickables.hover.place(0, 0, c * h, .8 * o * h, .8 * (global.screenHeight - c) * h), 0 !== gui.points && s.skillPoints.draw("x" + gui.points, Math.round(n + o - 2) + .5, Math.round(c + a - 4) + .5, 20, color.guiwhite, "right")
        } {
          if (global.showTree) return;
          var ee = 330;
          Q = (global.screenWidth - ee) / 2;
          let e = global.screenHeight - 20 - 25;
          global.died && !global.mobile && (e -= 115), ctx.lineWidth = 1, drawBar(Q, Q + ee, e + 12.5, 22 + config.graphical.barChunk, color.black), drawBar(Q, Q + ee, e + 12.5, 22, color.grey), drawBar(Q, Q + ee * gui.__s.getProgress(), e + 12.5, 21.5, color.gold), s.class.draw("Level " + gui.__s.getLevel() + " " + mockups[gui.type].name, 165 + Q, e + 12.5, 21, color.guiwhite, "center", !0), drawBar(33 + Q, 297 + Q, (e -= 18) + 7, 11 + config.graphical.barChunk, color.black), drawBar(33 + Q, 297 + Q, e + 7, 11, color.grey), drawBar(33 + Q, Q + ee * (.1 + .8 * (B ? Math.min(1, gui.__s.getScore() / B) : 1)), e + 7, 10.5, color.green), s.score.draw("Score: " + util.handleLargeNumber(gui.__s.getScore()), 165 + Q, e + 7, 12, color.guiwhite, "center", !0), ctx.lineWidth = 4;
          let t = player.nameColor || "#FFFFFF";
          if (t.startsWith("$")) {
            var te = player.name.length / 2 * 32;
            const e = ctx.createLinearGradient(Math.round(165 + Q) + .5 - te / 2, 0, Math.round(165 + Q) + .5 + te / 2, 0);
            for (let t = 0; t < global.nameGradient.length; t++) e.addColorStop(t / (global.nameGradient.length - 1) * 1, global.nameGradient[t]);
            t = e
          }
          s.name.draw(player.name, Math.round(165 + Q) + .5, Math.round(e - 10 - 4) + .5, 32, t, "center")
        }
        global.mobile && T(.8); {
          // ===============================================================================
          // Chat System.        
          // ===============================================================================        
          { // Draw chat messages
            if (global.hideChat) return;
            let vspacing = 4;
            let len = 0;
            let spacing = 15;
            let height = 27; //18;
            let width = 13;
            // 3/5 of the screen width.
            let x = global.screenWidth * 3 / 5;
            // One-third of the screen height.
            let wp = 3/9;
            let y = (global.screenHeight - 3 / 4) - wp/* + spacing */ - 50;
            // Draw each message
            for (let i = chatMessages.length - 1; i >= 0; i--) {
              let msg = chatMessages[i],
                txt = msg.text,
                text = txt;
              // Give it a textobj if it doesn't have one
              if (msg.textobj == null) msg.textobj = TextObj();
              if (msg.len == null) msg.len = measureText(text, height - 4);
              // Draw the background             
              //let chatColor = getColor(msg.colorIndex);
              ctx.globalAlpha = 0.5 * msg.alpha;
              //drawBar(x - msg.len / 15, x + msg.len / 2, y + height / 2, height, color.blue);

              // Draw the text (fucked up)
             /* ctx.globalAlpha = Math.min(1, msg.alpha);
              msg.textobj.draw(text, x, y + height / 2, height - 4, //Text color
                color.red, 'left', true);*/
              ctx.globalAlpha = Math.min(1, msg.alpha);
                msg.textobj.draw(text, x * 3/5 + wp - 50, y - 69, height - 6, 'left', color.white, /*'right',*/ true)

              // Iterate and move
              y += (vspacing + height);
              if (msg.status > 1) {
                y -= (vspacing + height) * (1 - Math.sqrt(msg.alpha));
              }
              if (msg.status > 1) {
                msg.status -= 0.05;
                msg.alpha += 0.05;
              } else if (i === 0 && (chatMessages.length > 5 || Date.now() - msg.time > 10000)) {
                msg.status -= 0.05;
                msg.alpha -= 0.05;
                // Remove
                if (msg.alpha < -0) {
                  chatMessages[0].textobj.remove;
                  chatMessages.splice(0, 1);
                }
              }
            }
            ctx.globalAlpha = 1;
          }
          // ===============================================================================
          if (global.showTree) return;
          let e = C,
            t = e / global.gameWidth * global.gameHeight;
          if (global.gameHeight > global.gameWidth || global.gameHeight < global.gameWidth) {
            let a = [global.gameWidth / global.gameHeight, global.gameHeight / global.gameWidth];
            e /= 1.5 * a[1], t /= 1.5 * a[1], e /= a = 400 < e ? e / 400 : 400 < t ? t / 400 : 1, t /= a
          }
          let a = global.mobile ? 20 : global.screenWidth - 20 - e * animations.minimap.get(),
            l = global.mobile ? 20 + (global.canUpgrade ? 140 : 0) : global.screenHeight - t * animations.minimap.get() - 20;
          ctx.globalAlpha = .4;
          var ae, le = config.graphical.arrasStyle ? 0 : 10;
          let i = roomSetup[0].length,
            c = roomSetup.length,
            g = 0;
          for (let o = 0; o < c; o++) {
            roomSetup[o];
            let r = 0;
            for (let n = 0; n < i; n++) {
              var oe = roomSetup[o][n],
                re = n,
                ne = o,
                ie = i;
              let s = [!1, !1, !1, !1];
              0 == re && 0 == ne && (s[3] = !0), re == ie - 1 && 0 == ne && (s[0] = !0), 0 == re && ne == ie - 1 && (s[2] = !0), re == ie - 1 && ne == ie - 1 && (s[1] = !0), ctx.fillStyle = getZoneColor(oe), getZoneColor(oe) !== color.white && (1 === global.mapType ? (ctx.beginPath(), ctx.arc(a + r * e / i + e / i / 2, l + g * t / c + t / c / 2, e / i / 2, 0, 2 * Math.PI, !0), ctx.closePath(), ctx.fill()) : drawGuiRoundRect(a + r * e / i, l + g * t / c, e / i, t / c, le, void 0, s)), r++
            }
            g++
          }
          for (ae of (ctx.fillStyle = color.white, 1 === global.mapType ? drawGuiCircle(a + e / 2, l + t / 2, e / 2) : drawGuiRoundRect(a, l, e, t, le), minimap.get())) switch (ctx.fillStyle = mixColors(getColor(ae.color), color.black, .3), ctx.globalAlpha = ae.alpha, ae.type) {
            case 3:
              drawGuiRect(a + (ae.x - 3) / global.realGameWidth * e, l + (ae.y - 3) / global.realGameHeight * t, 3, 3);
              break;
            case 2:
              var se = ae.size * (ae.width || 1),
                ce = ae.size * (ae.height || 1);
              drawGuiRect(a + (ae.x - se) / global.realGameWidth * e - .4, l + (ae.y - ce) / global.realGameHeight * t - 1, 2 * se / global.realGameWidth * e + .2, 2 * ce / global.realGameWidth * e + .2);
              break;
            case 1:
              drawGuiCircle(a + ae.x / global.realGameWidth * e, l + ae.y / global.realGameHeight * t, ae.size / global.realGameWidth * e + .2);
              break;
            case 0:
              ae.id !== gui.playerid && drawGuiCircle(a + ae.x / global.realGameWidth * e, l + ae.y / global.realGameHeight * t, 2)
          }
          ctx.globalAlpha = 1, ctx.lineWidth = 1, ctx.strokeStyle = color.black, ctx.fillStyle = color.black, drawGuiCircle(a + player.cx / global.gameWidth * e - 1, l + player.cy / global.gameHeight * t - 1, 2, !1), ctx.lineWidth = 3, ctx.fillStyle = color.black, 1 === global.mapType ? drawGuiCircle(a + e / 2, l + t / 2, e / 2, !0) : drawGuiRoundRect(a, l, e, t, le, !0), global.mobile && (a = global.screenWidth - e - 20, l = global.screenHeight - 20);
          let d = metrics.latency.reduce((e, t) => e + t, 0) / metrics.latency.length;
          global.showDebug && (drawGuiRoundRect(a, l - 40, e, 30, 10), r(d, a, l - 40, e, 30, color.teal), n(metrics.rendergap, a, l - 40, e, 30, color.pink), o(u, a, l - 40, e, 30, color.yellow)), global.showDebug || (l += 42), global.showDebug ? (s.debug[5].draw("Oxyrex.io", a + e, l - 50 - 70 - 2, 15, "#DD0000", "right"), s.debug[4].draw("Prediction: " + Math.round(u) + "ms", a + e, l - 50 - 56, 10, color.guiwhite, "right"), s.debug[3].draw(`Bandwidth: ${gui.bandwidth.in} in, ${gui.bandwidth.out} out`, a + e, l - 50 - 42, 10, color.guiwhite, "right"), s.debug[2].draw("Update Rate: " + metrics.updatetime + "Hz", a + e, l - 50 - 28, 10, color.guiwhite, "right")) : (s.debug[3].draw("Oxyrex.io", a + e, l - 50 - 42 - 2, 15, mixColors(["#ff1000", "#ff9000", "#ffd300", "#00e00b", "#226ef6", "#a913cf"][Math.floor(Date.now() / 200 % 6)], ["#ff9000", "#ffd300", "#00e00b", "#226ef6", "#a913cf", "#ff1000"][Math.floor(Date.now() / 200 % 6)], Date.now() / 200 % 1), "right"), s.debug[2].draw(metrics.updatetime + "Hz : " + global.playerCount + " Players", a + e, l - 50 - 28, 10, color.guiwhite, "right")), s.debug[1].draw(gui.fps + "mspt : " + metrics.rendertime + " FPS", a + e, l - 50 - 14, 10, 10 < metrics.rendertime ? color.guiwhite : color.orange, "right"), s.debug[0].draw(d.toFixed(1) + " ms - " + global.serverName, a + e, l - 50, 10, color.guiwhite, "right"), global.fps = metrics.rendertime
        }
        if (global.mobile && T(1.25), global.mobile && T(1.4), !global.showTree) {
          var ge = global.screenWidth - 200 * animations.leaderboard.get() - 20;
          let a = 20 + 14 * animations.leaderboard.get() + 7;
          global.mobile && (a += (global.canSkill ? C / 3 / 1.4 * e.get() : 0) + (global.canUpgrade && 40 + 114 * gui.upgrades.length > 1.4 * ge ? 100 / 1.4 * t.get() : 0)), s.lbtitle.draw("2tkr" == global.gameMode ? "Killboard" : "Leaderboard", Math.round(100 + ge) + .5, Math.round(a - 6) + .5, 18, color.guiwhite, "center");
          for (let e = 0; e < S.data.length && (!global.mobile || e < 6); e++) {
            var de = S.data[e];
            drawBar(ge, ge + 200, a + 7, 11 + config.graphical.barChunk, color.black), drawBar(ge, ge + 200, a + 7, 11, color.grey);
            var he = Math.min(1, de.score / B);
            drawBar(ge, ge + 200 * he, a + 7, 10.5, de.barColor);
            let t = de.nameColor;
            if (t.startsWith("$")) {
              var ue = de.label.length / 2 * 9;
              const e = ctx.createLinearGradient(100 + ge - ue / 2, 0, 100 + ge + ue / 2, 0);
              for (let t = 0; t < global.nameGradient.length; t++) e.addColorStop(t / (global.nameGradient.length - 1) * 1, global.nameGradient[t]);
              t = e
            }
            s.leaderboard[e].draw(de.label + ": " + util.handleLargeNumber(Math.round(de.score)), 100 + ge, a + 7, 9, t, "center", !0);
            var be = 14 / de.position.axis;
            he = ge - 21 - be * de.position.middle.x * .707, ue = a + 7 + be * de.position.middle.x * .707;
            drawEntity(he, ue, de.image, 1 / be, 1, be * be / de.image.size, -Math.PI / 4, !0), a += 18
          }
        }
        if (ee = global.screenHeight / 3, global.submarineUI.enabled && (s.submarineUI.draw(`Air supply: ${global.submarineUI.air}s`, global.screenWidth / 2 + global.screenWidth / 10, ee, 12.5, global.submarineUI.air < 10 ? color.red : global.submarineUI.air < 15 ? color.gold : color.guiwhite, "left", !0), ee += 20, s.submarineUI.draw(global.submarineUI.submerged ? "You are vulnerable only to other submarines" : "You are vulnerable to everything on the surface", global.screenWidth / 2 + global.screenWidth / 10, ee, 12.5, color.red, "left", !0), ee += 20, s.submarineUI.draw(global.submarineUI.submerged ? "Press . to surface" : "Press . to submerge", global.screenWidth / 2 + global.screenWidth / 10, ee, 12.5, color.orange, "left", !0)), global.carrierUI.enabled) {
          ctx.globalAlpha = .25;
          var me = C / 3;
          let e = global.screenWidth - 2 * (C - me) * animations.minimap.get() - 40 - (global.carrierUI.map ? C : 0),
            t = global.screenHeight - (C - me) / 2 * animations.minimap.get() - 20,
            a = 0;
          for (let l = 0; l < global.carrierUI.buttons.length; l++) {
            var pe = global.carrierUI.buttons[l];
            pe.enabled && (ctx.fillStyle = ctx.strokeStyle = getColor(pe.color), drawGuiRoundRect(e, t, me, me, config.graphical.arrasStyle ? 0 : 10), ctx.fillStyle = color.black, drawGuiRoundRect(e, t + 40, me, .4 * me, config.graphical.arrasStyle ? 0 : 10), ctx.fillStyle = color.guiblack, drawGuiRoundRect(e, t, me, me, config.graphical.arrasStyle ? 0 : 10, !0), global.clickables.carrier.place(l, e * h, t * h, me * h, me * h), ctx.globalAlpha = 1, s.carrier[l].draw(pe.text, e + me / 2, t + me - 6, me / 7.5, color.guiwhite, "center"), ctx.globalAlpha = .25, e -= 20 + me, a % 3 == 2 && (t -= 20 + me, e = global.screenWidth - 2 * (C - me) * animations.minimap.get() - 40 - (global.carrierUI.map ? C : 0)), a++)
          }
          ctx.restore()
        }
        global.mobile && T(1 / 1.4); {
          if (global.showTree) return;
          let e = global.canUpgrade ? animations.upgradeMenu.get() : 0;
          if (global.clickables.upgrade.hide(), 0 < gui.upgrades.length) {
            global.canUpgrade = !0;
            let t = C / 2.175,
              a = t,
              l = 2 * e * 20 - 20,
              o = l,
              r = 20;
            te = l;
            let n = 0,
              i = r,
              c = 0;
            upgradeSpin += .01, global.colorIndex += 1 / 7.5, 184 < global.colorIndex && (global.colorIndex = 100);
            let g = 0 | global.colorIndex,
              d = 0;
            gui.upgrades.forEach(function(u) {
              r > i && (i = r), n = l, global.clickables.upgrade.place(d++, l * h, r * h, t * h, a * h), 185 < g && (g = 100), ctx.globalAlpha = .5, ctx.fillStyle = getColor(g), drawGuiRoundRect(l, r, t, a, config.graphical.arrasStyle ? 0 : 10), ctx.globalAlpha = .1, ctx.fillStyle = getColor(g++ - 10), drawGuiRoundRect(l, r, t, .6 * a, config.graphical.arrasStyle ? 0 : 10), ctx.fillStyle = color.black, drawGuiRoundRect(l, r + .6 * a, t, .4 * a, config.graphical.arrasStyle ? 0 : 10), ctx.globalAlpha = 1;
              var b = getEntityImageFromMockup(u, (16 == mockups[u].color ? gui : mockups[u]).color),
                m = mockups[u].position,
                p = .6 * t / m.axis;
              u = l + .5 * t - p * m.middle.x * Math.cos(upgradeSpin), m = r + .5 * a - p * m.middle.x * Math.sin(upgradeSpin);
              drawEntity(u, m, b, 1, 1, p / b.size, upgradeSpin, !0), s.upgradeNames[d - 1].draw(b.name, l + t / 2, r + a - 6, a / 8 - 3, color.guiwhite, "center"), ctx.strokeStyle = color.black, ctx.globalAlpha = 1, ctx.lineWidth = 3, drawGuiRoundRect(l, r, t, a, config.graphical.arrasStyle ? 0 : 10, !0), ++c % 6 == 0 ? (l = o, r += 8 + a) : l += e * (8 + t)
            }), u = measureText(Q = "Don't Upgrade", 11) + 10, drawBar((ee = te + (n + t + 8 - te) / 2) - u / 2, ee + u / 2, (te = i + a + 8) + 7, 14 + config.graphical.barChunk, color.black), drawBar(ee - u / 2, ee + u / 2, te + 7, 14, color.white), s.skipUpgrades.draw(Q, ee, te + 7, 12, color.guiwhite, "center", !0), global.clickables.skipUpgrades.place(0, (ee - u / 2) * h, te * h, u * h, 14 * h)
          } else global.canUpgrade = !1, global.clickables.upgrade.hide(), global.clickables.skipUpgrades.hide()
        }
        if (global.mobile) {
          global.canSkill = 0 < gui.points && gui.skills.some(e => e.amount < e.cap) && !global.canUpgrade, e.set(0 + (global.canSkill || global.died));
          let t = e.get();
          global.clickables.stat.hide();
          let a = 100,
            l = C / 3,
            o = 2 * t * 20 - 20,
            r = 0,
            n = gui.getStatNames(mockups[gui.type].statnames || -1);
          global.canSkill && (gui.skills.forEach((e, i) => {
            var c = e.softcap;
            if (!(c <= 0)) {
              var g = e.amount,
                d = color[e.color],
                u = e.cap;
              let p = n[9 - i].split(/\s+/);
              var b = Math.floor(p.length / 2),
                [e, b] = 1 === p.length ? [p, null] : [p.slice(0, b), p.slice(b)];
              ctx.globalAlpha = .5, ctx.fillStyle = d, drawGuiRect(o, 20, a, 2 * l / 3), ctx.globalAlpha = .1, ctx.fillStyle = color.black, drawGuiRect(o, 20 + 2 * l / 3 * 2 / 3, a, 2 * l / 3 * 1 / 3), ctx.globalAlpha = 1, ctx.fillStyle = color.guiwhite, drawGuiRect(o, 20 + 2 * l / 3, a, l / 3), ctx.fillStyle = d, drawGuiRect(o, 20 + 2 * l / 3, a * g / c, l / 3), ctx.strokeStyle = color.black;
              for (let e = ctx.lineWidth = 1; e < u; e++) {
                var m = o + a * (e / c);
                drawGuiLine(m, 20 + 2 * l / 3, m, 20 + l)
              }
              g === u || !gui.points || c !== u && g === c || global.clickables.stat.place(9 - i, o * h, 20 * h, a * h, l * h), b ? (s.skillNames[i].draw(b, o + 50, 20 + .55 * l, l / 6, color.guiwhite, "center"), s.skillNames[i].draw(e, o + 50, 40, l / 6, color.guiwhite, "center")) : s.skillNames[i].draw(e, o + 50, 20 + .425 * l, l / 6, color.guiwhite, "center"), 0 < g && s.skillValues[i].draw(c <= g ? "MAX" : "+" + g, Math.round(o + 50) + .5, 20 + 1.3 * l, l / 4, d, "center"), ctx.strokeStyle = color.black, ctx.globalAlpha = 1, ctx.lineWidth = 3, drawGuiLine(o, 20 + 2 * l / 3, o + a, 20 + 2 * l / 3), drawGuiRect(o, 20, a, l, !0), o += 114 * t, r++
            }
          }), 1 < gui.points && s.skillPoints.draw("x" + gui.points, Math.round(o) + .5, Math.round(40) + .5, 20, color.guiwhite, "left"))
        }
        T(1 / h, !0), metrics.lastrender = getNow()
      }
    }
  })(),
    gameDrawDead = (() => {
      let e = {
        taunt: TextObj(),
        level: TextObj(),
        score: TextObj(),
        time: TextObj(),
        kills: TextObj(),
        death: TextObj(),
        spectate: TextObj(),
        playagain: TextObj()
      };
      return () => {
        clearScreen(color.black, .25);
        var t = animations.deathScreen.get();
        ctx.translate(0, -t * global.screenHeight);
        var a = global.screenWidth / 2,
          l = global.screenHeight / 2 - 50,
          o = getEntityImageFromMockup(gui.type, gui.color),
          r = 140 / (i = mockups[gui.type].position).axis,
          n = global.screenWidth / 2 - r * i.middle.x * .707,
          i = global.screenHeight / 2 - 35 + r * i.middle.x * .707;
        drawEntity(n - 190 - 70, i - 10, o, 1.5, 1, .5 * r / o.realSize, -Math.PI / 4, !0), e.taunt.draw("lol you died", a, l - 80, 8, color.guiwhite, "center"), e.level.draw("Level " + gui.__s.getLevel() + " " + mockups[gui.type].name, a - 170, l - 30, 24, color.guiwhite), e.score.draw("Final score: " + util.formatLargeNumber(Math.round(global.finalScore.get())), a - 170, 25 + l, 50, color.guiwhite), e.time.draw("⌚ Survived for " + util.timeForHumans(Math.round(global.finalLifetime.get())) + ".", a - 170, 55 + l, 16, color.guiwhite), e.kills.draw((0 === (o = (r = [Math.round(global.finalKills[0].get()), Math.round(global.finalKills[1].get()), Math.round(global.finalKills[2].get())])[0] + .5 * r[1] + 3 * r[2]) ? "🌼" : o < 4 ? "🎯" : o < 8 ? "💥" : o < 15 ? "💢" : o < 25 ? "🔥" : o < 50 ? "💣" : o < 75 ? "👺" : o < 100 ? "🌶️" : "💯") + (r[0] || r[1] || r[2] ? " " + (r[0] ? r[0] + " kills" : "") + (r[0] && r[1] ? " and " : "") + (r[1] ? r[1] + " assists" : "") + ((r[0] || r[1]) && r[2] ? " and " : "") + (r[2] ? r[2] + " visitors defeated" : "") : " A true pacifist") + ".", a - 170, 77 + l, 16, color.guiwhite), e.death.draw((() => {
          let e = "";
          return global.finalKillers.length ? (e = "🔪 Succumbed to", global.finalKillers.forEach(t => {
            e += " " + util.addArticle(mockups[t].name) + " and"
          }), e = e.slice(0, -4) + ".") : e += "🤷 Well that was kinda dumb huh", e
        })(), a - 170, 99 + l, 16, color.guiwhite), e.spectate.draw("Press Q to spectate another entity!", a, 125 + l, 16, color.guiwhite, "center"), e.playagain.draw("Press enter to play again!", a, 151 + l, 16, color.guiwhite, "center"), ctx.translate(0, t * global.screenHeight)
      }
    })(),
    gameDrawBeforeStart = (() => {
      let e = {
        connecting: TextObj(),
        message: TextObj()
      };
      return () => {
        clearScreen(color.white, .5);
        var t = animations.connecting.get();
        ctx.translate(0, -t * global.screenHeight), e.connecting.draw("Connecting...", global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, "center"), e.message.draw(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.lgreen, "center"), ctx.translate(0, t * global.screenHeight)
      }
    })(),
    gameDrawDisconnected = (() => {
      let e = {
        disconnected: TextObj(),
        message: TextObj()
      };
      return () => {
        clearScreen(mixColors(color.red, color.guiblack, .3), .25);
        var t = animations.disconnected.get();
        ctx.translate(0, -t * global.screenHeight), e.disconnected.draw("💀 Disconnected. 💀", global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, "center"), e.message.draw(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.orange, "center"), ctx.translate(0, t * global.screenHeight)
      }
    })(),
    curtains = function() {
      let e = ctx.createRadialGradient(0, 0, 0, 0, 0, c.width);
      return e.addColorStop(0, "#AA0000"), e.addColorStop(.5, "#000000"), setInterval(function() {
        (e = ctx.createRadialGradient(0, 0, 0, 0, 0, c.width)).addColorStop(0, "#AA0000"), e.addColorStop(.5, "#000000")
      }, 3e3), animations.curtains.smoothness = .0175, {
        gradient: e,
        flip() {
          animations.curtains.flip()
        },
        draw: function() {
          ctx.save(), ctx.globalAlpha = 1, ctx.translate(c.width / 2, c.height / 2), ctx.beginPath();
          var t = animations.curtains.get();
          for (let e = 0; e < 6; e++) ctx[e ? "lineTo" : "moveTo"](Math.cos(Math.PI / 3 * e) * c.width / 1.5, Math.sin(Math.PI / 3 * e) * c.width / 1.5);
          ctx.closePath(), ctx.strokeStyle = e, ctx.lineWidth = c.width * t, ctx.stroke(), ctx.restore(), animations.curtains.goodEnough(.005) && curtains.onDone()
        },
        onDone() {
          animations.curtains.smoothness = .06
        }
      }
    }();

  function animloop() {
    global.animLoopHandle = window.requestAnimFrame(animloop), player.renderv += (player.view - player.renderv) / 30;
    var e = config.graphical.screenshotMode ? 2 : getRatio();
    ctx.lineCap = "round", ctx.lineJoin = "round", ctx.filter = "none", global.gameStart && !global.disconnected && (global.time = getNow(), 1e3 < global.time - lastPing && (global.socket.ping(global.time), lastPing = global.time, metrics.rendertime = renderTimes, renderTimes = 0, metrics.updatetime = updateTimes, updateTimes = 0), metrics.lag = global.time - player.time), global.gameStart ? (gameDraw(e), global.gameWidth = lerp(global.gameWidth, global.realGameWidth, .075), global.gameHeight = lerp(global.gameHeight, global.realGameHeight, .075)) : global.disconnected || gameDrawBeforeStart(), global.died && gameDrawDead(), global.disconnected && gameDrawDisconnected()
  }
})();