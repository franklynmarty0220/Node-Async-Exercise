// Part 1
$(function()
    {let url = 'https://deckofcardsapi.com/api/deck';}
)

$.getJson (` ${url}/new/draw`).then(data => {
    let { suit, value} = data.cards[0];
    console.log (`${value.toLowerCase()} of ${suit.toLowerCase()}`);
});

//Part 2

let first = null;
$.getJSON(`${url}/new/draw/`)
    .then(data => {
        first =data.cards[0];
        let deckId = data.deck_id
        return $.getJSON(`${url}/${deckId}/draw/`);
    })
    .then (data => {
        let second = data.cards[0]
        [first, second].forEach(function(card){
            console.log (`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`)
        });
    });


//Part 3

let deckId = null;

$.getJSON(`${url}/new/shuffle`)
    .then(data =>{
        deckId = data.deck_id;
        btn.show();
    })

let btn = $('button');
let cardArea = $('#card-area');

btn.on('click', function(){
    $.getJSON(`${url}/${deckId}/draw`)
        .then (data => {
            let source = data.cards[0].image;
            let angle = Math.random() * 90 -45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            cardArea.append(
                $('<img>', {
                    src : source,
                    css: { 
                        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                    }
                })
            );
            if (data.remaining === 0) btn.remove();
        })
})





