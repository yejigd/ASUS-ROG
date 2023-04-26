$(function(){
    gsap.registerPlugin(ScrollTrigger);

    const loadMotion = () => {
        const _loader = $('.rog__loader'),
              _intro = _loader.find('.panel_intro'),
              _txt = _loader.find('.panel_txt'),
              _slogan = _loader.find('.panel_slogan'),
              _cover = _loader.find('.cover_panel');

        const _contents = document.querySelector('.contents'),
        _nav = document.querySelector('.nav');

        wh = $(window).height();


        gsap.set(_nav, {xPercent:-150});

        gsap.set(_intro, {y:20, opacity:0});
        
        gsap.set(_txt, {scale:.9, visibility:'hidden'});
        gsap.set(_txt.find('.rog_txt span'), {y:'100%'});
        gsap.set(_txt.find('.txt_top span'), {y:'100%'});
        gsap.set(_txt.find('.txt_bot span'), {y:'-100%'});

        gsap.set(_slogan, {visibility:'hidden'});
        gsap.set(_slogan.find('.panel'), {opacity:0, visibility:'hidden'});
        gsap.set(_slogan.find('.obj_inner'), {scale:1.2});

        gsap.set(_slogan.find('.kv'), {rotateX:90});

        gsap.set(_cover.find('.cover'), {y:'100%'});

        //gsap.set(_contents, {y:'5vw'});
        

        const tl = new TimelineMax({
            scrollTrigger : {
                //markers: {startColor:'#1200FF', endColor:'#F21De4'},
                trigger: _loader,
                start:'top top',
                end:'+=300%',
                scrub:1.7,
                pin: true,
            }
        });

        gsap.to(_intro, .2, {y:0, opacity:1});

        tl.to(_intro.find('p'), {duration:.1, fontSize:'23vw'})
        .addLabel('text')
        .to(_txt, .1, {scale:1, visibility:'visible'}, 'text')
        .to(_txt.find('.shm_img'), .3, {clipPath:'inset(5.5% 62% 5.5% 10%)'}, 'text')
        .to(_txt.find('.rog_txt span'), .3, {y:0}, 'text')
        .to(_txt.find('.txt_top span'), .3, {y:0}, 'text')
        .to(_txt.find('.txt_bot span'), .3, {y:0}, 'text')
        .to(_txt.find('.shm_img'), .4,  {clipPath:'inset(0% 0% 0% 0%)'});
        tl.to(_txt.find('.txt_solid'), .4, {clipPath:'inset(0 -1%)', delay:-.4})
        .addLabel('slogan')
        .to(_slogan, .2, {visibility:'visible'}, 'slogan')
        .to(_slogan.find('.obj_inner'), .2, {scale:1}, 'slogan')
        .to(_slogan.find('.panel')[0], .2, {className:'panel on', visibility:'inherit', opacity:1}, 'slogan')
        .addLabel('kvisual')
        .to(_slogan.find('.panel')[1], {duration:.3, className:'panel on', visibility:'inherit', opacity:1}, 'kvisual')
        .to(_slogan.find('.kv'), .2, {rotateX:0}, 'kvisual+=.2')
        .to(_slogan.find('.txt_line'), .1, {opacity:0, zIndex:3})
        .to(_slogan.find('.kv img'), .3, {scale:1, delay:-.1})
        .to(_slogan.find('.kv img'), .2, {scale:1})
        .addLabel('cover')
        .to(_cover.find('.cover_bg'), {duration:.6, y:0, ease:Power2.easeOut}, 'cover')
        .to(_cover.find('.cover_floating'), {duration:.6, y:0, ease:Power2.easeOut}, 'cover+=.15')
        .to(_cover.find('.cover_floating'), {duration:.2, y:0, ease:Power2.easeOut});
        // .to(_contents, {duration:.6, y:0, ease:Power2.easeOUt}, 'cover+=.15');


        const cl = new TimelineMax({
            scrollTrigger : {
                //markers: {startColor:'#1200FF', endColor:'#F21De4'},
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

        const rog_area = $('.rog__vis__ttl'),
              rog_ttl  = rog_area.find('.rog_title');

        const sl = new TimelineMax({
            scrollTrigger : {
                //markers: true,
                trigger: rog_area,
                start:'20% 50%',
                end:'+=50%',
                scrub:1
            }
        });

        sl.to(rog_area.find('.inner'), 1, {padding:'0 22.3vw',});
        sl.to(rog_ttl.find('.h1 span')[1], 1, {left:0, delay:-1});
        sl.to(rog_ttl.find('.h1_small span')[1], 1, {right:0, delay:-1});


        gsap.utils.toArray('.solid_marquee').forEach(function(elem) {
            
            ScrollTrigger.create({
                start:'top 70%',
                trigger: elem,
                onEnter: function() {

                    gsap.to(elem.children[0].children[1], .5, {clipPath:'inset(0 0 -5% 0)'});
                    gsap.to(elem.children[1].children[1], .5, {clipPath:'inset(0 0 -5% 0)'});
                }
            });
        });


        const footer = $('.footer');
        gsap.set(footer, {yPercent:-100});
        gsap.set(footer.find('.footer__inner'), {y:30, opacity:0});

        const fl = new TimelineMax({
            scrollTrigger : {
                //markers: true,
                trigger: '.footer',
                start:'20% 50%',
                end:'+='+footer.height(),
                scrub:1.2
            }
        });

        fl.to(footer, 1, {yPercent:0}).to(footer.find('.footer__inner'), .3, {y:0, opacity:1});

        /* infinite ani */
        gsap.to('.summary__arr', .5, {y:'1vw', ease:Power1.easeOut, yoyo:true, repeat:-1});
        gsap.to('.giveaway1', .7, {scale:1.05, ease:Power1.easeOut, yoyo:true, repeat:-1});
        gsap.to('.giveaway2', .8, {scale:1.15, ease:Power1.easeOut, yoyo:true, repeat:-1});
    }

    const copyToClipboard = (val) => {
        const t = document.createElement('textarea'); 
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t); 
    }

    // hash tag click event
    $('.hash_btn').on('click', function(){
        const hash = '#ROG #TeamROG #손흥민ROG #ForThoseWhoDare';

        copyToClipboard(hash);
        alert('필수 해시태그가 복사되었습니다.');
    });


    // mobile device check
    var isMobile = false;
    function is_mobile(){
        if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            isMobile = true;

            return isMobile;
        }
    }

    // browser check
    function is_browserCheck(){ 
        const agt = navigator.userAgent.toLowerCase(); 
        if (agt.indexOf("chrome") != -1) return 'Chrome'; 
        if (agt.indexOf("opera") != -1) return 'Opera'; 
        if (agt.indexOf("staroffice") != -1) return 'Star Office'; 
        if (agt.indexOf("webtv") != -1) return 'WebTV'; 
        if (agt.indexOf("beonex") != -1) return 'Beonex'; 
        if (agt.indexOf("chimera") != -1) return 'Chimera'; 
        if (agt.indexOf("netpositive") != -1) return 'NetPositive'; 
        if (agt.indexOf("phoenix") != -1) return 'Phoenix'; 
        if (agt.indexOf("firefox") != -1) return 'Firefox'; 
        if (agt.indexOf("crios") != -1) return 'Chrome_m'; 
        if (agt.indexOf("safari") != -1) return 'Safari'; 
        if (agt.indexOf("skipstone") != -1) return 'SkipStone'; 
        if (agt.indexOf("netscape") != -1) return 'Netscape'; 
        if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla'; 
        if (agt.indexOf("msie") != -1) { 
            let rv = -1; 
            if (navigator.appName == 'Microsoft Internet Explorer') { 
                let ua = navigator.userAgent; var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})"); 
            if (re.exec(ua) != null) 
                rv = parseFloat(RegExp.$1); 
            } 
            return 'Internet Explorer '+rv; 
        } 
    }

    function smoothScroll(){
        if(is_mobile() || is_browserCheck() == 'Firefox') return;
        var $window = $(window);
        if(smoothScroll_passive()){
            window.addEventListener("wheel",smoothScroll_scrolling,{passive: false});
        }else{
            $window.on("mousewheel DOMMouseScroll", smoothScroll_scrolling);
        }				
    }
    
    function smoothScroll_passive(){
        var supportsPassive = false;
        try {document.addEventListener("test", null, { get passive() { supportsPassive = true }});
        } catch(e) {}
        return supportsPassive;
    }

    function smoothScroll_scrolling(e){
        if(!e.path){
            e.path = new Array();
            function callParentNode(child){
                if(child.parentNode){
                    e.path.push(child.parentNode);
                    callParentNode(child.parentNode);
                }
                return;
            }
            e.path.push(e.target);
            callParentNode(e.target);
        }
        // smooth scroll 막는 ID 'non'
        var impossibility = new Array("non", "fix_ch");
        for(var i=0; e.path.length > i; i++){
            for(var j=0; impossibility.length > j; j++){
                if(e.path[i].getAttribute && e.path[i].getAttribute("id") ==impossibility[j])return;
            }
        }
    
        e.preventDefault();
        var $window = $(window);
        var scrollTime = 1;
        var distance_offset = 2.7;
        var scrollDistance = $window.height() / distance_offset;
        var delta = 0;
        if(smoothScroll_passive()){
            delta = e.wheelDelta/120 || -e.originalEvent.detail/3;
        }else{
            if(typeof e.originalEvent.deltaY != "undefined"){
                delta = -e.originalEvent.deltaY/120;
            }else{
                delta = e.originalEvent.wheelDelta/120 || -e.originalEvent.detail/3;
            }
        }
    
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        gsap.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Power3.easeOut,
            overwrite: 5
        });		
    }

    const scrollNav = () => {
        const $window = $(window),
              $winHei = $window.height(),
              targets = $('[data-scroll-target]');

        let st = $window.scrollTop(),
            arr = [];


        targets.each((i, elem) => {
            // winHei * 3 은 KV 스크롤값
            arr.push(Math.floor($(elem).offset().top + ($winHei * 3)));
        });

        console.log(st, arr);

        for(let i = 0; i < arr.length; i++){
            if(i == 3) {
                if(st >= arr[i]) {
                    $('nav li').eq(i).addClass('on').siblings().removeClass('on');
                    return false;
                }
            } else {
                if(arr[i + 1] > st) {
                    $('nav li').eq(i).addClass('on').siblings().removeClass('on');
                    return false;
                }
            }
        }

        // targets.forEach((target,i) => {
        //     console.log(st, target.offset().top);
        // });
    }

    const init = () => {
        loadMotion();
        smoothScroll();
    }

    init();
   
    $(window).on('load', function(){
        const str_vis = $('.rog__story__vis');
        inner_w = str_vis.find('.rog__story__inner').width();
        vis_w = str_vis.find('img').width();
    
        const sv_tl = new TimelineMax({
            scrollTrigger : {
                //markers: true,
                trigger: str_vis,
                start:'top 10%',
                end:'+=60%',
                scrub:1.5
            }
        });
    
        sv_tl.to(str_vis.find('img'), 1.5, {x:-(vis_w - inner_w)});

        scrollNav();

    }); 
});