
let card_template = select(".art-card").outerHTML;
let art_card_container = select(".art-works");
art_card_container.innerHTML = '';

function add_card(
            card_title          ,
            card_description    , 
            card_image          , 
            image_alt           , 
            btn_text            , 
            full_stars = 0      , 
            half_stars = 0
        )
{
    // replacing template strings with card content
    let card = card_template.replaceAll('{{card-title}}' , card_title);

    card = card.replaceAll('{{card-description}}'    , card_description);
    card = card.replaceAll('{{button-text}}'         , btn_text);
    card = card.replaceAll('{{card-image}}'          , card_image);
    card = card.replaceAll('{{image-alt}}'           , image_alt);

    // star templates
    let full_star = '<i class = "bi bi-star-fill"></i>';
    let half_star = '<i class = "bi bi-star-half"></i>';
    let star      = '<i class = "bi bi-star"></i>';

    // string to store stars
    let stars = '';

    stars += full_stars                < 5? full_star.repeat(full_stars)               : full_star.repeat(5);
    stars += full_stars                < 5? half_star.repeat(half_stars)               : '';
    stars += (full_stars + half_stars) < 5? star.repeat(5 - (full_stars + half_stars)) : '';

    // add stars to card
    card = card.replaceAll('{{card-stars}}', stars);
    console.log(stars);

    // add card to document art_card container
    art_card_container.innerHTML += card;
}

let count = 0;
// repeat add card for design purposes
for( i = 0; i < 20; i++) {
    add_card(
        'A Walk On The Moon',
        `We delve into the unknow taking each peice on step at a time as we uncover the truth
         We delve into the unknow taking each peice on step at a time as we uncover the truth`,
        `images/card_image${count}.jpg`,
        'image of artwork',
        'Read Now',
        3,
        1
    );

    count = count < 5? count + 1 : 0;
}