package marielle.lopez.chrono.labels;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import marielle.lopez.chrono.exceptions.NotFoundException;

@RestController
@RequestMapping("/labels")
public class LabelController {
	@Autowired
	private LabelService labelService;
	
	@GetMapping
	public ResponseEntity<List<Label>> getAlLabels() {
		List<Label> allLabels = this.labelService.getAllLabels();
		return new ResponseEntity<>(allLabels, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Label> getLabel(@PathVariable Long id) throws NotFoundException {
		Optional<Label> maybeLabel = this.labelService.getLabelById(id);
		Label foundLabel = maybeLabel.orElseThrow(() -> new NotFoundException(Label.class, id));
		return new ResponseEntity<>(foundLabel, HttpStatus.FOUND);
	}
	
	@PostMapping
	public ResponseEntity<Label> createLabel(@Valid @RequestBody CreateLabelDTO data) {
		Label createdLabel = this.labelService.createLabel(data);
		return new ResponseEntity<>(createdLabel, HttpStatus.CREATED);
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<Label> updateLabel(@PathVariable Long id, @Valid @RequestBody UpdateLabelDTO data) throws NotFoundException {
		Optional<Label> maybeUpdatedLabel = this.labelService.updateLabelById(id, data);
		Label updatedLabel = maybeUpdatedLabel.orElseThrow(() -> new NotFoundException(Label.class, id));
		return new ResponseEntity<>(updatedLabel, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Label> deleteLabel(@PathVariable Long id) throws NotFoundException {
		boolean deleted = this.labelService.deleteLabelById(id);
		if (!deleted) {
			throw new NotFoundException(Label.class, id);
		}
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
}
