!async function() {
    const o = document.createElement("div");
    document.body.appendChild(o);
    class s {
        constructor(e, n, t) {
            this.dataValue = e, this.question = n, Array.isArray(t) && (this.options = t), "openended" === t && (this.openended = !0)
        }
    }
    const d = {},
        r = [new s("username", "What is your discord username?", "openended"), new s("type", "What type of suggestion is this? 'bug', 'balance' or 'other'?", ["bug", "balance", "other"])];
    !async function e(n) {
        const t = await
        function(e) {
            o.innerHTML = `<h2>${e}</h2>`;
            const a = document.createElement("input");
            return o.appendChild(a), new Promise((e, n) => {
                const t = document.createElement("button");
                t.onclick = () => e(a.value), t.textContent = "Submit", o.appendChild(t)
            })
        }(r[n].question);
        if (a = r[n], i = t.toString(), !(a.openended || a.options && a.options.includes(i.toLowerCase()))) return document.body.innerHTML = "Invalid answer. Refresh to try again.";
        var a, i;
        if (1 === n) switch (t.toLowerCase()) {
            case "bug":
                r.push(new s("description", "Please write a detailed description of the bug.", "openended"), new s("imageURL", "If you have an image, please paste the image URL here. Otherwise leave it blank.", "openended"));
                break;
            case "balance":
                r.push(new s("description", "Please write a detailed description of the balance change you'd like.", "openended"));
                break;
            default:
                r.push(new s("description", "Please write a detailed description of the suggestion.", "openended"), new s("imageURL", "If you have an image, please paste the image URL here. Otherwise leave it blank.", "openended"))
        }
        d[r[n].dataValue] = t, n + 1 < r.length ? e(n + 1) : (n = d, fetch("https://6ibui.glitch.me/feedbackEndpoint", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(n)
        }), o.innerHTML = "<h2>All done!</h2>")
    }(0)
}();