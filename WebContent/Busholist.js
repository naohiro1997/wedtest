function executeAjax() {
	'use strict';
	$.ajax({
		type : 'GET',
		url : '/testweb/BshoListSeavret',
		dataType : 'json',
		async : false,
		success : function(json) {
			console.log(json);
			for (var i = 0; i < json.length; i++) {
				var element = json[i];
				var record = '<tr>'
					+ '<td>' + element.bushoID + '</td>'
						+ '<td>' + element.bushoName+ '</td>'
						+ '<td><button id="delet'+ element.bushoID + '" bushoID="'+ element.bushoID +'">' + "削除" + '</button></td>'
						+ '<td><button onclick="location.href=\'./BushoEdit.html?bushoID='+element.bushoID+"' "+'" id="'+ element.bushoID + '">' + "編集" + '</button></td>'
						+ '</tr>';
				$('#table_data').append(record)
//				var op = '<option>' + element.bushoName + '</option>'
//				$('#Busho').append(op)

				$("#delet" + element.bushoID).bind('click', deleteAjax);


			}

		}
	});

}


function deleteAjax(){
	console.log($(this).attr('bushoID'));
	var requestQuery = {
		bushoID : $(this).attr('bushoID')
	};
	'use strict';
	$.ajax({
		type : 'POST',
		url : '/testweb/BshoListSeavret',
		dataType : 'json',
		data : requestQuery,
		success : function(json) {
			// サーバーとの通信に成功した時の処理
			// 確認のために返却値を出力
			console.log('返却値', json);
			koshin();
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
			// サーバーとの通信に失敗した時の処理
			alert('データの通信に失敗しました');
			console.log(errorThrown)
			}

	});
}

function koshin(){
	location.reload();
}

$(document).ready(function() {
	'use strict';

	// 初期表示用
	executeAjax();

});