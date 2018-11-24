"use strict";

function create_text_holder(name)
{
    return `<div class="input_container">
        <label for="${name.toLowerCase()}"><b>${name} : </b></label>
        <br>
        <input id="input_${name.toLowerCase()}" type="text" name="${name.toLowerCase()}" placeholder="${name.toUpperCase()}">
        <span class="focus-input" data-placeholder="${name.toUpperCase()}"></span>
    </div>
    `;
};

function create_form(form_name)
{
    const form = document.createElement('form');

    const names = ['Nom','Prénom','Genre','Ville',
    'Code Postal','Adresse','Numéro de téléphone',
    'Adresse mail', "Nombres d'habitants dans le foyer"];

    let form_inner_html = [];

    for(let i = 0;i < names.length ; i++)
    {
        form_inner_html.push(create_text_holder(names[i]));
    };

    form.innerHTML = form_inner_html.join('');
    
    const form_content = document.querySelector('#form_content');
    form_content.appendChild(form);
    
};


create_form();


const surname = document.querySelector("#input_nom").querySelector("input");
const name = document.querySelector("#input_prenom").querySelector("input");

const submit = document.querySelector("#envoyer");
submit.prevent
submit.addEventListener('click', submitForm);

function submitForm(event) {
    let store = [];
    data = document.querySelectorAll('.input_container');
    for (let i = 0; i < data.length; i++) {
        store.push(data[i]);
    }
    console.log("We collected the following data:", store);
}