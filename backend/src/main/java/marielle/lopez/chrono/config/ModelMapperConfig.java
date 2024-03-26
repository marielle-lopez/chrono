package marielle.lopez.chrono.config;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import marielle.lopez.chrono.events.CreateEventDTO;
import marielle.lopez.chrono.events.Event;
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
}
