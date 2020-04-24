function executeAjax() {
	'use strict';
	$.ajax({
		type : 'GET',
		url : '/testweb/SyainServlet',
		dataType : 'json',
		async: false,
		success : function(json) {
			console.log(json);
			for (var i = 0; i < json.length; i++) {
				var element = json[i];
				var record = '<tr>' + '<td>' + element.shainCd + '</td>'
						+ '<td>' + element.name + '</td>' + '<td><button id="'
						+ element.shainCd + '">' + "削除" + '</button></td>'
						+ '</tr>';
				$('#table_data').append(record)
				var op = '<select>' + '<option>' + element.bushoName
						+ '</option>' + '</select>'
				$('#Busho').append(op)

				$("#" + element.shainCd).bind('click', deleteAjax);
			}

		}
	});

}
function deleteAjax() {
	console.log($(this).attr('id'));
	'use strict';
	$.ajax({
		type : 'POST',
		url : '/testweb/SyainServlet'

	});
}

$(document).ready(function() {
	'use strict';

	// 初期表示用
	executeAjax();



});