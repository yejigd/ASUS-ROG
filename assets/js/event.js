


const _answer  = (type) => {
	var params = {};
	switch(type){
		case "quiz_popup":
			if($('input[name="name"]').val() == '' || $('input[name="phone1"]').val() == '' || $('input[name="phone2"]').val() == '' || $('input[name="phone3"]').val() == '') {
				_popup(`모든 정보는 필수 입력입니다. <br>성함과 연락처를 입력해 주세요.`);
				return;
			}
			
			if($('input[name="quiz_agr"]').is(':checked') == false || $('input[name="quiz_agr"]:checked').val() == 'N') {
				_popup(`당첨자 안내 및 경품 지급을 위해<br class="pc_only">
				‘개인정보 수집 및 이용에 대한 동의’는 필수 체크 사항입니다.
				<br>동의하지 않을 경우 참여가 어려울 수 있습니다.`,'big');
				return;
			}
			
			params.user_nm = $("#quiz_popup_user_nm").val();
			params.user_hp = $("#quiz_popup_hp1").val()+"-"+$("#quiz_popup_hp2").val()+"-"+$("#quiz_popup_hp3").val();
			params.q1 = get_radio_value(document.evtFrm.q1);
			params.q2 = get_radio_value(document.evtFrm.q2);

			$.post("register_quiz1.php", params, function(data){
				if(data.result=='success'){     // 참여 완료 시
					_popup(`참여해 주셔서 감사합니다.<br>앞으로도 ROG x SON 캠페인에<br>많은 관심 부탁드립니다.`,'big chk');
					selfClose(3000);
				} else {        // 중복참여 시
					_popup('앗! 이미 참여하셨네요!<br>본 퀴즈 이벤트는 동일한 회차 내 <br class="md_only">중복 참여가 제한됩니다.<br>이미 참여하셨다면 [참여 확인하기]에서 <br class="md_only">확인해 주세요.<br>참여하신 이력이 없으시다면<br>하기 이벤트 문의 메일로 연락 부탁드립니다.<br>eventmcs@naver.com','big');
					selfClose(3000);
				}   
			}, "json");
		break;
		
		
		case "quiz_check":
			if($('input[name="name"]').val() == '' || $('input[name="phone1"]').val() == '' || $('input[name="phone2"]').val() == '' || $('input[name="phone3"]').val() == '') {
				_popup(`모든 정보는 필수 입력입니다. <br>성함과 연락처를 입력해 주세요.`);
				return;
			}
			else{
				params.user_nm = $("#quiz_check_user_nm").val();
				params.user_hp = $("#quiz_check_user_hp1").val()+"-"+$("#quiz_check_user_hp2").val()+"-"+$("#quiz_check_user_hp3").val();
				
				$.post("check_user.php", params, function(data){
					if(data.result=='success'){         // 퀴즈 참여자의 경우 (퀴즈 참여자의 이름을 가져올 수 있을 지?)
						_popup(data.user_nm+"님은 이미 본 퀴즈 정답을 제출해 주셨습니다.<br>참여해 주셔서 감사합니다.<br>앞으로도 ROG x SON 캠페인에<br class='md_only'>많은 관심 부탁드립니다.",'big');
						selfClose(3000);
						
					} else {                            // 퀴즈 미참여자의 경우
						_popup(`입력해 주신 정보로 제출한 정답이 <br class="md_only">확인되지 않습니다.<br>지금 바로 정답을 제출하고<br>경품의 주인공이 되어보세요.`,'big');
						selfClose(3000);
					}                   
				}, "json"); 
			}
		break;
		
		case "url_event":
			if($('input[name="sns_name"]').val() == '' 
				|| $('input[name="sns_phone1"]').val() == '' 
				|| $('input[name="sns_phone2"]').val() == '' 
				|| $('input[name="sns_phone3"]').val() == ''
				|| $('input[name="sns_url"]').val() == '') {
				_popup(`모든 정보는 필수 입력입니다. <br>성함, 연락처, URL을 입력해 주세요.`);
				return;
			}
			if($('input[name="sns_agr"]').is(':checked') == false || $('input[name="sns_agr"]:checked').val() == 'N') {
				_popup(`당첨자 안내 및 경품 지급을 위해<br class="pc_only">
				‘개인정보 수집 및 이용에 대한 동의’는 필수 체크 사항입니다.
				<br>동의하지 않을 경우 참여가 어려울 수 있습니다.`,'big');
				return;
			}
			
			params.user_nm = $("#sns_user_nm").val();
			params.user_hp = $("#sns_user_hp1").val()+"-"+$("#sns_user_hp2").val()+"-"+$("#sns_user_hp3").val();
			params.sns_url = $("#sns_url").val();
			
			$.post("register_sns.php", params, function(data){
				if(data.result=='success'){         // 퀴즈 참여자의 경우 (퀴즈 참여자의 이름을 가져올 수 있을 지?)
					_popup(`참여해 주셔서 감사합니다.<br>앞으로도 ROG x SON 캠페인에<br>많은 관심 부탁드립니다.`,'big chk');
					selfClose(3000);
				} 
				/*else {                            // 퀴즈 미참여자의 경우
					_popup('앗! 이미 참여하셨네요!<br>본 퀴즈 이벤트는 동일한 회차 내 중복 참여가 제한됩니다.','big');
					selfClose(3000);
				}*/                  
			}, "json"); 

		break;
	}
};

const getPopup = (target,type) => {
	$.ajax({
		url : '/popup.html',
		type : 'GET',
		dataType : 'html',
		success : function(result){
			scrollDisable();
			$('.popup').remove();

			$('.wrap').append(result);
			$('#'+target).siblings('.popup').remove();

			$('.popup .cls_popup').on('click', function(){
				$(this).parents('.popup').remove();
				scrollAble();
			});

			$("input[name*='phone']").keyup(function(){
				this.value=this.value.replace(/[^0-9]/g,'');
			});
			
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
				if(!is_mobile()) event.target.playVideo();
			}

			onYouTubeIframeAPIReady();
		}
	});
};

const _submit = () => {
	if($('.keyword__area').hasClass('quiz2')){
		if($('input[name="q3"]').is(':checked') == false){
			_popup('1번 퀴즈의 정답을 선택해주세요.');
			return;
		}
	
		if($('input[name="q4"]').is(':checked') == false){
			_popup('2번 퀴즈의 정답을 선택해주세요.');
			return;
		}

		getPopup('quiz_popup');
	} else if($('.keyword__area').hasClass('quiz3')){
		if($('input[name="q5"]').is(':checked') == false){
			_popup('1번 퀴즈의 정답을 선택해주세요.');
			return;
		}
	
		if($('input[name="q6"]').is(':checked') == false){
			_popup('2번 퀴즈의 정답을 선택해주세요.');
			return;
		}

		getPopup('quiz_popup');
	} else {
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
}

const selfClose = (timer) => {
	setTimeout(() => {
		$('.popup, .alert').remove();
		scrollAble();
	},timer);
};

const copyToClipboard = (val) => {
	const t = document.createElement('textarea'); 
	document.body.appendChild(t);
	t.value = val;
	t.select();
	document.execCommand('copy');
	document.body.removeChild(t); 
}


const get_radio_value = (fobj) => {
	let i=0;
	let rtn = "";
	for(i=0;i<fobj.length;i++){
	   if(fobj[i].checked)
			rtn = fobj[i].value;
	}
	return rtn;
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
	scrollDisable();

	$('.alert .cls_btn').on('click', function(){
		$(this).parents('.alert').remove();
		scrollAble();
	});
}

$('.rog__vis__btn .btn').on('click', function(){
	type = $(this).data('video');

	getPopup('vid_popup',type);
});

$('.quiz_confirm').on('click', function(){	// 참여 확인하기는 현재 오픈되어있는 미니 퀴즈 회차에 대하여만 확인 가능
	getPopup('quiz_check');
});

$('.quiz_submit').on('click', function(){
	_submit();
});

$('.hash_btn').on('click', function(){	// hash tag click event
	const hash = '#ROGXSON #TeamROG #손흥민ROG #ForThoseWhoDare';

	copyToClipboard(hash);
	_popup(`필수 해시태그가 복사되었습니다.<br>개인 SNS에 인증해주세요!`, 'chk');
	selfClose(2000);
});

$('.url_btn').on('click', function(){
	getPopup('url_event');
});

$('.list_item.coming').on('click', function(){
	if($(this).index() == 1) _popup('본 퀴즈는 2022.11.26에 오픈 예정입니다.<br>해당 날짜에 참여해 주세요.');
	else _popup('본 퀴즈는 2022.12.04에 오픈 예정입니다.<br>해당 날짜에 참여해 주세요.');
	selfClose(1800);
});

$('.list_item.complete').on('click', function(){
	_popup('본 퀴즈는 이미 완료된 퀴즈입니다.<br>참여해 주셔서 감사합니다.');
	selfClose(1800);
});