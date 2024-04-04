package org.estatemates.backend.web.deal;

import lombok.RequiredArgsConstructor;
import org.estatemates.backend.service.DealService;
import org.estatemates.backend.web.dto.DealResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/deal")
public class DealController {
    private final DealService dealService;

    @GetMapping("/{apartmentId}")
    public ResponseEntity<List<DealResponseDto>> findByApartmentId(@PathVariable Long apartmentId) {
        List<DealResponseDto> response = dealService.findByApartmentId(apartmentId);
        return ResponseEntity.ok().body(response);
    }
}
