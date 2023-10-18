//스크롤 top탭 구현, 애니메이션 구현
const scrollH = $('header').height();
const scrollReal = $(window).height() - scrollH;

$(window).on('scroll', function () {
    let sct = $(this).scrollTop();

    if (sct > scrollReal) {
        $('.toptab').show();
        $('.title-img').addClass('show').css('display', 'block');

    } else {
        $('.toptab').hide();
        $('.title-img').removeClass('show').css('display', 'none');
    }

})

// 애니메이션 구현
$(window).on('scroll', function () {
    let windowHeight = $(window).height();
    let scroll = $(window).scrollTop();
    let footerTop = $('footer').offset().top;

    if (scroll + windowHeight >= footerTop) {
        $('.contactText').fadeIn(800);
    } else {
        $('.contactText').hide();
    }
});



//햄버거 메뉴 구현
let btn = $('header .ham');
let open = $('header .gnb');
let overay = $('header .overay');

let isOpen = false;

btn.on('click', function () {
    if (!isOpen) {
        open.css('display', 'block'),
            open.css('width', '20rem'),
            open.css('z-index', '999'),
            btn.css('left', '22rem'),
            overay.show();
            btn.addClass('active');
            $('header span:first-child').addClass('active');
            $('header span.solid').addClass('active');
            $('header span:last-child').addClass('active');
    } else {
        open.css('display', ''),
            open.css('width', ''),
            open.css('z-index', ''),
            btn.css('left', ''),
            overay.hide();
            btn.removeClass('active');
            $('header span:first-child').removeClass('active');
            $('header span.solid').removeClass('active');
            $('header span:last-child').removeClass('active');
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

    let target2 = currentEl.find('.pageBtn1 span a');
    let tContainer2 = currentEl.find('.G1Img>div');
    console.log(tContainer2);

    target2.on('click', function (e) {
        e.preventDefault();
        let tg2 = $(this);
        let currentLink2 = tg2.attr('href');
        console.log(currentLink2);

        tContainer2.hide();
        $(currentLink2).show();

        target2.removeClass('active1');
        tg2.addClass('active1');
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


//푸터 애니메이션 구현
$('section.contact span').css('opacity', '1');
$('.conBox').css('opacity', '1');

