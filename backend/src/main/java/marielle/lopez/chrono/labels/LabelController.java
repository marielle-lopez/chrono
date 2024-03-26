package marielle.lopez.chrono.labels;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/labels")
public class LabelController {
	@Autowired
	private LabelService labelService;
	
	@GetMapping
	public String getAlLabels() {
		return this.labelService.getAllLabels();
	}
	
	@GetMapping("/{id}")
	public String getLabel(@PathVariable Long id) {
		return this.labelService.getLabelById(id);
	}
	
	@PostMapping
	public String createLabel() {
		return this.labelService.createLabel();
	}
	
	@PatchMapping("/{id}")
	public String updateLabel(@PathVariable Long id) {
		return this.labelService.updateLabelById(id);
	}
	
	@DeleteMapping("/{id}")
	public String deleteLabel(@PathVariable Long id) {
		return this.labelService.deleteLabelById(id);
	}
}
