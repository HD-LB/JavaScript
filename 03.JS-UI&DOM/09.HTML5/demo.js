var hbTemplate = `
<h1>{{greeting}}</h1>
<h2>{{message}}</h2>
`;

var template = Handlebars.compile(hbTemplate);
var data = {
    greeting: "Hello",
    message: "How are you"
};

var container = document.getElementById("hb-container");
container.innerHTML= template(data);

