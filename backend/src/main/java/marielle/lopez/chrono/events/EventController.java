package marielle.lopez.chrono.events;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/events")
public class EventController {
	@Autowired
	private EventService eventService;
	
	@GetMapping
	public String getAllEvents() {
		return this.eventService.getAllEvents();
	}
	
	@GetMapping("/{id}")
	public String getEvent(@PathVariable Long id) {
		return this.eventService.getEventById(id);
	}
	
	@PostMapping
	public String createEvent() {
		return this.eventService.createEvent();
	}
	
	@PatchMapping("/{id}")
	public String updateEvent(@PathVariable Long id) {
		return this.eventService.updateEventById(id);
	}
	
	@DeleteMapping("/{id}")
	public String deleteEvent(@PathVariable Long id) {
		return this.eventService.deleteEventById(id);
	}
}
