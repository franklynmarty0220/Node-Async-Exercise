let url ='http://numbersapi.com/'
let favNum = 20;

$.getJSON(`${url}/${favNum}json`).then(data => {
    console.log(data);
});

let arrFavNum = [5,20,45];
$.getJSON(`${url}/${arrFavNum}json`).then(data =>{
    console.log(data);
});

Promise.all(
    Array.from({ length: 4}, () => {
        return $.getJSON(`${url}/${arrFavNum}json`);
                       
    })
    .then(facts =>{
        facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
    }));

    