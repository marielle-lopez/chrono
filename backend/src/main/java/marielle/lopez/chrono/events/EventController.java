package marielle.lopez.chrono.events;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/events")
public class EventController {
	@GetMapping
	public String getAllEvents() {
		return "This gets all events";
	}
	
	@PostMapping
	public String createEvent() {
		return "This creates an event";
	}
	
	@PatchMapping
	public String updateEvent() {
		return "This updates an event";
	}
	
	@DeleteMapping
	public String deleteEvent() {
		return "This deletes an event";
	}
}
