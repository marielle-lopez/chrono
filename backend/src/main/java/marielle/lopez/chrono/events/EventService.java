package marielle.lopez.chrono.events;

import java.time.Instant;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAccessor;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import marielle.lopez.chrono.exceptions.ServiceValidationException;
import marielle.lopez.chrono.exceptions.ValidationErrors;
import marielle.lopez.chrono.labels.Label;
import marielle.lopez.chrono.labels.LabelService;

@Service
@Transactional
public class EventService {
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private EventRepository eventRepository;
	
	@Autowired
	private LabelService labelService;
	
	public List<Event> getAllEvents() {
		return this.eventRepository.findAll();
	}
	
	public Optional<Event> getEventById(Long id) {
		return this.eventRepository.findById(id);
	}
	
	public Event createEvent(@Valid CreateEventDTO data) throws ServiceValidationException {
		ValidationErrors errors = new ValidationErrors();
		Event newEvent = modelMapper.map(data, Event.class);
		Long labelId = data.getLabelId();
		Optional<Label> maybeLabel = this.labelService.getLabelById(labelId);
		if (maybeLabel.isEmpty()) {
			errors.addError("label", String.format("Label with ID %d does not exist", labelId));
		} else {
			newEvent.setLabel(maybeLabel.get());
		}
		if (errors.hasErrors()) {
			throw new ServiceValidationException(errors);
		}
		return this.eventRepository.save(newEvent);
	}
	
	public Optional<Event> updateEventById(Long id, @Valid UpdateEventDTO data) throws ServiceValidationException {
		ValidationErrors errors = new ValidationErrors();
		Optional<Event> maybeEvent = this.eventRepository.findById(id);
		if (maybeEvent.isEmpty()) {
			return maybeEvent;
		}
		Event foundEvent = maybeEvent.get();
		if (data.getName() != null) {
			foundEvent.setName(data.getName().trim());
		}
		if (data.getStartedAt() != null) {
			TemporalAccessor ta = DateTimeFormatter.ISO_INSTANT.parse(data.getStartedAt());
			Instant i = Instant.from(ta);
			Date newStartedAt = Date.from(i);
			foundEvent.setStartedAt(newStartedAt);
		}
		if (data.getEndedAt() != null) {
			TemporalAccessor ta = DateTimeFormatter.ISO_INSTANT.parse(data.getEndedAt());
			Instant i = Instant.from(ta);
			Date newEndedAt = Date.from(i);
			foundEvent.setEndedAt(newEndedAt);
		}
		if (data.getLocation() != null) {
			foundEvent.setLocation(data.getLocation().trim());
		}
		if (data.getLabelId() != null) {
			Long labelId = data.getLabelId();
			Optional<Label> maybeLabel = this.labelService.getLabelById(labelId);
			if (maybeLabel.isEmpty()) {
				errors.addError("label", String.format("Label with ID %d does not exist", labelId));
			}
			foundEvent.setLabel(maybeLabel.get());
		}
		if (errors.hasErrors()) {
			throw new ServiceValidationException(errors);
		}
		Event updatedEvent = this.eventRepository.save(foundEvent);
		return Optional.of(updatedEvent);
	}
	
	public boolean deleteEventById(Long id)  {
		Optional<Event> maybeEvent = this.eventRepository.findById(id);
		if (maybeEvent.isEmpty()) {
			return false;
		}
		this.eventRepository.delete(maybeEvent.get());
		return true;
	}
}
