package marielle.lopez.chrono.events;

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
@RequestMapping("/events")
public class EventController {
	@Autowired
	private EventService eventService;
	
	@GetMapping
	public ResponseEntity<List<Event>> getAllEvents() {
		List<Event> allEvents = this.eventService.getAllEvents();
		return new ResponseEntity<>(allEvents, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Event> getEvent(@PathVariable Long id) throws NotFoundException {
		Optional<Event> maybeEvent = this.eventService.getEventById(id);
		Event foundEvent = maybeEvent.orElseThrow(() -> new NotFoundException(Event.class, id));
		return new ResponseEntity<>(foundEvent, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Event> createEvent(@Valid @RequestBody CreateEventDTO data) {
		Event createdEvent = this.eventService.createEvent(data);
		return new ResponseEntity<>(createdEvent, HttpStatus.CREATED);
	}
	
	@PatchMapping("/{id}")
	public String updateEvent(@PathVariable Long id) {
		return this.eventService.updateEventById(id);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Event> deleteEvent(@PathVariable Long id) throws NotFoundException {
		boolean deleted = this.eventService.deleteEventById(id);
		if (!deleted) {
			throw new NotFoundException(Event.class, id);
		}
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
}
