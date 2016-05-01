	var k;
	var h = undefined;
	var arr_search = ['хач', 'чурка', 'кавка', 'таджи', 'узбе', 'скин', 'чура', 'муслик', 'ислам', 'мусул'];
	var ind = 0;
	var sevetext;
	var e = $.Event("keydown", { keyCode: 13 }); 
$('body').on('click', '.serif', function(){
	$('.serif').append("<div class='ping'></div>");
	setInterval(function(){
		if($('.ping').css('background')=='rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box'){
			$('.ping').css('background', 'rgb(233, 30, 99) none repeat scroll 0% 0% / auto padding-box border-box');
		}else {
			$('.ping').css('background', 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box');
		}}, 4000);
	$('.resultif').append(window.location.href+"<br>");
	$('input_back_wrap').css('display','none');
	setInterval(function(){
		k = $('#video_local_search_summary').html();
		if(k=="Нет видеозаписей" || k!==h){
			searchcpe();
			h = k;
			console.log(arr_search[ind]);
		}
	}, 1000);

	var searchcpe = function(){
				setTimeout(function(){$('#v_search').val(arr_search[ind])},1000);			
				setTimeout(function(){$('#v_search').trigger(e)},2000);
				$('.resultif').append("Ключевое слово: "+arr_search[ind]+"<br>");
				setTimeout(inputcpe(),8000);
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

