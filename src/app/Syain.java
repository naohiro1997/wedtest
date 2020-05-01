package app;

import java.io.Serializable;

public class Syain implements Serializable {

	public Syain() {
		// 何もしない
	}

	// Shaincod
	private String shainCd;
	// なまえ
	private String name;
	// 編集社員コード
	private String upshainCd;
	// 部署名
	private String bushoName;
	// 部署id
	private String bushoID;
	// 編集部署id
	private String upbushoID;
	//性別
	private String sex;

	public String getShainCd() {
		return shainCd;
	}

	public void setShainCd(String shainCd) {
		this.shainCd = shainCd;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBushoName() {
		return bushoName;
	}

	public void setBushoName(String bushoName) {
		this.bushoName = bushoName;
	}

	public String getUpshainCd() {
		return upshainCd;
	}

	public void setUpshainCd(String upshainCd) {
		this.upshainCd = upshainCd;
	}

	public String getBushoID() {
		return bushoID;
	}

	public void setBushoID(String bushoID) {
		this.bushoID = bushoID;
	}

	public String getUpbushoID() {
		return upbushoID;
	}

	public void setUpbushoID(String upbushoID) {
		this.upbushoID = upbushoID;
	}
	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	@Override
	public String toString() {
		return "SHAIN [shainCd=" + shainCd + ", name=" + name + ",upshainCd=" + upshainCd + ",bushoID=" + bushoID +",upbushoID=" + upbushoID+",sex=" + sex+"]";
	}



}