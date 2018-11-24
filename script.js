"use strict";


// creates the an input given 
function create_form_text_holder(name, place_holder)
{
    if (typeof place_holder === 'undefined') 
    {
        place_holder = name.toUpperCase(); 
    };
    return `<div class="input_container">
                <label for="${name.toLowerCase()}"><b>${name} : </b></label>
                <br>
                <input id="input_${name.toLowerCase()}" type="text" name="${name.toLowerCase()}" placeholder="${place_holder}">
                <span class="focus-input" data-placeholder="${name.toUpperCase()}"></span>
            </div>`;
};

function create_form_title(title)
{
    return `<div id="form_title">
                ${title}
            </div>`;
};

function create_form_button()
{
    return `<div id="form_button">
                <button id="envoyer" type="button">
                    Envoyer
                </button>
            </div>`;
};

function create_form_description()
{
    return `<p id="description">
            Vous avez une chambre libre ? 
            Vous souhaitez devenir hébergeur solidaire et faire parti de l'aventure Merci pour l'invit' ? 
            <br> <br>
            Merci pour l'invit' est un projet qui prône l'hébergement solidaire afin de faciliter la 
            réinsertion socioprofessionnelle de femmes et de jeunes en grande précarité. 
            <br> <br>
            Merci pour l'invit' se développe actuellement à BORDEAUX, à PARIS et sa banlieue. 
            <br> <br>
            Après avoir rempli ce questionnaire, la responsable "hébergement"vous contactera pour 
            vous expliquer plus amplement la démarche. La Charte de cohabitation sera signée entre 
            vous et la personne accueillie lors du début de l'hébergement. 
            <br> <br>
            Vous habitez une autre ville ? N'hésitez pas à remplir ce formulaire, notre équipe 
            vous répondra dès que possible. 
            <br> <br>
            Ce questionnaire <b>NE VOUS ENGAGE PAS A HEBERGER.</b>
            <br> <br>
            Toutes les informations collectées sont strictement pour l'association, elles ne 
            seront pas partagées et ne serviront que pour les besoins du projet.
            </p>`;
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
                <select class="data" name="${name.toLowerCase()}">
                ${drops.join('')}
                </select>
                <span class="focus-input" data-placeholder="${name.toUpperCase()}"></span>
            </div>`;
};

function create_invite_form(form_name)
{
    const form = document.createElement('form');

    let form_inner_html = [];

    let mandatory = "<span style='color: red; display: inline-block;'>* </span>"
    let names = ['Nom','Prénom  ','Genre','Ville',
    'Code Postal','Adresse','Numéro de téléphone',
    'Adresse mail', "Nombres d'habitants dans le foyer"];

    form_inner_html.push(create_form_title("Devenez hébergeur pour Merci pour l'invit'"));

    form_inner_html.push(create_form_description());

    for(let i = 0;i < names.length ; i++)
    {
        form_inner_html.push(create_form_text_holder(names[i] + mandatory));
    };

    let name = "Modalités d'hébergement";
    let elements = ["Une chambre à part","Canapé-lit",
                    "Logement entier","Autre"];
    form_inner_html.push(create_form_drop_down(name + mandatory ,elements));

    name = "Durée d'hébergement";
    elements = ["Deux semaines","De 1 mois à 3 mois",
                   "De 4 mois à 6 mois","6 mois ou plus"];
    form_inner_html.push(create_form_drop_down(name + mandatory ,elements));

    names = ["A partir de quand pouvez-vous recevoir quelqu'un chez vous?",
                    "Qu'attendez-vous de cette expérience d'accueil ?",
                    "Des questions ou commentaires?"];

    for(let i = 0;i < names.length ; i++)
    {
        if (i == 2) form_inner_html.push(create_form_text_holder(names[i]));
        else form_inner_html.push(create_form_text_holder(names[i]) + mandatory);
        
    };

    form_inner_html.push(create_form_button());



    form.innerHTML = form_inner_html.join('');
    
    const form_content = document.querySelector('#form_content');

    form_content.appendChild(form);
    
};

create_invite_form();

function create_maine_page()
{
    
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
    "Duree d'hebergement",
    "Q1",
    "Q2",
    "Q3"
]
let data = [];
function submitForm(event) {
    console.log('clicked')
    const data_containers = document.querySelectorAll('.input_container');
    for (let i = 0; i < data_containers.length; i++) {
        data.push(data_containers[i].querySelector('.data').value);
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