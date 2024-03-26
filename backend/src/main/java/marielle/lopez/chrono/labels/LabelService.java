package marielle.lopez.chrono.labels;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class LabelService {
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private LabelRepository labelRepository;
	
	public List<Label> getAllLabels() {
		return this.labelRepository.findAll();
	}
	
	public Optional<Label> getLabelById(Long id) {
		return this.labelRepository.findById(id);
	}
	
	public Label createLabel(@Valid CreateLabelDTO data) {
		Label createdLabel = modelMapper.map(data, Label.class);
		return this.labelRepository.save(createdLabel);
	}
	
	public Optional<Label> updateLabelById(Long id, @Valid UpdateLabelDTO data) {
		Optional<Label> maybeLabel = this.labelRepository.findById(id);
		if (maybeLabel.isEmpty()) {
			return maybeLabel;
		}
		Label foundLabel = maybeLabel.get();
		if (data.getName() != null) {
			foundLabel.setName(data.getName().trim().toLowerCase());
		}
		Label updatedLabel = this.labelRepository.save(foundLabel);
		return Optional.of(updatedLabel);
	}
	
	public boolean deleteLabelById(Long id) {
		Optional<Label> maybeLabel = this.labelRepository.findById(id);
		if (maybeLabel.isEmpty()) {
			return false;
		}
		this.labelRepository.delete(maybeLabel.get());
		return true;
	}
}
