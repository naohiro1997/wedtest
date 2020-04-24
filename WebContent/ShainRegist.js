/* 商品情報を登録するファンクション */
var regist = function() {
	// 入力された商品コード
	var inputShainCd = $('#js-input-code').val();
	// 入力された商品名
	var inputName = $('#js-input-name').val();

	var requestQuery = {
		shainCd : inputShainCd,
		name : inputName,

	};
	console.log('requestQuery', requestQuery);
	// サーバーにデータを送信する。
	$.ajax({
		type : 'POST',
		dataType : 'json',
		url : '/testweb/SyainRegist',
		data : requestQuery,
		success : function(json) {
			// サーバーとの通信に成功した時の処理
			// 確認のために返却値を出力
			console.log('返却値', json);
			koshin();
			// 登録完了のアラート
			alert('登録が完了しました');
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
	$('#js-regist-button').click(regist);
});