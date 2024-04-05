package org.estatemates.backend.web.apartment;

import lombok.RequiredArgsConstructor;
import org.estatemates.backend.service.ApartmentService;
import org.estatemates.backend.web.dto.ApartmentResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/apartments")
public class ApartmentController {
    private final ApartmentService apartmentService;

    @GetMapping
    public ResponseEntity<List<ApartmentResponseDto>> findByBounds(@RequestParam double southWestLatitude,
                                                                   @RequestParam double southWestLongitude,
                                                                   @RequestParam double northEastLatitude,
                                                                   @RequestParam double northEastLongitude) {
        List<ApartmentResponseDto> response = apartmentService.findByBounds(
                southWestLatitude, southWestLongitude,
                northEastLatitude, northEastLongitude);

        return ResponseEntity.ok().body(response);
    }
}