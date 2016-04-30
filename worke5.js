$('body').on('click', '.serif', function(){
	var arr_search = ['рус', 'доб'];
	setTimeout(function(){
	for(var i=0; i<=arr_search.length; i++){
		$('input_back_wrap').css('display','none');
		$('#v_search').val(arr_search[i]);
		var e = $.Event("keydown", { keyCode: 13 }); 
		$('#v_search').trigger(e);

	    
	    	$('.resultif').append("<h5>Ключевое слово: "+arr_search[i]+"</h5>");
		    $('.resultif').append("<p>"+$('#video_local_search_summary').html()+"</p>");
		    for(var i=0; i<$('#video_rows>div').length; i++){
		    	$('.resultif').append("<p>"+$('#video_rows>div>div')[i].children[0].children[0].href+"</p>");
		    	$('.resultif').append("<p>"+$.trim($('#video_rows>div>div')[i].children[1].children[0].children[0].innerHTML).replace("<em>","").replace("</em>","")+"</p>");
		    	
		    }
	}
	}, 5000);
})
//https://raw.githubusercontent.com/wotyl/gitapp/master/worke0.js