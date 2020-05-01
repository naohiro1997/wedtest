/* 商品情報を登録するファンクション */
var regist = function() {
	// 入力された商品コード
	var inputShainCd = $('#js-input-code').val();
	// 入力された商品名
	var inputName = $('#js-input-name').val();
	//入力された部署id
	var inputBushoID = $('#bushoName2').val();
	//入力された性別
	var inputsex =$('input:radio[name="q1"]:checked').val();
	console.log(inputBushoID);

	var requestQuery = {
		shainCd : inputShainCd,
		name : inputName,
		bushoID : inputBushoID,
		sex :inputsex,
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
			alert('すべての情報を入力してください');
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