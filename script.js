"use strict";


// Emptys the content of an div given the id of the div
function empty_content(div_id)
{
    document.querySelector('#'+div_id).innerHTML = '';
};

// Returns as a string the HTML source code for an input bar that holds text for the form (ex : Name )
function create_form_text_holder(name,place_holder)
{
    let shown_name;
    if(name != 'Des questions ou commentaires?')
    {
        shown_name = name + "<m style='color: red; display: inline-block;'> * </m>";
    }
    else
    {
        shown_name = name;
    };
    if (typeof place_holder === 'undefined') 
    {
        place_holder = name; 
    };

    

    return `<div class="input_container">
                <label for="${name.toLowerCase()}"><b> ${shown_name} : </b></label>
                <br>
                <input id="input_${name.toLowerCase()}" class="data" type="text" name="${name.toLowerCase()}" placeholder="${place_holder}">
                <span class="focus-input" data-placeholder="${name.toUpperCase()}"></span>
            </div>`;
};

// Returns as a string the HTML source code for the title for the form
function create_form_title(title)
{
    return `<div id="form_title">
                ${title}
            </div>`;
};

// Returns as a string the HTML source code for the button for the form
function create_form_button()
{
    return `<div id="form_button">
                <button id="envoyer" type="button">
                    Envoyer
                </button>
            </div>`;
};

// Returns as a string the HTML source code for the initial description for the form
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
            <br> <br>
            <m style='color: red; display: inline-block;'> * Champ obligatoire </m>
            </p>`;
};

// Returns as a string the HTML source code for a drop down menu
function create_form_drop_down(name,elements)
{
    let drops = [];
    name += "<m style='color: red; display: inline-block;'> * </m>";
    for(let i = 0;i < elements.length ; i++)
    {
        drops.push(`<option value="${elements[i]}">${elements[i]}</option>`)
    };
    return `<div class="input_container">
                <label for="${name.toLowerCase()}"><b>${name} : </b></label>
                <br>
                <select type="text" class="data" name="${name.toLowerCase()}">
                ${drops.join('')}
                </select>
                <span class="focus-input" data-placeholder="${name.toUpperCase()}"></span>
            </div>`;
};

// Creates the entire form and adds it to the body
function create_invite_form(form_name)
{
    empty_content('content');

    const form = document.createElement('form');

    let form_inner_html = [];

    let names = ['Nom','Prénom','Genre','Ville',
    'Code Postal','Adresse','Numéro de téléphone',
    'Adresse mail', "Nombres d'habitants dans le foyer"];

    form_inner_html.push(create_form_title("Devenez hébergeur pour Merci pour l'invit'"));

    form_inner_html.push(create_form_description());

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

    let place_holder = ['jj/mm/aaaa','Votre reponse','Votre reponse']

    for(let i = 0;i < names.length ; i++)
    {
        form_inner_html.push(create_form_text_holder(names[i]));
    };

    form_inner_html.push(create_form_button());



    form.innerHTML = form_inner_html.join('');
    
    const form_container = document.createElement('div');
    const form_content = document.createElement('div');
    form_content.setAttribute("class","form_content");
    form_container.setAttribute("class","form_container")
    form_content.appendChild(form);
    form_container.appendChild(form_content);

    const body = document.querySelector('#content');
    body.appendChild(form_container);
};

create_invite_form();

function create_maine_page()
{
    empty_content('content');

    const image =  document.createElement('image');
    image.setAttribute("scr","")
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
    const data_containers = document.querySelectorAll('.input_container');
    console.log(data_containers);
    for (let i = 0; i < data_containers.length; i++) {
        console.log('clicked')
        let answer = data_containers[i].querySelector('.data').value;
        if (answer == "" && i != 13) {
            alert("Vous n'avez pas repondu a une des cases obligatoires.");
            return;
        }
        data.push(answer);

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