package marielle.lopez.chrono.events;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EventService {
	@Autowired
	private EventRepository eventRepository;
	
	public String getAllEvents() {
		return "This gets all of the events";
	}
	
	public String getEventById(Long id) {
		return String.format("This gets an event with ID %d", id);
	}
	
	public String createEvent() {
		return "This creates an event";
	}
	
	public String updateEventById(Long id) {
		return String.format("This updates an event with ID %d", id);
	}
	
	public String deleteEventById(Long id) {
		return String.format("This deletes an event with ID %d", id);
	}
}
