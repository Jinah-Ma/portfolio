//nav 구현
const win = $(window);
const menu = $('.menu-name li');
const sections = $('section');

let isOpen = false;

function scrollToSection(index) {
    let section = sections.eq(index);
    let offset = section.offset().top;
    $('html, body').stop().animate({ scrollTop: offset }, 1000, 'easeOutCirc');
}

win.on('scroll', function () {
    let sct = win.scrollTop();

    sections.each(function (i) {
        if (sct >= sections.eq(i).offset().top - 300) {
            menu.eq(i).addClass('on').siblings().removeClass('on');
            sections.eq(i).addClass('on').siblings().removeClass('on');
        }
    });
});


//홈 박스애니메이션 구현
header();
function header() {
    $('.header-box').css({
        opacity: 1,
        transform: 'translateY(0)',
    });
}

// 글씨 애니메이션
var animatedText = document.querySelectorAll(".animated-text");

function animate1(element) {
    var textArray = element.innerText.split("");
    element.firstChild.remove();

    var elArray = textArray.map(
        (letter, index) => {
            if (letter == " ") letter = '&nbsp;';
            var el = document.createElement("span");
            el.className = "letter";
            el.innerHTML = letter;
            el.style.animationDelay = index / (textArray.length) + "s";
            element.appendChild(el);
            return el;
        }
    );
    element.innerHtml = elArray;
}

Array.from(animatedText).map(animate1)

//복사버튼
const textCopy1 = document.getElementById("content-holder1");
const textCopy2 = document.getElementById("content-holder2");
const textCopy3 = document.getElementById("content-holder3");
const textCopy4 = document.getElementById("content-holder4");

// button 클릭 이벤트
document.getElementById("copy-button1").onclick = () => {
    window.navigator.clipboard.writeText(textCopy1.textContent).then(() => { });
};
document.getElementById("copy-button2").onclick = () => {
    window.navigator.clipboard.writeText(textCopy2.textContent).then(() => { });
};
document.getElementById("copy-button3").onclick = () => {
    window.navigator.clipboard.writeText(textCopy3.textContent).then(() => { });
};
document.getElementById("copy-button4").onclick = () => {
    window.navigator.clipboard.writeText(textCopy4.textContent).then(() => { });
};




//스크롤 top탭 구현, 애니메이션 구현
const scrollH = $('header').height();
const scrollReal1 = $(window).height() - scrollH;
const topTab = $('.toptab');

win.on('scroll', function () {
    let sct = $(this).scrollTop();

    if (sct > scrollReal1) {
        topTab.fadeIn();

    } else {
        topTab.fadeOut();
    }
})

topTab.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
})

//about 애니메이션 구현
win.on('scroll', function () {
    const winH = win.height();
    let scroll = $(window).scrollTop();
    let about = $('.main-inner').offset().top;

    if (scroll + winH >= about) {
        $('.title-img').css({
            opacity: 1,
            transform: 'translateY(-53rem)',
        });
    }

    if ($(window).width <= 799) {
        if (scroll + winH >= about) {
            $('.title-img').css({
                opacity: 1,
                transform: 'translateY(-26rem)',
            });
        }
    }
})


// 푸터 애니메이션 구현
win.on('scroll', function () {
    let windowHeight = win.height();
    let scroll = $(window).scrollTop();
    let footerTop = $('footer').offset().top;

    if (scroll + windowHeight >= footerTop) {
        $('.contactText').fadeIn(1500);
    }
});



//햄버거 메뉴 구현
let btn = $('header .ham');
let open = $('header .gnb');
let overay = $('header .overay');

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


//보유기술
const progressWrap = $('.progress-bar');
const animate = $('.Level').offset().top - 600;

console.log(animate);

win.on('scroll', function () {
    if (win.scrollTop() >= animate && !isOpen) {
        progressAnimation();
    }
});

function progressAnimation() {
    progressWrap.each(function () {
        const $this = $(this);
        const progressBar = $this.find('.bar');
        const progressText = $this.find('.rate');
        const progressRate = progressText.attr('data-rate');

        progressBar.stop().animate({ width: progressRate + '%' }, 1500);

        const text = function () {
            $({ rate: 0 }).stop().animate(
                { rate: progressRate },
                {
                    duration: 1500,
                    progress: function () {
                        let now = this.rate;
                        // console.log(now);
                        progressText.text(Math.floor(now) + '%');
                    },
                    complete: function () {
                        isOpen = true;
                    }
                }
            )
        }
        text();
    })
}

//마스크
const devices = $('.mockup.pc, .mockup.tab, .mockup.mobile');

reScroll();
function reScroll() {
    devices.each(function (i, deviceEl) {
        let device = $(this);
        let screen = device.find('.mask>img');
        let mask = device.find('.mask');

        let heightD = screen.innerHeight() - mask.innerHeight();

        device.data('heightD', heightD);
        // console.log(heightD);

        device.on({
            mouseenter: function () {
                screen.stop().animate({
                    top: -heightD
                }, 3000)
            },
            mouseleave: function () {
                screen.stop().animate({
                    top: 0
                }, 3000)
            }
        });
    })
}
win.on('resize', function () {
    reScroll();
})

// 아트워크 메뉴와 이미지
const boxWrap = $('.boxwrap');
boxWrap.each(function () {
    let currentEl = $(this);

    let target = currentEl.find('.boxTitle h4 a');
    let tContainer = currentEl.find('.boxImgWrap>div');
    // console.log(tContainer);

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
    // console.log(tContainer2);

    let overayB = $('.overayB');

    target2.on('click', function (e) {
        e.preventDefault();
        let tg2 = $(this);

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
    // console.log(tContainer2);

    target2.on('click', function (e) {
        e.preventDefault();
        let tg2 = $(this);
        let currentLink2 = tg2.attr('href');
        // console.log(currentLink2);

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
    // console.log(tContainer2);

    target2.on('click', function (e) {
        e.preventDefault();
        let tg2 = $(this);
        let currentLink2 = tg2.attr('href');
        // console.log(currentLink2);

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
    // console.log(tContainer2);

    target2.on('click', function (e) {
        e.preventDefault();
        let tg2 = $(this);
        let currentLink2 = tg2.attr('href');
        // console.log(currentLink2);

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
    // console.log(tContainer2);

    target2.on('click', function (e) {
        e.preventDefault();
        let tg2 = $(this);
        let currentLink2 = tg2.attr('href');
        // console.log(currentLink2);

        tContainer2.hide();
        $(currentLink2).show();

        target2.removeClass('active5');
        tg2.addClass('active5');
    });
});

/* ================= grup6 */
//아트워크 이미지 페이지
boxImgWrap.each(function () {
    let currentEl = $(this);

    let target2 = currentEl.find('.pageBtn6 span a');
    let tContainer2 = currentEl.find('.G6Img>div');
    // console.log(tContainer2);

    target2.on('click', function (e) {
        e.preventDefault();
        let tg2 = $(this);
        let currentLink2 = tg2.attr('href');
        // console.log(currentLink2);

        tContainer2.hide();
        $(currentLink2).show();

        target2.removeClass('active6');
        tg2.addClass('active6');
    });
});

//이미지 라이트 박스
let pic = $('.pic');
const light = $('.overayB');
let lightImg = $('.lightImg');

pic.on('click', function (e) {
    e.preventDefault;
    let picImg = $(this).find('img');
    let srcPicImg = picImg.attr('data-src');
    // console.log(srcPicImg);

    lightImg.attr('src', srcPicImg);
    light.show();
    $('html').addClass('scrollLock');
});

light.on('click', function (){
    light.css('display', 'none');
    $('html').removeClass('scrollLock');
})





//호버시 글씨
let page = $('.G1Img .page');
let img = $('.img');
let imgText = $('.hoverText');

img.on('mouseenter', function () {
    $(this).find(imgText).fadeIn();
})
img.on('mouseleave', function () {
    $(this).find(imgText).fadeOut();
})

