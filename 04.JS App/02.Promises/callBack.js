
const button = document.getElementById("root)");

let clickCount = 0;

document.getElementById("button")
    .addEventListener("click", () => {

        const btn = document.createElement("p");
        clickCount += 1;
        btn.innerHTML = (`Click ${clickCount}`);
        root.appendChild(btn);
    });

