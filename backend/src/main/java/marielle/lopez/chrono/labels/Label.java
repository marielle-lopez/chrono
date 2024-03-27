package marielle.lopez.chrono.labels;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import marielle.lopez.chrono.common.BaseEntity;

@Entity
@Table(name = "labels")
public class Label extends BaseEntity {
	@Column
	private String name;
	
	public String getName() {
		return this.name;
	}
	
	public Label() {
		super();
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
