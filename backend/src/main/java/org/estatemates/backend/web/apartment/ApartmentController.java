package org.estatemates.backend.web.apartment;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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

    @Operation(summary = "아파트 조회", description = "지정한 범위 내의 아파트를 조회한다.")
    @ApiResponse(responseCode = "200", content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ApartmentResponseDto.class))
    })
    @GetMapping
    public ResponseEntity<List<ApartmentResponseDto>> findByBounds(
            @Parameter(description = "남서쪽 지점의 위도", required = true) @RequestParam double southWestLatitude,
            @Parameter(description = "남서쪽 지점의 경도", required = true) @RequestParam double southWestLongitude,
            @Parameter(description = "북동쪽 지점의 위도", required = true) @RequestParam double northEastLatitude,
            @Parameter(description = "북동쪽 지점의 경도", required = true) @RequestParam double northEastLongitude) {
        List<ApartmentResponseDto> response = apartmentService.findByBounds(
                southWestLatitude, southWestLongitude,
                northEastLatitude, northEastLongitude);

        return ResponseEntity.ok().body(response);
    }
}