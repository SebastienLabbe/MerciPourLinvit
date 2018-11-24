"use strict";

function create_text_holder(name)
{
    const div = document.createElement('div');
    const label = document.createElement('label');
    const br = document.createElement('br');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const title = document.createElement('b');
    div.setAttribute("class","input_container");
    label.setAttribute("for",name);
    title.innerText = name;
    label.appendChild(title);
    input.setAttribute("id","input_".concat(name));
    input.setAttribute("type","text");
    input.setAttribute("name",name);
    input.setAttribute("placeholder",name);
    span.setAttribute("class","focus_input");
    span.setAttribute("data-placeholder",name);
    div.appendChild(label);
    div.appendChild(br);
    div.appendChild(input);
    div.appendChild(span);
    form.appendChild(div);
    console.log('seb');
};

const form = document.querySelector('#form_invite');

const names = ['Nom','Prénom','Genre','Ville','Code Postal','Adresse','Numéro de téléphone', 'Adresse mail', "Nombres d'habitants dans le foyer"];

for(let i = 0;i < names.length; i++)
{
    create_text_holder(names[i]);
}; 

const submit = document.querySelector("#envoyer");
submit.addEventListener('click', submitForm);

function submitForm(event) {
    let store = [];
    const data_containers = document.querySelectorAll('.input_container');
    for (let i = 0; i < data_containers.length; i++) {
        store.push(data_containers[i].querySelector('input').value);
    }
    console.log("We collected the following data:", store);
}