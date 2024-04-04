package org.estatemates.backend.service;

import lombok.RequiredArgsConstructor;
import org.estatemates.backend.domain.deal.Deal;
import org.estatemates.backend.domain.deal.DealRepository;
import org.estatemates.backend.web.dto.DealResponseDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class DealService {
    private final DealRepository dealRepository;

    @Transactional(readOnly = true)
    public List<DealResponseDto> findByApartmentId(Long apartmentId) {
        List<Deal> deals = dealRepository.findByApartmentId(apartmentId);
        return deals.stream()
                .map(DealResponseDto::new)
                .collect(Collectors.toList());
    }
}
