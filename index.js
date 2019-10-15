'use strict';

function getNewUrl(breed) {
    let url = 'https://dog.ceo/api/breed/' ;
    return url + breed + '/images/random/';
}


function getDogImage(breed) {
    fetch(getNewUrl(breed))
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let breed = $('#breed').val();
        getDogImage(breed);
       
    });
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.results-img').replaceWith(
        chooseResponse(responseJson)
    )
    $('.results').removeClass('hidden');
}

function chooseResponse(responseJson) {
    if (responseJson.status === "success") {
       return `<img src="${responseJson.message}" class="results-img">`
    } else {
        return `<h4> ${responseJson.message} </h4>`
    }
}


$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
    
});