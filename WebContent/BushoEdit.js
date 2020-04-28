var regist = function() {
	// 入力された商品コード
	var inputbushoID = $('#js-input-code').val();
	// 入力された商品名
	var inputName = $('#js-input-name').val();
	//取得した社員コード
	var acbushoID = getParam('bushoID');

	var requestQuery = {
		upbushoID : inputbushoID,
		bushoName : inputName,
		bushoID : acbushoID
	};
	console.log('requestQuery', requestQuery);
	// サーバーにデータを送信する。
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : '/testweb/BushoEditSearvlet',
		data : requestQuery,
		success : function(json) {
			koshin()
			// サーバーとの通信に成功した時の処理
			// 確認のために返却値を出力
			console.log('返却値', json);
			'<h2>'+"登録完了"+'</h2>'
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

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


/**
 * 読み込み時の動作
 */
$(document).ready(function() {
	// 登録ボタンを押したときのイベント
	$('#js-regist-button').click(regist);
});