package org.estatemates.backend.web.deal;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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

    @Operation(summary = "아파트 매매가 조회", description = "특정 아파트의 매매가를 조회한다.")
    @ApiResponse(responseCode = "200", content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = DealResponseDto.class))
    })
    @GetMapping("/{apartmentId}")
    public ResponseEntity<List<DealResponseDto>> findByApartmentId(
            @Parameter(description = "아파트 ID", required = true) @PathVariable Long apartmentId) {
        List<DealResponseDto> response = dealService.findByApartmentId(apartmentId);
        return ResponseEntity.ok().body(response);
    }
}
