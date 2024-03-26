package marielle.lopez.chrono.events;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class EventService {
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private EventRepository eventRepository;
	
	
	public List<Event> getAllEvents() {
		return this.eventRepository.findAll();
	}
	
	public String getEventById(Long id) {
		return String.format("This gets an event with ID %d", id);
	}
	
	public Event createEvent(@Valid CreateEventDTO data) {
		Event newEvent = modelMapper.map(data, Event.class);
		return this.eventRepository.save(newEvent);
	}
	
	public String updateEventById(Long id) {
		return String.format("This updates an event with ID %d", id);
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
