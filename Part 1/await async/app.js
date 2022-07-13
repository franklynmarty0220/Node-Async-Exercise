let favNum = 20;
let url = "http://numbersapi.com";

//1

async function number(){
    let data = await $.getJson(`${url}/${favNum}?json`);
    console.log(data);
}

number();

//2

const favNums = [5, 20,45];
async function nums() {
    let data = await $.getJSON(`${url}/${favNums}?json`);
    console.log(data);
}

//3

async function numFacts(){
    let facts = await Promise.all(
        Array.from({ length: 4}, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data =>{
        $('body').append(`<p>${data.text}</p>`)
    })
}