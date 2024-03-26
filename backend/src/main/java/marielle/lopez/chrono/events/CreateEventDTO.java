package marielle.lopez.chrono.events;

import java.util.Date;

import jakarta.validation.constraints.NotBlank;

public class CreateEventDTO {
	@NotBlank
	private String name;
	
	@NotBlank
	private Date startedAt;
	
	@NotBlank
	private Date endedAt;
	
	@NotBlank
	private String label;
	
	@NotBlank
	private String location;
	
	public String getName() {
		return this.name;
	}
	
	public Date getStartedAt() {
		return this.startedAt;
	}
	
	public Date getEndedAt() {
		return this.endedAt;
	}
	
	public String getLabel() {
		return this.label;
	}
	
	public String getLocation() {
		return this.location;
	}
}
