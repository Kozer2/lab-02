'use strict'
console.log('JS Connected')
// create constructor function for the images
function Hornys(image_url, title, description, keyword, horns){
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    console.log('Constructor working');
}
// use a prototype function to render the images onto the webpage 
Hornys.prototype.render=function(){
    const htmlTemplate = $('#photo-template').html();
    const hornObject = this;
    const renderedHornObject = Mustache.render(htmlTemplate, hornObject);
    $('main').append(renderedHornObject);
}

//     const $hornyClone = $('.photo-template').clone();
//     const $h2 = $hornyClone.find('h2');
//     $h2.text(this.title);
//     const $image = $hornyClone.find('img');
//     $image.attr('src', this.image_url);
//     $image.attr('alt', this.keyword)
//     $hornyClone.find('p').text(this.description);
//     console.log('Render working', this.image_url, this.title, this.description, this.keyword, this.horns);

//     $hornyClone.removeClass('photo-template');
//     $hornyClone.attr('class',this.title);
//     $('main').append($hornyClone);
//     console.log('appended clone');
// }

const horns = [];
const toHorns = [];

// using ajax I need to call the information in the json file
$.ajax('data/page-1.json').then(callStuffBack => {
    console.log(callStuffBack);
    
    callStuffBack.forEach( (hornsHad) => {
        horns.push(new Hornys(hornsHad.image_url,hornsHad.title,hornsHad.description,hornsHad.keyword,hornsHad.horns));
        $('select').append(`<option value="${hornsHad.keyword}">${hornsHad.keyword}</option>`);
        console.log('json hornsHads:',hornsHad);
    });

    
    $('select').change( function () {
        const choice = $('select').find(':selected').text();
        console.log(choice);
        $('div').hide();
        $(`.${choice}`).show();
    });
    horns.forEach(hornsHad => { hornsHad.render();});
})

$.ajax('data/page-2.json').then(callStuffBack => {
    console.log(callStuffBack);
    
    callStuffBack.forEach( (hornsHad) => {
        horns.push(new Hornys(hornsHad.image_url,hornsHad.title,hornsHad.description,hornsHad.keyword,hornsHad.horns));
        $('select').append(`<option value="${hornsHad.keyword}">${hornsHad.keyword}</option>`);
        console.log('json hornsHads:',hornsHad);
    });

    
    $('select').change( function () {
        const choice = $('select').find(':selected').text();
        console.log(choice);
        $('div').hide();
        $(`.${choice}`).show();
    });
    horns.forEach(hornsHad => { hornsHad.render();});
})









// const chameleon = new Hornys("https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg", "Serious Jackson's Chameleon", "This one is very serious.", "chameleon", 3);

// chameleon.render();