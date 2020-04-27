/* 入力された情報から社員一覧を取得するファンクション */
var getinfo = function () {
// 入力された社員名、部署、社員id
	// 入力された商品コード
	var inputShainCd = $('#shcd').val();
	// 入力された商品名
	var inputName = $('#shname').val();

	var requestQuery = {
		shainCd : inputShainCd,
		name : inputName,

	};
	console.log('requestQuery', requestQuery);
	// サーバーにデータを送信する。
	$.ajax({
		type : 'GET',
		dataType : 'json',
		url : '/testweb/SyainSearchServlet',
		data : requestQuery,
		success : function(json) {
			// サーバーとの通信に成功した時の処理
			// 確認のために返却値を出力
			console.log(json);
			for (var i = 0; i < json.length; i++) {
				var element = json[i];
				var record = '<tr>' + '<td>' + element.shainCd + '</td>'
						+ '<td>' + element.name + '</td>' + '<td><button id="'+ element.shainCd + '">' + "削除" + '</button></td>'
						+ '</tr>';
				$('#table_data').html(record)
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