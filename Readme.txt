Pour apprendre a extraire les informations du formulaire, lire la page suivante:

https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175?fbclid=IwAR01dzJW5UNAUDFp9vHBNG6JCzJK3HVXbAq30zHhF2ct1P4xMUSQG8tlhqI

Notez alors l'url obtenu qui finit en ".../exec".

Ouvrir le fichier script.js et chercher (Ctrl + F) la variable "encoded_url".

Remplacez alors toute la ligne par:

let encoded_url = encodeURI(`<votre URL>?${parameters.join('&')}`);

Normalement, tout fonctionne correctement.