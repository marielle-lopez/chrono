package marielle.lopez.chrono.events;

import java.util.Date;

import jakarta.validation.constraints.NotBlank;

public class CreateEventDTO {
	@NotBlank
	private String name;
	
	@NotBlank
	private String startedAt;
	
	@NotBlank
	private String endedAt;
	
	@NotBlank
	private String label;
	
	@NotBlank
	private String location;
	
	public String getName() {
		return this.name;
	}
	
	public String getStartedAt() {
		return this.startedAt;
	}
	
	public String getEndedAt() {
		return this.endedAt;
	}
	
	public String getLabel() {
		return this.label;
	}
	
	public String getLocation() {
		return this.location;
	}
}
