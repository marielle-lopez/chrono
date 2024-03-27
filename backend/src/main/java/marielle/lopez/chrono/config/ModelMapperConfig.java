package marielle.lopez.chrono.config;

import java.time.Instant;
import java.util.Date;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import marielle.lopez.chrono.events.CreateEventDTO;
import marielle.lopez.chrono.events.Event;
import marielle.lopez.chrono.events.UpdateEventDTO;
import marielle.lopez.chrono.labels.CreateLabelDTO;
import marielle.lopez.chrono.labels.Label;

@Configuration
public class ModelMapperConfig {
	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper();
		mapper.getConfiguration().setSkipNullEnabled(true);
		mapper.typeMap(String.class, String.class).setConverter(new TrimConverter());
		mapper.typeMap(CreateEventDTO.class, Event.class).addMappings(m -> m.using(new LowerCaseConverter()).map(CreateEventDTO::getLabel, Event::setLabel));
		mapper.typeMap(CreateEventDTO.class, Event.class).addMappings(m -> m.using(new StringToDateConverter()).map(CreateEventDTO::getStartedAt, Event::setStartedAt));
		mapper.typeMap(CreateEventDTO.class, Event.class).addMappings(m -> m.using(new StringToDateConverter()).map(CreateEventDTO::getEndedAt, Event::setEndedAt));
		mapper.typeMap(UpdateEventDTO.class, Event.class).addMappings(m -> m.using(new StringToDateConverter()).map(UpdateEventDTO::getStartedAt, Event::setStartedAt));
		mapper.typeMap(UpdateEventDTO.class, Event.class).addMappings(m -> m.using(new StringToDateConverter()).map(UpdateEventDTO::getEndedAt, Event::setEndedAt));
		mapper.typeMap(CreateLabelDTO.class, Label.class).addMappings(m -> m.using(new LowerCaseConverter()).map(CreateLabelDTO::getName, Label::setName));
		
		return mapper;
	}
	
	private class TrimConverter implements Converter<String, String> {
		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().trim();
		}
	}
	
	private class LowerCaseConverter implements Converter<String, String> {
		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().toLowerCase();
		}
	}
	
	private class StringToDateConverter implements Converter<String, Date> {
		@Override
		public Date convert(MappingContext<String, Date> context) {
			if (context.getSource() == null) {
				return null;
			}
			Date date = Date.from(Instant.parse(context.getSource()));
			return date;
		}
	}
}
