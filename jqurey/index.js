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



// 아트워크 메뉴와 이미지
const boxWrap = $('.boxwrap');
boxWrap.each(function () {
    let currentEl = $(this);

    let target = currentEl.find('.boxTitle h4 a');
    let tContainer = currentEl.find('.boxImgWrap>div');
    console.log(tContainer);

    target.on('click', function (e) {
        e.preventDefault();
        let tg = $(this);
        let currentLink = tg.attr('href');
        // console.log(currentLink);

        tContainer.hide();
        $(currentLink).show();

        target.removeClass('active');
        tg.addClass('active');
    })
});

/* ================= grup1 */
//아트워크 이미지 페이지
const boxImgWrap = $('.boxImgWrap');
boxImgWrap.each(function () {
    let currentEl = $(this);

    let target2 = currentEl.find('.pageBtn span a');
    let tContainer2 = currentEl.find('.G1Img>div');
    console.log(tContainer2);

    target2.on('click', function (e) {
        e.preventDefault();
        let tg2 = $(this);
        let currentLink2 = tg2.attr('href');
        console.log(currentLink2);

        tContainer2.hide();
        $(currentLink2).show();

        target2.removeClass('active');
        tg2.addClass('active');
    });
});

/* ================= grup2 */
//아트워크 이미지 페이지
boxImgWrap.each(function () {
    let currentEl = $(this);

    let target2 = currentEl.find('.pageBtn2 span a');
    let tContainer2 = currentEl.find('.G2Img>div');
    console.log(tContainer2);

    target2.on('click', function (e) {
        e.preventDefault();
        let tg2 = $(this);
        let currentLink2 = tg2.attr('href');
        console.log(currentLink2);

        tContainer2.hide();
        $(currentLink2).show();

        target2.removeClass('active2');
        tg2.addClass('active2');
    });
});

/* ================= grup3 */
//아트워크 이미지 페이지
boxImgWrap.each(function () {
    let currentEl = $(this);

    let target2 = currentEl.find('.pageBtn3 span a');
    let tContainer2 = currentEl.find('.G3Img>div');
    console.log(tContainer2);

    target2.on('click', function (e) {
        e.preventDefault();
        let tg2 = $(this);
        let currentLink2 = tg2.attr('href');
        console.log(currentLink2);

        tContainer2.hide();
        $(currentLink2).show();

        target2.removeClass('active3');
        tg2.addClass('active3');
    });
});

/* ================= grup4 */
//아트워크 이미지 페이지
boxImgWrap.each(function () {
    let currentEl = $(this);

    let target2 = currentEl.find('.pageBtn4 span a');
    let tContainer2 = currentEl.find('.G4Img>div');
    console.log(tContainer2);

    target2.on('click', function (e) {
        e.preventDefault();
        let tg2 = $(this);
        let currentLink2 = tg2.attr('href');
        console.log(currentLink2);

        tContainer2.hide();
        $(currentLink2).show();

        target2.removeClass('active4');
        tg2.addClass('active4');
    });
});

/* ================= grup5 */
//아트워크 이미지 페이지
boxImgWrap.each(function () {
    let currentEl = $(this);

    let target2 = currentEl.find('.pageBtn5 span a');
    let tContainer2 = currentEl.find('.G5Img>div');
    console.log(tContainer2);

    target2.on('click', function (e) {
        e.preventDefault();
        let tg2 = $(this);
        let currentLink2 = tg2.attr('href');
        console.log(currentLink2);

        tContainer2.hide();
        $(currentLink2).show();

        target2.removeClass('active5');
        tg2.addClass('active5');
    });
});