	var k;
	var h = undefined;
	var arr_search = ['чернож', 'хач', 'чурка', 'кавка', 'таджи', 'узбе', 'скин', 'чура', 'муслик', 'ислам', 'мусул'];
	var ind = 0;
	var sevetext;
	var flag = true;
	var flar_two = false;
	var e = $.Event("keydown", { keyCode: 13 }); 
	var searchcpe = function(){
				$('#v_search').val(arr_search[ind]);			
				$('#v_search').trigger(e);
				$('.resultif').append("Ключевое слово: "+arr_search[ind]+"<br>");
				flag = false;
			    if(ind<arr_search.length-1){
			    	ind++;
			    } else{
			    	flar_two = false;
			    }
			    setTimeout(function(){flar_two=true}, 4000); 
	}
	var inputcpe = function(){
			var num = parseInt(($('#video_local_search_summary').html()).replace("Найдено ").replace(" видеофайлов"));
		    $('.resultif').append(if(num > 7){return "-------"}else{return "Найдено"+num}+"<br>");
		    for(var i=0; i<$('#video_rows>div').length; i++){
		    	$('.resultif').append($('#video_rows>div>div>div>a').attr('href')+"<br>");
		    	var name = $.trim($('#video_rows>div>div')[i].children[1].children[0].children[0].innerHTML).replace("<em>","").replace("</em>","");
		    	$('.resultif').append(name+"<br>");
		    	console.log(name);	 
			}
			flar_two = false;
		    setTimeout(function(){flag = true;}, 4000); 
	}

$('body').on('click', '.serif', function(){
		$('.serif').append("<div class='ping'></div>");
	setInterval(function(){
		$('.input_back_wrap').css('display','none');
		if($('.ping').css('background')=='rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box'){
			$('.ping').css('background', 'rgb(233, 30, 99) none repeat scroll 0% 0% / auto padding-box border-box');
		}else {
			$('.ping').css('background', 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box');
		}
	}, 1000);
	$('.resultif').append(window.location.href+"<br>");
	setInterval(function(){
		k = $('#video_all').html();
		if(flag !== false){
			searchcpe();
		} else if(flar_two !== false){
			inputcpe();
		}
	}, 1000);


	
});

$('body').on('click', '.seveif', function(){
	sevetext = $('.resultif').html().replace(/<br\s*[\/]?>/gi, "\n");
	document.write(
    '<a class="sevehref" href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(sevetext) + '" download="text.txt">text.txt</a>'
)
});
//https://raw.githubusercontent.com/wotyl/gitapp/master/worke0.js
