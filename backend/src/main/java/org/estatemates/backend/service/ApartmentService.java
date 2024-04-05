package org.estatemates.backend.service;

import lombok.RequiredArgsConstructor;
import org.estatemates.backend.domain.apartment.Apartment;
import org.estatemates.backend.domain.apartment.ApartmentRepository;
import org.estatemates.backend.web.dto.ApartmentResponseDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ApartmentService {
    private final ApartmentRepository apartmentRepository;

    @Transactional(readOnly = true)
    public List<ApartmentResponseDto> findByBounds(double southWestLatitude,
                                                   double southWestLongitude,
                                                   double northEastLatitude,
                                                   double northEastLongitude) {
        List<Apartment> apartments = apartmentRepository.findByBounds(
                southWestLatitude, southWestLongitude,
                northEastLatitude, northEastLongitude);

        return apartments.stream()
                .map(ApartmentResponseDto::new)
                .collect(Collectors.toList());
    }
}
