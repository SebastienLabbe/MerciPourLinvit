"use strict";

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