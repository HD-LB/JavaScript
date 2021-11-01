/* globals console */

// //The pic disappieres
// var el = document.getElementsByTagName("img")[0]; //select the first image

// el.onclick = function() {
//     el.style.visibility = "hidden"; //the picture disappieres
// };

// //Another Option
// el.addEventListener("click", function() {
//     el.parentElement.removeChild(el);
// });

const el = document.getElementById('input');

// el.addEventListener("click", function() {
//     el.value = "clicked";
// });

const msgContainer = document.getElementById('msg-container');


el.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        const msg = el.value;
        el.value = '';

        const msgEl = ducument.createElement('p');
        msgEl.innerHTML = msg;

        msgContainer.appendChild(msgEl);
    }
});