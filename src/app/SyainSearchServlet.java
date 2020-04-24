package app;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet implementation class SyainSearchServlet
 */
@WebServlet("/SyainSearchServlet")
public class SyainSearchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public SyainSearchServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// アクセス元のHTMLでitemNameに設定された値を取得して、String型の変数itemNameに代入
		String shainCd = request.getParameter("shainCd");
		String name = request.getParameter("name");
		String bushoName = request.getParameter("bushoName");
		// JDBCドライバの準備
		try {
			// JDBCドライバのロード
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
			// ドライバが設定されていない場合はエラーになります
			throw new RuntimeException(String.format("JDBCドライバのロードに失敗しました。詳細:[%s]", e.getMessage()), e);
		}
		// データベースにアクセスするために、データベースのURLとユーザ名とパスワードを指定
		String url = "jdbc:oracle:thin:@localhost:1521:XE"; // url
		String user = "wt2";
		String pass = "wt2";
		// 実行するSQL文
		String sql = "select MS_SHAIN.SHAIN_CD,MS_SHAIN.NAME,BUSHO.BUSHO_NAME" + " from MS_SHAIN,BUSHO"
				+ " where 1=1 and  MS_SHAIN.BUSHO_ID=BUSHO.BUSHO_ID and MS_SHAIN.NAME like '%" + name
				+ "%' and SHAIN_CD='" + shainCd + "' and BUSHO_NAME='" + bushoName + "'"
				+ " ORDER BY MS_SHAIN.SHAIN_CD";
		// list型
		List<Syain> list = new ArrayList<>();
		// エラーが発生するかもしれない処理はtry-catchで囲みます
		// この場合はDBサーバへの接続に失敗する可能性があります
		try (
				// データベースへ接続します
				Connection con = DriverManager.getConnection(url, user, pass);

				// SQLの命令文を実行するための準備をおこないます
				Statement stmt = con.createStatement();

				// SQLの命令文を実行し、その結果をResultSet型のrsに代入します
				ResultSet rs = stmt.executeQuery(sql);) {
			// SQL実行後の処理内容

			// SQL実行結果を保持している変数rsから商品情報を取得
			// rs.nextは取得した商品情報表に次の行があるとき、trueになります
			// 次の行がないときはfalseになります
			while (rs.next()) {
				Syain syain = new Syain();
				syain.setName(rs.getString("NAME"));
				syain.setShainCd(rs.getString("SHAIN_CD"));
				syain.setBushoName(rs.getString("BUSHO_NAME"));
				list.add(syain);
			}
		} catch (Exception e) {
			throw new RuntimeException(String.format("検索処理の実施中にエラーが発生しました。詳細：[%s]", e.getMessage()), e);
		}

		// 画面へレスポンスを返却する処理
		PrintWriter pw = response.getWriter();
		// 受注情報リスト（orderList）をJSON型にして返却
		pw.append(new ObjectMapper().writeValueAsString(list));//

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
