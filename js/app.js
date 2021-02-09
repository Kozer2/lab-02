'use strict'
console.log('JS Connected')
// create constructor function for the images
function Hornys(image_url, title, desc, keyword, horns){
    this.image_url = image_url;
    this.title = title;
    this.desc = desc;
    this.keyword = keyword;
    this.horns = horns;
    console.log('Constructor working');
}
// use a prototype function to render the images onto the webpage 
Hornys.prototype.render=function(container){
    const $hornyClone = $('.photo-template').clone();

    const $h2 = $hornyClone.find('h2');
    $h2.text(this.title);
    const $image = $hornyClone.find('img');
    $image.attr('src', this.image_url);
    $image.attr('alt', this.keyword)
    $hornyClone.find('p').text(this.desc);
    console.log('Render working', this.image_url, this.title, this.desc, this.keyword, this.horns);

    $hornyClone.removeClass('photo-template');
    $hornyClone.attr('class',this.title);


    $('main').append($hornyClone);
    console.log('apended clone');
}
// using ajax I need to call the information in the json file
$.ajax('data/page-1.json').then(callStuffBack => {
    console.log(callStuffBack);
    const horns = [];
    callStuffBack.forEach( (horner) => {
        horns.push(new Hornys(horner.image_url,horner.title,horner.description,horner.keyword,horner.horns));
        $('select').append(`<option value="${horner.keyword}">${horner.keyword}</option>`);
        console.log('json horners:',horner);
    });
    horns.forEach(horner => { horner.render();});
})











// const chameleon = new Hornys("https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg", "Serious Jackson's Chameleon", "This one is very serious.", "chameleon", 3);

chameleon.render();