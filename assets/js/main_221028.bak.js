gsap.registerPlugin(ScrollTrigger);

const loadMotion = () => {
    const _loader = $('.rog__loader'),
    _intro = _loader.find('.panel_intro'),
    _txt = _loader.find('.panel_txt'),
    _slogan = _loader.find('.panel_slogan'),
    _cover = _loader.find('.cover_panel');

    const _contents = document.querySelector('.contents'),
    _nav = document.querySelector('.nav');

    let mm = gsap.matchMedia();

    mm.add('(min-width:769px)', () => {
        // PC Motion 
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

        const tl = new TimelineMax({
            scrollTrigger : {
                trigger: _loader,
                start:'top top',
                end:'+=300%',
                scrub:1.5,
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

    });

    mm.add('(max-width:768px)', () => {
        // Mobile Motion 
        gsap.set(_intro, {y:30, opacity:0});
        gsap.set(_txt, {visibility:'hidden'});
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
                //markers: {startColor:'#1200FF', endColor:'#F21De4'},
                trigger: _loader,
                start:'top top',
                end:'+=320%',
                scrub:1.5,
                pin: true,
            }
        });

        gsap.to(_intro, 1, {y:0, opacity:1});

        tl.to(_intro.find('p'), {duration:.1, fontSize:'50vw'})
        .addLabel('text')
        .to(_txt, .1, {visibility:'visible'}, 'text')
        .to(_txt.find('.rog_txt span'), .2, {y:0}, 'text')
        .to(_txt.find('.txt_top span'), .2, {y:0}, 'text')
        .to(_txt.find('.txt_bot span'), .2, {y:0}, 'text')
        .to(_txt.find('.shm_img'), .3,  {clipPath:'inset(0% -1%)'}, 'text+=.2')
        .to(_txt.find('.rog_txt .txt_solid'), .3, {clipPath:'inset(0 -1%)'}, 'text+=.2')
        .addLabel('slogan')
        .to(_slogan, .2, {className:'rog__loader__panel panel_slogan run', visibility:'visible'}, 'slogan')
        .to(_slogan.find('.obj_inner'), .3, {scale:1}, 'slogan')
        .to(_slogan.find('.panel')[0], .4, {className:'panel on', visibility:'inherit', opacity:1}, 'slogan')
        .addLabel('kvisual')
        .to(_slogan.find('.panel')[0], .1, {opacity:0}, 'kvisual')
        .to(_slogan.find('.panel')[1], .4, {className:'panel on', visibility:'inherit', opacity:1}, 'kvisual+=.1')
        .to(_slogan.find('.kv'), .2, {rotateX:0}, 'kvisual+=.2')
        .to(_slogan.find('.txt_line'), .1, {opacity:0, zIndex:3})
        .to(_slogan.find('.kv img'), .3, {scale:1, delay:-.1})
        .to(_slogan.find('.kv img'), .2, {scale:1})
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

const _submit = () => {
    if($('input[name="q1"]').is(':checked') == false){
        _popup('1번 퀴즈의 정답을 선택해주세요.');
        return;
    }

    if($('input[name="q2"]').is(':checked') == false){
        _popup('2번 퀴즈의 정답을 선택해주세요.');
        return;
    }
    
    getPopup('quiz_popup');
}

const getPopup = (target,type) => {
    $.ajax({
        url : '/popup.html',
        type : 'GET',
        dataType : 'html',
        success : function(result){
            $('.popup').remove();

            $('.wrap').append(result);
            $('#'+target).siblings('.popup').remove();

            $('.popup .cls_popup').on('click', function(){
                $(this).parents('.popup').remove();
            });

            $("input[name*='phone']").keyup(function(){
                this.value=this.value.replace(/[^0-9]/g,'');
            });

            if(target == 'quiz_popup'){
                // 퀴즈 정답 제출_정답 제출하기 버튼 클릭 시
                $('.submit_btn').on('click', function(){
                    if($('input[name="name"]').val() == '' || $('input[name="phone1"]').val() == '' || $('input[name="phone2"]').val() == '' || $('input[name="phone3"]').val() == '') {
                        _popup(`모든 정보는 필수 입력입니다. <br>성함과 연락처를 입력해 주세요.`);
                        return;
                    }

                    if($('input[name="quiz_agr"]').is(':checked') == false) {
                        _popup(`당첨자 안내 및 경품 지급을 위해<br>
                        ‘개인정보 수집 및 이용에 대한 동의’는 필수 체크 사항입니다.
                        <br>동의하지 않을 경우 참여가 어려울 수 있습니다.`,'big');
                        return;
                    }

                    if($('input[name="quiz_agr"]:checked').val() == 'N'){
                        _popup(`당첨자 안내 및 경품 지급을 위해<br>
                        ‘개인정보 수집 및 이용에 대한 동의’는 필수 체크 사항입니다.
                        <br>동의하지 않을 경우 참여가 어려울 수 있습니다.`,'big');
                        return;
                    }

                    // 개인정보 중복 참여 체크 후 팝업 노출
                    if(true){
                        // 참여 완료 시
                        _popup(`참여해 주셔서 감사합니다.<br>
                        앞으로도 ROG x SON 캠페인에<br>
                        많은 관심 부탁드립니다.`,'big chk');
                        selfClose(3000);
                        
                    } else {
                        // 중복참여 시
                        // _popup('앗! 이미 참여하셨네요!<br>본 퀴즈 이벤트는 동일한 회차 내 중복 참여가 제한됩니다.<br>이미 참여하셨다면 [참여 확인하기]에서 확인해 주세요.<br>참여하신 이력이 없으시다면 하기 이벤트 문의 메일로 연락 부탁드립니다.<br>eventmcs@naver.com','big');
                        // selfClose(3000);
                    }
                });
            } else if(target == 'quiz_check'){
                $('.check_btn').on('click', function(){
                    if($('input[name="name"]').val() == '' || $('input[name="phone1"]').val() == '' || $('input[name="phone2"]').val() == '' || $('input[name="phone3"]').val() == '') {
                        _popup(`모든 정보는 필수 입력입니다. <br>성함과 연락처를 입력해 주세요.`);
                        return;
                    }

                    if(true){
                        // 퀴즈 참여자의 경우 (퀴즈 참여자의 이름을 가져올 수 있을 지?)
                        _popup(`OOO님은 이미 본 퀴즈 정답을 제출해 주셨습니다.<br>
                        참여해 주셔서 감사합니다.<br>
                        앞으로도 ROG x SON 캠페인에 많은 관심 부탁드립니다.`,'big');
                        selfClose(3000);
                        
                    } else {
                        // 퀴즈 미참여자의 경우

                        // _popup(`입력해 주신 정보로 제출한 정답이 확인되지 않습니다.<br>
                        // 지금 바로 정답을 제출하고<br>
                        // 경품의 주인공이 되어보세요.`,'big');
                        // selfClose(3000);
                    }
                });
            } else if(target == 'url_event'){
                function checkUrl(strUrl) {
                    let expUrl = /^http[s]?:\/\/([\S]{3,})/i;
                    return expUrl.test(strUrl);
                }

                $('.url_submit').on('click', function(){
                    // 인증 URL 제출 폼은 중복으로 여러 번 참여 가능
                    if($('input[name="sns_name"]').val() == '' || $('input[name="sns_phone1"]').val() == '' || $('input[name="sns_phone2"]').val() == '' || $('input[name="sns_phone3"]').val() == '') {
                        _popup(`모든 정보는 필수 입력입니다.<br>성함과 연락처를 입력해 주세요.`);
                        return;
                    }

                    if($('input[name="sns_url"]').val() == ''){
                        _popup(`모든 정보는 필수 입력입니다.<br>게재 SNS URL을 추가해 주세요.`);
                        return;
                    } else {
                        if(!checkUrl($('input[name="sns_url"]').val())){
                            _popup(`URL 형식에 맞지 않습니다.<br>게재한 SNS URL을 추가해 주세요.`);
                            return;
                        }
                    }

                    if($('input[name="sns_agr"]').is(':checked') == false) {
                        _popup(`당첨자 안내 및 경품 지급을 위해<br>
                        ‘개인정보 수집 및 이용에 대한 동의’는 필수 체크 사항입니다.
                        <br>동의하지 않을 경우 참여가 어려울 수 있습니다.`,'big');
                        return;
                    }

                    if($('input[name="sns_agr"]:checked').val() == 'N'){
                        _popup(`당첨자 안내 및 경품 지급을 위해<br>
                        ‘개인정보 수집 및 이용에 대한 동의’는 필수 체크 사항입니다.
                        <br>동의하지 않을 경우 참여가 어려울 수 있습니다.`,'big');
                        return;
                    }

                    _popup(`참여해 주셔서 감사합니다.<br>앞으로도 ROG x SON 캠페인에<br>많은 관심 부탁드립니다.`,'big chk');
                    selfClose(3000);
                });
            } else {
                vidId = type == 'main' ? 'vRliPFwSQYc' : 'M2UW_bla1OA';

                var player;
                function onYouTubeIframeAPIReady() {
                    player = new YT.Player('player', {
                        videoId: vidId,
                        playerVars: { 'controls': 0, 'rel': 0 },
                        events: {
                        'onReady': onPlayerReady,
                        }
                    });
                }

                function onPlayerReady(event) {
                    event.target.playVideo();
                }

                onYouTubeIframeAPIReady();
            }
        }
    });
}

const copyToClipboard = (val) => {
    const t = document.createElement('textarea'); 
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t); 
}

const selfClose = (timer) => {
    setTimeout(() => {
        $('.popup, .alert').remove();
    },timer);
}

$('.rog__vis__btn .btn').on('click', function(){
    type = $(this).data('video');

    getPopup('vid_popup',type);
});

$('.quiz_submit').on('click', function(){
    _submit();
});

$('.quiz_confirm').on('click', function(){
    // 참여 확인하기는 현재 오픈되어있는 미니 퀴즈 회차에 대하여만 확인 가능
    getPopup('quiz_check');
});

// hash tag click event
$('.hash_btn').on('click', function(){
    const hash = '#ROGXSON #TeamROG #손흥민ROG #ForThoseWhoDare';

    copyToClipboard(hash);
    _popup(`필수 해시태그가 복사되었습니다.<br>개인 SNS에 인증해주세요!`, 'chk');
    selfClose(2000);
});

$('.url_btn').on('click', function(){
    getPopup('url_event');
});

$('.list_item.coming').on('click', function(){
    if($(this).index() == 1) _popup('본 퀴즈는 2022.11.14에 오픈 예정입니다.<br>해당 날짜에 참여해 주세요.');
    else _popup('본 퀴즈는 2022.11.25에 오픈 예정입니다.<br>해당 날짜에 참여해 주세요.');
    selfClose(2400);
});

$('.list_item.complete').on('click', function(){
    _popup('본 퀴즈는 이미 완료된 퀴즈입니다.<br>참여해 주셔서 감사합니다.');
    selfClose(2400);
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

        gsap.fromTo(t.find('.bar'), {opacity:0}, {duration:.05, opacity:1, stagger:.1, yoyo:true, repeat:-1});
    });
    
}


var ftTl;
var $footer = $('.footer');
var $wrap   = $('.wrap');

const footHeight = () => {
    $target = $('.rog__series');
    $inner = $footer.find('.footer__inner'),
    $height = $inner.outerHeight();
    $vh    = $wrap.height();

    let mm = gsap.matchMedia();

    mm.add('(min-width:769px)', () => {
        tw = $(window).width() * .057;
        th = $('.rog__series').height() + tw;

        ftTl = new TimelineMax({
            scrollTrigger :{
                //markers:true,
                trigger: $target,
                start: th+' 85%',
                end:'+='+$height+' 100%',
                scrub:.2,
            }
        });
    });

    mm.add('(max-width:768px)', () => {
        tw = $(window).width() * .125;
        th = $('.rog__series').height() + tw;
        eh = $height + th;
        
        $wrap.css('height', $vh + ($height * .6));

        ftTl = new TimelineMax({
            scrollTrigger :{
                //markers:true,
                trigger: $target,
                start:th+' 80%',
                end:eh+' 100%',
                scrub:1,
            }
        });
    });

    ftTl.to($footer, {duration:2.5, height:$height});
}

$('.nav li').on('click', function(){
    const $window = $(window),
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

function Ticker( elem ) {
    elem.lettering();
    this.done = false;
    this.cycleCount = 4;
    this.cycleCurrent = 0;
    this.chars = '*+-/@_$[%£!XO1&>'.split('');
    this.charsCount = this.chars.length;
    this.letters = elem.find( 'span' );
    this.letterCount = this.letters.length;
    this.letterCurrent = 0;

    this.letters.each( function() {
        var $this = $( this );
        $this.attr( 'data-orig', $this.text() );
        $this.text( '-' );
    });
}

Ticker.prototype.getChar = function() {
    return this.chars[ Math.floor( Math.random() * this.charsCount ) ];
};

Ticker.prototype.reset = function() {
    this.done = false;
    this.cycleCurrent = 0;
    this.letterCurrent = 0;
    this.letters.each( function() {
        var $this = $( this );
        $this.text( $this.attr( 'data-orig' ) );
        $this.removeClass( 'done' );
    });
};

Ticker.prototype.loop = function() {
    var self = this;

    this.letters.each( function( index, elem ) {
        var $elem = $( elem );
        if( index >= self.letterCurrent ) {
            if( $elem.text() !== ' ' ) {
                $elem.text( self.getChar() );
            }
        }
    });

    if( this.cycleCurrent < this.cycleCount ) {
        this.cycleCurrent++;
    } else if( this.letterCurrent < this.letterCount ) {
        var currLetter = this.letters.eq( this.letterCurrent );
        this.cycleCurrent = 0;
        currLetter.text( currLetter.attr( 'data-orig' ) ).addClass( 'done' );
        this.letterCurrent++;
    } else {
        this.done = true;
    }

    if( !this.done ) {
        requestAnimationFrame( function() {
            self.loop();
        });
    } 
};

const _popup = (desc, type) => {
    state = typeof type !== 'undefined' ? type : '';
    let h = '';

    h += `<div class="alert `+state+`">
        <div class="alert__inner">
            <div class="alert__text">`
            + desc +
            `</div>
            <button type="button" class="cls_btn">
                <span class="blind">팝업닫기</span>
            </button>
        </div>
    </div>`;

    $('.wrap').append(h);

    $('.alert .cls_btn').on('click', function(){
        $(this).parents('.alert').remove();
    });
}

const init = () => {
    loadMotion();
    smoothScroll();
    scrollNav();

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
var swiperInit = false;
var giveSwiper;

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


window.addEventListener('resize', () =>{
    $inner = $footer.find('.footer__inner'),
    $height = $inner.outerHeight();

    ScrollTrigger.refresh();

    swiperMode();

    if(!is_mobile()){
        ftTl.kill();
        $('.footer').css('height', 0);
        footHeight();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    init();
});

window.addEventListener('load', () => {
    barsAni();
    swiperMode();
    footHeight();

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
        initialSlide:1,
        pagination: {
            el: ".pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper_next',
            prevEl: '.swiper_prev'
        },
    });
});