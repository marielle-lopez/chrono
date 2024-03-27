package marielle.lopez.chrono.events;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import marielle.lopez.chrono.common.BaseEntity;
import marielle.lopez.chrono.labels.Label;

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
	private String location;
	
	@ManyToOne()
	@JoinColumn(name = "label_id")
	@JsonIgnoreProperties("events")
	private Label label;
	
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
	
	public Label getLabel() {
		return this.label;
	}
	
	public void setLabel(Label label) {
		this.label = label;
	}
	
	public String getLocation() {
		return this.location;
	}
	
	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "Event [name=" + name + ", startedAt=" + startedAt + ", endedAt=" + endedAt + ", label=" + label
				+ ", location=" + location + "]";
	}
}
