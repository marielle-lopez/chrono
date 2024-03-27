package marielle.lopez.chrono.labels;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import marielle.lopez.chrono.common.BaseEntity;
import marielle.lopez.chrono.events.Event;

@Entity
@Table(name = "labels")
public class Label extends BaseEntity {
	@Column
	private String name;
	
	@OneToMany(mappedBy = "label")
	@JsonIgnoreProperties("label")
	private List<Event> events;
	
	public Label() {
		super();
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public List<Event> getEvents() {
		return this.events;
	}
	
	public void setEvents(List<Event> events) {
		this.events = events;
	}
}
