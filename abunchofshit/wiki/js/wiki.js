(async () => {
    const a = await ((e = await (await fetch(location.protocol + "//6ibui.glitch.me/loadData")).json()).servers.length ? e.servers[0].connectionInfo.ip : alert("No servers are online, cannot load mockups."));
    var e;
    document.body.style.fontFamily = "Ubuntu";
    const o = function() {
            const r = document.createElement("canvas"),
                C = r.getContext("2d"),
                e = document.createElement("canvas"),
                D = e.getContext("2d"),
                i = 1e3;
            r.width = e.width = i;
            var E = {
                    graphical: {
                        screenshotMode: !(r.height = e.height = i),
                        borderChunk: 5,
                        barChunk: 5,
                        mininumBorderChunk: 3,
                        deathBlurAmount: 3,
                        darkBorders: !1,
                        fancyAnimations: !0,
                        colors: "normal",
                        pointy: !1,
                        fontSizeBoost: 1,
                        neon: !1,
                        fontStrokeRatio: 5
                    },
                    gui: {
                        expectedMaxSkillLevel: 9
                    },
                    lag: {
                        unresponsive: !1,
                        memory: 60
                    }
                },
                S = {
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
                    dgrey: "#726F6F",
                    white: "#DBDBDB",
                    guiblack: "#000000",
                    paletteSize: 10,
                    border: .65
                };
            let H = (e, a, t = .5) => {
                if (1 === t) return a;
                if (0 === t) return e;
                for (var r = "#", i = 1; i <= 6; i += 2) {
                    for (var o = l(a.substr(i, 2)), n = l(e.substr(i, 2)), s = Math.floor(n + (o - n) * t).toString(16); s.length < 2;) s = "0" + s;
                    r += s
                }
                return r
            };

            function l(e) {
                return parseInt(e, 16)
            }

            function R(e, a) {
                E.graphical.neon ? (e.fillStyle = z(a), e.strokeStyle = a) : (e.fillStyle = a, e.strokeStyle = z(a))
            }

            function q(e) {
                if (99 < e && e < 186) return ["#FF0000", "#FF1A00", "#FF2A00", "#FF4300", "#FF5D00", "#FF7200", "#FF7700", "#FF9400", "#FF9900", "#FFA500", "#FFBB00", "#FFCC00", "#FFDD00", "#FFE900", "#FFFA00", "#EEFF00", "#DDFF00", "#D0FF00", "#B6FF00", "#AAFF00", "#88FF00", "#6EFF00", "#54FF00", "#32FF00", "#19FF00", "#04FF00", "#00FF15", "#00FF26", "#00FF3F", "#00FF55", "#00FF6E", "#00FF7F", "#00FF99", "#00FFA5", "#00FFBB", "#00FFCB", "#00FFD8", "#00FFED", "#00FFFA", "#00E9FF", "#00D8FF", "#00C3FF", "#00BBFF", "#00AEFF", "#00A1FF", "#0090FF", "#007FFF", "#0077FF", "#006EFF", "#005DFF", "#0048FF", "#0037FF", "#0026FF", "#0019FF", "#0004FF", "#0C00FF", "#2200FF", "#2E00FF", "#3B00FF", "#5400FF", "#6A00FF", "#7F00FF", "#9000FF", "#A100FF", "#B600FF", "#BF00FF", "#D000FF", "#DC00FF", "#E900FF", "#FA00FF", "#FF00F6", "#FF00E1", "#FF00CB", "#FF00B6", "#FF00AA", "#FF00A5", "#FF0090", "#FF007B", "#FF006E", "#FF005D", "#FF0059", "#FF0043", "#FF003B", "#FF0026", "#FF001D", "#FF000C"][e - 100];
                switch (e) {
                    case 0:
                        return S.teal;
                    case 1:
                        return S.lgreen;
                    case 2:
                        return S.orange;
                    case 3:
                        return S.yellow;
                    case 4:
                        return S.lavender;
                    case 5:
                        return S.pink;
                    case 6:
                        return S.vlgrey;
                    case 7:
                        return S.lgrey;
                    case 8:
                        return S.guiwhite;
                    case 9:
                        return S.black;
                    case 10:
                        return S.blue;
                    case 11:
                        return S.red;
                    case 12:
                        return S.green;
                    case 13:
                        return S.gold;
                    case 14:
                        return S.purple;
                    case 15:
                        return S.magenta;
                    case 16:
                        return S.grey;
                    case 17:
                        return S.dgrey;
                    case 18:
                        return S.white;
                    case 19:
                        return S.guiblack;
                    case 20:
                        return "#B94E4F";
                    case 21:
                        return Date.now() % 300 < 150 ? S.black : S.white;
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

            function z(e) {
                if (E.graphical.noBorders) return e;
                var a = E.graphical.neon || E.graphical.inverseBorderColor ? S.white : S.black;
                return E.graphical.darkBorders ? a : H(e, a, S.border)
            }
            const L = {};

            function a(e, a = -1) {
                const t = new Image;
                t.src = e, t.ready = !1, t.onload = function() {
                    t.ready = !0, console.log(`Image ${a} loaded from ${e}.`), -1 === a && (a = e), L[a] = t
                }
            }
            a("https://cdn.glitch.me/396e25b1-9cc5-4a3c-bb77-1ef78c4f8fc5%2F4e7c4116-13a9-453c-bff2-08b50814f502.image.png?v=1635690038175", "pumpkin"), a("https://www.oxyrex.io/img/poison_hue.png", "poisonHue"), a("https://www.oxyrex.io/img/ice_hue.png", "iceHue"), a("https://www.oxyrex.io/img/fire_hue.png", "fireHue"), a("https://www.oxyrex.io/img/emp_hue.png", "empHue"), a("https://www.oxyrex.io/img/frostbite_hue.png", "frostbiteHue"), a("https://www.oxyrex.io/img/tesla_hue.png", "teslaHue"), a("https://www.oxyrex.io/img/confusion_hue.png", "confusionHue"), a("https://www.oxyrex.io/img/blindness_hue.png", "blindnessHue"), a("https://www.oxyrex.io/img/regen_hue.png", "regenHue"), a("https://www.oxyrex.io/img/steel_pro.png", "steelProp");
            const G = (e, r, i, a, t = 1, o = 1, n = 0, s = !1, l = !1, h = !1, c = i.render) => {
                let u = l || C,
                    d = h ? 1 : c.status.getFade(),
                    m = o * a * i.size,
                    g = mockups[i.index],
                    p = e,
                    b = r,
                    f = !1 === h ? i : h;
                if (0 !== d && 0 !== t) {
                    if (0 < E.graphical.deathExpandRatio && (m *= 1 + .5 * (1 - d) * E.graphical.deathExpandRatio), E.graphical.fancyAnimations && l !== D && (t < 1 && 0 < t || d < 1 && 0 < d)) u = D, u.canvas.width = u.canvas.height = m * g.position.axis + 7.5 * a * i.size, p = u.canvas.width / 2 - m * g.position.axis * g.position.middle.x * Math.cos(n) / 4, b = u.canvas.height / 2 - m * g.position.axis * g.position.middle.x * Math.sin(n) / 4;
                    else if (t * d <= .1) return;
                    if (u.lineCap = "round", u.lineJoin = E.graphical.pointy ? "miter" : "round", "colorful" === E.graphical.shaders && (C.shadowColor = C.strokeStyle), f.turrets.length !== g.turrets.length) throw console.log(f, g), new Error("Mismatch turret number with mockup.");
                    for (let e = 0; e < g.turrets.length; e++) {
                        var F, M, k = g.turrets[e];
                        null == f.turrets[e].lerpedFacing ? f.turrets[e].lerpedFacing = f.turrets[e].facing : f.turrets[e].lerpedFacing = lerpAngle(f.turrets[e].lerpedFacing, f.turrets[e].facing, .1, !0), 0 === k.layer && (F = k.direction + k.angle + n, M = k.offset * m, G(p + M * Math.cos(F), b + M * Math.sin(F), k, a, t, m / a / k.size * k.sizeFactor, f.turrets[e].lerpedFacing + s * n, s, u, f.turrets[e], c))
                    }
                    if (f.guns.update(), u.lineWidth = Math.max(E.graphical.mininumBorderChunk, a * E.graphical.borderChunk), f.guns.length !== g.guns.length) throw new Error("Mismatch gun number with mockup.");
                    var y = f.guns.getPositions();
                    for (let e = 0; e < g.guns.length; e++) {
                        var v = g.guns[e],
                            w = y[e] / (1 === (null == v.aspect ? 1 : v.aspect) ? 2 : 1),
                            I = v.offset * Math.cos(v.direction + (v.angle || 0) + n) + (v.length / 2 - w) * Math.cos((v.angle || 0) + n),
                            A = v.offset * Math.sin(v.direction + (v.angle || 0) + n) + (v.length / 2 - w) * Math.sin((v.angle || 0) + n);
                        (v.colorUnmix ? setColorUnmix : R)(u, H(q(null == v.color ? 16 : v.color), c.status.getColor(), c.status.getBlend())), "colorful" === E.graphical.shaders && (C.shadowColor = C.strokeStyle),
                            function(e, a, t, r, i, o, n, s) {
                                var o = 0 < o ? [i * o, i] : [i, -i * o],
                                    l = [Math.atan2(o[0], r), Math.atan2(o[1], r)],
                                    h = [Math.sqrt(r * r + o[0] * o[0]), Math.sqrt(r * r + o[1] * o[1])];
                                let c = !0;
                                switch (e.beginPath(), s || 0) {
                                    case 0:
                                        e.lineTo(a + h[0] * Math.cos(n + l[0]), t + h[0] * Math.sin(n + l[0])), e.lineTo(a + h[1] * Math.cos(n + Math.PI - l[1]), t + h[1] * Math.sin(n + Math.PI - l[1])), e.lineTo(a + h[1] * Math.cos(n + Math.PI + l[1]), t + h[1] * Math.sin(n + Math.PI + l[1])), e.lineTo(a + h[0] * Math.cos(n - l[0]), t + h[0] * Math.sin(n - l[0]));
                                        break;
                                    case 1:
                                        e.lineTo(a + h[1] * Math.cos(n - l[0] / 3), t + h[1] * Math.sin(n - l[0] / 3)), e.lineTo(a + h[1] * Math.cos(n) * 1.25, t + h[1] * Math.sin(n) * 1.25), e.lineTo(a + h[1] * Math.cos(n + l[0] / 3), t + h[1] * Math.sin(n + l[0] / 3)), e.lineTo(a + h[0] * Math.cos(n + l[0]), t + h[0] * Math.sin(n + l[0])), e.lineTo(a + h[1] * Math.cos(n + Math.PI - l[1]), t + h[1] * Math.sin(n + Math.PI - l[1])), e.lineTo(a + h[1] * Math.cos(n + Math.PI + l[1]), t + h[1] * Math.sin(n + Math.PI + l[1])), e.lineTo(a + h[0] * Math.cos(n - l[0]), t + h[0] * Math.sin(n - l[0]));
                                        break;
                                    case 2:
                                        e.lineTo(a + h[0] * Math.cos(n + l[0]), t + h[0] * Math.sin(n + l[0])), e.lineTo(a + h[1] * Math.cos(n + Math.PI - l[1]), t + h[1] * Math.sin(n + Math.PI - l[1])), e.lineTo(a + h[1] * Math.cos(n + Math.PI + l[1]), t + h[1] * Math.sin(n + Math.PI + l[1])), e.lineTo(a + h[0] * Math.cos(n - l[0]), t + h[0] * Math.sin(n - l[0])), e.bezierCurveTo(a + h[0] * Math.cos(n - l[0]) * .25, t + h[0] * Math.sin(n - l[0]) * .25, a + h[0] * Math.cos(n + l[0]) * .25, t + h[0] * Math.sin(n + l[0]) * .25, a + h[0] * Math.cos(n + l[0]), t + h[0] * Math.sin(n + l[0]));
                                        break;
                                    case 3:
                                        e.ellipse(a, t, r, i, n, 0, 2 * Math.PI, !0);
                                        break;
                                    case 4:
                                        e.lineTo(a + h[0] * Math.cos(n + l[0]), t + h[0] * Math.sin(n + l[0])), e.lineTo(a + h[1] * Math.cos(n + Math.PI - l[1]), t + h[1] * Math.sin(n + Math.PI - l[1])), e.lineTo(a + h[1] * Math.cos(n + Math.PI + l[1]), t + h[1] * Math.sin(n + Math.PI + l[1])), e.lineTo(a + h[0] * Math.cos(n - l[0]), t + h[0] * Math.sin(n - l[0])), c = !1;
                                        break;
                                    case 5:
                                        e.lineTo(a + h[0] * Math.cos(n + l[0]), t + h[0] * Math.sin(n + l[0])), e.lineTo(a + h[1] * Math.cos(n + Math.PI - l[1]), t + h[1] * Math.sin(n + Math.PI - l[1])), e.lineTo(a + h[1] * Math.cos(n + Math.PI + l[1]), t + h[1] * Math.sin(n + Math.PI + l[1]));
                                        break;
                                    case 6:
                                        e.lineTo(a + h[1] * Math.cos(n + Math.PI - l[1]), t + h[1] * Math.sin(n + Math.PI - l[1])), e.lineTo(a + h[1] * Math.cos(n + Math.PI + l[1]), t + h[1] * Math.sin(n + Math.PI + l[1])), e.lineTo(a + h[0] * Math.cos(n - l[0]), t + h[0] * Math.sin(n - l[0]));
                                        break;
                                    case 9:
                                        e.lineTo(a + h[0] * Math.cos(n + l[0]), t + h[0] * Math.sin(n + l[0])), e.lineTo(a + h[1] * Math.cos(n + Math.PI - l[1]), t + h[1] * Math.sin(n + Math.PI - l[1])), e.lineTo(a + h[1] * Math.cos(n + Math.PI + l[1]), t + h[1] * Math.sin(n + Math.PI + l[1])), e.lineTo(a + 2 * h[0] * Math.cos(n - .5 * l[0]), t + 2 * h[0] * Math.sin(n - .5 * l[0]));
                                        break;
                                    case 10:
                                        e.lineTo(a + 2 * h[0] * Math.cos(n + .5 * l[0]), t + 2 * h[0] * Math.sin(n + .5 * l[0])), e.lineTo(a + h[1] * Math.cos(n + Math.PI - l[1]), t + h[1] * Math.sin(n + Math.PI - l[1])), e.lineTo(a + h[1] * Math.cos(n + Math.PI + l[1]), t + h[1] * Math.sin(n + Math.PI + l[1])), e.lineTo(a + h[0] * Math.cos(n - l[0]), t + h[0] * Math.sin(n - l[0]));
                                        break;
                                    case 11:
                                        e.lineTo(a + h[0] * Math.cos(n + l[0]), t + h[0] * Math.sin(n + l[0])), e.lineTo(a + h[1] * Math.cos(n + Math.PI - l[1]), t + h[1] * Math.sin(n + Math.PI - l[1])), e.lineTo(a + h[1] * Math.cos(n + Math.PI + l[1]), t + h[1] * Math.sin(n + Math.PI + l[1])), e.lineTo(a + h[0] * Math.cos(n - l[0]), t + h[0] * Math.sin(n - l[0])), e.bezierCurveTo(a + h[0] * Math.cos(n - l[0]) * .5, t + h[0] * Math.sin(n - l[0]) * .5, a + h[0] * Math.cos(n + l[0]) * .5, t + h[0] * Math.sin(n + l[0]) * .5, a + h[0] * Math.cos(n + l[0]), t + h[0] * Math.sin(n + l[0]))
                                }
                                e.closePath(), e.stroke(), c && e.fill()
                            }(u, p + m * I, b + m * A, m * (v.length / 2 - (1 === (null == v.aspect ? 1 : v.aspect) ? 2 * w : 0)), m * v.width / 2, null == v.aspect ? 1 : v.aspect, (v.angle || 0) + n, v.skin || 0)
                    }
                    if (u.globalAlpha = 1, "string" == typeof i.color && i.color.includes(", ")) {
                        var T = i.color.split(", ").map(e => +e);
                        let a = C.createLinearGradient(e - Math.cos(n) * (m / 2), r - Math.sin(n) * (m / 2), e + Math.cos(n) * (m / 2), r + Math.sin(n) * (m / 2)),
                            t = C.createLinearGradient(e - Math.cos(n) * (m / 2), r - Math.sin(n) * (m / 2), e + Math.cos(n) * (m / 2), r + Math.sin(n) * (m / 2));
                        for (let e = 0; e < T.length / 2; e++) a.addColorStop(e / 1.5 / T.length, q(T[e])), t.addColorStop(e / 1.5 / T.length, z(q(T[e]))), a.addColorStop(1 - e / 1.5 / T.length, q(T[T.length - 1 - e])), t.addColorStop(1 - e / 1.5 / T.length, z(q(T[T.length - 1 - e])));
                        u.fillStyle = a, u.strokeStyle = t
                    } else i.invuln && 100 < (Date.now() - i.invuln) % 200 ? R(u, H(q(i.color), S.vlgrey, .5)) : R(u, H(q(i.color), c.status.getColor(), c.status.getBlend()));
                    if ("colorful" === E.graphical.shaders && (C.shadowColor = C.strokeStyle), function(i, o, n, s, a, e, l = 0, t = !0) {
                            if (1e6 < Math.abs(a) && (t = !t, a -= 0 < a ? 1e6 : -1e6), t || (s += i.lineWidth), i.beginPath(), a) {
                                if (a instanceof Array) {
                                    if ("string" == typeof a[0]) {
                                        var r = new Path2D(a);
                                        return s /= a[1], i.save(), i.translate(o, n), i.scale(s, s), i.lineWidth /= s, i.rotate(l), i.stroke(r), t && i.fill(r), i.restore()
                                    }
                                    var h = Math.cos(l),
                                        c = Math.sin(l);
                                    for (let e = 0; e < a.length; e++) {
                                        var u = a[e][0],
                                            d = a[e][1];
                                        i[e ? "lineTo" : "moveTo"](o + s * (u * h - d * c), n + s * (d * h + u * c))
                                    }
                                } else if (100 === a) {
                                    var r = .6 * s,
                                        m = .4 * s;
                                    i.arc(o + r, n + r, m, l, .5 * Math.PI + l), i.arc(o - r, n + r, m, .5 * Math.PI + l, Math.PI + l), i.arc(o - r, n - r, m, Math.PI + l, 1.5 * Math.PI + l), i.arc(o + r, n - r, m, -.5 * Math.PI + l, l)
                                } else if (112 === a)
                                    for (let r = 0; r < 4; r++) {
                                        let e = r / 4 * 2 * Math.PI,
                                            a = o + s * Math.cos(e + l),
                                            t = n + s * Math.sin(e + l);
                                        2 === r ? (a = o + -1.5 * s * Math.cos(l), t = n + -1.5 * s * Math.sin(l)) : 0 !== r && 4 !== r || (a = o + 1.5 * s * Math.cos(l), t = n + 1.5 * s * Math.sin(l)), i.lineTo(a, t)
                                    } else if (129 === a) {
                                        var g = 1 - 8 / -3 / -3;
                                        i.moveTo(o + s * Math.cos(l), n + s * Math.sin(l));
                                        for (let e = 0; e < 3; e++) {
                                            var p = (e + 1) / 3 * 2 * Math.PI,
                                                b = (e + .5) / 3 * 2 * Math.PI,
                                                b = {
                                                    x: o + s * g * Math.cos(b + l),
                                                    y: n + s * g * Math.sin(b + l)
                                                },
                                                p = {
                                                    x: o + s * Math.cos(p + l),
                                                    y: n + s * Math.sin(p + l)
                                                };
                                            i.quadraticCurveTo(b.x, b.y, p.x, p.y)
                                        }
                                    } else if (130 === a) i.arc(o, n, s, 0, 2 * Math.PI, !0), i.arc(o, n, .999999 * s, 0, 2 * Math.PI, !1);
                                else if (999 < a) {
                                    switch (i.save(), i.beginPath(), i.translate(o, n), i.rotate(l), a) {
                                        case 1e3:
                                            L.pumpkin && i.drawImage(L.pumpkin, -s, -s, 2 * s, 2 * s);
                                            break;
                                        case 1001:
                                            C.save(), C.globalAlpha = .5, L.poisonHue && i.drawImage(L.poisonHue, 2 * -s, 2 * -s, 4 * s, 4 * s), C.restore();
                                            break;
                                        case 1002:
                                            C.save(), C.globalAlpha = .5, L.iceHue && i.drawImage(L.iceHue, 2 * -s, 2 * -s, 4 * s, 4 * s), C.restore();
                                            break;
                                        case 1003:
                                            C.save(), C.globalAlpha = .5, L.empHue && i.drawImage(L.empHue, 2 * -s, 2 * -s, 4 * s, 4 * s), C.restore();
                                            break;
                                        case 1004:
                                            C.save(), C.globalAlpha = .5, L.frostbiteHue && i.drawImage(L.frostbiteHue, 2 * -s, 2 * -s, 4 * s, 4 * s), C.restore();
                                            break;
                                        case 1005:
                                            C.save(), C.globalAlpha = .5, L.teslaHue && i.drawImage(L.teslaHue, 4 * -s, 4 * -s, 8 * s, 8 * s), C.restore();
                                            break;
                                        case 1006:
                                            C.save(), C.globalAlpha = .5, L.confusionHue && i.drawImage(L.confusionHue, 2 * -s, 2 * -s, 4 * s, 4 * s), C.restore();
                                            break;
                                        case 1007:
                                            C.save(), C.globalAlpha = .5, L.blindnessHue && i.drawImage(L.blindnessHue, 2 * -s, 2 * -s, 4 * s, 4 * s), C.restore();
                                            break;
                                        case 1008:
                                            C.save(), C.globalAlpha = .5, L.fireHue && i.drawImage(L.fireHue, 2 * -s, 2 * -s, 4 * s, 4 * s), C.restore();
                                            break;
                                        case 1009:
                                            C.save(), C.globalAlpha = .5, L.steelProp && i.drawImage(L.steelProp, 2 * -s, 2 * -s, 4 * s, 4 * s), C.restore()
                                            break;
                                          case 1010:
                                            C.save(), C.globalAlpha = .5, L.regenHue && i.drawImage(L.regenHue, 2 * -s, 2 * -s, 4 * s, 4 * s), C.restore();
                                        
                                    }
                                    i.restore()
                                } else if (a < 0) {
                                    l += a % 2 ? 0 : Math.PI / a, E.graphical.pointyStars && (i.lineJoin = "miter");
                                    var f = 1 - 6 / a / a;
                                    a = -a, i.moveTo(o + s * Math.cos(l), n + s * Math.sin(l));
                                    for (let e = 0; e < a; e++) {
                                        var F = (e + 1) / a * 2 * Math.PI,
                                            M = (e + .5) / a * 2 * Math.PI,
                                            M = {
                                                x: o + s * f * Math.cos(M + l),
                                                y: n + s * f * Math.sin(M + l)
                                            },
                                            F = {
                                                x: o + s * Math.cos(F + l),
                                                y: n + s * Math.sin(F + l)
                                            };
                                        i.quadraticCurveTo(M.x, M.y, F.x, F.y)
                                    }
                                } else if (0 < a)
                                    if (l += a % 2 ? 0 : Math.PI / a, 4 === a && null != e && e[0] !== e[1])
                                        for (var [k, y] of [e, [-e[0], e[1]],
                                                [-e[0], -e[1]],
                                                [e[0], -e[1]]
                                            ]) i.lineTo(o + (s + 1.1 * (k - .1) / (k / 1.1)) * (k * Math.cos(l)), n + (s + 1.1 * (y - .1) / (y / 1.1)) * (y * Math.sin(l)));
                                    else
                                        for (let e = 0; e < a; e++) {
                                            var v = e / a * 2 * Math.PI,
                                                w = o + s * Math.cos(v + l),
                                                v = n + s * Math.sin(v + l);
                                            i.lineTo(w, v)
                                        }
                            } else {
                                m = i.fillStyle, e = i.strokeStyle;
                                s += i.lineWidth / 4, i.arc(o, n, s + i.lineWidth / 4, 0, 2 * Math.PI), i.fillStyle = e, i.fill(), i.closePath(), i.beginPath(), i.arc(o, n, s - i.lineWidth / 4, 0, 2 * Math.PI), i.fillStyle = m, i.fill(), i.closePath()
                            }
                            i.closePath(), i.stroke(), t && i.fill(), i.lineJoin = "round"
                        }(u, p, b, m / g.size * g.realSize, g.shape, f.widthHeightRatio, n), f.turrets.length !== g.turrets.length) throw new Error("Mismatch turret number with mockup.");
                    for (let e = 0; e < g.turrets.length; e++) {
                        var B, P, x = g.turrets[e];
                        1 === x.layer && (B = x.direction + x.angle + n, P = x.offset * m, G(p + P * Math.cos(B), b + P * Math.sin(B), x, a, t, m / a / x.size * x.sizeFactor, f.turrets[e].lerpedFacing + s * n, s, u, f.turrets[e], c))
                    }
                    0 == l && u != C && (C.save(), C.globalAlpha = t * d, C.drawImage(u.canvas, e - p, r - b), C.restore())
                }
            };
            return function(e) {
                C.clearRect(0, 0, r.width, r.height);
                var a = function t(e, a = null == mockups[e].color ? 16 : mockups[e].color) {
                        let r = mockups[e];
                        return {
                            time: 0,
                            index: e,
                            x: r.x,
                            y: r.y,
                            vx: 0,
                            vy: 0,
                            size: r.size,
                            realSize: r.realSize,
                            color: a,
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
                            facing: r.facing,
                            shape: r.shape,
                            name: r.name,
                            score: 0,
                            tiggle: 0,
                            layer: r.layer,
                            guns: {
                                length: r.guns.length,
                                getPositions: () => {
                                    let e = [];
                                    return r.guns.forEach(() => e.push(0)), e
                                },
                                update: () => {}
                            },
                            turrets: r.turrets.map(e => {
                                let a = t(e.index);
                                return a.realSize = a.realSize / a.size * r.size * e.sizeFactor, a.size = r.size * e.sizeFactor, a.angle = e.angle, a.offset = e.offset, a.direction = e.direction, a.facing = e.direction + e.angle, a
                            })
                        }
                    }(e, 16 === mockups[e].color ? 10 : mockups[e].color),
                    t = mockups[e].position,
                    e = i / t.axis * .95;
                return G(500 - e * t.middle.x * Math.cos(-Math.PI / 6), 500 - e * t.middle.x * Math.sin(-Math.PI / 6), a, 2, 1, e / a.size / 2, -Math.PI / 6, !0), r.toDataURL()
            }
        }(),
        n = {
            stats: {
                HEALTH: "Health",
                DAMAGE: "Body Damage",
                SPEED: "Movement Speed",
                REGEN: "Regeneration",
                SHIELD: "Shield",
                ACCELERATION: "Acceleration",
                DENSITY: "Density",
                PENETRATION: "Penetration",
                PUSHABILITY: "Pushability"
            },
            indexData: {
                HEALTH: 0,
                SHIELD: 1,
                DAMAGE: 2,
                SPEED: 3,
                REGEN: 4,
                ACCELERATION: 5,
                DENSITY: 6,
                PENETRATION: 7,
                PUSHABILITY: 8
            }
        };

    function s(e) {
        const a = new Image;
        return a.src = e, a.onload = () => {
            var e = [a.width / a.height, a.height / a.width];
            a.width = 250 * e[0], a.height = 250 * e[1]
        }, a.onerror = () => {
            console.log("Failed to load image from", e)
        }, a
    }

    function l(e, a) {
        return `<a href="#${e}">${a}</a>`
    }
    const r = await async function() {
        const t = [];
        class e {
            constructor(e) {
                this.index = e, this.level = 0, this.name = mockups[e].name, this.mockup = mockups[e], this.upgrades = this.getUpgrades(), this.howToGetMe = this.getBranch(), t.push(this), this.addUpgrades()
            }
            getUpgrades() {
                const e = [];
                for (var a of this.mockup.upgrades) e.push({
                    name: mockups[a.index].name,
                    level: [0, 15, 30, 45, 60][a.tier],
                    index: a.index
                });
                return e
            }
            getBranch() {
                let a = [];
                for (let e = 0; e < mockups.length; e++) null != mockups[e].upgrades.find(e => e.index === this.mockup.index) && (this.level = [0, 15, 30, 45, 60][mockups[e].upgrades.find(e => e.index === this.mockup.index).tier], a.push({
                    name: mockups[e].name,
                    index: mockups[e].index
                }));
                return a.reverse()
            }
            addUpgrades() {
                for (let a of this.mockup.upgrades) null == t.find(e => e.index === a.index) && new e(a.index)
            }
            getWikiEntry() {
                return {
                    name: this.name,
                    id: this.index,
                    about: `${this.name} is a Tier ${this.level/60*4} (level ${this.level}) tank.`,
                    content: `
                    ${this.name} is a Tier ${this.level/60*4} (level ${this.level}) tank.
                    ${this.howToGetMe.length?`${this.name} branches off of ${function(a){let t="";for(let e=0;e<a.length;e++)e===a.length-2?t+=a[e]+" and ":(t+=a[e],e<a.length-1&&(t+=", "));return t}(this.howToGetMe.map(e=>l(e.index,e.name)))}`:`${this.name} doesn't branch off of anything`}.
                    
                    `,
                    image: [() => s(o(this.index))],
                    imageCaption: "The render of " + this.name,
                    specifications: (() => {
                        const e = [{
                            name: "Color ID",
                            value: 16 === this.mockup.color ? 10 : this.mockup.color
                        }, {
                            name: "Guns Amount",
                            value: this.mockup.guns.length
                        }, {
                            name: "Turrets Amount",
                            value: this.mockup.turrets.length
                        }, {
                            name: "Upgrades",
                            value: this.upgrades.length ? this.upgrades.map(e => l(e.index, e.name)).join(", ") : "None",
                            html: !0
                        }, {
                            name: "Index",
                            value: this.mockup.index
                        }];
                        if (this.mockup.body) {
                            this.mockup.body = Object.entries(this.mockup.body).filter(function(e) {
                                return null != n.stats[e[0]]
                            }).sort(function(e, a) {
                                return n.indexData[e[0]] - n.indexData[a[0]]
                            });
                            for (const a of this.mockup.body) e.push({
                                name: n.stats[a[0]],
                                value: a[1]
                            })
                        }
                        return e
                    })()
                }
            }
        }
        window.mockups = await fetch(`${location.protocol}//${a}/mockups.json`).then(e => e.json());
        const r = {
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

        function i(e) {
            e.guns = e.guns || [], e.upgrades = e.upgrades || [], e.turrets = (e.turrets || []).map(i);
            for (const a in r) null == e[a] && (e[a] = r[a]);
            return e
        }
        for (let e = 0; e < mockups.length; e++) mockups[e] = i(mockups[e]);
        return new e(mockups.find(e => "Basic" === e.name).index), new e(mockups.find(e => "Developer" === e.name).index), t
    }(), h = [{
        name: "Home",
        id: "home",
        about: "The home page / landing page for the wiki",
        content: `
        Welcome to the Oxyrex.io wiki! This is dedicated to being a resource for players to use to get better at the game and to find help with the game!
        On the left side, you'll be able to see any image(s) that a page will have. It will usually come along with a caption.
        On the right side, you'll be givien either specifications or useful data such as links or body stats.
        `,
        image: [s("https://www.oxyrex.io/favicons/mstile-150x150.png")],
        imageCaption: "The Oxyrex.io logo",
        specifications: function() {
            const e = [];
            for (let a of ["Basic", "Developer"]) {
                var t = r.find(e => e.name === a);
                e.push({
                    name: a + " Page",
                    value: l(t.index, t.name),
                    html: !0
                })
            }
            return e
        }()
    }, {
        name: "Carrier Bureau",
        id: "carriers",
        about: "The informative page for the coming aircraft carriers",
        content: ["Welcome to the Aircraft Carrier Bureau! This page is dedicated to keeping you updated with the status of Carrier development, how to play and the types of Carriers!", "<b>Development Changelog</b><br/><ul><li>Carrier Patch 0.0.1 - 10/14/21<ul><li>Redesigned all of the carriers</li><li>Balanced out secondary armament and made it more accurate</li><li>Reworked the placement of AA guns</li></ul></li></ul>", "<b>Premium Status</b></br/>Premium is currently being planned out, but when released will give access to Premium Carriers. These ships will be stronger and be better designed than normal Carriers, and will be marked with a star next to their name (✯). Don't worry! Premium does not mean money! Premium can be gained from participating in testing and winning events hosted by a dev or Carrier Bureau Manager. In fact, if you've gotten 5,000,000+ with ANY Carrier prior to [10/31/21], you are eligable for premium once it comes out! <b>Please note that you must have been using a token that links your discord to your player so that we can keep track of this.</b>", "<b>How to Play</b><br/>Carriers are a completely never-before-seen type of class in the game. Therefore they have interesting ways of being controlled. Once you get it down, it is quite simple. You will see a group of buttons to the left of the minimap. These are your squadron control buttons. Pressing any of the buttons that doesn't say 'Relinquish' will launch a squadron that is not on cooldown if you are not already controling one. If you are controling a squadron, pressing the relinquish button returns you to the carrier. Once you've launched a squadron, you can control its movement with your mouse. Once you've found a target, right click to launch your attack. Depending on your plane type, you must conduct your attack from certain angles. Note that fighters and Anti-Aircraft (AA) guns are very much a threat to your attacking squadrons. Thankfully for you, AA guns have firing arcs, meaning that they can only shoot in certain directions, and that gives you the ability to direct your attacks. Once you attack, your camera will hover over the attack spot for a moment, then return to the carrier. Pressing 'Relinquish' gets rid of this wait period. Squadron cooldown is approximately (10 + squadronSize) seconds.", "<b>Nation Comparison</b><br/>Before we get into what carriers are in the game, let's go over what broad classifications of Carriers there are:<ul><li>American</li><ul><li>Medium sized squadrons</li><li>Multiple ammunition per plane</li><li>Slightly weaker but more accurate ammunition</li><li>Comprised of High Explosive Dive Bombers, High Explosive Rocket Planes and Torpedo Bombers</li></ul><li>Japanese</li><ul><li>Small fast squadrons</li><li>Very powerful ammunition, but small amounts per strike</li><li>Comprised of High Explosive Dive Bombers and Torpedo Bombers</li></ul><li>German</li><ul><li>Medium squadron sizes</li><li>Average ammo stats</li><li>Comprised of Armor Peircing Dive Bombers, Armor Peircing Rocket Attack Planes and Torpedo Bombers</li><li>Powerful secondary gun batteries</li></ul><li>British</li><ul><li>Small, tough squadrons</li><li>Average ammo, but multiple bombs per Dive Bomber, giving a carpet bombing mechanic</li><li>Comprised of Armor Piercing Dive Bombers, High Explosive Rocket Attack Planes and Torpedo Bombers</li><li>Very tough and sturdy carriers</li></ul><li>Soviet</li><ul><li>Very large squadrons</li><li>Crappy average ammunitions, but much of it</li><li>Comprised of High Explosive Skip Bombers, High Explosive Rocket Attack Planes and Torpedo Bombers</li></ul></ul>", "<b>American Carriers</b><br/><ul><li><b>Independence</b> - Tier I - A fast, lightly armored carrier that has a small compliment of aircraft. Dive Bombers, Torpedo Bombers and Rocket Attack Planes</li><li><b>Lexington</b> - Tier II - Heavy slow carrier that has a rather large air group. Many Fighters, Dive Bombers, Rocket Attack Planes and Torpedo Bombers</li><li><b>Yorktown</b> - Tier III - A carrier that can deal out a lot of damage, take a lot of damage and move around quickly. Fighters, Torpedo Bombers, Dive Bombers and Rocket Attack Planes</li><li><b>Midway</b> - Tier IV - Large, powerful and modern carrier for it's time. Large air groups with numerous ammunition per plane. Fighters, Dive Bombers, Rocket Attack Planes and Torpedo Bombers</li><li><b>Saipan ✯</b> - Tier II - Large, fast moving carrier with a well sized air group. Fighters, Dive Bombers, Rocket Attack Planes and Torpedo Bombers</li><li><b>Enterprise ✯</b> - Tier III - The grey ghost, the Big E herself, Enterprise is one of the thoughest carriers, having an impressive AA armament and multiple squadrons that can attack multiple targets at once. Dive Bombers, SAP Rocket Attack Planes and Torpedo Bombers</li><li><b>Franklin Delano Roosevelt ✯</b> - Tier IV - Tough, relatively fast and large carrier with a good secondary armament. Strong planes that deal lots of damage with their weapons. Dive Bombers, SAP Rocket Attack Planes and Torpedo Bombers</li></ul>", "<b>Japanese Carriers</b><br/><ul><li><b>Ryūjō</b> - Tier I - A fast, lightly armed and armored carrier that has a large compliment of small squadrons. Dive Bombers and Torpedo Bombers</li><li><b>Shōkaku</b> - Tier II - A medium carrier with a decent AA defense and mediocre secondary armament. Many fighters for its tier, and powerful but small strikes. Dive Bombers and Torpedo Bombers</li><li><b>Taihō</b> - Tier III - A heavily armed and lightly armored carrier that can launch multiple squadrons at once. Dive Bombers, Rocket Attack Planes and Torpedo Bombers</li><li><b>Hakuryu</b> - Tier IV - One of the largest carriers in the world at the time it was made, Hakuryu has a large secondary armament and is well defended against air attacks. Owing to its design, it can carry a large air group with numerous fighters and autonomous squadrons. Dive Bombers, Rocket Attack Planes and Torpedo Bombers</li><li><b>Zuiho ✯</b> - Tier II - A small and fast aircraft carrier, it couldn't carry a large air group, but it made up for it with the quality of its planes and armament. Dive Bombers and Torpedo Bombers</li><li><b>Kaga ✯</b> - Tier III - A heavy carrier with lots of secondary guns with short range but high rate of fire. Dive Bombers, Rocket Attack Planes and Torpedo Bombers</li><li><b>Shinano ✯</b> - Tier IV - The largest aircraft carrier that never was. Consisting of an astounding AA defense, she could easily mop the floor with aircraft. Carrying the largest amout of planes ever seen at the time, Shinano here is equiped with numerous autonomous squadrons, to attack for you. Dive Bombers, Rocket Attack Planes and Torpedo Bombers</li></ul>", "<b>German Carriers</b><br/><ul><li><b>Rhein</b> - Tier I - A fast light carrier with decent secondary armament and AA armament. AP Dive Bombers and Torpedo Bombers</li><li><b>Weser</b> - Tier II - A project to combine the concept of an Aircraft Carrier and a Hipper-Class Cuiser, it had a strong hull and powerful AA armament as well as decent secondaries, a theme with German ships. AP Dive Bombers, AP Rocket Attack Planes and Torpedo Bombers</li><li><b>August von Parseval</b> - Tier III - A strong carrier that was a sister ship to the Graf Zeppelin. It had an impressive secondary armament and powerful AA. It has decent squadrons. AP Dive Bombers, AP Rocket Attack Planes and Torpedo Bombers</li><li><b>Manfred von Richthofen</b> - Tier IV - One of the largest carriers Germany had planned, it had a very powerful secondary armament and a decent AA cloud. AP Dive Bombers, AP Rocket Attack Planes and Torpedo Bombers</li><li><b>Erich Loewenhardt ✯</b> - Tier II - Strong, well armed and armored and fast for its type, it is armed with High Explosive bombs that are very strong. Dive Bombers, AP Rocket Attack Planes and Torpedo Bombers</li><li><b>Graf Zeppelin ✯</b> - Tier III - The Graf Zeppelin was laid down but never finished during WW2 due to shifting priorities in the German navy. Boasting the second most powerful secondary armament, it also had an amazing AA armament with great carrier stats. AP Dive Bombers, AP Rocket Attack Planes and Torpedo Bombers</li><li><b>Max Immelmann ✯</b> - Tier IV - The best secondary armament ever heard of, it also boasted best in class AA. Carrying an impressive number of planes and powerful squadrons, the Max Immelmann shouldn't be messed with. AP Dive Bombers, AP Rocket Attack Planes, Torpedo Bombers</li></ul>", "<b>British Carriers</b><br/><ul><li><b>Hermes</b> - Tier I - A small carrier that can carry a fast and accurate air group. Carpet Dive Bombers and Torpedo Bombers</li><li><b>Furious</b> - Tier II - A warship that got converted into a carrier during the 1920s. It held the trophy of being the fastest carrier in that time. Carpet Dive Bombers, Rocket Attack Planes and Torpedo Bombers</li><li><b>Implacable</b> - Tier III - The most advanced British carrier, boasting an armored flight deck with powerful AA. Carpet Dive Bombers, Rocket Attack Planes and Torpedo Bombers</li><li><b>Audacious</b> - Tier IV - An expansion of the Implacable class of carrier, it made up for the smaller squadrons while keeping its armored flight deck. Very well armored. Carpet Dive Bombers, Rocket Attack Planes and Torpedo Bombers</li><li><b>Ark Royal ✯</b> - Tier II - Having the best secondaries the Royal Navy had to offer, combined with the British armored flight deck made this a formidable carrier. With lots of powerful planes, this could annihilate other ships very easily. Carpet Dive Bombers, Rocket Attack Planes and Torpedo Bombers</li><li><b>Indomitable ✯</b> - Tier III - An Illustrious class carrier, she had an extra hangar to hold more aircraft. Carpet Dive Bombers, Rocket Attack Planes and Torpedo Bombers</li></ul>", "<b>Soviet Carriers</b><br/><ul><li><b>Komsomolets</b> - Tier I - A small and slow carrier that was reconstructed from an old ship. Skip Bombers</li><li><b>Serov</b> - Tier II - A large and tanky carrier with large squadrons. Skip Bombers and Rocket Attack Planes</li><li><b>Pobeda</b> - Tier III - A large carrier with decent AA and secondary battery. Its squadrons are very large and could pack a real punch to anyone close enough to it. Skip Bombers, Rocket Attack Planes and Torpedo Bombers</li><li><b>Admiral Nakhimov</b> - Tier IV - A carrier built on a battleship's hull that never got completed. It was powerful and had a large air group, having the largest squadrons in the game with the most ammo dropped in an attack. Dive Bombers, Skip Bombers, Rocket Attack Planes Torpedo Bombers</li><li><b>Chaklov ✯</b> - Tier III - A fast Soviet carrier with a well armed and armored hull. Its air groups were large and powerful. This is a ship not to be messed with. Skip Bombers, Rocket Attack Planes and Torpedo Bombers</li></ul>"].join("<br/><br/>"),
        image: [s("https://cdn.glitch.me/396e25b1-9cc5-4a3c-bb77-1ef78c4f8fc5%2F8421d379-8281-47e2-a27d-1f0b6abcfaa9.image.png?v=1633998717750")],
        imageCaption: "Squadron Control Buttons",
        specifications: []
    }, ...r.map(e => e.getWikiEntry())];

    function t() {
        const a = location.hash.slice(1, location.hash.length),
            e = h.find(e => e.id == a);
        if (!e) return alert("That's not a valid page!");
        let t = document.getElementById("title"),
            r = document.getElementById("subtitle"),
            i = document.getElementById("imgholder");
        i.innerHTML = "";
        let o = document.getElementById("bodyholder");
        o.innerHTML = "";
        let n = document.getElementById("specsholder");
        if (n.innerHTML = "", t.textContent = e.name, r.textContent = e.about, o.innerHTML = e.content, i.textContent = e.imageCaption, e.image instanceof Array)
            for (var s of e.image) i.appendChild(s instanceof Function ? s() : s);
        else i.appendChild(e.image);
        e.specifications.forEach(e => {
            let a = document.createElement("div"),
                t = document.createElement("h3");
            t.textContent = e.name, a.appendChild(t);
            let r = document.createElement("i");
            r[e.html ? "innerHTML" : "textContent"] = e.value, a.appendChild(r), n.appendChild(a)
        })
    }
    window.addEventListener("hashchange", t), location.hash ? t() : location.hash = "home"
})();