package marielle.lopez.chrono.events;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;

public class UpdateEventDTO {
	@Pattern(regexp = "^(?=\\S).*$", message = "Name cannot be empty")
	private String name;
	
	@Pattern(regexp = "^(?=\\S).*$", message = "Start date cannot be empty")
	private String startedAt;
	
	@Pattern(regexp = "^(?=\\S).*$", message = "End date cannot be empty")
	private String endedAt;
	
	@Pattern(regexp = "^(?=\\S).*$", message = "Location cannot be empty")
	private String location;
	
	@Min(1)
	private Long labelId;
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getStartedAt() {
		return this.startedAt;
	}
	
	public void setStartedAt(String startedAt) {
		this.startedAt = startedAt;
	}
	
	public String getEndedAt() {
		return this.endedAt;
	}
	
	public void setEndedAt(String endedAt) {
		this.endedAt = endedAt;
	}
	
	public String getLocation() {
		return this.location;
	}
	
	public void setLocation(String location) {
		this.location = location;
	}
	
	public Long getLabelId() {
		return this.labelId;
	}
	
	public void setLabel(Long labelId) {
		this.labelId = labelId;
	}
}
