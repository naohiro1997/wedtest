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
	// 部署名
	private String bushoName;

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

	@Override
	public String toString() {
		return "SHAIN [shainCd=" + shainCd + ", name=" + name + "]";
	}

}