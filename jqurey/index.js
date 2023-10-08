let btn = $('header span.ham');
let open = $('header .gnb');
let solid = $('header .solid');

let isOpen = false;

btn.on('click', function () {
    if (!isOpen) {
        open.css('display', 'block'),
            open.css('width', '20rem'),
            open.css('z-index', '999'),
            btn.css('left', '22rem'),
            solid.css('left', '23.5rem'),
            btn.addClass('active');
    } else {
        open.css('display', ''),
            open.css('width', ''),
            open.css('z-index', ''),
            btn.css('left', ''),
            solid.css('left', ''),
            btn.removeClass('active');
    }
    isOpen = !isOpen;
});
