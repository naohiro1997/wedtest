
function pulldownAjax2() {
	'use strict';
	$.ajax({
		type : 'GET',
		url : '/testweb/PulldownmenuSearvlet',
		dataType : 'json',

		success : function(json) {
			console.log(json);
			for (var i = 0; i < json.length; i++) {
				var element = json[i];
				var record ='<option value="'+element.bushoID+'">'+element.bushoName+'</option>'

				$('#bushoName2').append(record)
//				var op = '<option>' + element.bushoName + '</option>'
//				$('#Busho').append(op)




			}

		}
	});

}






$(document).ready(function() {
	'use strict';

	// 初期表示用

	pulldownAjax2();

});