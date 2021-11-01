var hbTemplate = `
<ul>
    {{#student}}
        <li>{{name}} is {{age}} years old</li>
    {{/student}}
</ul>
`;

var template = Handlebars.compile(hbTemplate);
var data = {
    student: [
        {name: "John", age: 5},
        {name: "Jane", age: 34},
        {name: "Patric", age: 56},
        {name: "Michael", age: 87}
    ]
};

var container = document.getElementById("hb-container");
container.innerHTML = template(data);

