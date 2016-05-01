	var k;
	var h;
	var arr_search = ['рус', 'доб'];
	var ind = 0;
$('body').on('click', '.serif', function(){
	$('input_back_wrap').css('display','none');
	setInterval(function(){
		k = $('#video_local_search_summary').html();
		if(k=="Нет видеозаписей" || k!==h){
			searchcpe();
			setTimeout(inputcpe(),1000);
			h = k;
		}
	}, 2000);

	var searchcpe = function(){
			var k = $('#video_local_search_summary').html();
			if(k !== "Нет видеозаписей"){
				$('#v_search').val(arr_search[ind]);
				var e = $.Event("keydown", { keyCode: 13 }); 
				$('#v_search').trigger(e);
			}
			$('.resultif').append("<h5>Ключевое слово: "+arr_search[ind]+"</h5>");
			ind++;
	}
	var inputcpe = function(){
		    $('.resultif').append("<p>"+$('#video_local_search_summary').html()+"</p>");
		    for(var i=0; i<$('#video_rows>div').length; i++){
		    	$('.resultif').append("<p>"+$('#video_rows>div>div')[i].children[0].children[0].href+"</p>");
		    	$('.resultif').append("<p>"+$.trim($('#video_rows>div>div')[i].children[1].children[0].children[0].innerHTML).replace("<em>","").replace("</em>","")+"</p>");	
		    }
	}
	
});
//https://raw.githubusercontent.com/wotyl/gitapp/master/worke0.js

