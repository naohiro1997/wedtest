package app;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Servlet implementation class SyainRegist
 */
@WebServlet("/SyainRegist")
public class SyainRegist extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * @see HttpServlet#HttpServlet()
     */
    public SyainRegist() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String shainCd = request.getParameter("shainCd");
		String name = request.getParameter("name");
		String bushoID = request.getParameter("bushoID");
		String sex = request.getParameter("sex");
		// JDBCドライバの準備
		try {
		// JDBCドライバのロード
		Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
		// ドライバが設定されていない場合はエラーになります
		throw new RuntimeException(String.format("JDBCドライバのロードに失敗しました。詳細:[%s]",
		e.getMessage()), e);
		}
		// データベースにアクセスするために、データベースのURLとユーザ名とパスワードを指定
		String url = "jdbc:oracle:thin:@localhost:1521:XE"; //url
		String user = "wt2";
		String pass = "wt2";

		// 実行するSQL文
		String sql ="insert into MS_SHAIN (SHAIN_CD,NAME,BUSHO_ID,SEX)";
		if(!shainCd.equals("")&&!name.equals("")&&!sex.equals("")){

				sql+=" values('"+shainCd+"','"+name+"','"+bushoID+"','"+sex+"')";
		}
		System.out.println(sql);
		// エラーが発生するかもしれない処理はtry-catchで囲みます
		// この場合はDBサーバへの接続に失敗する可能性があります
		try (
				// データベースへ接続します
				Connection con = DriverManager.getConnection(url, user, pass);

				// SQLの命令文を実行するための準備をおこないます
				Statement stmt = con.createStatement();

				) {
			// SQLの命令文を実行し、その件数を代入
			int updateNum = stmt.executeUpdate(sql);
			System.out.println(updateNum);

		} catch (Exception e) {
			throw new RuntimeException(String.format("検索処理の実施中にエラーが発生しました。詳細：[%s]", e.getMessage()), e);
		}
		// 画面へレスポンスを返却する処理
				PrintWriter pw = response.getWriter();
				// 受注情報リスト（orderList）をJSON型にして返却
				pw.append(new ObjectMapper().writeValueAsString("ok"));//
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
