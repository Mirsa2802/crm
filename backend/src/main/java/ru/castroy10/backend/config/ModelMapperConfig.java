package ru.castroy10.backend.config;

import org.modelmapper.AbstractConverter;
import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ru.castroy10.backend.dto.abonement.AbonementRequestSaveDto;
import ru.castroy10.backend.dto.abonement.AbonementRequestUpdateDto;
import ru.castroy10.backend.dto.appuser.AppUserRequestUpdateDto;
import ru.castroy10.backend.model.Abonement;
import ru.castroy10.backend.model.Appuser;
import ru.castroy10.backend.model.Client;
import ru.castroy10.backend.repository.ClientRepository;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Configuration
public class ModelMapperConfig {

    private final ClientRepository clientRepository;

    public ModelMapperConfig(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.addConverter(stringToLocalDate);
        modelMapper.getConfiguration().setPropertyCondition(Conditions.isNotNull());
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        modelMapper.typeMap(AppUserRequestUpdateDto.class, Appuser.class)
                .addMappings(mapper -> mapper.skip(Appuser::setRoles))
                .addMappings(mapper -> mapper.skip(Appuser::setUsername));
        modelMapper.typeMap(AbonementRequestSaveDto.class, Abonement.class)
                .addMappings(mapper -> mapper.using(clientIdToClient).map(AbonementRequestSaveDto::getClient_id, Abonement::setClient));
        modelMapper.typeMap(AbonementRequestUpdateDto.class, Abonement.class)
                .addMappings(mapper -> mapper.using(clientIdToClient).map(AbonementRequestUpdateDto::getClient_id, Abonement::setClient));

        return modelMapper;
    }

    private final AbstractConverter<String, LocalDate> stringToLocalDate = new AbstractConverter<>() {
        @Override
        protected LocalDate convert(String source) {
            return LocalDate.parse(source, DateTimeFormatter.ofPattern("dd.MM.yyyy"));
        }
    };

    private final AbstractConverter<Long, Client> clientIdToClient = new AbstractConverter<>() {
        @Override
        protected Client convert(Long id) {
            return clientRepository.findById(id).orElse(null);
        }
    };
}
