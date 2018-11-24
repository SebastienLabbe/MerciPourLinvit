"use strict";

function create_text_holder(name)
{
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    div.setAttribute("class","input_container");
    label.setAttribute("for",name);
    label.innerHTML = "<b>".concat(name).concat(" : </b>");
    input.setAttribute("id","input_".concat(name.toLowerCase()));
    input.setAttribute("type","text");
    input.setAttribute("name",name);
    input.setAttribute("placeholder",name);
    span.setAttribute("class","focus_input");
    span.setAttribute("data-placeholder",name);
    div.appendChild(label);
    div.appendChild(document.createElement('br'));
    div.appendChild(input);
    div.appendChild(span);
    form.appendChild(div);
};

const form = document.querySelector('#form_invite');

const names = ['Nom','Prénom','Genre','Ville','Code Postal','Adresse','Numéro de téléphone', 'Adresse mail', "Nombres d'habitants dans le foyer"];

for(let i = 0;i < names.length; i++)
{
    create_text_holder(names[i]);
}; 

const submit = document.querySelector("#envoyer");
submit.addEventListener('click', submitForm);

let data_name = [
    "Nom",
    "Prenom",
    "Genre",
    "Ville",
    "Code Postal",
    "Adresse",
    "Telephone",
    "Adresse Email",
    "Nombres d'habitants",
    "Modalites d'hebergement",
    "Q1",
    "Q2",
    "Q3"
]
let data = [];
function submitForm(event) {
    const data_containers = document.querySelectorAll('.input_container');
    for (let i = 0; i < data_containers.length; i++) {
        data.push(data_containers[i].querySelector('input').value);
    }

    let parameters = [];
    for (let i = 0; i < data.length; i++) {
        parameters.push(data_name[i] + '=' + data[i]) 
    }

    let encoded_url = encodeURI(`https://script.google.com/macros/s/AKfycbzTM2nRDBcn4vDs2dTAJTnm7diQakYLrwTDxEGazT0oFMbowL7z/exec?${parameters.join('&')}`);
    console.log(encoded_url)
    let window = open(encoded_url);
    window.close();    
}