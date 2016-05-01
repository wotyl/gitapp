	var k;
	var h;
	var arr_search = ['хач', 'чурка', 'кавка', 'таджи', 'узбе', 'скин', 'чура', 'муслик', 'ислам', 'мусул'];
	var ind = 0;
	var sevetext;
$('body').on('click', '.serif', function(){
	$('.serif').append("<div class='ping'></div>");
	setInterval(function(){
		if($('.ping').css('background')=='#fff'){
			$('.ping').css('background', '#E91E63');
		}else if('.ping').css('background')=='#fff'){
			$('.ping').css('background', '#fff');
		}}, 4000);
	$('.resultif').append("<div></div>");
	$('.resultif').append(window.location.href+"<br>");
	$('input_back_wrap').css('display','none');
	setInterval(function(){
		k = $('#video_local_search_summary').html();
		if(k=="Нет видеозаписей" || k!==h){
			searchcpe();
			h = k;
		}
	}, 4000);

	var searchcpe = function(){
				$('#v_search').val(arr_search[ind]);
				var e = $.Event("keydown", { keyCode: 13 }); 
				$('#v_search').trigger(e);
				setTimeout(inputcpe(),2000);
				$('.resultif').append("Ключевое слово: "+arr_search[ind]+"<br>");
			ind++;
	}
	var inputcpe = function(){
		    $('.resultif').append($('#video_local_search_summary').html()+"<br>");
		    for(var i=0; i<$('#video_rows>div').length; i++){
		    	$('.resultif').append($('#video_rows>div>div')[i].children[0].children[0].href+"<br>");
		    	$('.resultif').append($.trim($('#video_rows>div>div')[i].children[1].children[0].children[0].innerHTML).replace("<em>","").replace("</em>","")+"<br>");	
		    }
	}
	
});

$('body').on('click', '.seveif', function(){
	sevetext = $('.resultif').html().replace(/<br\s*[\/]?>/gi, "\n");
	document.write(
    '<a class="sevehref" href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(sevetext) + '" download="text.txt">text.txt</a>'
)
});
//https://raw.githubusercontent.com/wotyl/gitapp/master/worke0.js

