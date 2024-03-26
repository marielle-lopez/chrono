package marielle.lopez.chrono.events;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import marielle.lopez.chrono.common.BaseEntity;

@Entity
@Table(name = "events")
public class Event extends BaseEntity {
	@Column
	private String name;
	
	@Column
	private Date startedAt;
	
	@Column
	private Date endedAt;
	
	@Column
	private String label;
	
	@Column
	private String location;
	
	public Event() {
		super();
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public Date getStartedAt() {
		return this.startedAt;
	}
	
	public void setStartedAt(Date startedAt) {
		this.startedAt = startedAt;
	}
	
	public Date getEndedAt() {
		return this.endedAt;
	}
	
	public void setEndedAt(Date endedAt) {
		this.endedAt = endedAt;
	}
	
	public String getLabel() {
		return this.label;
	}
	
	public void setLabel(String label) {
		this.label = label;
	}
	
	public String getLocation() {
		return this.location;
	}
	
	public void setLocation(String location) {
		this.location = location;
	}
}
