






/* 入力された情報から社員一覧を取得するファンクション */
var getinfo = function () {
// 入力された社員名、部署、社員id
	// 入力された商品コード
	var inputbushoID = $('#shcd').val();
	// 入力された商品名
	var bushoName = $('#shname').val();

	var requestQuery = {
			bushoID :  inputbushoID,
			bushoName : bushoName,

	};
	console.log('requestQuery', requestQuery);
	// サーバーにデータを送信する。
	$.ajax({
		type : 'GET',
		dataType : 'json',
		url : '/testweb/BushoShSearvlet',
		data : requestQuery,
		async : false,
		success : function(json) {
			// サーバーとの通信に成功した時の処理
			// 確認のために返却値を出力
			console.log(json);
			if(json.length==0){
				document.write("無し")
			}else{
				$('#table_data').html("")
			for (var i = 0; i < json.length; i++) {
				var element = json[i];
				var record = '<tr>'
					+ '<td>' + element.bushoID + '</td>'
						+ '<td>' + element.bushoName+ '</td>'
						+ '<td><button id="delet'+ element.bushoID + '" bushoID="'+ element.bushoID +'">' + "削除" + '</button></td>'
						+ '<td><button onclick="location.href=\'./BushoEdit.html?bushoID='+element.bushoID+"' "+'" id="'+ element.bushoID + '">' + "編集" + '</button></td>'
						+ '</tr>';
				$('#table_data').append(record)
			}
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			// サーバーとの通信に失敗した時の処理
			alert('データの通信に失敗しました');
			console.log(errorThrown)
		}
	});
}


function koshin() {
	location.reload();
}
/**
 * 読み込み時の動作
 */
$(document).ready(function() {
	// 登録ボタンを押したときのイベント
	$('#searchBtn').click(getinfo);

});