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
}
