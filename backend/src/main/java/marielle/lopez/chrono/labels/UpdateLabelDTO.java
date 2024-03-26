package marielle.lopez.chrono.labels;

import jakarta.validation.constraints.Pattern;

public class UpdateLabelDTO {
	@Pattern(regexp = "^(?=\\S).*$", message = "Name cannot be empty")
	private String name;
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
