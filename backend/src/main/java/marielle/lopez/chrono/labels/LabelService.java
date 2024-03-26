package marielle.lopez.chrono.labels;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class LabelService {
	@Autowired
	private LabelRepository labelRepository;
	
	public String getAllLabels() {
		return "This gets all labels";
	}
	
	public String getLabelById(Long id) {
		return String.format("This gets a label with ID %d", id);
	}
	
	public String createLabel() {
		return "This creates a label";
	}
	
	public String updateLabelById(Long id) {
		return String.format("This updates a label with ID %d", id);
	}
	
	public String deleteLabelById(Long id) {
		return String.format("This deletes a label with ID %d", id);
	}
}
