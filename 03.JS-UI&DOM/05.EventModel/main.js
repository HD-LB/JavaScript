
const df = document.createDocumentFragment();

for (var i = 0; i < 32; i += 1) {
    var li = document.createElement('li');
    li.innerHTML = i;

    df.appendChild(li);
}

document.getElementsByTagName('ul')[0]
    .appendChild(df);

