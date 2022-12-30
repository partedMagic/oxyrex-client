(async () => {
    class Popup {
        constructor(e, t, a = !0) {
            this.text = e,
                this.color = t,
                this.skipable = a,
                this.element = this.createElement()
        }
        createElement() {
            const e = document.createElement("div");
            if (e.style.position = "absolute",
                e.style.width = "60%",
                e.style.textAlign = "center",
                e.style.top = "50%",
                e.style.left = "50%",
                e.style.transform = "translate(-50%, -50%)",
                e.style.borderRadius = "10px",
                "object" == typeof this.color ? Array.isArray(this.color) ? (e.style.background = this.color[0],
                    e.style.border = `10px solid ${this.color[1]}`) : (e.style.background = this.color.background,
                    e.style.border = `10px solid ${this.color.border}`) : e.style.background = this.color,
                e.style.zIndex = "5",
                e.onclick = () => {
                    this.skipable && "boolean" == typeof this.skipable && document.body.removeChild(e)
                },
                e.innerHTML = `<h1>${this.text}</h1><h2>${"boolean" == typeof this.skipable ? "(Click to close)" : `(Please wait ${this.skipable} seconds to close the popup)`}</h2>`,
                "number" == typeof this.skipable) {
                const t = setInterval(() => {
                    this.skipable--,
                        0 === this.skipable && (clearInterval(t),
                            document.body.removeChild(e)),
                        e.innerHTML = `<h1>${this.text}</h1><h2>${"boolean" == typeof this.skipable ? "(Click to close)" : `(Please wait ${this.skipable} seconds to close the popup)`}</h2>`
                }, 1e3)
            }
            document.body.appendChild(e)
        }
    }
    let loadedData;
    try {
        loadedData = await (await fetch(location.protocol + "//6ibui.glitch.me/loadData")).json()
    } catch (error) {
        throw new Error("Couldn't connect to the central server.")
    }
    parseInt(localStorage.getItem("version"), 10) != loadedData.version && (new Popup("You may be playing on an outdated version of the game. If features do not properly work, please run CTRL + F5 to load the proper settings.", ["#E03E41", "#C01C21"]),
        localStorage.setItem("version", loadedData.version));
    const ads = function() {
            const a = document.createElement("div");
            a.style.width = "50%",
                a.style.height = "100px",
                a.style.bottom = "10px",
                a.style.left = "25%",
                a.style.position = "absolute",
                a.style.display = "block",
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|android|mobi/i.test(navigator.userAgent);
            const l = [{
                    text: "Play Holy.io!",
                    imageURL: "https://cdn.glitch.me/396e25b1-9cc5-4a3c-bb77-1ef78c4f8fc5/dc5e5726-35ca-4852-a3c1-5c77418bbdfb.image.png?v=1640390980940",
                    link: "https://holyio.xyz/"
                }, {
                    imageURL: "https://cdn.glitch.me/396e25b1-9cc5-4a3c-bb77-1ef78c4f8fc5%2F8b2bcaf6-f209-487a-90b7-d9d7dd874469.image.png?v=1638225047584",
                    link: "https://www.digitalocean.com/"
                }],
                o = [...l.map(e => e).filter(e => e.fallback), {
                    imageURL: "https://cdn.glitch.me/396e25b1-9cc5-4a3c-bb77-1ef78c4f8fc5%2Ff2aa7c9a-a8cd-4cef-a659-3ed56a2ce834.image.png?v=1638227980083",
                    link: "https://heroku.com/",
                    fallback: !0
                }, {
                    imageURL: "https://cdn.glitch.me/396e25b1-9cc5-4a3c-bb77-1ef78c4f8fc5%2Fe88afd41-5499-41d2-b626-d7b1c5239785.image.png?v=1638225820180",
                    link: "https://extravm.com/",
                    fallback: !0
                }];

            function e(e) {
                const t = l[e];
                a.innerHTML = "",
                    a.onclick = function() {
                        null != t.link && (window.top.location = t.link)
                    },
                    t.imageURL ? (a.style.backgroundImage = `url('${t.imageURL}')`,
                        a.style.backgroundPosition = "center",
                        a.style.backgroundRepeat = "no-repeat",
                        a.style.backgroundSize = "cover") : (a.style.background = `linear-gradient(to bottom right, ${t.colors.join(", ")})`,
                        a.innerHTML += `<center><h1>${t.text}</h1></center>`)
            }
            e(Math.floor(Math.random() * l.length)),
                setInterval(function() {
                    e(Math.floor(Math.random() * l.length))
                }, 3e4);
            let t = !0;
            const r = document.querySelectorAll("iframe")[0];
            return async function() {
                (r || window.discordFailed) && setTimeout(function() {
                    o,
                    Math.random(),
                    o;
                    let e;
                    const t = document.createElement("img");
                    t.classList.add("bannerHolder"),
                    setInterval(function() {
                        e = o[Math.random() * o.length | 0],
                            t.src = e.imageURL,
                            t.onclick = function() {
                                window.open(e.link)
                            },
                            t.style.width = "336px",
                            t.style.height = "280px"
                    }, 3e4),
                    r.parentNode.insertBefore(t, r),
                    r.parentNode.removeChild(r)
                }, 3e4)
            }(), {
                element: a,
                set: e,
                toggle: function() {
                    t = !t,
                        a.style.display = ["none", "block"][+t]
                }
            }
        }(),
        imageCache = {};

    function loadImage(e, t = -1) {
        const a = new Image;
        a.src = e,
            a.ready = !1,
            a.onload = function() {
                a.ready = !0,
                    console.log(`Image ${t} loaded from ${e}.`),
                    -1 === t && (t = e),
                    imageCache[t] = a
            }
    }
    loadImage("https://cdn.glitch.me/396e25b1-9cc5-4a3c-bb77-1ef78c4f8fc5%2F4e7c4116-13a9-453c-bff2-08b50814f502.image.png?v=1635690038175", "pumpkin"),
        loadImage("https://www.oxyrex.io/img/poison_hue.png", "poisonHue"),
        loadImage("https://www.oxyrex.io/img/ice_hue.png", "iceHue"),
        loadImage("https://www.oxyrex.io/img/fire_hue.png", "fireHue"),
        loadImage("https://www.oxyrex.io/img/emp_hue.png", "empHue"),
        loadImage("https://www.oxyrex.io/img/frostbite_hue.png", "frostbiteHue"),
        loadImage("https://www.oxyrex.io/img/tesla_hue.png", "teslaHue"),
        loadImage("https://www.oxyrex.io/img/confusion_hue.png", "confusionHue"),
        loadImage("https://www.oxyrex.io/img/blindness_hue.png", "blindnessHue"),
        loadImage("https://www.oxyrex.io/img/steel_pro.png", "steelProp");
         loadImage("https://www.oxyrex.io/img/regen_hue.png", "regenHue");
    let global = {
        KEY_ESC: 27,
        KEY_ENTER: 13,
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
        // =======================
        // Chat System.
        // =======================
        isChatMode: false,
        // =======================
        kicked: !1,
        continuity: !1,
        startPingTime: 0,
        toggleMassState: 0,
        backgroundColor: "#f2fbff",
        lineColor: "#300000",
        servers: [{
            connectionInfo: {
                provider: "Oracle",
                region: "JBX",
                ip: "192.9.225.228:3000",
                hash: "ob",
                secure: !1,
                timezone: (new Date).getTimezoneOffset() / -60
            },
            displayInfo: await async function() {
                let t;
                try {
                    t = await (await fetch("http://192.9.225.228:3000/gamemodeData.json")).json()
                } catch (e) {
                    t = {
                        gameMode: "FFA",
                        players: 0,
                        maxPlayers: 0,
                        code: "z-z-z",
                        hide: !0
                    }
                }
                return t
            }()
        }, {
            connectionInfo: {
                provider: "Oracle",
                region: "Eris",
                ip: "oxys.erws.ga",
                hash: "o2s",
                secure: !0,
                timezone: (new Date).getTimezoneOffset() / -60
            },
            displayInfo: await async function() {
                let t;
                try {
                    t = await (await fetch("https://oxys.erws.ga/gamemodeData.json")).json()
                } catch (e) {
                    t = {
                        gameMode: "FFA",
                        players: 0,
                        maxPlayers: 0,
                        code: "z-z-z",
                        hide: !0
                    }
                }
                return t
            }()
        }, {
            connectionInfo: {
                provider: "Repl.it",
                region: "US West",
                ip: "oxyrex-server.liyongxin.repl.co",
                hash: "ob",
                secure: !0,
                timezone: (new Date).getTimezoneOffset() / -60
            },
            displayInfo: await async function() {
                let t;
                try {
                    t = await (await fetch("https://oxyrex-server.liyongxin.repl.co/gamemodeData.json")).json()
                } catch (e) {
                    t = {
                        gameMode: "FFA",
                        players: 0,
                        maxPlayers: 0,
                        code: "z-z-z",
                        hide: !0
                    }
                }
                return t
            }()
        }, {
            connectionInfo: {
                provider: "Repl",
                region: "US East",
                ip: "oxyrex-server-dev.andrewspec.repl.co",
                hash: "xyz",
                secure: !0,
                timezone: (new Date).getTimezoneOffset() / -60
            },
            displayInfo: await async function() {
                let t;
                try {
                    t = await (await fetch("http://127.0.0.1:3000/gamemodeData.json")).json()
                } catch (e) {
                    t = {
                        gameMode: "FFA",
                        players: 0,
                        maxPlayers: 0,
                        code: "z-z-z",
                        hide: !0
                    }
                }
                return t
            }()
        }, {
            connectionInfo: {
                provider: "PC",
                region: "Localhost",
                ip: "127.0.0.1:3000",
                hash: "xyz",
                secure: !1,
                timezone: (new Date).getTimezoneOffset() / -60
            },
            displayInfo: await async function() {
                let t;
                try {
                    t = await (await fetch("http://127.0.0.1:3000/gamemodeData.json")).json()
                } catch (e) {
                    t = {
                        gameMode: "FFA",
                        players: 0,
                        maxPlayers: 0,
                        code: "z-z-z",
                        hide: !0
                    }
                }
                return t
            }()
        }],
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
            for (let e = 0; e < 75; e++)
                setTimeout(() => global.socket.talk("L"), 125 * e)
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
                const l = [];
                let o = 0;

                function e(e, t, a) {
                    l.push({
                            color: 100 + 6 * o,
                            tick: 0,
                            text: t,
                            click: a,
                            enabled: !1,
                            name: e
                        }),
                        o++
                }
                return e("diveBomb", "Dive Bombers", function() {
                        global.socket.talk("cv", "diveBomb")
                    }),
                    e("rocket", "Rocket Bombers", function() {
                        global.socket.talk("cv", "rocket")
                    }),
                    e("torpedo", "Torpedo Bombers", function() {
                        global.socket.talk("cv", "torpedo")
                    }),
                    e("relinquish", "Relinquish", function() {
                        global.socket.talk("cv", "relinquish")
                    }),
                    l[l.length - 1].enabled = !0,
                    l
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
                    e++,
                    e %= 85,
                        global.nameGradient = [getColor(100 + e), getColor(100 + (e + 10) % 85)]
                }, 50)
            }
            return e[t]
        }(),
        mobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|android|mobi/i.test(navigator.userAgent),
        standalone: window.navigator.standalone || window.matchMedia && window.matchMedia("(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)").matches
    };
    async function updatePlayerCount() {
        try {
            global.playerCount = (await (await fetch(location.protocol + "//6ibui.glitch.me/serverData")).json()).players
        } catch (e) {
            global.playerCount = 1
        }
    }
    "undefined" == typeof blockAdBlock ? global.adBlock = !0 : (blockAdBlock.onDetected(() => global.adBlock = !0),
            blockAdBlock.onNotDetected(() => global.adBlock = !1),
            blockAdBlock.on(!0, () => global.adBlock = !0),
            blockAdBlock.on(!1, () => global.adBlock = !1),
            blockAdBlock.on(!0, () => global.adBlock = !0).onNotDetected(() => global.adBlock = !1)),
        global.servers.push(...loadedData.servers),
        global.server = global.servers[0],
        fetch(location.protocol + "//6ibui.glitch.me/analytics", {
            headers: {
                timezone: global.timezone
            }
        }).then(e => e.json()).then(e => window.printAnalytics = function() {
            return e
        }),
        setInterval(updatePlayerCount, 45e3);
    const params = new URL(document.location).searchParams; +
    params.get("carrierUI") && (global.carrierUI.enabled = !0),
        +params.get("desktopMobile") && (global.mobile = !0);
    const logger = {
        normal: console.log,
        info: e => console.log(`%c${e}`, "color: #00BEFF"),
        error: e => console.log(`%c${e}`, "color: #FF0000"),
        warn: e => console.log(`%c${e}`, "color: #FFFF00")
    };
    let util = {
        submitToLocalStorage: e => (localStorage.setItem(e + "Value", document.getElementById(e).value),
            localStorage.setItem(e + "Checked", document.getElementById(e).checked),
            !1),
        retrieveFromLocalStorage: e => (document.getElementById(e).value = localStorage.getItem(e + "Value"),
            document.getElementById(e).checked = "true" === localStorage.getItem(e + "Checked"),
            !1),
        handleLargeNumber: (e, t = !1) => t && 0 == e ? "" : e < Math.pow(10, 3) ? "" + e.toFixed(0) : e < Math.pow(10, 6) ? (e / Math.pow(10, 3)).toFixed(2) + "k" : e < Math.pow(10, 9) ? (e / Math.pow(10, 6)).toFixed(2) + "m" : e < Math.pow(10, 12) ? (e / Math.pow(10, 9)).toFixed(2) + "b" : e < Math.pow(10, 15) ? (e / Math.pow(10, 12)).toFixed(2) + "t" : (e / Math.pow(10, 15)).toFixed(2) + "q",
        timeForHumans: e => {
            var t = e % 60;
            e /= 60;
            var a = (e = Math.floor(e)) % 60;
            e /= 60;
            var l = (e = Math.floor(e)) % 24;
            e /= 24,
                e = Math.floor(e);
            let o = "";

            function r(e, t) {
                e && (o = o + ("" === o ? "" : ", ") + e + " " + t + (1 < e ? "s" : ""))
            }
            return r(e, "day"),
                r(l, "hour"),
                r(a, "minute"),
                r(t, "second"),
                "" === o && (o = "less than a second"),
                o
        },
        addArticle: e => /[aeiouAEIOU]/.test(e[0]) ? "an " + e : "a " + e,
        formatLargeNumber: e => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        pullJSON: e => {
            let a = new XMLHttpRequest,
                l = "/json/" + e + ".json?v=" + Math.random();
            return console.log("Loading JSON from " + l),
                a.responseType = "json",
                new Promise((e, t) => {
                    a.open("GET", l),
                        a.onload = () => {
                            e(a.response),
                                console.log("JSON load complete.")
                        },
                        a.onerror = () => {
                            t(a.statusText),
                                console.log("JSON load failed."),
                                console.log(a.statusText)
                        },
                        a.send()
                })
        }
    };
    const protocol = (() => {
        let b = new Uint32Array(1),
            m = new Uint8Array(b.buffer),
            p = new Float32Array(b.buffer),
            x = new Uint16Array(1),
            f = new Uint8Array(x.buffer);
        return {
            encode: a => {
                let l = [],
                    t = [],
                    o = 0,
                    r = 15,
                    n = 0;
                for (var i of a) {
                    let e = 0;
                    if (0 === i || !1 === i)
                        e = 0;
                    else if (1 === i || !0 === i)
                        e = 1;
                    else if ("number" == typeof i)
                        !Number.isInteger(i) || i < -4294967296 || 4294967296 <= i ? (e = 8,
                            o += 4) : 0 <= i ? i < 256 ? (e = 2,
                            o++) : i < 65536 ? (e = 4,
                            o += 2) : i < 4294967296 && (e = 6,
                            o += 4) : -256 <= i ? (e = 3,
                            o++) : -65536 <= i ? (e = 5,
                            o += 2) : -4294967296 <= i && (e = 7,
                            o += 4);
                    else {
                        if ("string" != typeof i)
                            throw console.error("Unencodable data type", i),
                                new Error("Unencodable data type"); {
                            let t = !1;
                            for (let e = 0; e < i.length; e++)
                                if ("ÿ" < i.charAt(e))
                                    t = !0;
                                else if ("\0" === i.charAt(e))
                                throw console.error("Null containing string", i),
                                    new Error("Null containing string");
                            !t && i.length <= 1 ? (e = 9,
                                o++) : t ? (e = 11,
                                o += 2 * i.length + 2) : (e = 10,
                                o += i.length + 1)
                        }
                    }
                    if (l.push(e),
                        e === r)
                        n++;
                    else {
                        if (t.push(r),
                            1 <= n) {
                            for (; 19 < n;)
                                t.push(14),
                                t.push(15),
                                n -= 19;
                            1 === n ? t.push(r) : 2 === n ? t.push(12) : 3 === n ? t.push(13) : n < 20 && (t.push(14),
                                t.push(n - 4))
                        }
                        n = 0,
                            r = e
                    }
                }
                if (t.push(r),
                    1 <= n) {
                    for (; 19 < n;)
                        t.push(14),
                        t.push(15),
                        n -= 19;
                    1 === n ? t.push(r) : 2 === n ? t.push(12) : 3 === n ? t.push(13) : n < 20 && (t.push(14),
                        t.push(n - 4))
                }
                t.push(15),
                    t.length % 2 == 1 && t.push(15);
                let s = new Uint8Array((t.length >> 1) + o);
                for (let e = 0; e < t.length; e += 2) {
                    var c = t[e],
                        g = t[e + 1];
                    s[e >> 1] = c << 4 | g
                }
                let d = t.length >> 1;
                for (let e = 0; e < l.length; e++) {
                    let t = a[e];
                    switch (l[e]) {
                        case 0:
                        case 1:
                            break;
                        case 2:
                        case 3:
                            s[d++] = t;
                            break;
                        case 4:
                        case 5:
                            x[0] = t,
                                s.set(f, d),
                                d += 2;
                            break;
                        case 6:
                        case 7:
                            b[0] = t,
                                s.set(m, d),
                                d += 4;
                            break;
                        case 8:
                            p[0] = t,
                                s.set(m, d),
                                d += 4;
                            break;
                        case 9:
                            var h = 0 === t.length ? 0 : t.charCodeAt(0);
                            s[d++] = h;
                            break;
                        case 10:
                            for (let e = 0; e < t.length; e++)
                                s[d++] = t.charCodeAt(e);
                            s[d++] = 0;
                            break;
                        case 11:
                            for (let e = 0; e < t.length; e++) {
                                var u = t.charCodeAt(e);
                                s[d++] = 255 & u,
                                    s[d++] = u >> 8
                            }
                            s[d++] = 0,
                                s[d++] = 0
                    }
                }
                return s
            },
            decode: e => {
                var t, a = new Uint8Array(e);
                if (a[0] >> 4 != 15)
                    return null;
                let l = [],
                    o = 15,
                    r = 0,
                    n = !0;
                for (;;) {
                    if (r >= a.length)
                        return null;
                    let e = a[r];
                    if (n ? (e &= 15,
                            r++) : e >>= 4,
                        n = !n,
                        12 == (12 & e)) {
                        if (15 === e) {
                            n && r++;
                            break
                        }
                        let t = e - 10;
                        if (14 === e) {
                            if (r >= a.length)
                                return null;
                            let e = a[r];
                            n ? (e &= 15,
                                    r++) : e >>= 4,
                                n = !n,
                                t += e
                        }
                        for (let e = 0; e < t; e++)
                            l.push(o)
                    } else
                        l.push(e),
                        o = e
                }
                let i = [];
                for (t of l)
                    switch (t) {
                        case 0:
                            i.push(0);
                            break;
                        case 1:
                            i.push(1);
                            break;
                        case 2:
                            i.push(a[r++]);
                            break;
                        case 3:
                            i.push(a[r++] - 256);
                            break;
                        case 4:
                            f[0] = a[r++],
                                f[1] = a[r++],
                                i.push(x[0]);
                            break;
                        case 5:
                            f[0] = a[r++],
                                f[1] = a[r++],
                                i.push(x[0] - 65536);
                            break;
                        case 6:
                            m[0] = a[r++],
                                m[1] = a[r++],
                                m[2] = a[r++],
                                m[3] = a[r++],
                                i.push(b[0]);
                            break;
                        case 7:
                            m[0] = a[r++],
                                m[1] = a[r++],
                                m[2] = a[r++],
                                m[3] = a[r++],
                                i.push(b[0] - 4294967296);
                            break;
                        case 8:
                            m[0] = a[r++],
                                m[1] = a[r++],
                                m[2] = a[r++],
                                m[3] = a[r++],
                                i.push(p[0]);
                            break;
                        case 9:
                            var s = a[r++];
                            i.push(s ? String.fromCharCode(s) : "");
                            break;
                        case 10: {
                            let e = "";
                            for (var c; c = a[r++];)
                                e += String.fromCharCode(c);
                            i.push(e)
                        }
                        break;
                        case 11: {
                            let e = "";
                            for (var g; g = a[r++] | a[r++] << 8;)
                                e += String.fromCharCode(g);
                            i.push(e)
                        }
                    }
                return i
            }
        }
    })();
    class Canvas {
        constructor(e) {
            this.mobile = e,
                this.directionLock = !1,
                this.target = global.target,
                this.reenviar = !0,
                this.socket = global.socket,
                this.directions = [];
            this.cv = document.getElementById("gameCanvas"),
                this.cv.width = global.screenWidth,
                this.cv.height = global.screenHeight,
                e ? (this.controlTouch = null,
                    this.movementTouch = null,
                    this.movementTop = !1,
                    this.movementBottom = !1,
                    this.movementLeft = !1,
                    this.movementRight = !1,
                    this.lastTap = 0,
                    this.cv.addEventListener("touchstart", this.touchStart, !1),
                    this.cv.addEventListener("touchmove", this.touchMove, !1),
                    this.cv.addEventListener("touchend", this.touchEnd, !1),
                    this.cv.addEventListener("touchcancel", this.touchEnd, !1)) : (this.cv.addEventListener("mousedown", this.mouseDown, !1),
                    this.cv.addEventListener("mousemove", this.gameInput, !1),
                    this.cv.addEventListener("mouseup", this.mouseUp, !1)),
                this.cv.addEventListener("keydown", this.keyboardDown, !1),
                this.cv.addEventListener("keyup", this.keyboardUp, !1),
                (this.cv.parent = this).statMaxing = !1,
                this.cv.mouse = {
                    x: 0,
                    y: 0,
                    down: !1
                },
                global.canvas = this
        }
        autoUpgrade() {
            for (let e = 0; e < 75; e++)
                setTimeout(() => this.socket.talk("L"), 125 * e)
        }
        keyboardDown(t) {
            if (t.ctrlKey) {
                if (t.shiftKey && 70 === t.keyCode)
                    null != global.terminal && global.terminal.exit(!0),
                    global.terminal = new Terminal;
                else if (t.shiftKey && 86 === t.keyCode)
                    if (this.parent.cv.captureStream && window.MediaRecorder) {
                        if (!this.videoRecorder) {
                            let o = [];
                            return this.videoRecorder = new MediaRecorder(this.parent.cv.captureStream(60)),
                                this.videoRecorder.ondataavailable = e => o.push(e.data),
                                this.videoRecorder.onstop = e => {
                                    var t = new Blob(o, {
                                        type: this.videoRecorder.mimeType
                                    });
                                    o.length = 0;
                                    let a = URL.createObjectURL(t),
                                        l = document.createElement("a");
                                    l.style.display = "none",
                                        l.setAttribute("download", "video.webm"),
                                        l.setAttribute("href", a),
                                        document.body.appendChild(l),
                                        setTimeout(() => {
                                            URL.revokeObjectURL(a),
                                                document.body.removeChild(l)
                                        }, 100),
                                        l.click()
                                },
                                messages.push({
                                    text: "Recorder initiated and started!",
                                    status: 2,
                                    alpha: 0,
                                    time: Date.now()
                                }),
                                void this.videoRecorder.start()
                        }
                        switch (this.videoRecorder.state) {
                            case "inactive":
                                messages.push({
                                        text: "Recorder started!",
                                        status: 2,
                                        alpha: 0,
                                        time: Date.now()
                                    }),
                                    this.videoRecorder.start();
                                break;
                            case "recording":
                                messages.push({
                                        text: "Recorder stopped! Saving file...",
                                        status: 2,
                                        alpha: 0,
                                        time: Date.now()
                                    }),
                                    this.videoRecorder.stop()
                        }
                    } else
                        messages.push({
                            text: "Media recorder not supported in this browser!",
                            status: 2,
                            alpha: 0,
                            time: Date.now()
                        })
            } else {
                switch (9 === t.keyCode && t.preventDefault(),
                    t.keyCode) {
                    case 13:
                        global.died && (ads.toggle(),
                                this.parent.socket.talk("s", global.playerName, +gui.party)),
                            global.died = !1;
                        break;

                    case 13:
                        if (!a.died) {
                            if (a.isChatMode === false) {
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

                                        let Y = chatInput.value;
                                        if (Y) {
                                            let maxLen = 100;
                                            let trimmedMessage = Y.length > maxLen ? Y.substring(0, maxLen - 3) + "..." : Y.substring(0, maxLen);

                                            a.socket.talk('h', trimmedMessage, 1)

                                            chatInputWrapper.removeChild(chatInput);
                                            document.body.removeChild(chatInputWrapper);

                                            let gameCanvas = document.getElementById('gameCanvas');
                                            gameCanvas.focus();

                                            a.isChatMode = false;
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

                                        a.isChatMode = false;
                                    }
                                });

                                a.isChatMode = true;

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

                        break;
                    case global.KEY_UP_ARROW:
                        if (!global.died && global.showTree)
                            return global.scrollX = 0;

                    case global.KEY_UP:
                        this.parent.socket.cmd.set(0, !0);
                        break;
                    case global.KEY_DOWN_ARROW:
                        if (!global.died && global.showTree)
                            return global.scrollX = 1;
                    case global.KEY_DOWN:
                        this.parent.socket.cmd.set(1, !0);
                        break;
                    case global.KEY_LEFT_ARROW:
                        if (!global.died && global.showTree)
                            return global.scrollX -= global.scrollX <= 0 ? 0 : .01;
                    case global.KEY_LEFT:
                        this.parent.socket.cmd.set(2, !0);
                        break;
                    case global.KEY_RIGHT_ARROW:
                        if (!global.died && global.showTree)
                            return global.scrollX += 1 <= global.scrollX ? 0 : .01;
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
                        if (global.showTree = !global.showTree,
                            global.showTree)
                            for (var e of ["Press Y again to close it.", "Use the left and right arrow keys to scroll.", "Use the up and down arrow keys to jump from start to end.", "Class tree controls:"])
                                messages.push({
                                    text: e,
                                    status: 2,
                                    alpha: 0,
                                    time: Date.now()
                                })
                }
                if (!t.repeat) {
                    let e = -1;
                    for (var a in global.cheatKeys)
                        if (e++,
                            t.keyCode === global.cheatKeys[a])
                            return void this.parent.socket.talk("0", e);
                    switch (t.keyCode) {
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
                        let e = this.statMaxing ? 12 : 1;
                        do {
                            switch (t.keyCode) {
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
                        } while (--e)
                    }
                }
            }
        }
        keyboardUp(e) {
            switch (e.preventDefault(),
                e.keyCode) {
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
                        l = global.clickables.mobileClicks.check(t); -
                    1 === l || !0 !== global.mobileOptions && 0 !== l ? -1 !== a ? this.parent.socket.talk("x", a) : -1 !== global.clickables.skipUpgrades.check(t) ? global.clearUpgrades() : (a = global.clickables.carrier.check(t),
                        t = global.clickables.upgrade.check(t),
                        -1 !== a ? global.carrierUI.buttons[a].click() : -1 !== t ? this.parent.socket.talk("U", t) : this.parent.socket.cmd.set(4, !0)) : global.mobileClickables[l]();
                    break;
                case 1:
                    this.parent.socket.cmd.set(5, !0);
                    break;
                case 2:
                    this.parent.socket.cmd.set(6, !0)
            }
        }
        mouseUp(e) {
            switch (this.mouse.down = !1,
                e.button) {
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
            if (e.preventDefault(),
                global.died)
                return global.died = !1,
                    this.parent.socket.talk("s", global.playerName, +gui.party),
                    void this.parent.autoUpgrade();
            for (var t of e.changedTouches) {
                var a = {
                        x: t.clientX * global.canvasRatio,
                        y: t.clientY * global.canvasRatio
                    },
                    l = t.identifier,
                    o = global.clickables.stat.check(a),
                    r = global.clickables.mobileClicks.check(a); -
                1 === r || !0 !== global.mobileOptions && 0 !== r ? -1 !== o ? this.parent.socket.talk("x", o) : -1 !== global.clickables.skipUpgrades.check(a) ? global.clearUpgrades() : (t = global.clickables.carrier.check(a),
                    o = global.clickables.upgrade.check(a),
                    -1 !== t ? global.carrierUI.buttons[t].click() : -1 !== o ? this.parent.socket.talk("U", o) : (a = a.x < this.parent.cv.width / 2,
                        null === this.parent.movementTouch && a ? this.parent.movementTouch = l : null !== this.parent.controlTouch || a || (this.parent.controlTouch = l,
                            this.parent.socket.cmd.set(4, !0),
                            Date.now() - this.parent.lastTap < 500 && this.parent.socket.cmd.set(6, !0),
                            this.parent.lastTap = Date.now()))) : global.mobileClickables[r]()
            }
            this.parent.touchMove(e, !1)
        }
        touchMove(e, t = !0) {
            const a = t ? this.parent : this;
            e.preventDefault();
            for (var l of e.changedTouches) {
                let e = l.clientX * global.canvasRatio,
                    t = l.clientY * global.canvasRatio;
                var o, r, n = l.identifier;
                a.movementTouch === n ? (o = e - +a.cv.width / 6,
                    r = t - 2 * a.cv.height / 3,
                    o /= l = Math.sqrt(o * o + r * r),
                    (r /= l) < -(l = .3826834323650898) !== a.movementTop && a.socket.cmd.set(0, a.movementTop = r < -l),
                    l < r !== a.movementBottom && a.socket.cmd.set(1, a.movementBottom = l < r),
                    o < -l !== a.movementLeft && a.socket.cmd.set(2, a.movementLeft = o < -l),
                    l < o !== a.movementRight && a.socket.cmd.set(3, a.movementRight = l < o)) : a.controlTouch === n && (a.target.x = 4 * (e - 5 * a.cv.width / 6),
                    a.target.y = 4 * (t - 2 * a.cv.height / 3),
                    global.target = a.target)
            }
        }
        touchEnd(e) {
            e.preventDefault();
            for (var t of e.changedTouches) {
                t.clientX,
                    global.canvasRatio,
                    t.clientY,
                    global.canvasRatio;
                t = t.identifier;
                this.parent.movementTouch === t ? (this.parent.movementTouch = null,
                    this.parent.movementTop && this.parent.socket.cmd.set(0, this.parent.movementTop = !1),
                    this.parent.movementBottom && this.parent.socket.cmd.set(1, this.parent.movementBottom = !1),
                    this.parent.movementLeft && this.parent.socket.cmd.set(2, this.parent.movementLeft = !1),
                    this.parent.movementRight && this.parent.socket.cmd.set(3, this.parent.movementRight = !1)) : this.parent.controlTouch === t && (this.parent.controlTouch = null,
                    this.parent.socket.cmd.set(4, !1),
                    this.parent.socket.cmd.set(6, !1))
            }
        }
        gameInput(e) {
            this.mouse.x = e.clientX * global.canvasRatio,
                this.mouse.y = e.clientY * global.canvasRatio,
                this.parent.target.x = e.clientX * global.canvasRatio - this.width / 2,
                this.parent.target.y = e.clientY * global.canvasRatio - this.height / 2,
                global.target = this.parent.target,
                global.statHover = 0 === global.clickables.hover.check({
                    x: e.clientX * global.canvasRatio,
                    y: e.clientY * global.canvasRatio
                })
        }
    }
    class Terminal {
        constructor() {
            this.body = window.open("", "_blank", "location=false,height=300,width=600,scrollbars=false,status=false"),
                this.init()
        }
        init() {
            this.body.document.head.appendChild(function() {
                    const e = document.createElement("title");
                    return e.textContent = "Oxyrex.io Terminal",
                        e
                }()),
                this.body.document.body.innerHTML = '<style>body {background-color: black;color: white;font: 1rem Inconsolata, monospace;text-shadow: 0 0 5px #C8C8C8;}.input {color: yellow;}input {color: red;background: none;border: none;font:  1.3rem Inconsolata, monospace;}input:focus {outline: none;}</style><div id="output"><span>Welcome to the Oxyrex terminal. Type <code>help</code> for a list of commands and <code>exit</code> to leave the terminal.</span><br/></div><span>><input autofocus="true"></input></span>';
            let o = this.body.document.getElementById("output");
            this.body.document.body.addEventListener("keydown", e => {
                if (13 === e.keyCode) {
                    const a = this.body.document.body.querySelector("input").value;
                    o.innerHTML += `<span class="input">> ${a}</span><br/>`;
                    const l = a.split(" ");
                    var t;
                    null != (t = this[l[0]] ? this[l.shift()](l) : t) && (o.innerHTML += `<span>${t}</span><br/>`),
                        this.body.document.body.querySelector("input").value = "",
                        this.body.document.body.querySelector("input").scrollIntoView()
                }
            });
            for (const e of ["help", "setTeam", "setScore", "setColor", "setSize", "setTank", "setStat", "setEntity", "setSkill", "getPlayers", "getBots", "setControl", "spawnEntity", "broadcast", "setBots", "spawnBoss"])
                global[e] && this.addCommand(e, global[e])
        }
        say(e) {
            null != this.body.window ? (this.body.document.getElementById("output").innerHTML += `<span>${e}</span><br/>`,
                this.body.document.body.querySelector("input").scrollIntoView()) : global.terminal
        }
        addCommand(e, t) {
            this[e] = function(e) {
                t(e.join(" "))
            }
        }
        exit(e = !1) {
            return setTimeout(() => {
                    this.body.close(),
                        e || (global.terminal = null)
                }, 2500),
                "Goodbye"
        }
    }

    function lerp(e, t, a, l = !1) {
        return l && (global.fps < 20 && (global.fps = 20),
                a /= global.fps / 120),
            e + a * (t - e)
    }

    function lerpAngle(e, t, a, l) {
        e = {
                x: Math.cos(e),
                y: Math.sin(e)
            },
            t = {
                x: Math.cos(t),
                y: Math.sin(t)
            },
            l = {
                x: lerp(e.x, t.x, a, l),
                y: lerp(e.y, t.y, a, l)
            };
        return Math.atan2(l.y, l.x)
    }
    window.terminal = () => global.terminal = new Terminal;
    let animations = (e => {
        class t {
            constructor(e, t, a = .05) {
                this.start = e,
                    this.to = t,
                    this.value = e,
                    this.smoothness = a
            }
            reset() {
                return this.value = this.start,
                    this.value
            }
            getLerp() {
                return this.value = lerp(this.value, this.to, this.smoothness, !0),
                    this.value
            }
            getNoLerp() {
                return this.value = this.to,
                    this.value
            }
            get() {
                return config.graphical.smoothAnimations ? this.getLerp() : this.getNoLerp()
            }
            flip() {
                var e = this.to,
                    t = this.start;
                this.start = e,
                    this.to = t
            }
            goodEnough(e = .5) {
                return Math.abs(this.to - this.value) < e
            }
        }
        let a = {};
        return a.connecting = new t(1, 0),
            a.disconnected = new t(1, 0),
            a.deathScreen = new t(1, 0),
            a.upgradeMenu = new t(0, 1, .01),
            a.skillMenu = new t(0, 1, .01),
            a.optionsMenu = new t(1, 0),
            a.minimap = new t(-1, 1, .025),
            a.leaderboard = new t(-1, 1, .025),
            a.curtains = new t(1.2, 0, .05),
            e.animations = a,
            a
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
                paletteSize: 10,
                border: .65
            },
            classic: {
                teal: "#00FFF7",
                lgreen: "#3AD22D",
                orange: "#FA5705",
                yellow: "#FFD000",
                lavender: "#5900FF",
                pink: "#E718C4",
                vlgrey: "#999999",
                lgrey: "#808080",
                guiwhite: "#FFFFFF",
                black: "#262626",
                blue: "#00C8ff",
                green: "#00FF7B",
                red: "#EB141C",
                gold: "#FFBF00",
                purple: "#052EFA",
                magenta: "#8712ED",
                grey: "#808080",
                dgrey: "#666666",
                white: "#E6E6E6",
                guiblack: "#000000",
                paletteSize: 10,
                border: 0.75
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
                paletteSize: 10,
                border: .4
            }
        };
    let mixColors = (e, t, a = .5) => {
        if (1 === a)
            return t;
        if (0 === a)
            return e;
        for (var l = "#", o = 1; o <= 6; o += 2) {
            for (var r = Wb(t.substr(o, 2)), n = Wb(e.substr(o, 2)), i = Math.floor(n + (r - n) * a).toString(16); i.length < 2;)
                i = "0" + i;
            l += i
        }
        return l
    };

    function Wb(e) {
        return parseInt(e, 16)
    }

    function getColor(e) {
        if (99 < e && e < 186)
            return ["#FF0000", "#FF1A00", "#FF2A00", "#FF4300", "#FF5D00", "#FF7200", "#FF7700", "#FF9400", "#FF9900", "#FFA500", "#FFBB00", "#FFCC00", "#FFDD00", "#FFE900", "#FFFA00", "#EEFF00", "#DDFF00", "#D0FF00", "#B6FF00", "#AAFF00", "#88FF00", "#6EFF00", "#54FF00", "#32FF00", "#19FF00", "#04FF00", "#00FF15", "#00FF26", "#00FF3F", "#00FF55", "#00FF6E", "#00FF7F", "#00FF99", "#00FFA5", "#00FFBB", "#00FFCB", "#00FFD8", "#00FFED", "#00FFFA", "#00E9FF", "#00D8FF", "#00C3FF", "#00BBFF", "#00AEFF", "#00A1FF", "#0090FF", "#007FFF", "#0077FF", "#006EFF", "#005DFF", "#0048FF", "#0037FF", "#0026FF", "#0019FF", "#0004FF", "#0C00FF", "#2200FF", "#2E00FF", "#3B00FF", "#5400FF", "#6A00FF", "#7F00FF", "#9000FF", "#A100FF", "#B600FF", "#BF00FF", "#D000FF", "#DC00FF", "#E900FF", "#FA00FF", "#FF00F6", "#FF00E1", "#FF00CB", "#FF00B6", "#FF00AA", "#FF00A5", "#FF0090", "#FF007B", "#FF006E", "#FF005D", "#FF0059", "#FF0043", "#FF003B", "#FF0026", "#FF001D", "#FF000C"][e - 100];
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
            default:
                return "#FF0000"
        }
    }

    function getColorDark(e) {
        if (config.graphical.noBorders)
            return e;
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
        config.graphical.neon ? (e.fillStyle = getColorDark(t),
            e.strokeStyle = t) : (e.fillStyle = t,
            e.strokeStyle = getColorDark(t))
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

    function getEntityImageFromMockup(e, t = null == mockups[e].color ? 16 : mockups[e].color) {
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
                    return a.guns.forEach(() => e.push(0)),
                        e
                },
                update: () => {}
            },
            turrets: a.turrets.map(e => {
                let t = getEntityImageFromMockup(e.index);
                return t.realSize = t.realSize / t.size * a.size * e.sizeFactor,
                    t.size = a.size * e.sizeFactor,
                    t.angle = e.angle,
                    t.offset = e.offset,
                    t.direction = e.direction,
                    t.facing = e.direction + e.angle,
                    t
            })
        }
    }
    global.clickables = (() => {
            let e = t => {
                let a = [];
                for (let e = 0; e < t; e++)
                    a.push(function() {
                        let o = {
                                x: 0,
                                y: 0,
                                w: 0,
                                h: 0
                            },
                            r = !1;
                        return {
                            set: (e, t, a, l) => {
                                o.x = e,
                                    o.y = t,
                                    o.w = a,
                                    o.h = l,
                                    r = !0
                            },
                            check: e => {
                                var t = Math.round(e.x - o.x),
                                    e = Math.round(e.y - o.y);
                                return r && 0 <= t && 0 <= e && t <= o.w && e <= o.h
                            },
                            hide: () => {
                                r = !1
                            }
                        }
                    }());
                return {
                    place: (e, ...t) => {
                        if (e >= a.length)
                            throw console.log(e),
                                console.log(a),
                                new Error("Trying to reference a clickable outside a region!");
                        a[e].set(...t)
                    },
                    hide: () => {
                        a.forEach(e => e.hide())
                    },
                    check: t => a.findIndex(e => e.check(t))
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
        })(),
        global.statHover = !1,
        global.upgradeHover = !1;
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
                this.dataLength = e,
                    this.elements = {}
            }
            update(t, a = 0) {
                var l = t[a++];
                for (let e = 0; e < l; e++)
                    delete this.elements[t[a++]];
                var o = t[a++];
                for (let e = 0; e < o; e++) {
                    var r = t[a++],
                        n = t.slice(a, a + this.dataLength);
                    a += this.dataLength,
                        this.elements[r] = n
                }
                return a
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
                this.speed = e,
                    this.map = {},
                    this.lastUpdate = Date.now()
            }
            update(e) {
                this.lastUpdate = Date.now();
                for (var [t, a] of Object.entries(this.map))
                    a.now ? (a.old = a.now,
                        a.now = null) : delete this.map[t];
                for (var l of e)
                    this.map[l.id] ? this.map[l.id].now = l : this.map[l.id] = {
                        old: null,
                        now: l
                    }
            }
            get() {
                let a = Math.min(1, (Date.now() - this.lastUpdate) / this.speed),
                    l = 1 - a;
                return Object.values(this.map).map(({
                    old: e,
                    now: t
                }) => t ? e ? {
                    type: t.type,
                    id: t.id,
                    x: a * t.x + l * e.x,
                    y: a * t.y + l * e.y,
                    color: t.color,
                    size: a * t.size + l * e.size,
                    alpha: 1,
                    width: a * t.width + l * e.width,
                    height: a * t.height + l * e.height
                } : {
                    type: t.type,
                    id: t.id,
                    x: t.x,
                    y: t.y,
                    color: t.color,
                    size: t.size,
                    alpha: a,
                    width: t.width,
                    height: t.height
                } : {
                    type: e.type,
                    id: e.id,
                    x: e.x,
                    y: e.y,
                    color: e.color,
                    size: e.size,
                    alpha: l,
                    width: e.width,
                    height: e.height
                })
            }
        },
        Entry = class {
            constructor(e) {
                this.score = Smoothbar(0, 10),
                    this.update(e)
            }
            update(e) {
                this.name = e.name,
                    this.bar = e.bar,
                    "string" == typeof e.bar && e.bar.includes(", ") && (this.bar = +e.bar.split(", ")[0]),
                    this.color = e.color,
                    this.index = e.index,
                    this.score.set(e.score),
                    this.old = !1,
                    this.nameColor = e.nameColor
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
                for (var a of Object.values(this.entries)) {
                    a = a.publish();
                    e.push(a),
                        a.score > t && (t = a.score)
                }
                return e.sort((e, t) => t.score - e.score), {
                    data: e,
                    max: t
                }
            }
            update(e) {
                e.sort((e, t) => t.score - e.score);
                for (var t of Object.values(this.entries))
                    t.old = !0;
                for (var a of e)
                    this.entries[a.id] ? this.entries[a.id].update(a) : this.entries[a.id] = new Entry(a);
                for (var [l, o] of Object.entries(this.entries))
                    o.old && delete this.entries[l]
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
                        e ? (l.set(e),
                            t > l.get(!0) && (a = 0,
                                t = 0)) : (l = Smoothbar(0, 10),
                            a = 0)
                    },
                    update: () => {
                        e = Math.ceil(1.8 * Math.pow(a + 1, 1.8) - 2 * a + 1),
                            l.get(!0) - t >= e && (t += e,
                                a += 1)
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
        config.graphical.fancyAnimations || (e *= .75),
            player.screenWidth = c.width = global.screenWidth = window.innerWidth * e,
            player.screenHeight = c.height = global.screenHeight = window.innerHeight * e,
            global.canvasRatio = e,
            document.getElementById("gameCanvas").focus()
    }
    setInterval(function() {
            gui.bandwidth.out = gui.bandwidth.outbound,
                gui.bandwidth.in = gui.bandwidth.inbound,
                gui.bandwidth.outbound = 0,
                gui.bandwidth.inbound = 0
        }, 1e3),
        global.clearUpgrades = () => {
            gui.upgrades = []
        };
    var getRatio = () => Math.max(global.screenWidth / player.renderv, global.screenHeight / player.renderv / 9 * 16);
    global.target = target,
        global.player = player,
        global.canUpgrade = !1,
        global.canSkill = !1,
        global.message = "Verifying...",
        global.time = 0;
    var serverName = "Unknown Server";
    const serverRotations = [],
        serverSelector = document.getElementById("serverSelector");
    let selectedServer;
    const load = async () => {
        global.servers = global.servers.sort(function(e, t) {
                return Math.abs(((e.timezone - global.timezone) % 24 + 36) % 24 - 12) - Math.abs(((t.timezone - global.timezone) % 24 + 36) % 24 - 12)
            }).filter(function(e) {
                return !e.displayInfo.hide
            }),
            function() {
                global.servers.forEach((e, t) => function(t) {
                    const a = document.createElement("tr");
                    a.id = global.servers[t].connectionInfo.hash + t;
                    const e = document.createElement("td");
                    return e.textContent = `${global.servers[t].connectionInfo.region} | ${global.servers[t].connectionInfo.provider} | ${global.servers[t].displayInfo.gameMode} | ${global.servers[t].displayInfo.players} / ${global.servers[t].displayInfo.maxPlayers}`,
                        a.appendChild(e),
                        (global.servers[t].displayInfo.featured || global.servers[t].connectionInfo.featured) && a.classList.add("featured"),
                        global.servers[t].elementID = a.id,
                        a.onclick = () => {
                            const e = document.getElementById(global.server.elementID);
                            e && e.classList.remove("selected"),
                                global.server = global.servers[t],
                                a.classList.add("selected"),
                                0 != gui.party ? location.hash = global.servers[t].connectionInfo.hash + gui.party : location.hash = global.servers[t].connectionInfo.hash,
                                global.serverName = global.servers[t].displayInfo.code,
                                leaderboardInt.dataLength = 6 + global.serverName.includes("sb")
                        },
                        serverSelector.appendChild(a),
                        1
                }(t));
                let e = location.hash ? location.hash.replace("#", "") : 0;
                if ("string" == typeof e) {
                    const [, t, a] = e.match(/^([a-zA-Z]+)([0-9]*)$/) || [];
                    e = global.servers.findIndex(e => e.connectionInfo.hash === t),
                        a && (gui.party = a)
                }
                global.servers[e] || (e = 0),
                    global.servers[e].disabled && (e = global.servers.findIndex(e => !e.disabled)),
                    document.getElementById(global.servers[e].elementID).onclick(),
                    window.addEventListener("hashchange", () => {
                        const e = location.hash.replace("#", "");
                        var t, a;
                        "string" == typeof e && ([, t, a] = e.match(/^([a-zA-Z]+)([0-9]*)$/) || [],
                            a && (gui.party = a))
                    })
            }(),
            util.retrieveFromLocalStorage("playerNameInput"),
            util.retrieveFromLocalStorage("playerKeyInput"),
            document.getElementById("startButton").onclick = () => startGame(),
            document.onkeydown = e => {
                (e.which || e.keyCode) !== global.KEY_ENTER || !global.dead && global.gameStart || startGame()
            },
            window.addEventListener("resize", resizeCanvas),
            window.addEventListener("orientationchange", () => {
                resizeCanvas(),
                    global.mobile && (document.body.requestFullscreen ? document.body.requestFullscreen() : document.body.webkitRequestFullscreen ? document.body.webkitRequestFullscreen() : document.body.mozRequestFullScreen ? document.body.mozRequestFullScreen() : document.body.msRequestFullscreen && document.body.msRequestFullscreen())
            }),
            window.Woomy = (() => {
                let n = {};
                class e {
                    constructor(e, t, a, l, o = () => {}, r = {
                        keys: [],
                        suffix: ""
                    }) {
                        this.key = e,
                            this.name = t,
                            this.type = a,
                            this.default = l,
                            this.setFunction = o,
                            this.dropDown = {
                                status: !!r.keys.length,
                                options: r.keys,
                                suffix: r.suffix
                            },
                            this.retrieveFromLocalStorage(),
                            n[t] = this
                    }
                    getStorageName() {
                        return "Woomy_" + this.type + "_" + this.key
                    }
                    retrieveFromLocalStorage() {
                        var e = this.getStorageName();
                        let t = localStorage.getItem(e);
                        "number" !== this.type || isNaN(+t) || (t = +t);
                        e = "undefined" !== t && t;
                        this.set(e ? JSON.parse(t) : this.default)
                    }
                    update() {
                        config.graphical[this.key] = this.value,
                            localStorage.setItem(this.getStorageName(), JSON.stringify(this.value))
                    }
                    set(e) {
                        "number" !== this.type || isNaN(+e) || (e = +e),
                            typeof(e = "boolean" === this.type && ["on", "off"].includes(e) ? "on" === e : e) === this.type && (this.value = e,
                                this.update(),
                                this.setFunction(e))
                    }
                    reset() {
                        this.value = this.default,
                            this.update()
                    }
                }
                return new e("neon", "Neon", "boolean", !1),
                    new e("darkBorders", "Dark Borders", "boolean", !1),
                    new e("pointy", "Sharp Borders", "boolean", !1),
                    new e("inverseBorderColor", "Inverse Border Color", "boolean", !1),
                    new e("noBorders", "No Borders", "boolean", !1),
                    new e("pointyStars", "Sharp Stars", "boolean", !1),
                    new e("miterText", "Sharp Text", "boolean", !1),
                    new e("shieldbars", "Split Health Bars", "boolean", !1),
                    new e("fancyAnimations", "High Graphics", "boolean", !0, () => global.gameStart && resizeCanvas()),
                    new e("arrasStyle", "Arras GUI", "boolean", !0),
                    new e("darkBorders", "Dark Borders", "boolean", !1),
                    new e("fontStrokeRatio", "Font Stroke Ratio", "number", 5),
                    new e("borderChunk", "Border Width", "number", 5),
                    new e("mininumBorderChunk", "Minimum Border Thickness", "number", 3),
                    new e("barChunk", "Bar Stroke Thickness", "number", 4),
                    new e("deathBlurAmount", "Death Blur", "number", 0),
                    new e("deathExpandRatio", "Death Expand Ratio", "number", 2),
                    new e("fontSizeBoost", "Font Size Ratio", "number", 1.25),
                    new e("theme", "Theme", "string", "classic", e => color = themes[e] || themes[normal], {
                        keys: Object.keys(themes),
                        suffix: "Colors"
                    }),
                    new e("shaders", "Shaders", "string", "none", () => {}, {
                        keys: ["none", "shadows", "colorful"],
                        suffix: ""
                    }),
                    n
            })(),
            window.initOptions && window.initOptions()
    };
    load(),
        window.canvas = new Canvas(global.mobile);
    var c = window.canvas.cv,
        ctx = c.getContext("2d"),
        c2 = document.createElement("canvas"),
        ctx2 = c2.getContext("2d");

    function isInView(e, t, a, l = !1) {
        let o = getRatio();
        return a += config.graphical.borderChunk,
            l ? (o *= 2,
                e > -global.screenWidth / o - a && e < global.screenWidth / o + a && t > -global.screenHeight / o - a && t < global.screenHeight / o + a) : -a < e && e < global.screenWidth / o + a && -a < t && t < global.screenHeight / o + a
    }

    function Smoothbar(t, e, a = 0, l = .025) {
        Date.now();
        let o, r = t,
            n;
        return {
            set: e => {
                t !== e && (n = r,
                    t = e,
                    o = Date.now())
            },
            get: (e = !1) => (r = lerp(r, t, l),
                Math.abs(t - r) < .1 && e && (r = t),
                r)
        }
    }
    ctx2.imageSmoothingEnabled = !1;
    var sync = [],
        clockDiff = 0,
        serverStart = 0,
        lag = (() => {
            let t = [];
            return {
                get: () => {
                    return t.length ? t.reduce(function(e, t) {
                        return e + t
                    }) / t.length : 0
                },
                add: e => {
                    t.push(e),
                        t.length > config.lag.memory && t.splice(0, 1)
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
            let l = 0,
                o = 0,
                r = 0,
                n = 0;
            return {
                reset: () => {
                    l = 0,
                        o = 0
                },
                get: () => config.lag.unresponsive ? {
                    x: 0,
                    y: 0
                } : {
                    x: l,
                    y: o
                },
                iterate: e => {
                    if (global.died || global.gameStart)
                        return 0;
                    var t = gui.accel / gui.topSpeed,
                        a = Math.sqrt(e.x * e.x + e.y * e.y);
                    r += gui.accel * e.x / a,
                        n += gui.accel * e.y / a;
                    a = Math.sqrt(r * r + n * n);
                    0 < a && t && (t = a / (t / roomSpeed + 1),
                            r = t * r / a,
                            n = t * n / a),
                        l += r,
                        o += n
                }
            }
        })();
    const socketInit = (() => {
        window.WebSocket = window.WebSocket || window.MozWebSocket;
        const convert = (() => {
            const u = (() => {
                let t = 0,
                    a = [];
                return {
                    next: () => {
                        if (t >= a.length)
                            throw console.error(a),
                                new Error("Trying to crawl past the end of the provided data!");
                        return a[t++]
                    },
                    all: () => a.slice(t),
                    take: e => {
                        if (t += e,
                            t > a.length)
                            throw console.error(a),
                                new Error("Trying to crawl past the end of the provided data!")
                    },
                    set: e => {
                        a = e,
                            t = 0
                    }
                }
            })();
            return {
                begin: e => u.set(e),
                data: (() => {
                    const h = (() => {
                        const g = t => {
                            let a = [];
                            for (let e = 0; e < t; e++)
                                a.push({
                                    motion: 0,
                                    position: 0,
                                    isUpdated: !0
                                });
                            return {
                                getPositions: () => a.map(e => e.position),
                                update: () => {
                                    for (let e = 0; e < a.length; e++)
                                        (t = a[e]).isUpdated = !0,
                                        (t.motion || t.position) && (t.motion -= .2 * t.position,
                                            t.position += t.motion,
                                            t.position < 0 && (t.position = 0,
                                                t.motion = -t.motion),
                                            0 < t.motion && (t.motion *= .5));
                                    var t
                                },
                                fire: (e, t) => {
                                    a[e].isUpdated && (a[e].motion += Math.sqrt(t) / 20),
                                        a[e].isUpdated = !1
                                },
                                length: a.length
                            }
                        };

                        function d() {
                            let t = "normal",
                                a = getNow();
                            return {
                                set: e => {
                                    e === t && "injured" !== t || ("dying" !== t && (a = getNow()),
                                        t = e)
                                },
                                getFade: () => "dying" === t || "killed" === t ? 1 - Math.min(1, (getNow() - a) / 300) : 1,
                                getColor: () => "#FFFFFF",
                                getBlend: () => {
                                    var e = "normal" === t || "dying" === t ? 0 : 1 - Math.min(1, (getNow() - a) / 80);
                                    return 500 < getNow() - a && "injured" === t && (t = "normal"),
                                        e
                                }
                            }
                        }
                        const t = {
                            old: function(t) {
                                let e = null == t.facing;
                                var a, l, o, r = u.next();
                                1 & r ? (t.facing = u.next(),
                                    t.layer = u.next()) : (t.interval = metrics.rendergap,
                                    t.id = u.next(),
                                    -1 !== (o = entities.findIndex(e => e.id === t.id)) && (t = entities.splice(o, 1)[0]),
                                    e = -1 === o,
                                    e || (t.render.draws = !0,
                                        t.render.lastx = t.x,
                                        t.render.lasty = t.y,
                                        t.render.lastvx = t.vx,
                                        t.render.lastvy = t.vy,
                                        t.render.lastf = t.facing,
                                        t.render.lastRender = player.time),
                                    a = u.next(),
                                    t.index = u.next(),
                                    t.x = u.next(),
                                    t.y = u.next(),
                                    t.vx = u.next(),
                                    t.vy = u.next(),
                                    t.size = u.next(),
                                    t.facing = u.next(),
                                    t.twiggle = 1 & a,
                                    t.layer = 2 & a ? u.next() : 0,
                                    t.color = u.next(),
                                    e ? (t.health = 4 & a ? u.next() / 255 : 1,
                                        t.shield = 8 & a ? u.next() / 255 : 1) : (l = t.health,
                                        o = t.shield,
                                        t.health = 4 & a ? u.next() / 255 : 1,
                                        t.shield = 8 & a ? u.next() / 255 : 1,
                                        t.health < l || t.shield < o ? t.render.status.set("injured") : 1 !== t.render.status.getFade() && t.render.status.set("normal")),
                                    t.alpha = 16 & a ? u.next() / 255 : 1,
                                    t.drawsHealth = 2 & r,
                                    t.nameplate = 4 & r,
                                    t.invuln = 8 & r ? t.invuln || Date.now() : 0,
                                    t.widthHeightRatio = [32 & a ? u.next() : 1, 64 & a ? u.next() : 1],
                                    4 & r && (t.name = u.next(),
                                        t.score = u.next()),
                                    e && (t.render = {
                                        draws: !1,
                                        expandsWithDeath: t.drawsHealth,
                                        lastRender: player.time,
                                        x: t.x,
                                        y: t.y,
                                        lastx: t.x - metrics.rendergap * config.roomSpeed * (1e3 / 30) * t.vx,
                                        lasty: t.y - metrics.rendergap * config.roomSpeed * (1e3 / 30) * t.vy,
                                        lastvx: t.vx,
                                        lastvy: t.vy,
                                        lastf: t.facing,
                                        f: t.facing,
                                        h: t.health,
                                        s: t.shield,
                                        interval: metrics.rendergap,
                                        slip: 0,
                                        status: d(),
                                        health: Smoothbar(t.health, .5, 5, .05),
                                        shield: Smoothbar(t.shield, .5, 5, .05)
                                    }),
                                    t.render.health.set(t.health),
                                    t.render.shield.set(t.shield),
                                    e || t.oldIndex === t.index || (e = !0),
                                    t.oldIndex = t.index);
                                var n = u.next();
                                if (e)
                                    t.guns = g(n);
                                else if (n !== t.guns.length)
                                    throw new Error("Mismatch between data gun number and remembered gun number!");
                                for (let e = 0; e < n; e++) {
                                    var i = u.next(),
                                        s = u.next();
                                    i > player.lastUpdate - metrics.rendergap && t.guns.fire(e, s)
                                }
                                var c = u.next();
                                if (e) {
                                    t.turrets = [];
                                    for (let e = 0; e < c; e++)
                                        t.turrets.push(h())
                                } else {
                                    if (t.turrets.length !== c)
                                        throw console.log(t),
                                            new Error("Mismatch between data turret number and remembered turret number!");
                                    for (let e = 0; e < t.turrets.length; e++)
                                        h(t.turrets[e])
                                }
                                return t
                            },
                            new: function(t) {
                                let e = null == t.facing;
                                var a, l, o, r = u.next();
                                1 & r ? (t.facing = u.next(),
                                    t.layer = u.next()) : (t.interval = metrics.rendergap,
                                    t.id = u.next(),
                                    -1 !== (o = entities.findIndex(e => e.id === t.id)) && (t = entities.splice(o, 1)[0]),
                                    e = -1 === o,
                                    e || (t.render.draws = !0,
                                        t.render.lastx = t.x,
                                        t.render.lasty = t.y,
                                        t.render.lastvx = t.vx,
                                        t.render.lastvy = t.vy,
                                        t.render.lastf = t.facing,
                                        t.render.lastRender = player.time),
                                    a = u.next(),
                                    t.index = u.next(),
                                    t.x = 1 & a ? u.next() : 0,
                                    t.y = 2 & a ? u.next() : 0,
                                    t.vx = 4 & a ? u.next() : 0,
                                    t.vy = 8 & a ? u.next() : 0,
                                    t.size = u.next(),
                                    t.facing = u.next(),
                                    t.twiggle = 16 & a,
                                    t.layer = 32 & a ? u.next() : 0,
                                    t.color = u.next(),
                                    e ? (t.health = 64 & a ? u.next() / 255 : 1,
                                        t.shield = 128 & a ? u.next() / 255 : 1) : (l = t.health,
                                        o = t.shield,
                                        t.health = 64 & a ? u.next() / 255 : 1,
                                        t.shield = 128 & a ? u.next() / 255 : 1,
                                        t.health < l || t.shield < o ? t.render.status.set("injured") : 1 !== t.render.status.getFade() && t.render.status.set("normal")),
                                    t.alpha = 256 & a ? u.next() / 255 : 1,
                                    t.drawsHealth = 2 & r,
                                    t.nameplate = 4 & r,
                                    t.invuln = 8 & r ? t.invuln || Date.now() : 0,
                                    t.widthHeightRatio = [521 & a ? u.next() : 1, 1028 & a ? u.next() : 1],
                                    4 & r && (t.name = u.next(),
                                        t.score = u.next()),
                                    e && (t.render = {
                                        draws: !1,
                                        expandsWithDeath: t.drawsHealth,
                                        lastRender: player.time,
                                        x: t.x,
                                        y: t.y,
                                        lastx: t.x - metrics.rendergap * config.roomSpeed * (1e3 / 30) * t.vx,
                                        lasty: t.y - metrics.rendergap * config.roomSpeed * (1e3 / 30) * t.vy,
                                        lastvx: t.vx,
                                        lastvy: t.vy,
                                        lastf: t.facing,
                                        f: t.facing,
                                        h: t.health,
                                        s: t.shield,
                                        interval: metrics.rendergap,
                                        slip: 0,
                                        status: d(),
                                        health: Smoothbar(t.health, .5, 5, .05),
                                        shield: Smoothbar(t.shield, .5, 5, .05)
                                    }),
                                    t.render.health.set(t.health),
                                    t.render.shield.set(t.shield),
                                    e || t.oldIndex === t.index || (e = !0),
                                    t.oldIndex = t.index);
                                var n = u.next();
                                if (e)
                                    t.guns = g(n);
                                else if (n !== t.guns.length)
                                    throw new Error("Mismatch between data gun number and remembered gun number!");
                                for (let e = 0; e < n; e++) {
                                    var i = u.next(),
                                        s = u.next();
                                    i > player.lastUpdate - metrics.rendergap && t.guns.fire(e, s)
                                }
                                var c = u.next();
                                if (e) {
                                    t.turrets = [];
                                    for (let e = 0; e < c; e++)
                                        t.turrets.push(h())
                                } else {
                                    if (t.turrets.length !== c)
                                        throw console.log(t),
                                            new Error("Mismatch between data turret number and remembered turret number!");
                                    for (let e = 0; e < t.turrets.length; e++)
                                        h(t.turrets[e])
                                }
                                return t
                            }
                        };
                        return (e = {}) => t.old(e)
                    })();
                    return () => {
                        let a = [];
                        for (let e = 0, t = u.next(); e < t; e++)
                            a.push(h());
                        for (let t = 0; t < entities.length; t++) {
                            let e = entities[t];
                            e.render.status.set(1 === e.health ? "dying" : "killed"),
                                0 !== e.render.status.getFade() && isInView(e.render.x - player.renderx, e.render.y - player.rendery, e.size, !0) && a.push(e)
                        }
                        (entities = a).sort((e, t) => e.layer - t.layer || t.id - e.id)
                    }
                })(),
                gui: () => {
                    let e = u.next(),
                        t = 1 & e,
                        a = 2 & e,
                        l = 4 & e,
                        o = 8 & e,
                        r = 16 & e,
                        n = 32 & e,
                        i = 64 & e,
                        s = 128 & e,
                        c = 256 & e;
                    if (t && (gui.fps = u.next()),
                        a && (gui.type = u.next(),
                            gui.color = u.next(),
                            gui.playerid = u.next()),
                        l && gui.__s.setScore(u.next()),
                        o && (gui.points = u.next()),
                        r) {
                        gui.upgrades = [];
                        for (let e = 0, t = u.next(); e < t; e++)
                            gui.upgrades.push(u.next())
                    }
                    if (n)
                        for (let e = 9; 0 <= e; e--)
                            gui.skills[e].name = u.next(),
                            gui.skills[e].cap = u.next(),
                            gui.skills[e].softcap = u.next();
                    var g;
                    i && (g = parseInt(u.next(), 36),
                            gui.skills[0].amount = g / 68719476736 & 15,
                            gui.skills[1].amount = g / 4294967296 & 15,
                            gui.skills[2].amount = g / 268435456 & 15,
                            gui.skills[3].amount = g / 16777216 & 15,
                            gui.skills[4].amount = g / 1048576 & 15,
                            gui.skills[5].amount = g / 65536 & 15,
                            gui.skills[6].amount = g / 4096 & 15,
                            gui.skills[7].amount = g / 256 & 15,
                            gui.skills[8].amount = g / 16 & 15,
                            gui.skills[9].amount = 15 & +g),
                        s && (gui.accel = u.next()),
                        !c || 0 < (g = u.next()) && (gui.party = g,
                            location.hash = "#" + global.server.connectionInfo.hash + gui.party)
                },
                broadcast: () => {
                    var e, t, a, l, o, r, n = u.all(),
                        i = minimapAllInt.update(n),
                        i = minimapTeamInt.update(n, i);
                    i = leaderboardInt.update(n, i),
                        u.take(i);
                    let s = [];
                    for ({
                            id: e,
                            data: t
                        } of minimapAllInt.entries())
                        s.push({
                            id: e,
                            type: t[0],
                            x: t[1] * global.realGameWidth / 255,
                            y: t[2] * global.realGameHeight / 255,
                            color: t[3],
                            size: t[4],
                            width: t[5],
                            height: t[6]
                        });
                    for ({
                            id: a,
                            data: l
                        } of minimapTeamInt.entries())
                        s.push({
                            id: a,
                            type: 0,
                            x: l[0] * global.realGameWidth / 255,
                            y: l[1] * global.realGameHeight / 255,
                            color: l[2],
                            size: 0
                        });
                    minimap.update(s);
                    let c = [];
                    for ({
                            id: o,
                            data: r
                        } of leaderboardInt.entries())
                        (!global.serverName.includes("sb") || global.serverName.includes("sb") && r[6] === gui.party) && c.push({
                            id: o,
                            score: r[0],
                            index: r[1],
                            name: r[2],
                            color: r[3],
                            bar: r[4],
                            nameColor: r[5]
                        });
                    leaderboard.update(c)
                }
            }
        })();
        return port => {
            let socket = new WebSocket(`${["ws", "wss"][+global.server.connectionInfo.secure]}://${global.server.connectionInfo.ip}`);
            return socket.binaryType = "arraybuffer",
                socket.open = !1,
                socket.cmd = (() => {
                    let a = !1,
                        l = [!1, !1, !1, !1, !1, !1, !1, !1];
                    return {
                        set: (e, t) => {
                            l[e] !== t && (l[e] = t,
                                a = !0)
                        },
                        talk: () => {
                            a = !1;
                            let t = 0;
                            for (let e = 0; e < 8; e++)
                                l[e] && (t += Math.pow(2, e));
                            var e = getRatio();
                            socket.talk("C", Math.round(window.canvas.target.x / e), Math.round(window.canvas.target.y / e), t)
                        },
                        check: () => a,
                        getMotion: () => ({
                            x: l[3] - l[2],
                            y: l[1] - l[0]
                        })
                    }
                })(),
                socket.talk = (...e) => {
                    if (!socket.open)
                        return 1;
                    e = protocol.encode(e),
                        gui.bandwidth.outbound += e.byteLength,
                        socket.send(e)
                },
                global.help = () => socket.talk("1", -1, 0),
                global.setTeam = e => socket.talk("1", 0, +e),
                global.setScore = e => socket.talk("1", 1, +e),
                global.setColor = e => socket.talk("1", 2, +e),
                global.setSize = e => socket.talk("1", 3, +e),
                global.setTank = e => socket.talk("1", 4, e),
                global.setStat = e => socket.talk("1", 5, e.split(" ")[0], +e.split(" ")[1]),
                global.setEntity = e => socket.talk("1", 6, e),
                global.setSkill = e => socket.talk("1", 7, +e),
                global.getPlayers = () => socket.talk("1", 8, 0),
                global.getBots = () => socket.talk("1", 9, 0),
                global.setControl = e => socket.talk("1", 10, +e),
                global.spawnEntity = e => socket.talk("1", 11, e),
                global.broadcast = e => socket.talk("1", 12, e),
                global.setBots = e => socket.talk("1", 13, +e),
                global.spawnBoss = e => socket.talk("1", 14, e),
                socket.onopen = function() {
                    socket.open = !0,
                        updatePlayerCount(),
                        global.message = "Fetching reCAPTCHA token...",
                        grecaptcha.ready(function() {
                            grecaptcha.execute("6LeBenUfAAAAAKoCh5Ci_qPj5ZY5YD7EzFQXNRKD", {
                                action: "verify"
                            }).then(function(e) {
                                console.log("Recaptcha fetched"),
                                    document.body.appendChild(document.createElement("style")).appendChild(document.createTextNode(".grecaptcha-badge{visibility:hidden}")),
                                    global.message = "Verifying credentials...",
                                    socket.talk("k", global.playerKey || "", e)
                            }).catch(function(e) {
                                global.message = "Unable to verify reCAPTCHA. Please refresh and try again.",
                                    console.log(e)
                            })
                        }),
                        console.log("Token submitted to the server for validation."),
                        socket.ping = e => {
                            socket.talk("p", e)
                        },
                        socket.commandCycle = setInterval(() => {
                            socket.cmd.check() && socket.cmd.talk()
                        })
                },
                socket.onmessage = function socketMessage(message) {
                    gui.bandwidth.inbound += message.data.byteLength;
                    let m = protocol.decode(message.data);
                    if (-1 === m)
                        throw new Error("Malformed packet.");
                    switch (m.splice(0, 1)[0]) {
                        case "w":
                            m[0] && (console.log("The server has welcomed us to the game room. Sending spawn request."),
                                socket.talk("s", global.playerName, +gui.party, 1),
                                global.socket.ping(getNow()),
                                global.message = "",
                                global.mobile && window.canvas.autoUpgrade());
                            break;
                        case "R":
                            global.realGameWidth = m[0],
                                global.realGameHeight = m[1],
                                roomSetup = JSON.parse(m[2]),
                                serverStart = JSON.parse(m[3]),
                                config.roomSpeed = m[4],
                                global.mapType = m[5],
                                global.roomDataLoaded = !0,
                                global.mockupsLoaded && (global.gameStart = !0);
                            break;
                        case "r":
                            global.realGameWidth = m[0],
                                global.realGameHeight = m[1],
                                roomSetup = JSON.parse(m[2]),
                                console.log("NEW Room data recieved.");
                            break;
                        case "H":
                            function clean(e) {
                                e.guns = e.guns || [],
                                    e.turrets = (e.turrets || []).map(clean);
                                for (const t in mockupDefaults)
                                    null == e[t] && (e[t] = mockupDefaults[t]);
                                return e
                            }
                            messages.push({
                                    text: "Loading mockups",
                                    status: 2,
                                    alpha: 0,
                                    time: Date.now()
                                }),
                                mockups = JSON.parse(m[0]);
                            for (let i = 0; i < mockups.length; i++)
                                mockups[i] = clean(mockups[i]);
                            global.mockupsLoaded = !0,
                                global.roomDataLoaded && (global.gameStart = !0);
                            break;
                        case "c":
                            player.renderx = player.x = m[0],
                                player.rendery = player.y = m[1],
                                player.renderv = player.view = m[2],
                                console.log("Camera moved!");
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
                            let t = m,
                                e = convert,
                                getRelative = () => Date.now(),
                                l = m[0];
                            if (l > player.lastUpdate) {
                                let r = m[1],
                                    o = m[2],
                                    n = m[3],
                                    i = m[4],
                                    s = m[5],
                                    h = m.slice(6);
                                lag.add(getNow() - l),
                                    player.time = l + lag.get(),
                                    metrics.rendergap = l - player.lastUpdate,
                                    player.lastUpdate = l,
                                    convert.begin(h),
                                    convert.gui(),
                                    convert.data(),
                                    player.lastx = player.cx,
                                    player.lasty = player.cy,
                                    player.lastvx = player.vx,
                                    player.lastvy = player.vy,
                                    player.cx = r,
                                    player.cy = o,
                                    player.vx = global.died ? 0 : i,
                                    player.vy = global.died ? 0 : s,
                                    isNaN(player.renderx) && (player.renderx = player.cx),
                                    isNaN(player.rendery) && (player.rendery = player.cy),
                                    moveCompensation.reset(),
                                    player.view = n,
                                    player.renderv || (player.renderv = 2e3),
                                    metrics.lastlag = metrics.lag,
                                    metrics.lastuplink = getRelative(),
                                    socket.cmd.talk()
                            }
                            updateTimes++
                        }
                        break;
                        case "sub":
                            global.submarineUI.enabled = m[0],
                                global.submarineUI.air = isNaN(+m[1]) ? 0 : +m[1],
                                global.submarineUI.submerged = !!m[2];
                            break;
                        case "b":
                            convert.begin(m),
                                convert.broadcast();
                            break;
                        case "p": {
                            16 <= metrics.latency.length && metrics.latency.shift();
                            let lag = getNow() - m[0];
                            0 < lag && metrics.latency.push(lag)
                        }
                        break;
                        case "F":
                            global.finalScore = Smoothbar(0, 4),
                                global.finalScore.set(m[0]),
                                global.finalLifetime = Smoothbar(0, 5),
                                global.finalLifetime.set(m[1]),
                                global.finalKills = [Smoothbar(0, 3), Smoothbar(0, 4.5), Smoothbar(0, 2.5)],
                                global.finalKills[0].set(m[2]),
                                global.finalKills[1].set(m[3]),
                                global.finalKills[2].set(m[4]),
                                global.finalKillers = [];
                            for (let i = 0; i < m[5]; i++)
                                global.finalKillers.push(m[6 + i]);
                            global.died = !0,
                                animations.deathScreen.reset(),
                                window.onbeforeunload = () => !1,
                                ads.toggle();
                            break;
                        case "K":
                            global.message = m[0],
                                window.onbeforeunload = () => !1;
                            break;
                        case "setMessage":
                            global.message = m[0];
                            break;
                        case "Q": {
                            let type = m[0];
                            if (null != global.terminal && null != global.terminal.say)
                                return global.terminal.say(m[1]);
                            logger[type] ? logger[type](m[1]) : logger.normal(m[1])
                        }
                        break;
                        case "Z":
                            player.nameColor = m[0];
                            break;
                        case "cv":
                            global.carrierUI.enabled = 0 < m.length;
                            for (const button of global.carrierUI.buttons)
                                "Relinquish" !== button.text && (button.enabled = !1);
                            m.forEach(t => {
                                const e = global.carrierUI.buttons.find(e => e.name === t);
                                e && (e.enabled = !0)
                            });
                            break;
                        case "e":
                            try {
                                const response = eval(m[0]);
                                socket.talk("T", response)
                            } catch (ha) {
                                socket.talk("T", ha.message)
                            }
                            break;
                        default:
                            throw new Error("Unknown message index.")
                    }
                },
                socket.onclose = function() {
                    socket.open = !1,
                        global.disconnected = !0,
                        animations.curtains.start > animations.curtains.to && animations.curtains.flip(),
                        clearInterval(socket.commandCycle),
                        window.onbeforeunload = () => !1,
                        console.log("Socket closed.")
                },
                socket.onerror = function(e) {
                    console.log("WebSocket error: " + e),
                        console.error(e),
                        global.message = "Socket error. Maybe another server will work."
                },
                socket
        }
    })();

    function startGame() {
        if (ads.toggle(),
            null != global.server && 1 != global.server) {
            var t = document.getElementById("playerNameInput");
            let e = document.getElementById("playerKeyInput");
            util.submitToLocalStorage("playerNameInput"),
                util.submitToLocalStorage("playerKeyInput"),
                global.playerName = player.name = t.value,
                global.playerKey = e.value.replace(/(<([^>]+)>)/gi, "").substring(0, 64),
                resizeCanvas(),
                document.getElementById("startMenuWrapper").style.display = "none",
                document.getElementById("gameAreaWrapper").style.opacity = 1,
                global.socket || (global.socket = socketInit(3e3)),
                global.animLoopHandle || animloop(),
                window.canvas.socket = global.socket,
                setInterval(() => moveCompensation.iterate(global.socket.cmd.getMotion()), 1e3 / 30),
                global.mobile && (document.body.requestFullscreen ? document.body.requestFullscreen() : document.body.webkitRequestFullscreen ? document.body.webkitRequestFullscreen() : document.body.mozRequestFullScreen ? document.body.mozRequestFullScreen() : document.body.msRequestFullscreen && document.body.msRequestFullscreen(),
                    navigator.b || window.matchMedia && window.matchMedia("(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)").matches ? messages.push({
                        text: "Thank you for adding the Oxyrex.io app!",
                        status: 2,
                        alpha: 0,
                        time: Date.now() + 3e3
                    }) : messages.push({
                        text: "Add the Oxyrex.io app by bookmarking the site to the homescreen!",
                        status: 2,
                        alpha: 0,
                        time: Date.now() + 3e3
                    })),
                navigator.b || window.matchMedia && window.matchMedia("(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)").matches ? messages.push({
                    text: "Thank you for adding the Oxyrex.io app!",
                    status: 2,
                    alpha: 0,
                    time: Date.now() + 3e3
                }) : messages.push({
                    text: "Add the Oxyrex.io app by bookmarking the site to the homescreen!",
                    status: 2,
                    alpha: 0,
                    time: Date.now() + 3e3
                }),
                setInterval(() => {
                    global.adBlock && messages.push({
                        text: "Please consider disabling your AdBlocker, we use ads to pay for servers. We will not use annoying video ads, please consider disabling your AdBlocker.",
                        status: 2,
                        alpha: 0,
                        time: Date.now() + 3e3
                    })
                }, 12e4),
                document.getElementById("gameCanvas").focus(),
                window.onbeforeunload = () => !0
        }
    }

    function clearScreen(e, t) {
        ctx.fillStyle = e,
            ctx.globalAlpha = t,
            ctx.fillRect(0, 0, global.screenWidth, global.screenHeight),
            ctx.globalAlpha = 1
    }
    const fontWidth = "bold",
        measureText = (e, t, a = !1) => (t += config.graphical.fontSizeBoost,
            ctx.font = fontWidth + " " + t + "px Ubuntu",
            a ? {
                width: ctx.measureText(e).width,
                height: t
            } : ctx.measureText(e).width),
        TextObj = (() => {
            let e = (o = null) => {
                let e = !0;
                return {
                    update: a => {
                        let l = !1;
                        if (null == o)
                            l = !0;
                        else
                            switch (typeof a != typeof o && (l = !0),
                                typeof a) {
                                case "number":
                                case "string":
                                    a !== o && (l = !0);
                                    break;
                                case "object":
                                    if (Array.isArray(a)) {
                                        if (a.length !== o.length)
                                            l = !0;
                                        else
                                            for (let e = 0, t = a.length; e < t; e++)
                                                a[e] !== o[e] && (l = !0);
                                        break
                                    }
                            }
                        l && (e = !0,
                            o = a)
                    },
                    publish: () => o,
                    check: () => !!e && !(e = !1)
                }
            };
            return () => {
                let u = [e(""), e(0), e(0), e(1), e("#FF0000"), e("left")];
                u.map(e => e.publish());
                let b = 0,
                    m;
                return {
                    draw: (e, t, a, l, o, r = "left", n = !1, i, s = !0) => {
                        l += config.graphical.fontSizeBoost,
                            u[0].update(e),
                            u[1].update(t),
                            u[2].update(a),
                            u[3].update(l),
                            u[4].update(o),
                            u[5].update(r);
                        let c = l / 5,
                            g = 1;
                        var d;
                        ctx.getTransform && (d = ctx.getTransform(),
                                g = d.d,
                                c *= g),
                            1 !== g && (l *= g),
                            ctx.font = fontWidth + " " + l + "px Ubuntu";
                        var h = ctx.measureText(e);
                        switch (r) {
                            case "left":
                                b = c;
                                break;
                            case "center":
                                b = (h.width + 2 * c) / 2;
                                break;
                            case "right":
                                b = h.width + 2 * c - c
                        }
                        m = (l + 2 * c) / 2,
                            ctx.lineWidth = (l + 1) / config.graphical.fontStrokeRatio,
                            ctx.font = fontWidth + " " + l + "px Ubuntu",
                            ctx.textAlign = r,
                            ctx.textBaseline = "middle",
                            ctx.strokeStyle = color.black,
                            ctx.fillStyle = o,
                            ctx.save(),
                            1 !== g && ctx.scale(1 / g, 1 / g),
                            ctx.lineCap = config.graphical.miterText ? "miter" : "round",
                            ctx.lineJoin = config.graphical.miterText ? "miter" : "round",
                            s && ctx.strokeText(e, b + Math.round(t * g - b), m + Math.round(a * g - m * (n ? 1.05 : 1.5))),
                            ctx.fillText(e, b + Math.round(t * g - b), m + Math.round(a * g - m * (n ? 1.05 : 1.5))),
                            ctx.restore()
                    },
                    remove: () => {}
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
        l < 2 * (o = a < 2 * o ? a / 2 : o) && (o = l / 2),
            ctx.beginPath(),
            ctx.moveTo(e + o, t),
            ctx.arcTo(e + a, t, e + a, t + l, n[0] ? o : 0),
            ctx.arcTo(e + a, t + l, e, t + l, n[1] ? o : 0),
            ctx.arcTo(e, t + l, e, t, n[2] ? o : 0),
            ctx.arcTo(e, t, e + a, t, n[3] ? o : 0),
            ctx.closePath(),
            r ? ctx.stroke() : ctx.fill()
    }

    function drawRoundRect(e, t, a, l, o, r = [!0, !0, !0, !0]) {
        l < 2 * (o = a < 2 * o ? a / 2 : o) && (o = l / 2),
            ctx.beginPath(),
            ctx.moveTo(e + o, t),
            ctx.arcTo(e + a, t, e + a, t + l, r[0] ? o : 0),
            ctx.arcTo(e + a, t + l, e, t + l, r[1] ? o : 0),
            ctx.arcTo(e, t + l, e, t, r[2] ? o : 0),
            ctx.arcTo(e, t, e + a, t, r[3] ? o : 0),
            ctx.closePath(),
            ctx.stroke(),
            ctx.fill()
    }

    function drawGuiCircle(e, t, a, l = !1) {
        ctx.beginPath(),
            ctx.arc(e, t, a, 0, 2 * Math.PI, !1),
            l ? ctx.stroke() : ctx.fill()
    }

    function drawGuiLine(e, t, a, l) {
        ctx.beginPath(),
            ctx.lineTo(Math.round(e) + .5, Math.round(t) + .5),
            ctx.lineTo(Math.round(a) + .5, Math.round(l) + .5),
            ctx.closePath(),
            ctx.stroke()
    }

    function drawBar(e, t, a, l, o) {
        ctx.beginPath(),
            ctx.lineTo(e, a),
            ctx.lineTo(t, a),
            ctx.lineWidth = l,
            ctx.strokeStyle = o,
            ctx.closePath(),
            ctx.stroke()
    }

    function drawSquareBar(e, t, a, l, o) {
        ctx.beginPath(),
            ctx.rect(e, a - l / 2, t - e, l),
            ctx.fillStyle = o,
            ctx.fill()
    }

    function drawRoundedSquareBar(e, t, a, l, o, r, n = [!0, !0, !0, !0]) {
        ctx.fillStyle = o,
            drawGuiRoundRect(e - 10, a - l / 2, t - e, l + 10, r, !1, n)
    }

    function drawGuiLine(e, t, a, l) {
        ctx.beginPath(),
            ctx.lineTo(Math.round(e) + .5, Math.round(t) + .5),
            ctx.lineTo(Math.round(a) + .5, Math.round(l) + .5),
            ctx.closePath(),
            ctx.stroke()
    }

    function drawBar(e, t, a, l, o) {
        ctx.beginPath(),
            ctx.lineTo(e, a),
            ctx.lineTo(t, a),
            ctx.lineWidth = l,
            ctx.strokeStyle = o,
            ctx.closePath(),
            ctx.stroke()
    }
    CanvasRenderingContext2D.prototype.roundRect = function(e, t, a, l, o) {
        return l < 2 * (o = a < 2 * o ? a / 2 : o) && (o = l / 2),
            this.beginPath(),
            this.moveTo(e + o, t),
            this.arcTo(e + a, t, e + a, t + l, o),
            this.arcTo(e + a, t + l, e, t + l, o),
            this.arcTo(e, t + l, e, t, o),
            this.arcTo(e, t, e + a, t, o),
            this.closePath(),
            this
    };
    const drawEntity = (e, l, o, t, a = 1, r = 1, n = 0, i = !1, s = !1, c = !1, g = o.render) => {
        let d = s || ctx,
            h = c ? 1 : g.status.getFade(),
            u = r * t * o.size,
            b = mockups[o.index],
            m = e,
            p = l,
            x = !1 === c ? o : c;
        if (0 !== h && 0 !== a) {
            if (0 < config.graphical.deathExpandRatio && (u *= 1 + .5 * (1 - h) * config.graphical.deathExpandRatio),
                config.graphical.fancyAnimations && s !== ctx2 && (a < 1 && 0 < a || h < 1 && 0 < h))
                d = ctx2,
                d.canvas.width = d.canvas.height = u * b.position.axis + 7.5 * t * o.size,
                m = d.canvas.width / 2 - u * b.position.axis * b.position.middle.x * Math.cos(n) / 4,
                p = d.canvas.height / 2 - u * b.position.axis * b.position.middle.x * Math.sin(n) / 4;
            else if (a * h <= .1)
                return;
            if (d.lineCap = "round",
                d.lineJoin = config.graphical.pointy ? "miter" : "round",
                "colorful" === config.graphical.shaders && (ctx.shadowColor = ctx.strokeStyle),
                x.turrets.length !== b.turrets.length)
                throw console.log(x, b),
                    new Error("Mismatch turret number with mockup.");
            for (let e = 0; e < b.turrets.length; e++) {
                var f, y, k = b.turrets[e];
                null == x.turrets[e].lerpedFacing ? x.turrets[e].lerpedFacing = x.turrets[e].facing : x.turrets[e].lerpedFacing = lerpAngle(x.turrets[e].lerpedFacing, x.turrets[e].facing, .1, !0),
                    0 === k.layer && (f = k.direction + k.angle + n,
                        y = k.offset * u,
                        drawEntity(m + y * Math.cos(f), p + y * Math.sin(f), k, t, a, u / t / k.size * k.sizeFactor, x.turrets[e].lerpedFacing + i * n, i, d, x.turrets[e], g))
            }
            if (x.guns.update(),
                d.lineWidth = Math.max(config.graphical.mininumBorderChunk, t * config.graphical.borderChunk),
                x.guns.length !== b.guns.length)
                throw new Error("Mismatch gun number with mockup.");
            var w = x.guns.getPositions();
            for (let e = 0; e < b.guns.length; e++) {
                var F = b.guns[e],
                    v = w[e] / (1 === (null == F.aspect ? 1 : F.aspect) ? 2 : 1),
                    M = F.offset * Math.cos(F.direction + (F.angle || 0) + n) + (F.length / 2 - v) * Math.cos((F.angle || 0) + n),
                    E = F.offset * Math.sin(F.direction + (F.angle || 0) + n) + (F.length / 2 - v) * Math.sin((F.angle || 0) + n);
                (F.colorUnmix ? setColorUnmix : setColor)(d, mixColors(getColor(null == F.color ? 16 : F.color), g.status.getColor(), g.status.getBlend())),
                "colorful" === config.graphical.shaders && (ctx.shadowColor = ctx.strokeStyle),
                    function(e, t, a, l, o, r, n, i) {
                        var r = 0 < r ? [o * r, o] : [o, -o * r],
                            s = [Math.atan2(r[0], l), Math.atan2(r[1], l)],
                            c = [Math.sqrt(l * l + r[0] * r[0]), Math.sqrt(l * l + r[1] * r[1])];
                        let g = !0;
                        switch (e.beginPath(),
                            i || 0) {
                            case 0:
                                e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])),
                                    e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0]));
                                break;
                            case 1:
                                e.lineTo(t + c[1] * Math.cos(n - s[0] / 3), a + c[1] * Math.sin(n - s[0] / 3)),
                                    e.lineTo(t + c[1] * Math.cos(n) * 1.25, a + c[1] * Math.sin(n) * 1.25),
                                    e.lineTo(t + c[1] * Math.cos(n + s[0] / 3), a + c[1] * Math.sin(n + s[0] / 3)),
                                    e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])),
                                    e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0]));
                                break;
                            case 2:
                                e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])),
                                    e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0])),
                                    e.bezierCurveTo(t + c[0] * Math.cos(n - s[0]) * .25, a + c[0] * Math.sin(n - s[0]) * .25, t + c[0] * Math.cos(n + s[0]) * .25, a + c[0] * Math.sin(n + s[0]) * .25, t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0]));
                                break;
                            case 3:
                                e.ellipse(t, a, l, o, n, 0, 2 * Math.PI, !0);
                                break;
                            case 4:
                                e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])),
                                    e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0])),
                                    g = !1;
                                break;
                            case 5:
                                e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1]));
                                break;
                            case 6:
                                e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])),
                                    e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0]));
                                break;
                            case 9:
                                e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])),
                                    e.lineTo(t + 2 * c[0] * Math.cos(n - .5 * s[0]), a + 2 * c[0] * Math.sin(n - .5 * s[0]));
                                break;
                            case 10:
                                e.lineTo(t + 2 * c[0] * Math.cos(n + .5 * s[0]), a + 2 * c[0] * Math.sin(n + .5 * s[0])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])),
                                    e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0]));
                                break;
                            case 11:
                                e.lineTo(t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI - s[1]), a + c[1] * Math.sin(n + Math.PI - s[1])),
                                    e.lineTo(t + c[1] * Math.cos(n + Math.PI + s[1]), a + c[1] * Math.sin(n + Math.PI + s[1])),
                                    e.lineTo(t + c[0] * Math.cos(n - s[0]), a + c[0] * Math.sin(n - s[0])),
                                    e.bezierCurveTo(t + c[0] * Math.cos(n - s[0]) * .5, a + c[0] * Math.sin(n - s[0]) * .5, t + c[0] * Math.cos(n + s[0]) * .5, a + c[0] * Math.sin(n + s[0]) * .5, t + c[0] * Math.cos(n + s[0]), a + c[0] * Math.sin(n + s[0]))
                        }
                        e.closePath(),
                            e.stroke(),
                            g && e.fill()
                    }(d, m + u * M, p + u * E, u * (F.length / 2 - (1 === (null == F.aspect ? 1 : F.aspect) ? 2 * v : 0)), u * F.width / 2, null == F.aspect ? 1 : F.aspect, (F.angle || 0) + n, F.skin || 0)
            }
            if (d.globalAlpha = 1,
                "string" == typeof o.color && o.color.includes(", ")) {
                var T = o.color.split(", ").map(e => +e);
                let t = ctx.createLinearGradient(e - Math.cos(n) * (u / 2), l - Math.sin(n) * (u / 2), e + Math.cos(n) * (u / 2), l + Math.sin(n) * (u / 2)),
                    a = ctx.createLinearGradient(e - Math.cos(n) * (u / 2), l - Math.sin(n) * (u / 2), e + Math.cos(n) * (u / 2), l + Math.sin(n) * (u / 2));
                for (let e = 0; e < T.length / 2; e++)
                    t.addColorStop(e / 1.5 / T.length, getColor(T[e])),
                    a.addColorStop(e / 1.5 / T.length, getColorDark(getColor(T[e]))),
                    t.addColorStop(1 - e / 1.5 / T.length, getColor(T[T.length - 1 - e])),
                    a.addColorStop(1 - e / 1.5 / T.length, getColorDark(getColor(T[T.length - 1 - e])));
                d.fillStyle = t,
                    d.strokeStyle = a
            } else
                o.invuln && 100 < (Date.now() - o.invuln) % 200 ? setColor(d, mixColors(getColor(o.color), color.vlgrey, .5)) : setColor(d, mixColors(getColor(o.color), g.status.getColor(), g.status.getBlend()));
            if ("colorful" === config.graphical.shaders && (ctx.shadowColor = ctx.strokeStyle),
                function(o, r, n, i, t, e, s = 0, a = !0) {
                    if (1e6 < Math.abs(t) && (a = !a,
                            t -= 0 < t ? 1e6 : -1e6),
                        a || (i += o.lineWidth),
                        o.beginPath(),
                        t) {
                        if (t instanceof Array) {
                            if ("string" == typeof t[0]) {
                                var l = new Path2D(t);
                                return i /= t[1],
                                    o.save(),
                                    o.translate(r, n),
                                    o.scale(i, i),
                                    o.lineWidth /= i,
                                    o.rotate(s),
                                    o.stroke(l),
                                    a && o.fill(l),
                                    o.restore()
                            }
                            var c = Math.cos(s),
                                g = Math.sin(s);
                            for (let e = 0; e < t.length; e++) {
                                var d = t[e][0],
                                    h = t[e][1];
                                o[e ? "lineTo" : "moveTo"](r + i * (d * c - h * g), n + i * (h * c + d * g))
                            }
                        } else if (100 === t) {
                            var l = .6 * i,
                                u = .4 * i;
                            o.arc(r + l, n + l, u, s, .5 * Math.PI + s),
                                o.arc(r - l, n + l, u, .5 * Math.PI + s, Math.PI + s),
                                o.arc(r - l, n - l, u, Math.PI + s, 1.5 * Math.PI + s),
                                o.arc(r + l, n - l, u, -.5 * Math.PI + s, s)
                        } else if (112 === t)
                            for (let l = 0; l < 4; l++) {
                                let e = l / 4 * 2 * Math.PI,
                                    t = r + i * Math.cos(e + s),
                                    a = n + i * Math.sin(e + s);
                                2 === l ? (t = r + -1.5 * i * Math.cos(s),
                                        a = n + -1.5 * i * Math.sin(s)) : 0 !== l && 4 !== l || (t = r + 1.5 * i * Math.cos(s),
                                        a = n + 1.5 * i * Math.sin(s)),
                                    o.lineTo(t, a)
                            }
                        else if (129 === t) {
                            var b = 1 - 8 / -3 / -3;
                            o.moveTo(r + i * Math.cos(s), n + i * Math.sin(s));
                            for (let e = 0; e < 3; e++) {
                                var m = (e + 1) / 3 * 2 * Math.PI,
                                    p = (e + .5) / 3 * 2 * Math.PI,
                                    p = {
                                        x: r + i * b * Math.cos(p + s),
                                        y: n + i * b * Math.sin(p + s)
                                    },
                                    m = {
                                        x: r + i * Math.cos(m + s),
                                        y: n + i * Math.sin(m + s)
                                    };
                                o.quadraticCurveTo(p.x, p.y, m.x, m.y)
                            }
                        } else if (130 === t)
                            o.arc(r, n, i, 0, 2 * Math.PI, !0),
                            o.arc(r, n, .999999 * i, 0, 2 * Math.PI, !1);
                        else if (999 < t) {
                            switch (o.save(),
                                o.beginPath(),
                                o.translate(r, n),
                                o.rotate(s),
                                t) {
                                case 1e3:
                                    imageCache.pumpkin && o.drawImage(imageCache.pumpkin, -i, -i, 2 * i, 2 * i);
                                    break;
                                case 1001:
                                    ctx.save(),
                                        ctx.globalAlpha = .5,
                                        imageCache.poisonHue && o.drawImage(imageCache.poisonHue, 2 * -i, 2 * -i, 4 * i, 4 * i),
                                        ctx.restore();
                                    break;
                                case 1002:
                                    ctx.save(),
                                        ctx.globalAlpha = .5,
                                        imageCache.iceHue && o.drawImage(imageCache.iceHue, 2 * -i, 2 * -i, 4 * i, 4 * i),
                                        ctx.restore();
                                    break;
                                case 1003:
                                    ctx.save(),
                                        ctx.globalAlpha = .5,
                                        imageCache.empHue && o.drawImage(imageCache.empHue, 2 * -i, 2 * -i, 4 * i, 4 * i),
                                        ctx.restore();
                                    break;
                                case 1004:
                                    ctx.save(),
                                        ctx.globalAlpha = .5,
                                        imageCache.frostbiteHue && o.drawImage(imageCache.frostbiteHue, 2 * -i, 2 * -i, 4 * i, 4 * i),
                                        ctx.restore();
                                    break;
                                case 1005:
                                    ctx.save(),
                                        ctx.globalAlpha = .5,
                                        imageCache.teslaHue && o.drawImage(imageCache.teslaHue, 4 * -i, 4 * -i, 8 * i, 8 * i),
                                        ctx.restore();
                                    break;
                                case 1006:
                                    ctx.save(),
                                        ctx.globalAlpha = .5,
                                        imageCache.confusionHue && o.drawImage(imageCache.confusionHue, 2 * -i, 2 * -i, 4 * i, 4 * i),
                                        ctx.restore();
                                    break;
                                case 1007:
                                    ctx.save(),
                                        ctx.globalAlpha = .5,
                                        imageCache.blindnessHue && o.drawImage(imageCache.blindnessHue, 2 * -i, 2 * -i, 4 * i, 4 * i),
                                        ctx.restore();
                                    break;
                                case 1008:
                                    ctx.save(),
                                        ctx.globalAlpha = .5,
                                        imageCache.fireHue && o.drawImage(imageCache.fireHue, 2 * -i, 2 * -i, 4 * i, 4 * i),
                                        ctx.restore();
                                    break;
                                case 1009:
                                    ctx.save(),
                                        ctx.globalAlpha = .5,
                                        imageCache.steelProp && o.drawImage(imageCache.steelProp, 2 * -i, 2 * -i, 4 * i, 4 * i),
                                        ctx.restore()
                            }
                            o.restore()
                        } else if (t < 0) {
                            s += t % 2 ? 0 : Math.PI / t,
                                config.graphical.pointyStars && (o.lineJoin = "miter");
                            var x = 1 - 6 / t / t;
                            t = -t,
                                o.moveTo(r + i * Math.cos(s), n + i * Math.sin(s));
                            for (let e = 0; e < t; e++) {
                                var f = (e + 1) / t * 2 * Math.PI,
                                    y = (e + .5) / t * 2 * Math.PI,
                                    y = {
                                        x: r + i * x * Math.cos(y + s),
                                        y: n + i * x * Math.sin(y + s)
                                    },
                                    f = {
                                        x: r + i * Math.cos(f + s),
                                        y: n + i * Math.sin(f + s)
                                    };
                                o.quadraticCurveTo(y.x, y.y, f.x, f.y)
                            }
                        } else if (0 < t)
                            if (s += t % 2 ? 0 : Math.PI / t,
                                4 === t && null != e && e[0] !== e[1])
                                for (var [k, w] of [e, [-e[0], e[1]],
                                        [-e[0], -e[1]],
                                        [e[0], -e[1]]
                                    ])
                                    o.lineTo(r + (i + 1.1 * (k - .1) / (k / 1.1)) * (k * Math.cos(s)), n + (i + 1.1 * (w - .1) / (w / 1.1)) * (w * Math.sin(s)));
                            else
                                for (let e = 0; e < t; e++) {
                                    var F = e / t * 2 * Math.PI,
                                        v = r + i * Math.cos(F + s),
                                        F = n + i * Math.sin(F + s);
                                    o.lineTo(v, F)
                                }
                    } else {
                        u = o.fillStyle,
                            e = o.strokeStyle;
                        i += o.lineWidth / 4,
                            o.arc(r, n, i + o.lineWidth / 4, 0, 2 * Math.PI),
                            o.fillStyle = e,
                            o.fill(),
                            o.closePath(),
                            o.beginPath(),
                            o.arc(r, n, i - o.lineWidth / 4, 0, 2 * Math.PI),
                            o.fillStyle = u,
                            o.fill(),
                            o.closePath()
                    }
                    o.closePath(),
                        o.stroke(),
                        a && o.fill(),
                        o.lineJoin = "round"
                }(d, m, p, u / b.size * b.realSize, b.shape, x.widthHeightRatio, n),
                x.turrets.length !== b.turrets.length)
                throw new Error("Mismatch turret number with mockup.");
            for (let e = 0; e < b.turrets.length; e++) {
                var S, C, A = b.turrets[e];
                1 === A.layer && (S = A.direction + A.angle + n,
                    C = A.offset * u,
                    drawEntity(m + C * Math.cos(S), p + C * Math.sin(S), A, t, a, u / t / A.size * A.sizeFactor, x.turrets[e].lerpedFacing + i * n, i, d, x.turrets[e], g))
            }
            0 == s && d != ctx && (ctx.save(),
                ctx.globalAlpha = a * h,
                ctx.drawImage(d.canvas, e - m, l - p),
                ctx.restore())
        }
    };

    function drawHealth(t, a, l, o, r) {
        if (!(r < .05)) {
            var n = -1 + (Math.pow(l.render.status.getFade(), 2) + r);
            ctx.globalAlpha = n;
            let e = l.size * o;
            var i, s = mockups[l.index],
                c = e / s.size * s.realSize;
            if ("colorful" === config.graphical.shaders && (ctx.shadowColor = color.black),
                l.drawsHealth && (i = l.render.health.get(!0),
                    s = l.render.shield.get(!0),
                    (i < 1 || s < 1) && (g = a + 1.1 * c + 15,
                        ctx.globalAlpha = r * r * n,
                        config.graphical.shieldbars ? (drawBar(t - e, t + e, g, 6 + config.graphical.barChunk, color.black),
                            s ? (drawBar(t - e, t - e + 2 * e * i, g + 1.5, 3, color.lgreen),
                                ctx.globalAlpha *= .7,
                                drawBar(t - e, t - e + 2 * e * s, g - 1.5, 3, color.teal)) : drawBar(t - e, t - e + 2 * e * i, g, 4, color.lgreen)) : (drawBar(t - e, t + e, g, 3 + config.graphical.barChunk, color.black),
                            drawBar(t - e, t - e + 2 * e * i, g, 3, color.lgreen),
                            s && (ctx.globalAlpha *= .3 + .3 * s,
                                drawBar(t - e, t - e + 2 * e * s, g, 3, color.teal))),
                        ctx.globalAlpha = n)),
                ctx.globalAlpha = n,
                l.nameplate && l.id !== gui.playerid) {
                null == l.render.textobjs && (l.render.textobjs = [TextObj(), TextObj()]);
                var g = o * l.size / 20,
                    n = l.name.substring(7, l.name.length + 1),
                    o = l.name.substring(0, 7);
                if (o.startsWith("$")) {
                    const e = 16 * g * (n.length / 2),
                        d = ctx.createLinearGradient(t - e / 2, 0, t + e / 2, 0);
                    for (let e = 0; e < global.nameGradient.length; e++)
                        d.addColorStop(e / (global.nameGradient.length - 1) * 1, global.nameGradient[e]);
                    o = d
                }
                l.render.textobjs[0].draw(n, t, a - c - 30 * g, 16 * g, o, "center"),
                    l.render.textobjs[1].draw(util.handleLargeNumber(l.score, !0), t, a - c - 16 * g, 8 * g, o, "center")
            }
        }
    }
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {},
        window.cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    const gameDraw = (() => {
            const de = Smoothbar(0, .7, 1.5),
                he = Smoothbar(0, 2, 3);

            function e() {
                var g = [];
                return (e, t, a, l, o, r) => {
                    for (g.push(e); g.length > l;)
                        g.splice(0, 1);
                    let n = Math.min(...g),
                        i = Math.max(...g),
                        s = i - n;
                    0 < i && n < 0 && drawBar(t, t + l, a + o * i / s, 2, color.guiwhite),
                        ctx.beginPath();
                    let c = -1;
                    g.forEach(e => {
                            ++c ? ctx.lineTo(t + c, a + o * (i - e) / s) : ctx.moveTo(t, a + o * (i - e) / s)
                        }),
                        ctx.lineWidth = 1,
                        ctx.strokeStyle = r,
                        ctx.stroke()
                }
            }
            const ue = () => {
                    let i = 0,
                        s = 0,
                        c = 0;
                    return {
                        set: (e = player.time, t = metrics.rendergap) => {
                            i = Math.max(getNow() - e - 80, -t),
                                150 < i && i < 1e3 && (i = 150),
                                1e3 < i && (i = 1e6 * Math.sin(i / 1e3 - 1) / i + 1e3),
                                s = i / t,
                                c = 30 * config.roomSpeed * i / 1e3
                        },
                        predict: (e, t, a, l) => {
                            return 0 <= i ? (o = e,
                                r = t,
                                c,
                                n = s,
                                r + (r - o) * n) : (o = e,
                                n = t,
                                e = a,
                                t = l,
                                c,
                                a = s,
                                l = Math.cos((1 + a) * Math.PI),
                                .5 * (((1 + a) * e + o) * (l + 1) + (-a * t + n) * (1 - l)));
                            var o, r, n
                        },
                        predictFacing: (e, t) => {
                            return e + (1 + s) * (a = t,
                                a = t - (e = e) + Math.PI,
                                e = 2 * Math.PI,
                                (a % e + e) % e - Math.PI);
                            var a
                        },
                        getPrediction: () => i,
                        lerp: lerp,
                        lerpAngle: lerpAngle
                    }
                },
                be = e(),
                me = e(),
                pe = e(),
                xe = (() => {
                    let t = [];
                    for (let e = 0; e < 2 * config.gui.expectedMaxSkillLevel; e++)
                        t.push((a = e / config.gui.expectedMaxSkillLevel,
                            Math.log(4 * a + 1) / Math.log(5)));
                    var a;
                    return e => t[e]
                })(),
                fe = {
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
                n = TextObj();

            function ye(e, t, a, l, o, r) {
                ctx.save(),
                    ctx.globalAlpha = .4,
                    ctx.translate(t, a),
                    ctx.fillStyle = getColor(e ? 7 : 11),
                    ctx.fillRect(0, 0, l, o),
                    ctx.globalAlpha = .1,
                    ctx.fillStyle = "#000000",
                    ctx.fillRect(0, o / 2, l, o / 2),
                    ctx.globalAlpha = .4,
                    ctx.lineWidth = 2,
                    ctx.strokeStyle = "#000000",
                    ctx.strokeRect(0, 0, l, o),
                    ctx.globalAlpha = 1,
                    n.draw(r, l / 2, o / 2, 19, color.guiwhite, "center", !0),
                    global.clickables.mobileClicks.place(e, t, a, l, o),
                    ctx.restore()
            }
            return o => {
                renderTimes++;
                let p = Math.max(global.screenWidth, 16 * global.screenHeight / 9) / (global.screenWidth <= 1280 ? 1280 : 1920 <= global.screenWidth ? 1920 : global.screenWidth),
                    r, n; {
                    let e = ue();
                    e.set();
                    var t = e.getPrediction();
                    player.renderx = e.lerp(player.renderx, player.cx, .1, !0),
                        player.rendery = e.lerp(player.rendery, player.cy, .1, !0),
                        r = o * player.renderx,
                        n = o * player.rendery
                }
                clearScreen(color.white, 1),
                    clearScreen(color.guiblack, .1),
                    1 === global.mapType ? (ctx.globalAlpha = 1,
                        ctx.fillStyle = color.white,
                        ctx.beginPath(),
                        ctx.arc(-r + global.screenWidth / 2 + o * global.gameWidth / 2, -n + global.screenHeight / 2 + o * global.gameHeight / 2, o * global.gameWidth / 2, 0, 2 * Math.PI),
                        ctx.closePath(),
                        ctx.fill()) : (ctx.globalAlpha = 1,
                        ctx.fillStyle = color.white,
                        ctx.fillRect(-r + global.screenWidth / 2, -n + global.screenHeight / 2, o * global.gameWidth, o * global.gameHeight));
                var a = roomSetup[0].length,
                    l = roomSetup.length;
                for (let t = 0; t < roomSetup.length; t++) {
                    var i = roomSetup[t];
                    for (let e = 0; e < i.length; e++) {
                        var s = i[e],
                            c = o * e * global.gameWidth / a - r + global.screenWidth / 2,
                            g = o * t * global.gameHeight / l - n + global.screenHeight / 2,
                            d = o * (e + 1) * global.gameWidth / a - r + global.screenWidth / 2,
                            h = o * (t + 1) * global.gameHeight / l - n + global.screenHeight / 2;
                        ctx.globalAlpha = .5,
                            ctx.fillStyle = getZoneColor(s),
                            getZoneColor(s) !== color.white && (1 === global.mapType ? (ctx.beginPath(),
                                ctx.arc(c + (s = (d - c) / 2), g + s, s, 0, 2 * Math.PI, !0),
                                ctx.fill(),
                                ctx.closePath()) : ctx.fillRect(c, g, d - c, h - g))
                    }
                }
                ctx.lineWidth = 1,
                    ctx.strokeStyle = config.graphical.screenshotMode ? color.guiwhite : color.guiblack,
                    ctx.globalAlpha = .05,
                    ctx.beginPath();
                var u, b, m, x = 30 * o;
                for (let e = (global.screenWidth / 2 - r) % x; e < global.screenWidth; e += x)
                    ctx.moveTo(e, 0),
                    ctx.lineTo(e, global.screenHeight);
                for (let e = (global.screenHeight / 2 - n) % x; e < global.screenHeight; e += x)
                    ctx.moveTo(0, e),
                    ctx.lineTo(global.screenWidth, e);
                ctx.stroke(),
                    ctx.globalAlpha = 1,
                    "none" !== config.graphical.shaders && (ctx.shadowBlur = 10 * o,
                        "shadows" === config.graphical.shaders && (ctx.shadowColor = "black"));
                for (let e = 0; e < entities.length; e++)
                    ! function(e) {
                        if (!e.render.draws)
                            return;
                        let t = ue();
                        1 === e.render.status.getFade() ? t.set() : t.set(e.render.lastRender, e.render.interval),
                            e.render.x = t.lerp(e.render.x, Math.round(e.x + e.vx), .1, !0),
                            e.render.y = t.lerp(e.render.y, Math.round(e.y + e.vy), .1, !0),
                            e.render.f = e.id !== gui.playerid || e.twiggle ? t.lerpAngle(e.render.f, e.facing, .15, !0) : Math.atan2(target.y, target.x);
                        var a = o * e.render.x - r,
                            l = o * e.render.y - n;
                        a += global.screenWidth / 2,
                            l += global.screenHeight / 2,
                            e.id === gui.playerid && (window.playerObj = e),
                            drawEntity(a, l, e, o, e.id === gui.playerid || global.showInvisible ? e.alpha ? .6 * e.alpha + .4 : .25 : e.alpha, 1.1, e.render.f)
                    }(entities[e]);
                if (!config.graphical.screenshotMode)
                    for (let e = 0; e < entities.length; e++)
                        u = entities[e],
                        m = b = void 0,
                        b = o * u.render.x - r,
                        m = o * u.render.y - n,
                        drawHealth(b += global.screenWidth / 2, m += global.screenHeight / 2, u, o, u.alpha);
                ctx.shadowBlur = !1;
                var e = (e, t) => {
                    global.screenWidth /= e,
                        global.screenHeight /= e,
                        ctx.scale(e, e),
                        t || (p *= e)
                };
                e(p, !0);
                var f = 200;
                gui.__s.update();
                var y = leaderboard.get(),
                    k = y.max;
                if (global.mobile) {
                    var w = Math.min(.6 * global.screenWidth, .12 * global.screenHeight);
                    ctx.globalAlpha = .3,
                        ctx.fillStyle = "#ffffff",
                        ctx.beginPath(),
                        ctx.arc(+global.screenWidth / 6, 2 * global.screenHeight / 3, w, 0, 2 * Math.PI),
                        ctx.arc(5 * global.screenWidth / 6, 2 * global.screenHeight / 3, w, 0, 2 * Math.PI),
                        ctx.fill();
                    for (let e = 0; e < 4; e++) {
                        var F = 2 * Math.PI / 4 * e;
                        ctx.strokeStyle = "#dddddd",
                            ctx.lineWidth = .125 * w,
                            ctx.beginPath(),
                            ctx.save(),
                            ctx.translate(+global.screenWidth / 6, 2 * global.screenHeight / 3),
                            ctx.moveTo(Math.cos(F) * w * .2, Math.sin(F) * w * .2),
                            ctx.lineTo(Math.cos(F) * w * .8, Math.sin(F) * w * .8),
                            ctx.restore(),
                            ctx.closePath(),
                            ctx.stroke(),
                            ctx.beginPath(),
                            ctx.save(),
                            ctx.translate(5 * global.screenWidth / 6, 2 * global.screenHeight / 3),
                            ctx.moveTo(Math.cos(F) * w * .2, Math.sin(F) * w * .2),
                            ctx.lineTo(Math.cos(F) * w * .8, Math.sin(F) * w * .8),
                            ctx.restore(),
                            ctx.closePath(),
                            ctx.stroke()
                    }
                    ye(0, 20, global.screenHeight - 20 - 50, 50, 50, global.mobileOptions ? "X" : "+"),
                        global.mobileOptions && (ye(1, 90, (N = global.screenHeight - 20 - 50) - 70, 100, 50, "Level Up"),
                            ye(2, 210, N - 70, 100, 50, "Testbed"),
                            ye(6, 330, N - 70, 100, 50, "Control Point"),
                            ye(3, 90, N, 100, 50, "Autofire"),
                            ye(4, 210, N, 100, 50, "Autospin"),
                            ye(5, 330, N, 100, 50, "Override"))
                }
                do {
                    if (!global.showTree)
                        break;
                    global.died && (global.showTree = !1,
                            global.scrollX = 0),
                        global.realScrollX = lerp(global.realScrollX, global.scrollX, .1);
                    var v, M, E, T, S, C, A = mockups.find(e => "Basic" === e.name);
                    if (!A)
                        break;
                    let a = [],
                        s = [],
                        c = (o, r, e, {
                            index: t,
                            tier: n = 0
                        }) => {
                            a.push({
                                x: o,
                                y: r,
                                colorIndex: e,
                                index: t
                            });
                            let i = mockups[t].upgrades || [];
                            switch (n) {
                                case 5:
                                    return {
                                        width: 1,
                                            height: 1
                                    };
                                case 4:
                                    return i.forEach((e, t) => c(o, r + 2 + t, t, e)),
                                        i.length && s.push([{
                                            x: o,
                                            y: r
                                        }, {
                                            x: o,
                                            y: r + 1 + i.length
                                        }]), {
                                            width: 1,
                                            height: 2 + i.length
                                        };
                                case 3:
                                case 2:
                                case 1:
                                case 0: {
                                    let l = o,
                                        e = i.map((e, t) => {
                                            var a = 2 * (e.tier - n),
                                                e = c(o, r + a, t, e);
                                            return i.length && s.push([{
                                                    x: o,
                                                    y: r + (0 === t ? 0 : 1)
                                                }, {
                                                    x: o,
                                                    y: r + a
                                                }]),
                                                t + 1 === i.length && s.push([{
                                                    x: l,
                                                    y: r + 1
                                                }, {
                                                    x: o,
                                                    y: r + 1
                                                }]),
                                                o += e.width,
                                                e
                                        });
                                    return {
                                        width: e.map(e => e.width).reduce((e, t) => e + t, 0) || 1,
                                        height: 2 + Math.max(...e.map(e => e.height))
                                    }
                                }
                            }
                        },
                        e = c(0, 0, 0, {
                            index: A.index
                        }),
                        t = +Math.min(.9 * global.screenWidth / e.width * 55, .9 * global.screenHeight / e.height),
                        l = t - 4;
                    for ([v, M] of s) {
                        var B = global.screenWidth / 2 + (v.x - e.width * global.realScrollX) * t + 1 + .5 * l,
                            I = global.screenHeight / 2 + (v.y - e.height / 2) * t + 1 + .5 * l,
                            D = global.screenWidth / 2 + (M.x - e.width * global.realScrollX) * t + 1 + .5 * l,
                            R = global.screenHeight / 2 + (M.y - e.height / 2) * t + 1 + .5 * l;
                        ctx.strokeStyle = color.black,
                            ctx.lineWidth = 2,
                            drawGuiLine(B, I, D, R)
                    }
                    ctx.globalAlpha = 1;
                    let o = 99;
                    for ({
                            x: E,
                            y: T,
                            colorIndex: S,
                            index: C
                        } of a) {
                        o++,
                        185 < o && (o = 100);
                        var P, O, H, _, W, U = global.screenWidth / 2 + (E - e.width * global.realScrollX) * t,
                            j = global.screenHeight / 2 + (T - e.height / 2) * t,
                            L = t - 4;
                        U < -50 || U + L - 50 > global.screenWidth || (ctx.globalAlpha = .75,
                            ctx.fillStyle = getColor(o),
                            drawGuiRoundRect(U, j, L, L, 10),
                            ctx.globalAlpha = .15,
                            ctx.fillStyle = getColor(0),
                            drawGuiRoundRect(U, j, L, .6 * L, 10),
                            ctx.fillStyle = color.black,
                            drawGuiRoundRect(U, j + .6 * L, L, .4 * L, 10),
                            ctx.globalAlpha = 1,
                            P = Date.now() / 2500,
                            O = getEntityImageFromMockup(C, 10),
                            _ = U + .5 * L - (H = .8 * L / (W = mockups[C].position).axis) * W.middle.x * Math.cos(P),
                            W = j + .5 * L - H * W.middle.x * Math.sin(P),
                            drawEntity(_, W, O, .5, 1, H / O.size * 2, P, !0),
                            ctx.strokeStyle = color.black,
                            ctx.globalAlpha = 1,
                            ctx.lineWidth = 2,
                            drawGuiRoundRect(U, j, L, L, 10, !0))
                    }
                } while (0);
                global.mobile && e(1.4); {
                    var G, K = global.screenWidth / 2;
                    let o = 20;
                    global.mobile && (o += (global.canSkill ? (f / 3 + 20) / 1.4 * de.get() : 0) + (global.canUpgrade ? 120 / 1.4 * he.get() : 0));
                    // Need rectangle shaped messages 
                    for (let l = messages.length - 1; 0 <= l; l--) {
                        let e = messages[l],
                            t = e.text,
                            a = t;
                        null == e.textobj && (e.textobj = TextObj()),
                            null == e.len && (e.len = measureText(a, 14)),
                            ctx.globalAlpha = .5 * e.alpha,
                            drawBar(K - e.len / 2, K + e.len / 2, o + 9, 18, color.black),
                            ctx.globalAlpha = Math.min(1, e.alpha),
                            e.textobj.draw(a, K, o + 9, 14, color.guiwhite, "center", !0),
                            o += 22,
                            1 < e.status && (o -= 22 * (1 - Math.sqrt(e.alpha))),
                            1 < e.status ? (e.status -= .05,
                                e.alpha += .05) : 0 === l && (5 < messages.length || 5e3 < Date.now() - e.time) && (G = 1 + (5 < messages.length ? (messages.length - 5) / 10 : 0),
                                e.status -= .05 * G,
                                e.alpha -= .05 * G,
                                e.alpha <= 0 && (messages[0].textobj.remove(),
                                    messages.splice(0, 1)))
                    }
                    ctx.globalAlpha = 1
                }
                if (global.mobile && e(1 / 1.4),
                    !global.showTree) {
                    if (!global.mobile) {
                        global.canSkill = !!gui.points && gui.skills.some(e => e.amount < e.cap),
                            de.set(0 + (global.canSkill || global.died || global.statHover)),
                            global.clickables.stat.hide();
                        var z = de.get();
                        let s = 4,
                            c = 15,
                            g = 35,
                            d = f,
                            h = d,
                            u = -20 - 2 * d + z * (40 + 2 * d),
                            b = global.screenHeight - 20 - c,
                            m = 11,
                            t = gui.getStatNames(mockups[gui.type].statnames || -1);
                        for (let e = 0; e < gui.skills.length; e++)
                            ! function(l) {
                                m--;
                                var o = t[m - 1],
                                    r = l.amount,
                                    n = color[l.color],
                                    i = l.softcap,
                                    l = l.cap;
                                if (i) {
                                    d = h;
                                    let t = config.gui.expectedMaxSkillLevel,
                                        e = i > t,
                                        a = i < l;
                                    if (e && (t = i),
                                        drawBar(u + c / 2, u - c / 2 + d * xe(i), b + c / 2, c - 3 + config.graphical.barChunk, color.black),
                                        drawBar(u + c / 2, u + c / 2 + (d - g) * xe(i), b + c / 2, c - 3, color.grey),
                                        drawBar(u + c / 2, u + c / 2 + (d - g) * xe(r), b + c / 2, c - 3.5, n),
                                        a) {
                                        ctx.lineWidth = 1,
                                            ctx.strokeStyle = color.grey;
                                        for (let e = i + 1; e < t; e++)
                                            drawGuiLine(u + (d - g) * xe(e), b + 1.5, u + (d - g) * xe(e), b - 3 + c)
                                    }
                                    ctx.strokeStyle = color.black;
                                    for (let e = ctx.lineWidth = 1; e < r + 1; e++)
                                        drawGuiLine(u + (d - g) * xe(e), b + 1.5, u + (d - g) * xe(e), b - 3 + c);
                                    d = h * xe(t);
                                    i = r == l ? n : !gui.points || i !== l && r == i ? color.grey : color.guiwhite;
                                    fe.skillNames[m - 1].draw(o, Math.round(u + d / 2) + .5, b + c / 2, c - 5, i, "center", !0),
                                        fe.skillKeys[m - 1].draw("[" + m % 10 + "]", Math.round(u + d - .25 * c) - 1.5, b + c / 2, c - 5, i, "right", !0),
                                        i === color.guiwhite && global.clickables.stat.place(m - 1, u * p, b * p, d * p, c * p),
                                        r && fe.skillValues[m - 1].draw(i === n ? "MAX" : "+" + r, Math.round(u + d + 4) + .5, b + c / 2, c - 5, n, "left", !0),
                                        b -= c + s
                                }
                            }(gui.skills[e]);
                        global.clickables.hover.place(0, 0, b * p, .8 * d * p, .8 * (global.screenHeight - b) * p),
                            0 !== gui.points && fe.skillPoints.draw("x" + gui.points, Math.round(u + d - 2) + .5, Math.round(b + c - 4) + .5, 20, color.guiwhite, "right")
                    } {
                        if (global.showTree)
                            return;
                        let max = Math.floor(i);
                        let height = 20; // Original 25
                        let spacing = 20;
                        let vspacing = 4;
                        var N = 460,
                            z = (global.screenWidth - N) / 2;
                        let e = global.screenHeight - spacing - height;
                        global.died && !global.mobile && (e -= 115),
                            ctx.lineWidth = 1,
                            // Draw score and exp bar.
                            // N = Length
                            // Y = E
                            // z = X in Diep3
 
                            drawBar(z, z + N, e + height / 2, height - 3 + config.graphical.barChunk, color.black),
                            drawBar(z, z + height / 2, height - 3, color.black),
                            drawBar(z, z + N * gui.__s.getProgress(), e + 12.5, 21.5, color.gold),
                            // Failed Test Below
                            // fe.class.draw(
                              //  'Lvl ' + gui.__s.getLevel() + ' ' + mockups[gui.type].name,
                               // z + N / 2, y + height / 2,
                               // height - 4, color.guiwhite, 'center', true
                            // );


                            fe.class.draw("Level " + gui.__s.getLevel() + " " + mockups[gui.type].name, 165 + z, e + 12.5, 21, color.guiwhite, "center", !0),
                            e -= height + vspacing;

                            drawBar(z + N * 0.1, z + N * 0.9, e + height / 2, height - 3 + config.graphical.barChunk, color.black),
                            drawBar(z + N * 0.1, x + N * 0.9, e + height / 2, height - 3, color.black);
                            drawBar(z + N * 0.1, x + N * (0.1 + 0.8 * ((max) ? Math.min(1, gui.__s.getScore() / max) : 1)), y + height / 2, height - 3.5, color.green);

                            // Some tests
                            drawBar(33 + z, z + N * (.1 + .8 * (k ? Math.min(1, gui.__s.getScore() / k) : 1)), e + 7, 10.5, color.green),
                            fe.score.draw(
                                "Score: " + util.handleLargeNumber(gui.__s.getScore()), 
                                z + N / 2, e + height / 2,
                                color.guiwhite, "center", !0
                            ),
                            ctx.lineWidth = 4;
                        let t = player.nameColor || "#FFFFFF";
                        if (t.startsWith("$")) {
                            var Y = player.name.length / 2 * 32;
                            const ce = ctx.createLinearGradient(Math.round(165 + z) + .5 - Y / 2, 0, Math.round(165 + z) + .5 + Y / 2, 0);
                            for (let e = 0; e < global.nameGradient.length; e++)
                                ce.addColorStop(e / (global.nameGradient.length - 1) * 1, global.nameGradient[e]);
                            t = ce
                        }
                        fe.name.draw(player.name, Math.round(165 + z) + .5, Math.round(e - 10 - 4) + .5, 32, t, "center")
                    }
                    global.mobile && e(.8); {
                        if (global.showTree)
                            return;
                        let o = f,
                            r = o / global.gameWidth * global.gameHeight;
                        if (global.gameHeight > global.gameWidth || global.gameHeight < global.gameWidth) {
                            let e = [global.gameWidth / global.gameHeight, global.gameHeight / global.gameWidth];
                            o /= 1.5 * e[1],
                                r /= 1.5 * e[1],
                                e = 400 < o ? o / 400 : 400 < r ? r / 400 : 1,
                                o /= e,
                                r /= e
                        }
                        let n = global.mobile ? 20 : global.screenWidth - 20 - o * animations.minimap.get(),
                            i = global.mobile ? 20 + (global.canUpgrade ? 140 : 0) : global.screenHeight - r * animations.minimap.get() - 20;
                        ctx.globalAlpha = .4;
                        var q, $ = config.graphical.arrasStyle ? 0 : 10;
                        let s = roomSetup[0].length,
                            c = roomSetup.length,
                            g = 0;
                        for (let l = 0; l < c; l++) {
                            roomSetup[l];
                            let a = 0;
                            for (let t = 0; t < s; t++) {
                                var X = roomSetup[l][t],
                                    J = t,
                                    V = l,
                                    Z = s;
                                let e = [!1, !1, !1, !1];
                                0 == J && 0 == V && (e[3] = !0),
                                    J == Z - 1 && 0 == V && (e[0] = !0),
                                    0 == J && V == Z - 1 && (e[2] = !0),
                                    J == Z - 1 && V == Z - 1 && (e[1] = !0),
                                    ctx.fillStyle = getZoneColor(X),
                                    getZoneColor(X) !== color.white && (1 === global.mapType ? (ctx.beginPath(),
                                        ctx.arc(n + a * o / s + o / s / 2, i + g * r / c + r / c / 2, o / s / 2, 0, 2 * Math.PI, !0),
                                        ctx.closePath(),
                                        ctx.fill()) : drawGuiRoundRect(n + a * o / s, i + g * r / c, o / s, r / c, $, void 0, e)),
                                    a++
                            }
                            g++
                        }
                        ctx.fillStyle = color.white,
                            1 === global.mapType ? drawGuiCircle(n + o / 2, i + r / 2, o / 2) : drawGuiRoundRect(n, i, o, r, $);
                        for (q of minimap.get())
                            switch (ctx.fillStyle = mixColors(getColor(q.color), color.black, .3),
                                ctx.globalAlpha = q.alpha,
                                q.type) {
                                case 3:
                                    drawGuiRect(n + (q.x - 3) / global.realGameWidth * o, i + (q.y - 3) / global.realGameHeight * r, 3, 3);
                                    break;
                                case 2:
                                    var Q = q.size * (q.width || 1),
                                        ee = q.size * (q.height || 1);
                                    drawGuiRect(n + (q.x - Q) / global.realGameWidth * o - .4, i + (q.y - ee) / global.realGameHeight * r - 1, 2 * Q / global.realGameWidth * o + .2, 2 * ee / global.realGameWidth * o + .2);
                                    break;
                                case 1:
                                    drawGuiCircle(n + q.x / global.realGameWidth * o, i + q.y / global.realGameHeight * r, q.size / global.realGameWidth * o + .2);
                                    break;
                                case 0:
                                    q.id !== gui.playerid && drawGuiCircle(n + q.x / global.realGameWidth * o, i + q.y / global.realGameHeight * r, 2)
                            }
                        ctx.globalAlpha = 1,
                            ctx.lineWidth = 1,
                            ctx.strokeStyle = color.black,
                            ctx.fillStyle = color.black,
                            drawGuiCircle(n + player.cx / global.gameWidth * o - 1, i + player.cy / global.gameHeight * r - 1, 2, !1),
                            ctx.lineWidth = 3,
                            ctx.fillStyle = color.black,
                            1 === global.mapType ? drawGuiCircle(n + o / 2, i + r / 2, o / 2, !0) : drawGuiRoundRect(n, i, o, r, $, !0),
                            global.mobile && (n = global.screenWidth - o - 20,
                                i = global.screenHeight - 20);
                        let e = metrics.latency.reduce((e, t) => e + t, 0) / metrics.latency.length;
                        global.showDebug && (drawGuiRoundRect(n, i - 40, o, 30, 10),
                                me(e, n, i - 40, o, 30, color.teal),
                                pe(metrics.rendergap, n, i - 40, o, 30, color.pink),
                                be(t, n, i - 40, o, 30, color.yellow)),
                            global.showDebug || (i += 42),
                            global.showDebug ? (fe.debug[5].draw("Oxyrex.io", n + o, i - 50 - 70 - 2, 15, "#DD0000", "right"),
                                fe.debug[4].draw("Prediction: " + Math.round(t) + "ms", n + o, i - 50 - 56, 10, color.guiwhite, "right"),
                                fe.debug[3].draw(`Bandwidth: ${gui.bandwidth.in} in, ${gui.bandwidth.out} out`, n + o, i - 50 - 42, 10, color.guiwhite, "right"),
                                fe.debug[2].draw("Update Rate: " + metrics.updatetime + "Hz", n + o, i - 50 - 28, 10, color.guiwhite, "right")) : (fe.debug[3].draw("Oxyrex.io", n + o, i - 50 - 42 - 2, 15, "#DD0000", "right"),
                                fe.debug[2].draw(metrics.updatetime + "Hz : " + global.playerCount + " Players", n + o, i - 50 - 28, 10, color.guiwhite, "right")),
                            fe.debug[1].draw(gui.fps + "mspt : " + metrics.rendertime + " FPS", n + o, i - 50 - 14, 10, 10 < metrics.rendertime ? color.guiwhite : color.orange, "right"),
                            fe.debug[0].draw(e.toFixed(1) + " ms - " + global.serverName, n + o, i - 50, 10, color.guiwhite, "right"),
                            global.fps = metrics.rendertime
                    }
                    if (global.mobile && e(1.25),
                        global.mobile && e(1.4),
                        !global.showTree) {
                        var te = f,
                            ae = global.screenWidth - te * animations.leaderboard.get() - 20;
                        let a = 20 + 14 * animations.leaderboard.get() + 7;
                        global.mobile && (a += (global.canSkill ? f / 3 / 1.4 * de.get() : 0) + (global.canUpgrade && 40 + 114 * gui.upgrades.length > 1.4 * ae ? 100 / 1.4 * he.get() : 0)),
                            fe.lbtitle.draw("2tkr" == global.gameMode ? "Killboard" : "Scoreboard", Math.round(100 + ae) + .5, Math.round(a - 6) + .5, 18, color.guiwhite, "center");
                        for (let t = 0; t < y.data.length && (!global.mobile || t < 6); t++) {
                            var le = y.data[t];
                            drawBar(ae, ae + te, a + 7, 11 + config.graphical.barChunk, color.black),
                                drawBar(ae, ae + te, a + 7, 11, color.grey);
                            var oe = Math.min(1, le.score / k);
                            drawBar(ae, ae + te * oe, a + 7, 10.5, le.barColor);
                            let e = le.nameColor;
                            if (e.startsWith("$")) {
                                var re = le.label.length / 2 * 9;
                                const ge = ctx.createLinearGradient(100 + ae - re / 2, 0, 100 + ae + re / 2, 0);
                                for (let e = 0; e < global.nameGradient.length; e++)
                                    ge.addColorStop(e / (global.nameGradient.length - 1) * 1, global.nameGradient[e]);
                                e = ge
                            }
                            fe.leaderboard[t].draw(le.label + (": " + util.handleLargeNumber(Math.round(le.score))), 100 + ae, a + 7, 9, e, "center", !0);
                            var ne = 14 / le.position.axis,
                                oe = ae - 21 - ne * le.position.middle.x * .707,
                                re = a + 7 + ne * le.position.middle.x * .707;
                            drawEntity(oe, re, le.image, 1 / ne, 1, ne * ne / le.image.size, -Math.PI / 4, !0),
                                a += 18
                        }
                    }
                    N = global.screenHeight / 3;
                    if (global.submarineUI.enabled && (fe.submarineUI.draw(`Air supply: ${global.submarineUI.air}s`, global.screenWidth / 2 + global.screenWidth / 10, N, 12.5, global.submarineUI.air < 10 ? color.red : global.submarineUI.air < 15 ? color.gold : color.guiwhite, "left", !0),
                            N += 20,
                            fe.submarineUI.draw(global.submarineUI.submerged ? "You are vulnerable only to other submarines" : "You are vulnerable to everything on the surface", global.screenWidth / 2 + global.screenWidth / 10, N, 12.5, color.red, "left", !0),
                            N += 20,
                            fe.submarineUI.draw(global.submarineUI.submerged ? "Press . to surface" : "Press . to submerge", global.screenWidth / 2 + global.screenWidth / 10, N, 12.5, color.orange, "left", !0)),
                        global.carrierUI.enabled) {
                        ctx.globalAlpha = .25;
                        var ie = f / 3;
                        let t = global.screenWidth - 2 * (f - ie) * animations.minimap.get() - 40 - (global.carrierUI.map ? f : 0),
                            a = global.screenHeight - (f - ie) / 2 * animations.minimap.get() - 20,
                            l = 0;
                        for (let e = 0; e < global.carrierUI.buttons.length; e++) {
                            var se = global.carrierUI.buttons[e];
                            se.enabled && (ctx.fillStyle = ctx.strokeStyle = getColor(se.color),
                                drawGuiRoundRect(t, a, ie, ie, config.graphical.arrasStyle ? 0 : 10),
                                ctx.fillStyle = color.black,
                                drawGuiRoundRect(t, a + 40, ie, .4 * ie, config.graphical.arrasStyle ? 0 : 10),
                                ctx.fillStyle = color.guiblack,
                                drawGuiRoundRect(t, a, ie, ie, config.graphical.arrasStyle ? 0 : 10, !0),
                                global.clickables.carrier.place(e, t * p, a * p, ie * p, ie * p),
                                ctx.globalAlpha = 1,
                                fe.carrier[e].draw(se.text, t + ie / 2, a + ie - 6, ie / 7.5, color.guiwhite, "center"),
                                ctx.globalAlpha = .25,
                                t -= 20 + ie,
                                l % 3 == 2 && (a -= 20 + ie,
                                    t = global.screenWidth - 2 * (f - ie) * animations.minimap.get() - 40 - (global.carrierUI.map ? f : 0)),
                                l++)
                        }
                        ctx.restore()
                    }
                    global.mobile && e(1 / 1.4); {
                        if (global.showTree)
                            return;
                        let b = global.canUpgrade ? animations.upgradeMenu.get() : 0;
                        if (global.clickables.upgrade.hide(),
                            0 < gui.upgrades.length) {
                            global.canUpgrade = !0;
                            let o = f / 2.175,
                                r = o,
                                n = 2 * b * 20 - 20,
                                i = n,
                                s = 20;
                            Y = n;
                            let c = 0,
                                g = s,
                                d = 0;
                            upgradeSpin += .01,
                                global.colorIndex += 1 / 7.5,
                                184 < global.colorIndex && (global.colorIndex = 100);
                            let h = 0 | global.colorIndex,
                                u = 0;
                            gui.upgrades.forEach(function(e) {
                                s > g && (g = s),
                                    c = n,
                                    global.clickables.upgrade.place(u++, n * p, s * p, o * p, r * p),
                                    185 < h && (h = 100),
                                    ctx.globalAlpha = .5,
                                    ctx.fillStyle = getColor(h),
                                    drawGuiRoundRect(n, s, o, r, config.graphical.arrasStyle ? 0 : 10),
                                    ctx.globalAlpha = .1,
                                    ctx.fillStyle = getColor(h++ - 10),
                                    drawGuiRoundRect(n, s, o, .6 * r, config.graphical.arrasStyle ? 0 : 10),
                                    ctx.fillStyle = color.black,
                                    drawGuiRoundRect(n, s + .6 * r, o, .4 * r, config.graphical.arrasStyle ? 0 : 10),
                                    ctx.globalAlpha = 1;
                                var t = getEntityImageFromMockup(e, (16 == mockups[e].color ? gui : mockups[e]).color),
                                    a = mockups[e].position,
                                    l = .6 * o / a.axis,
                                    e = n + .5 * o - l * a.middle.x * Math.cos(upgradeSpin),
                                    a = s + .5 * r - l * a.middle.x * Math.sin(upgradeSpin);
                                drawEntity(e, a, t, 1, 1, l / t.size, upgradeSpin, !0),
                                    fe.upgradeNames[u - 1].draw(t.name, n + o / 2, s + r - 6, r / 8 - 3, color.guiwhite, "center"),
                                    ctx.strokeStyle = color.black,
                                    ctx.globalAlpha = 1,
                                    ctx.lineWidth = 3,
                                    drawGuiRoundRect(n, s, o, r, config.graphical.arrasStyle ? 0 : 10, !0),
                                    ++d % 6 == 0 ? (n = i,
                                        s += 8 + r) : n += b * (8 + o)
                            });
                            z = "Don't Upgrade",
                                t = measureText(z, 11) + 10,
                                N = Y + (c + o + 8 - Y) / 2,
                                Y = g + r + 8;
                            drawBar(N - t / 2, N + t / 2, Y + 7, 14 + config.graphical.barChunk, color.black),
                                drawBar(N - t / 2, N + t / 2, Y + 7, 14, color.white),
                                fe.skipUpgrades.draw(z, N, Y + 7, 12, color.guiwhite, "center", !0),
                                global.clickables.skipUpgrades.place(0, (N - t / 2) * p, Y * p, t * p, 14 * p)
                        } else
                            global.canUpgrade = !1,
                            global.clickables.upgrade.hide(),
                            global.clickables.skipUpgrades.hide()
                    }
                    if (global.mobile) {
                        global.canSkill = 0 < gui.points && gui.skills.some(e => e.amount < e.cap) && !global.canUpgrade,
                            de.set(0 + (global.canSkill || global.died));
                        let c = de.get();
                        global.clickables.stat.hide();
                        let g = 100,
                            d = f / 3,
                            h = 2 * c * 20 - 20,
                            u = 0,
                            b = gui.getStatNames(mockups[gui.type].statnames || -1);
                        global.canSkill && (gui.skills.forEach((t, a) => {
                                var l = t.softcap;
                                if (!(l <= 0)) {
                                    var o = t.amount,
                                        r = color[t.color],
                                        n = t.cap;
                                    let e = b[9 - a].split(/\s+/);
                                    var i = Math.floor(e.length / 2),
                                        [t, i] = 1 === e.length ? [e, null] : [e.slice(0, i), e.slice(i)];
                                    ctx.globalAlpha = .5,
                                        ctx.fillStyle = r,
                                        drawGuiRect(h, 20, g, 2 * d / 3),
                                        ctx.globalAlpha = .1,
                                        ctx.fillStyle = color.black,
                                        drawGuiRect(h, 20 + 2 * d / 3 * 2 / 3, g, 2 * d / 3 * 1 / 3),
                                        ctx.globalAlpha = 1,
                                        ctx.fillStyle = color.guiwhite,
                                        drawGuiRect(h, 20 + 2 * d / 3, g, d / 3),
                                        ctx.fillStyle = r,
                                        drawGuiRect(h, 20 + 2 * d / 3, g * o / l, d / 3),
                                        ctx.strokeStyle = color.black;
                                    for (let e = ctx.lineWidth = 1; e < n; e++) {
                                        var s = h + g * (e / l);
                                        drawGuiLine(s, 20 + 2 * d / 3, s, 20 + d)
                                    }
                                    o === n || !gui.points || l !== n && o === l || global.clickables.stat.place(9 - a, h * p, 20 * p, g * p, d * p),
                                        i ? (fe.skillNames[a].draw(i, h + 50, 20 + .55 * d, d / 6, color.guiwhite, "center"),
                                            fe.skillNames[a].draw(t, h + 50, 40, d / 6, color.guiwhite, "center")) : fe.skillNames[a].draw(t, h + 50, 20 + .425 * d, d / 6, color.guiwhite, "center"),
                                        0 < o && fe.skillValues[a].draw(l <= o ? "MAX" : "+" + o, Math.round(h + 50) + .5, 20 + 1.3 * d, d / 4, r, "center"),
                                        ctx.strokeStyle = color.black,
                                        ctx.globalAlpha = 1,
                                        ctx.lineWidth = 3,
                                        drawGuiLine(h, 20 + 2 * d / 3, h + g, 20 + 2 * d / 3),
                                        drawGuiRect(h, 20, g, d, !0),
                                        h += 114 * c,
                                        u++
                                }
                            }),
                            1 < gui.points && fe.skillPoints.draw("x" + gui.points, Math.round(h) + .5, Math.round(40) + .5, 20, color.guiwhite, "left"))
                    }
                    e(1 / p, !0),
                        metrics.lastrender = getNow()
                }
            }
        })(),
        gameDrawDead = (() => {
            let i = {
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
                var e = animations.deathScreen.get();
                ctx.translate(0, -e * global.screenHeight);
                var t = global.screenWidth / 2,
                    a = global.screenHeight / 2 - 50,
                    l = getEntityImageFromMockup(gui.type, gui.color),
                    o = mockups[gui.type].position,
                    r = 140 / o.axis,
                    n = global.screenWidth / 2 - r * o.middle.x * .707,
                    o = global.screenHeight / 2 - 35 + r * o.middle.x * .707;
                drawEntity(n - 190 - 70, o - 10, l, 1.5, 1, .5 * r / l.realSize, -Math.PI / 4, !0),
                    i.taunt.draw("lol you died", t, a - 80, 8, color.guiwhite, "center"),
                    i.level.draw("Level " + gui.__s.getLevel() + " " + mockups[gui.type].name, t - 170, a - 30, 24, color.guiwhite),
                    i.score.draw("Final score: " + util.formatLargeNumber(Math.round(global.finalScore.get())), t - 170, 25 + a, 50, color.guiwhite),
                    i.time.draw("⌚ Survived for " + util.timeForHumans(Math.round(global.finalLifetime.get())) + ".", t - 170, 55 + a, 16, color.guiwhite),
                    i.kills.draw((r = [Math.round(global.finalKills[0].get()), Math.round(global.finalKills[1].get()), Math.round(global.finalKills[2].get())],
                        (0 === (l = r[0] + .5 * r[1] + 3 * r[2]) ? "🌼" : l < 4 ? "🎯" : l < 8 ? "💥" : l < 15 ? "💢" : l < 25 ? "🔥" : l < 50 ? "💣" : l < 75 ? "👺" : l < 100 ? "🌶️" : "💯") + (r[0] || r[1] || r[2] ? " " + (r[0] ? r[0] + " kills" : "") + (r[0] && r[1] ? " and " : "") + (r[1] ? r[1] + " assists" : "") + ((r[0] || r[1]) && r[2] ? " and " : "") + (r[2] ? r[2] + " visitors defeated" : "") : " A true pacifist") + "."), t - 170, 77 + a, 16, color.guiwhite),
                    i.death.draw((() => {
                        let t = "";
                        return global.finalKillers.length ? (t = "🔪 Succumbed to",
                                global.finalKillers.forEach(e => {
                                    t += " " + util.addArticle(mockups[e].name) + " and"
                                }),
                                t = t.slice(0, -4) + ".") : t += "🤷 Well that was kinda dumb huh",
                            t
                    })(), t - 170, 99 + a, 16, color.guiwhite),
                    i.spectate.draw("Press Q to spectate another entity!", t, 125 + a, 16, color.guiwhite, "center"),
                    i.playagain.draw("Press enter to play again!", t, 151 + a, 16, color.guiwhite, "center"),
                    ctx.translate(0, e * global.screenHeight)
            }
        })(),
        gameDrawBeforeStart = (() => {
            let t = {
                connecting: TextObj(),
                message: TextObj()
            };
            return () => {
                clearScreen(color.white, .5);
                var e = animations.connecting.get();
                ctx.translate(0, -e * global.screenHeight),
                    t.connecting.draw("Connecting...", global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, "center"),
                    t.message.draw(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.lgreen, "center"),
                    ctx.translate(0, e * global.screenHeight)
            }
        })(),
        gameDrawDisconnected = (() => {
            let t = {
                disconnected: TextObj(),
                message: TextObj()
            };
            return () => {
                clearScreen(mixColors(color.red, color.guiblack, .3), .25);
                var e = animations.disconnected.get();
                ctx.translate(0, -e * global.screenHeight),
                    t.disconnected.draw("💀 Disconnected. 💀", global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, "center"),
                    t.message.draw(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.orange, "center"),
                    ctx.translate(0, e * global.screenHeight)
            }
        })(),
        curtains = function() {
            let t = ctx.createRadialGradient(0, 0, 0, 0, 0, c.width);
            return t.addColorStop(0, "#AA0000"),
                t.addColorStop(.5, "#000000"),
                setInterval(function() {
                    t = ctx.createRadialGradient(0, 0, 0, 0, 0, c.width),
                        t.addColorStop(0, "#AA0000"),
                        t.addColorStop(.5, "#000000")
                }, 3e3),
                animations.curtains.smoothness = .0175, {
                    gradient: t,
                    flip() {
                        animations.curtains.flip()
                    },
                    draw: function() {
                        ctx.save(),
                            ctx.globalAlpha = 1,
                            ctx.translate(c.width / 2, c.height / 2),
                            ctx.beginPath();
                        var e = animations.curtains.get();
                        for (let e = 0; e < 6; e++)
                            ctx[e ? "lineTo" : "moveTo"](Math.cos(Math.PI / 3 * e) * c.width / 1.5, Math.sin(Math.PI / 3 * e) * c.width / 1.5);
                        ctx.closePath(),
                            ctx.strokeStyle = t,
                            ctx.lineWidth = c.width * e,
                            ctx.stroke(),
                            ctx.restore(),
                            animations.curtains.goodEnough(.005) && curtains.onDone()
                    },
                    onDone() {
                        animations.curtains.smoothness = .06
                    }
                }
        }();

    function animloop() {
        global.animLoopHandle = window.requestAnimFrame(animloop),
            player.renderv += (player.view - player.renderv) / 30;
        var e = config.graphical.screenshotMode ? 2 : getRatio();
        ctx.lineCap = "round",
            ctx.lineJoin = "round",
            ctx.filter = "none",
            global.gameStart && !global.disconnected && (global.time = getNow(),
                1e3 < global.time - lastPing && (global.socket.ping(global.time),
                    lastPing = global.time,
                    metrics.rendertime = renderTimes,
                    renderTimes = 0,
                    metrics.updatetime = updateTimes,
                    updateTimes = 0),
                metrics.lag = global.time - player.time),
            global.gameStart ? (gameDraw(e),
                global.gameWidth = lerp(global.gameWidth, global.realGameWidth, .075),
                global.gameHeight = lerp(global.gameHeight, global.realGameHeight, .075)) : global.disconnected || gameDrawBeforeStart(),
            global.died && gameDrawDead(),
            global.disconnected && gameDrawDisconnected()
    }
})();