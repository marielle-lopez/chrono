package marielle.lopez.chrono.events;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateEventDTO {
	@NotBlank
	private String name;
	
	@NotBlank
	private String startedAt;
	
	@NotBlank
	private String endedAt;
	
	@NotNull
	@Min(1)
	private Long labelId;
	
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
	
	public Long getLabelId() {
		return this.labelId;
	}
	
	public String getLocation() {
		return this.location;
	}

	@Override
	public String toString() {
		return "CreateEventDTO [name=" + name + ", startedAt=" + startedAt + ", endedAt=" + endedAt + ", labelId=" + labelId
				+ ", location=" + location + "]";
	}
}
