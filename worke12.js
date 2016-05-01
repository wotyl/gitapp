	var k;
	var h;
	var arr_search = ['рус', 'доб'];
	var ind = 0;
	var sevetext;
$('body').on('click', '.serif', function(){
	$('.resultif').append(window.location.href+"\n");
	$('input_back_wrap').css('display','none');
	setInterval(function(){
		k = $('#video_local_search_summary').html();
		if(k=="Нет видеозаписей" || k!==h){
			searchcpe();
			h = k;
		}
	}, 2000);

	var searchcpe = function(){
				$('#v_search').val(arr_search[ind]);
				var e = $.Event("keydown", { keyCode: 13 }); 
				$('#v_search').trigger(e);
				setTimeout(inputcpe(),1000);
				$('.resultif').append(arr_search[ind]+"\n");
			ind++;
	}
	var inputcpe = function(){
		    $('.resultif').append($('#video_local_search_summary').html()+"\n");
		    for(var i=0; i<$('#video_rows>div').length; i++){
		    	$('.resultif').append($('#video_rows>div>div')[i].children[0].children[0].href+"\n");
		    	$('.resultif').append($.trim($('#video_rows>div>div')[i].children[1].children[0].children[0].innerHTML).replace("<em>","").replace("</em>","")+"\n");	
		    }
	}
	
});

$('body').on('click', '.seveif', function(){
	sevetext = $('.resultif').html();
	document.write(
    '<a class="sevehref" href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(sevetext) + '" download="text.txt">text.txt</a>'
)
});
//https://raw.githubusercontent.com/wotyl/gitapp/master/worke0.js

