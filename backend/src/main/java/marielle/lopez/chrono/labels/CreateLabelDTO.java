package marielle.lopez.chrono.labels;

import jakarta.validation.constraints.NotBlank;

public class CreateLabelDTO {
	@NotBlank
	private String name;
	
	public String getName() {
		return this.name;
	}
}
