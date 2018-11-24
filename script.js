"use strict";

function create_form_text_holder(name)
{
    return `<div class="input_container">
                <label for="${name.toLowerCase()}"><b>${name} : </b></label>
                <br>
                <input id="input_${name.toLowerCase()}" type="text" name="${name.toLowerCase()}" placeholder="${name.toUpperCase()}">
                <span class="focus-input" data-placeholder="${name.toUpperCase()}"></span>
            </div>`;
};

function create_form_title(title)
{
    return `<span id="form_title">
                ${title}
            </span>`;
};

function create_form_button()
{
    return `<div id="form_button">
                <button id="envoyer" type="button">
                    Envoyer
                </button>
            </div>`;

};

function create_form_drop_down(name,elements)
{
    let drops = [];
    for(let i = 0;i < elements.length ; i++)
    {
        drops.push(`<option value="${elements[i]}">${elements[i]}</option>`)
    };
    return `<div class="input_container">
                <label for="${name.toLowerCase()}"><b>${name} : </b></label>
                <br>
                <select name="${name.toLowerCase()}">
                ${drops.join('')}
                </select>
                <span class="focus-input" data-placeholder="${name.toUpperCase()}"></span>
            </div>`;
};

function create_form(form_name)
{
    const form = document.createElement('form');

    let form_inner_html = [];

    let names = ['Nom','Prénom','Genre','Ville',
    'Code Postal','Adresse','Numéro de téléphone',
    'Adresse mail', "Nombres d'habitants dans le foyer"];

    form_inner_html.push(create_form_title('Invite'));

    for(let i = 0;i < names.length ; i++)
    {
        form_inner_html.push(create_form_text_holder(names[i]));
    };

    let name = "Modalités d'hébergement";
    let elements = ["Une chambre à part","Canapé-lit",
                    "Logement entier","Autre"];
    form_inner_html.push(create_form_drop_down(name,elements));

    name = "Durée d'hébergement";
    elements = ["Deux semaines","De 1 mois à 3 mois",
                   "De 4 mois à 6 mois","6 mois ou plus"];
    form_inner_html.push(create_form_drop_down(name,elements));

    names = ["A partir de quand pouvez-vous recevoir quelqu'un chez vous?",
                    "Qu'attendez-vous de cette expérience d'accueil ?",
                    "Des questions ou commentaires?"];

    for(let i = 0;i < names.length ; i++)
    {
        form_inner_html.push(create_form_text_holder(names[i]));
    };

    form_inner_html.push(create_form_button());



    form.innerHTML = form_inner_html.join('');
    
    const form_content = document.querySelector('#form_content');

    form_content.appendChild(form);
    
};


create_form();


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