'use strict';

function getNewUrl(breed) {
    
    if (breed.length === 0) {
        return 'https://dog.ceo/api/breeds/image/random';
    } else {
        return 'https://cors-anywhere.herokuapp.com/http://dog.ceo/api/breed/' + breed + '/images/random/';
    }
     
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
    $('#result').html(
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