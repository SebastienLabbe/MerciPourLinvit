"use strict";

/*
=================================================================================
Functions to facilitate form page creation
=================================================================================
*/

// Emptys the content of an div given the id of the div
function empty_content(div_id) 
{
    document.querySelector('#'+div_id).innerHTML = '';
    scroll(0,0);
}

// Creates the title for each page
function create_page_title(title)
{
    return `
            <h1 class="page_title">
                ${title}
            </h1>
            <hr>
            `;
}

// Returns as a string the HTML source code for an input bar that holds text for the form (ex : Name )
function create_form_text_holder(name,place_holder)
{
    let shown_name ;

    if(name != 'Des questions ou commentaires?')
    {
        shown_name = name + "<mand style='color: red; display: inline-block;'> * </mand>";
    }
    else
    {
        shown_name = name;
    }

    if (typeof place_holder === 'undefined') 
    {
        place_holder = name; 
    }

    
    return `<div class="input_container">
                <label for="${name.toLowerCase()}"><b> ${shown_name} : </b></label>
                <br>
                <input id="input_${name.toLowerCase()}" class="data" type="text" name="${name.toLowerCase()}" placeholder="${place_holder}">
                <span class="focus-input" data-placeholder="${name.toUpperCase()}"></span>
            </div>`;
}

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
                <label for="${name.toLowerCase()}">
                    <b>${name} : </b>
                </label>
                <br>
                <select type="text" class="data" name="${name.toLowerCase()}">
                    ${drops.join('')}
                </select>
            </div>`;
}


/*
=================================================================================
Functions to create pages
=================================================================================
*/

// Creates the main page
function create_main_page()
{
    empty_content('content');

    const content = document.querySelector('#content');
    content.innerHTML =  
    `
    <img id="project_MPLI" src="Images/project_MPLI.png"></img>
    <p>
        <i>Merci pour l'invit'</i> est le <b>premier réseau d'hébergement</b> 
        citoyen permettant la réinsertion de femmes en difficulté.
        <br> <br>
        Le sans abrisme féminin est peu connu, pourtant sur les <b>200 000 
        personnes</b> sans domicile fixe en France (Estimation de la FNARS en 2017), 
        <b>40% sont des femmes.</b>
        <br> <br>
        Pour venir en aide à ces femmes et pallier la saturation actuelle de 
        l’hébergement d’urgence, notre solution est simple : <b>héberger chez l’habitant.</b>
        <br> <br>
        De nombreuses études sur le « housing first » l’ont prouvé, la condition n°1 
        vers la réinsertion est la <b>tranquillité</b> permise par un <b>hébergement stable.</b>
        <br> <br>
    </p>
    `;
}

// Create project MPLI page
function create_MPLI_page()
{
    empty_content('content');

    const MPLI_project_page = document.createElement('div');
    MPLI_project_page.setAttribute('id','MPLI_project_page');

    MPLI_project_page.innerHTML = create_page_title("MPLI aujourd'hui") +
    `
    <div class="boxTopRed">
            <i>Merci pour l'invit'</i> est le premier 
            réseau d'hébergement citoyen permettant la réinsertion de femmes en difficulté.
            <br><br>
            L’hébergeur solidaire s’engage à accueillir sur une période pouvant aller de 2 
            semaines à 9 mois. Il est accompagné tout au long de sa démarche par <i>Merci pour l'invit'</i> 
            (mise en contact, présence lors de la première rencontre, Charte de 
            cohabitation, formation à l’accueil, médiation...).
            <br><br>
            Les femmes en difficulté nous sont adressées par des associations partenaires, 
            qui garantissent la relation de confiance entre l’hébergé et l’hébergeur et 
            l’inscription dans un parcours de réinsertion.
            <br><br>
            <i>Merci pour l'invit'</i> assure durant la durée de l’hébergement un accompagnement 
            social permettant d’inscrire l’accueilli dans un parcours de réinsertion.
            <br><br>
    </div>
    <span class="emphasize"> L'hébergement solidaire se déroule donc en 6 étapes : </span>
    <img id="etapes_hebergement" src="Images/etapes_hebergement.png"></img>
    <div class="boxTopRed">
            <img id="key_passing" src="Images/key_passing.png" align="right"></img>
            Pour devenir hébergeur solidaire, il vous suffit de remplir de clicker sur le 
            button ci-dessous:
            <br>
            <button onclick="create_form_page()"> Offrir un hebergement </button>
            <br> <br>
            <i> Merci pour l’invit’ </i> en action :
            <br><br>
            A titre d'exemple, une jeune femme est hébergée depuis maintenant 
            6 mois chez une hébergeuse solidaire. Malgré son emploi en intérim, 
            elle s’est retrouvée à la rue et a été orientée vers nous par une 
            association via cette page.
            <br><br>
            Aujourd’hui, elle a pu refaire son CV grâce à l’association qui 
            l’accompagne, elle a obtenu un CDD qui va bientôt devenir un CDI.
            <br><br>
            Au-delà de l’hébergement, c’est aussi un lien social durable et 
            des mises en réseaux qui sont permises par l’hébergement l’habitant.
    </div>
    `;

    const content = document.querySelector('#content');
    content.appendChild(MPLI_project_page);
}

// Create team page
function create_team_page()
{
    empty_content('content');

    const team_page = document.createElement('div');
    team_page.setAttribute('id','team_page');

    team_page.innerHTML += create_page_title("L'équipe");

    const team_members = document.createElement('div');
    team_members.setAttribute('id','team_members');

    let names = ["Victoria&nbspMandefield","Yanisse&nbspRiffi","Terrerias&nbspMargaux"];
    let links = ["https://www.linkedin.com/in/victoriamandefield",
                "https://www.linkedin.com/in/yassiner/",
                "https://www.linkedin.com/in/margaux-tarrerias-b20129134/"];
    let roles = ["Directrice de l'association Solinum","Développeur web",
                "Chef de projet <i>Merci pour l'invit'</i>"];
    let image_links = ["victoria_mandefield","yassine_riffi","margaux_tarrerias"];
    for(let i = 0; i<3;i++)
    {
        team_members.innerHTML += 
        `
        <div class="team_member">
		    <a href="${links[i]}"> <img class="team_member_image" src="Images/${image_links[i]}.png"> </a>
			<div class="team_member_description">
				<a class="name" href="${links[i]}">${names[i]}</a> <br>
				${roles[i]}
			</div>
		</div>
        `;
    }

    const content = document.querySelector('#content');
    content.appendChild(team_page);
    team_page.appendChild(team_members);
}

// Create page hebergeur
function create_heberger_page() 
{
    empty_content('content');

    const page = document.createElement('div');
    page.innerHTML = create_page_title("Devenir Hébergeur") +
    `
    <span class="emphasize"> 
        Pour offrir un hébergement, cliquez ci-dessous: <br>
        <button onclick="create_form_page()"> Offrir un hebergement </button> 
    </span> 
    <br> <br>
    <p>
        Pour pallier la saturation actuelle de l’hébergement d’urgence, notre solution est simple :
        <br>
        <b>faciliter l’hébergement chez l’habitant des femmes en exclusion.</b>
        <br><br>
        A travers <i>Merci pour l’invit’</i>, nous souhaitons permettre à chaqu’un d’entre vous de
        s’engager en prêtant une chambre libre pendant une durée déterminée d’au moins deux
        semaines afin de faciliter la réinsertion de femmes en difficulté.
        <br><br>
        Bien évidemment, rien ne peut se faire sans le <b>tissu associatif local</b> : ainsi, nous
        travaillons sur prescription des organismes qui orientent des femmes souhaitant se réinsérer
        vers notre dispositif. Au cours de l’hébergement, la personne hébergée continue d’être suivie
        par l’association l’ayant orientée.
        <br><br>
        <b>L’hébergeur n’est pas seul dans sa démarche</b> : il est accompagné par un dispositif lui
        permettant d’être mis en confiance, et éviter les remises à la rue. Ainsi, nous mettons en place
        des outils accompagnant l’hébergement afin qu’il se passe en toute <b>quiétude</b>, tels qu’une
        charte signée au début de l’hébergement.
        <br><br>
        L’hébergement se fait à titre gratuit et pour une période de deux semaines minimum. Vous
        n’avez pas à contribuer à ses frais de nourriture ou de transport même si vous êtes
        évidemment libre de le faire. L’équipe de <i>Merci pour l’invit’</i> vous accompagne tout au long
        de la cohabitation.
        Pour en savoir plus sur les modalités de l’hébergement, vous pouvez lire la FAQ
        Hébergement:
        <br>
        <button onclick="create_faq_page()"> Accéder a la FAQ </button>
    </p>
    `
    document.querySelector("#content").appendChild(page);
}

// Creates the entire form and adds it to the body
function create_form_page()
{
    empty_content('content');

    const form = document.createElement('form');

    let form_inner_html = '';

    form_inner_html += 
    `
    <div id="form_title">
        Devenez hébergeur pour <i>Merci pour l'invit'</i>'
    </div>
    <p1 id="description">
        Vous avez une chambre libre ? Vous souhaitez devenir hébergeur solidaire et faire 
        parti de l'aventure <i> Merci pour l'invit' </i> ? 
        <br> <br>
        <i> Merci pour l'invit' </i> est un projet qui prône l'hébergement solidaire afin de faciliter la 
        réinsertion socioprofessionnelle de femmes et de jeunes en grande précarité. 
        <br> <br>
        <i> Merci pour l'invit' </i> se développe actuellement à BORDEAUX, à PARIS et sa banlieue. 
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
    </p1>
    `;

    let names = ['Nom','Prénom','Genre','Ville','Code Postal','Adresse',
    'Numéro de téléphone','Adresse mail', "Nombres d'habitants dans le foyer"];

    for(let i = 0;i < names.length ; i++)
    {
        form_inner_html += create_form_text_holder(names[i]);
    };

    let drop_names = ["Modalités d'hébergement","Durée d'hébergement"];
    let drop_elements = [["Une chambre à part","Canapé-lit","Logement entier","Autre"],
    ["Deux semaines","De 1 mois à 3 mois","De 4 mois à 6 mois","6 mois ou plus"]];

    for(let i = 0;i < drop_names.length ; i++)
    {
        form_inner_html += create_form_drop_down(drop_names[i],drop_elements[i]);
    };

    names = ["A partir de quand pouvez-vous recevoir quelqu'un chez vous?",
    "Qu'attendez-vous de cette expérience d'accueil ?", "Des questions ou commentaires?"];

    let place_holder = ['jj/mm/aaaa','Votre reponse','Votre reponse'];

    for(let i = 0;i < names.length ; i++)
    {
        form_inner_html += create_form_text_holder(names[i],place_holder[i]);
    };

    form_inner_html += `<div id="form_button">
                            <button id="envoyer" type="button">
                                Envoyer
                            </button>
                        </div>`;
    
    form.innerHTML = form_inner_html;
    
    const form_container = document.createElement('div');
    form_container.setAttribute("class","form_container")
    form_container.appendChild(form);

    const content = document.querySelector('#content');
    content.innerHTML +=  create_page_title("Formulaire d'héberement");
    content.appendChild(form_container);

    const submit = document.querySelector("#envoyer");
    submit.addEventListener('click', submitForm);
}

// Create FAQ page
function create_faq_page()
{
    empty_content('content');

    const FAQ_page = document.createElement('div');
    FAQ_page.setAttribute("class","FAQ_page");

    let box_inner_html = create_page_title("FAQ hébergement");

    // Temporary FAQ as no pdf was provided
    let questions = ["Question 1","Question 2","Question 3","Question 4"];
    let answers = ["##################<br>##################<br>#### Réponse 1 ####<br>##################<br>##################<br>",
    "##################<br>##################<br>#### Réponse 2 ####<br>##################<br>##################<br>",
    "##################<br>##################<br>#### Réponse 3 ####<br>##################<br>##################<br>",
    "##################<br>##################<br>#### Réponse 4 ####<br>##################<br>##################<br>"];
    for(let i = 0; i < questions.length;i++)
    {
        box_inner_html += 
        `
        <div class="boxTopRed">
            <div class="Question">
                ${questions[i]}
            </div>
            <br>
            <div class="hr"></div>
            <br>
            <div class="Answer">
                ${answers[i]}
            </div>
        </div>
        `;
    }

    FAQ_page.innerHTML = box_inner_html;

    const content = document.querySelector('#content');
    content.appendChild(FAQ_page);

    
}

// Create contacts page
function create_contacts_page()
{
    empty_content('content');
    
    const contacts_page = document.createElement('div');
    contacts_page.setAttribute('id','contacts_page');

    contacts_page.innerHTML = create_page_title("Contacts") +
    `
    <div class="boxTopRed">
        <b>
            Contact <i>Merci pour l'invit'</i>
        </b>
        <br>
        Email : 
        <a href="mailto:margaux@solinum.org">
            margaux@solinum.org
        </a>
        <br>
        Page Facebook : 
        <a href="https://www.facebook.com/mercipourlinvit">
            https://www.facebook.com/mercipourlinvit
        </a>
        <br>
        Tel : 06 71 20 82 79 (9h30h - 18h30 en semaine).
        <br><br>
        <div class="hr"></div>
        <br>
        Pour vous inscrire en tant qu'hébergeur.se, remplissez le formulaire : 
        <br>
        <button onclick="create_form_page()">
            Offrir un hébergement
        </button>
        <br><br>
        Les demandes d’hébergements peuvent être envoyées à 
        <a href="mailto:margaux@solinum.org">
            margaux@solinum.org
        </a> 
         ou sur notre 
        <a href="https://www.facebook.com/mercipourlinvit/">
        page facebook
        </a>
    </div>
		
    `;

    const content = document.querySelector('#content');
    content.appendChild(contacts_page);

}

/*
=================================================================================
Form submission and Menu listeners
=================================================================================
*/


// Trys to submit form
function submitForm(event) 
{
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
        "Date",
        "Attente",
        "Questions"
    ]
    let data = [];
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
    fetch(encoded_url);
    location.reload();
    alert('Merci a vous. Vos coordonées ont bien étés enregistrées.');
    scroll(0,0);
}

//Menu navigation
const acceuil = document.querySelector("#acceuil");
const mpli = document.querySelector("#mpli");
const equipe = document.querySelector("#equipe");
const heberger = document.querySelector("#heberger");
const faq = document.querySelector("#faq");
const contacts = document.querySelector("#contacts");

acceuil.addEventListener('click', create_main_page);
mpli.addEventListener('click', create_MPLI_page);
equipe.addEventListener('click', create_team_page);
heberger.addEventListener('click', create_heberger_page);
faq.addEventListener('click', create_faq_page);
contacts.addEventListener('click', create_contacts_page);

//Generate the home page upon opening the website or refreshing
create_main_page();
