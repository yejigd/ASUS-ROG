gsap.registerPlugin(ScrollTrigger);

var $window      = $(window);
var $wrap        = $('.wrap');
var $footer      = $('.footer');

const loadMotion = () => {
    const _loader = $('.rog__loader'),
          _intro  = _loader.find('.panel_intro'),
          _txt    = _loader.find('.panel_txt'),
          _slogan = _loader.find('.panel_slogan'),
          _cover  = _loader.find('.cover_panel');

    const _contents = $('.contents'),
          _nav      = $('.nav');

    let mm = gsap.matchMedia();
    mm.add('(min-width:769px)', () => {
        // PC Motion 
        gsap.set(_nav, {xPercent:-150});
        gsap.set(_txt, {scale:.9, visibility:'hidden'});
        gsap.set(_txt.find('.rog_txt span'), {y:'100%'});
        gsap.set(_txt.find('.txt_top span'), {y:'100%'});
        gsap.set(_txt.find('.txt_bot span'), {y:'-100%'});

        gsap.set(_slogan, {visibility:'hidden'});
        gsap.set(_slogan.find('.panel'), {opacity:0, visibility:'hidden'});
        gsap.set(_slogan.find('.obj_inner'), {scale:1.2});

        gsap.set(_slogan.find('.kv'), {rotateX:90});
        gsap.set(_cover.find('.cover'), {y:'100%'});

        const tl = new TimelineMax({
            scrollTrigger : {
                trigger: _loader,
                start:'top top',
                end:'+=300%',
                scrub:1.5,
                pin: true,
            }
        });

        tl.to(_intro.find('p'), {duration:.1, fontSize:'23vw'})
        .addLabel('text')
        .to(_txt, .1, {scale:1, visibility:'visible'}, 'text')
        .to(_txt.find('.shm_img'), .3, {clipPath:'inset(5.5% 62% 5.5% 10%)'}, 'text')
        .to(_txt.find('.rog_txt span'), .3, {y:0}, 'text')
        .to(_txt.find('.txt_top span'), .3, {y:0}, 'text')
        .to(_txt.find('.txt_bot span'), .3, {y:0}, 'text')
        .to(_txt.find('.shm_img'), .4,  {clipPath:'inset(0% 0% 0% 0%)'})
        .to(_txt.find('.txt_solid'), .4, {clipPath:'inset(0 -1%)', delay:-.4})
        .addLabel('slogan')
        .to(_slogan, .2, {className:'rog__loader__panel panel_slogan run', visibility:'visible'}, 'slogan')
        .to(_slogan.find('.obj_inner'), .2, {scale:1}, 'slogan')
        .to(_slogan.find('.panel')[0], .3, {className:'panel on', visibility:'inherit', opacity:1}, 'slogan')
        .addLabel('kvisual')
        .to(_slogan.find('.panel')[0], .2, {opacity:0}, 'kvisual')
        .to(_slogan.find('.panel')[1], {duration:.3, className:'panel on', visibility:'inherit', opacity:1}, 'kvisual')
        .to(_slogan.find('.kv'), .2, {rotateX:0}, 'kvisual+=.2')
        .to(_slogan.find('.txt_line'), .1, {opacity:0, zIndex:3})
        .to(_slogan.find('.kv img'), .3, {scale:1, delay:-.1})
        .to(_slogan.find('.kv img'), .3, {scale:1})
        .addLabel('cover')
        .to(_slogan, .2, {className:'rog__loader__panel panel_slogan', visibility:'visible'}, 'cover')
        .to(_cover.find('.cover_bg'), {duration:.6, y:0, ease:Power2.easeOut}, 'cover+=.2')
        .to(_cover.find('.cover_floating'), {duration:.6, y:0, ease:Power2.easeOut}, 'cover+=.4')
        .to(_cover.find('.cover_floating'), {duration:.2, y:0, ease:Power2.easeOut});

        const rog_area = $('.rog__vis__ttl'),
        rog_ttl  = rog_area.find('.rog_title');

        const sl = new TimelineMax({
            scrollTrigger : {
                trigger: rog_area,
                start:'20% 50%',
                end:'+=50%',
                scrub:1
            }
        });

        sl.to(rog_area.find('.inner'), 1, {padding:'0 22vw',});
        sl.to(rog_ttl.find('.h1 span')[1], 1, {left:0, delay:-1});
        sl.to(rog_ttl.find('.h1_small span')[1], 1, {right:0, delay:-1});

        const prize = $('.giveaways__item.first');
        gsap.utils.toArray(prize).forEach(function(elem) {
            ScrollTrigger.create({
                start:'top 90%',
                end:'bottom 90%',
                trigger: elem,
                onEnter: function() {
                    gsap.to($(elem).find('img'), .6, {scale:1.07, ease:Power1.easeOut, yoyo:true, repeat:2, repeatDelay:.1});
                }
            });
        });
    });

    mm.add('(max-width:768px)', () => {
        gsap.set(_txt, {visibility:'hidden'});
        gsap.set(_txt.find('.rog_txt span'), {y:'100%'});
        gsap.set(_txt.find('.txt_top span'), {y:'100%'});
        gsap.set(_txt.find('.txt_bot span'), {y:'-100%'});

        gsap.set(_slogan, {visibility:'hidden'});
        gsap.set(_slogan.find('.panel'), {opacity:0, visibility:'hidden'});
        gsap.set(_slogan.find('.obj_inner'), {scale:1.2});

        gsap.set(_slogan.find('.kv'), {scale:0});
        gsap.set(_cover.find('.cover'), {y:'100%'});

        const tl = new TimelineMax({
            scrollTrigger : {
                trigger: _loader,
                start:'top top',
                end:'+=320%',
                scrub:2,
                pin: true,
            }
        });

        tl.to(_intro.find('p'), {duration:.1, fontSize:'50vw'})
        .addLabel('text')
        .to(_txt, .1, {visibility:'visible'}, 'text')
        .to(_txt.find('.rog_txt span'), .3, {y:0}, 'text')
        .to(_txt.find('.txt_top span'), .3, {y:0}, 'text')
        .to(_txt.find('.txt_bot span'), .3, {y:0}, 'text')
        .to(_txt.find('.shm_img'), .3,  {clipPath:'inset(0% -1%)'}, 'text+=.3')
        .to(_txt.find('.rog_txt .txt_solid'), .3, {clipPath:'inset(0 -1%)'}, 'text+=.3')
        .addLabel('slogan')
        .to(_slogan, .2, {className:'rog__loader__panel panel_slogan run', visibility:'visible'}, 'slogan')
        .to(_slogan.find('.obj_inner'), .3, {scale:1}, 'slogan')
        .to(_slogan.find('.panel')[0], .4, {className:'panel on', visibility:'inherit', opacity:1}, 'slogan')
        .addLabel('kvisual')
        .to(_slogan.find('.panel')[0], .1, {opacity:0}, 'kvisual')
        .to(_slogan.find('.panel')[1], .4, {className:'panel on', visibility:'inherit', opacity:1}, 'kvisual+=.1')
        .to(_slogan.find('.kv'), .2, {scale:1}, 'kvisual+=.2')
        .to(_slogan.find('.txt_line'), .1, {opacity:0, zIndex:3})
        .to(_slogan.find('.kv img'), .3, {scale:1, delay:-.1})
        .to(_slogan.find('.kv img'), .2, {scale:1})
        .addLabel('cover')
        .to(_slogan, .2, {className:'rog__loader__panel panel_slogan', visibility:'visible'}, 'cover')
        .to(_cover.find('.cover_bg'), {duration:.4, y:0}, 'cover')
        .to(_cover.find('.cover_floating'), {duration:.4, y:0, ease:Power2.easeOut}, 'cover+=.2')
        .to(_cover.find('.cover_floating'), {duration:.1, y:0});

        const rog_area = $('.rog__vis__ttl'),
        rog_ttl  = rog_area.find('.rog_title');

        const sl = new TimelineMax({
            scrollTrigger : {
                trigger: rog_area,
                start:'20% 50%',
                end:'+=50%',
                scrub:1
            }
        });

        sl.to(rog_area.find('.inner'), 1, {padding:'0 11vw',});
        sl.to(rog_ttl.find('.h1 span')[1], 1, {left:0, delay:-1});
        sl.to(rog_ttl.find('.h1_small span')[1], 1, {right:0, delay:-1});
    });
    
    const cl = new TimelineMax({
        scrollTrigger : {
            trigger: _contents,
            start:'top 70%',
            end:'+=50%',
            scrub:1.2,
        }
    });

    const _vis = $('.rog__vis');
    
    cl.to(_nav, .5, {xPercent:0, ease:Power2.easeOut});
    cl.to(_vis.find('.rog__vis__panel'), .1, {className:'rog__vis__panel on', delay:-.5});
    cl.to(_vis.find('.rog__vis__typo .txt_solid'), .5, {clipPath:'inset(0 0 -5% 0)', delay:-.5});

    gsap.utils.toArray('.solid_marquee').forEach(function(elem) {
        ScrollTrigger.create({
            //markers:true,
            start:'top 70%',
            end:'bottom 70%',
            trigger: elem,
            onEnter: function() {
                gsap.to(elem.children[0].children[1], .5, {clipPath:'inset(0 0 -5% 0)'});
                gsap.to(elem.children[1].children[1], .5, {clipPath:'inset(0 0 -5% 0)'});
            },
            onLeaveBack: function() {
                gsap.to(elem.children[0].children[1], .5, {clipPath:'inset(0 0 100% 0)'});
                gsap.to(elem.children[1].children[1], .5, {clipPath:'inset(0 0 100% 0)'});
            }
        });
    });
}

// mobile device check
var isMobile = false;
function is_mobile(){
    if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = true;

        return isMobile;
    }
}

var $images = [];
function preLoad() {
    for(let i = 0; i < arguments.length; i++){
        $images[i] = new Image();
        $images[i].src = preLoad.arguments[i];
    }
}

const scrollNav = () => {
    ScrollTrigger.create({
        trigger: $('.rog__vis'),
        start: 'top 80%',
        onEnter: () => {
            $('nav li').eq(0).addClass('on').siblings().removeClass('on');
        },
    });

    ScrollTrigger.create({
        trigger: $('.rog__story'),
        start: 'top 80%',
        onEnter: () => {
            $('nav li').eq(1).addClass('on').siblings().removeClass('on');
        },
        onLeaveBack: () => {
            $('nav li').eq(0).addClass('on').siblings().removeClass('on');
        }
    });

    ScrollTrigger.create({
        trigger: $('.rog__event'),
        start: 'top 80%',
        onEnter: () => {
            $('nav li').eq(2).addClass('on').siblings().removeClass('on');
        },
        onLeaveBack: () => {
            $('nav li').eq(1).addClass('on').siblings().removeClass('on');
        }
    });

    ScrollTrigger.create({
        trigger: $('.rog__series'),
        start: 'top 80%',
        end:'bottom 60%',
        onEnter: () => {
            $('nav li').eq(3).addClass('on').siblings().removeClass('on');
        },
        onLeaveBack: () => {
            $('nav li').eq(2).addClass('on').siblings().removeClass('on');
        }
    });
} 

const barsAni = () => {
    const b = $('.bars_box');

    b.each(function (){
        let t = $(this),
            c = 20;
            h = '';

        for(let i = 0; i < c; i++){
            h += `<span class="bar">
                    <span class="left"></span>
                    <span class="right"></span>
                    <span class="center"></span>
                    <span class="bottom"></span>
                    <span class="shadow"></span>
                </span>`;
        }
        t.html(h);
    });

    const s = $('.slash_box');
    s.each(function (){
        let t = $(this),
            c = 30;
            h = '';

        for(let i = 0; i < c; i++){
            h += `<span class="bar"></span>`;
        }
        t.html(h);

        if(t.hasClass('reverse')) gsap.fromTo(t.find('.bar'), {opacity:0}, {duration:.05, opacity:1, stagger:{from:'end', each:.05}, yoyo:true, repeat:-1});
        else gsap.fromTo(t.find('.bar'), {opacity:0}, {duration:.05, opacity:1, stagger:.05, yoyo:true, repeat:-1});
    });
}

var $footer      = document.querySelector('.footer');
var $footerInner = document.querySelector('.footer__inner');
var $rogInner    = document.querySelector('.rog__inner');

const chkFooterHeight = (s) => {
    let footerHeight = $footerInner.clientHeight;
    let winWidth     = window.innerWidth;
    let winHeight    = window.innerHeight;
    let contHeight   = $rogInner.clientHeight;
    let revealHeight = Math.max(s - (contHeight - footerHeight - winHeight), 0);

    let mm = gsap.matchMedia();
    mm.add('(min-width:769px)', () => {
        mgTop = winWidth * .23;
        pdBot = footerHeight - mgTop;
    });

    mm.add('(max-width:768px)', () => {
        mgTop = winWidth * .6;
        pdBot = footerHeight - mgTop;
    });

    $($rogInner).css('paddingBottom',pdBot);

    gsap.set($footer, {height:revealHeight, duration:.1});
}

$('.nav li').on('click', function(){
    target = $(this).data('scroll');

    let t = $('[data-scroll-target="'+target+'"]').offset().top;

    if(target == 'main'){
        t = t - ($window.width() * .1);
    }
    gsap.to($window, 2, {
        scrollTo : {y: t, autoKill:true},
        ease: Power3.easeOut,
        overwrite: 5
    });		
}); 

const scrollDisable = () => {
    $('body').addClass('hidden');
    window.addEventListener('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    }, {passive:false});
}

const scrollAble = () => {
    $('body').removeClass('hidden');
    $window.off('scroll touchmove mousewheel');
}

var giveSwiper;
var swiperInit = false;

swiperMode = () => {
    let mobile = window.matchMedia("(min-width: 1px) and (max-width: 768px)");

    if(mobile.matches){
        if(!swiperInit){
            swiperInit = true;

            $('.giveaways__area').each(function(){
                h1 = $(this).find('.giveaways__item').eq(0).html();
                h2 = $(this).find('.giveaways__item').eq(2).html();

                $(this).find('.giveaways__item').eq(0).html(h2);
                $(this).find('.giveaways__item').eq(2).html(h1);
            });

            giveSwiper = new Swiper(".giveaways__area", {
                loop:true,
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: -30,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: false,
                },
                initialSlide:1,
            });
        }
    } else if(swiperInit) {
        giveSwiper[0].destroy(false);
        giveSwiper[1].destroy(false);

        $('.giveaways__area').each(function(){
            h1 = $(this).find('.giveaways__item').eq(0).html();
            h2 = $(this).find('.giveaways__item').eq(2).html();

            $(this).find('.giveaways__item').eq(0).html(h2);
            $(this).find('.giveaways__item').eq(2).html(h1);
        });
        
        swiperInit = false;
    }
}

const init = () => {
    loadMotion();
    scrollNav();
    chkFooterHeight($window.scrollTop());

    // youtube API set
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

window.addEventListener('resize', () =>{
    ScrollTrigger.refresh();

    swiperMode();

    if(!is_mobile()){
        chkFooterHeight(0);
    }
});

window.addEventListener('scroll', () =>{
    st = $(this).scrollTop();

    chkFooterHeight(st);
});

window.addEventListener('DOMContentLoaded', () => {
    init();
});

window.addEventListener('load', () => {
    barsAni();
    swiperMode();

    new Swiper(".rog__story__vis", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        initialSlide:0,
        pagination: {
            el: ".pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper_next',
            prevEl: '.swiper_prev'
        },
        breakpoints: {
            769: {
                initialSlide:1
            }
        }
    });

    preLoad('/assets/images/sl_bg1.jpg','/assets/images/sl_bg2.jpg','/assets/images/sl_bg3.jpg','/assets/images/sl_bg4.jpg','/assets/images/sl_bg5.jpg',
    '/assets/images/sl_bg_m1.jpg','/assets/images/sl_bg_m2.jpg','/assets/images/sl_bg_m3.jpg','/assets/images/sl_bg_m4.jpg','/assets/images/sl_bg_m5.jpg',
    '/assets/images/sl_bg_m6.jpg','/assets/images/sl_bg_m7.jpg','/assets/images/sl_bg_m8.jpg','/assets/images/sl_bg_m9.jpg','/assets/images/sl_bg_m10.jpg',);
});