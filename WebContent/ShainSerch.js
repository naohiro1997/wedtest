/* 入力された情報から社員一覧を取得するファンクション */
var getinfo = function () {
// 入力された社員名、部署、社員id
var inputName = $('#shname').val();
var inputshainCd = $('#shcd').val();
var inputbushoName = $('#Busho').val();

var requestQuery = {
name : inputName
shainCd : inputshainCd
bushoName : inputbushoName
};
$.ajax({
	type : 'GET',
	url : '/testweb/SyainServlet',
	dataType : 'json',
	data : requestQuery,
	success : function(json) {
		console.log(json);
		for (var i = 0; i < json.length; i++) {
			var element = json[i];
			var record = '<tr>' + '<td>' + element.shainCd + '</td>'
					+ '<td>' + element.name + '</td>' + '<td><button id="'
					+ element.shainCd + '">' + "削除" + '</button></td>'
					+ '</tr>';
			$('#table_data').append(record)
			var op = '<option>' + element.bushoName
					+ '</option>'
			$('#Busho').append(op)

			$("#" + element.shainCd).bind('click', deleteAjax);
		}

	}
});
}
/**
* 読み込み時の動作
*/
$(document).ready(function() {

// 商品名検索ボタンを押したときのイベント
$('#searchBtn').click(getinfo);
});