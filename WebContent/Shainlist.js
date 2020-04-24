function executeAjax() {
	'use strict';
	$.ajax({
		type : 'GET',
		url : '/testweb/SyainServlet',
		dataType : 'json',
		async : false,
		success : function(json) {
			console.log(json);
			for (var i = 0; i < json.length; i++) {
				var element = json[i];
				var record = '<tr>' + '<td>' + element.shainCd + '</td>'
						+ '<td>' + element.name + '</td>' + '<td><button id="'
						+ element.shainCd + '">' + "削除" + '</button></td>'
						+ '</tr>';
				$('#table_data').append(record)
//				var op = '<option>' + element.bushoName + '</option>'
//				$('#Busho').append(op)

				$("#" + element.shainCd).bind('click', deleteAjax);

			}

		}
	});

}
// // サーバーにデータを送信する。
// $.ajax({
// type : 'POST',
// dataType:'json',
// url : '/testweb/SyainServlet',
// data : requestQuery,
// success : function(json) {
// // サーバーとの通信に成功した時の処理
// // 確認のために返却値を出力
// console.log($(this).attr('id'), json);
// // 登録完了のアラート
// alert('登録が完了しました');
// },
// error:function(XMLHttpRequest, textStatus, errorThrown){
// // サーバーとの通信に失敗した時の処理
// alert('データの通信に失敗しました');
// console.log(errorThrown)
// }
// });
// }

function deleteAjax() {
	console.log($(this).attr('id'));
	var requestQuery = {
		shainCd : $(this).attr('id')
	};
	'use strict';
	$.ajax({
		type : 'POST',
		url : '/testweb/SyainServlet',
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