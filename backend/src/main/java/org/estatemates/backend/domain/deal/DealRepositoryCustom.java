package org.estatemates.backend.domain.deal;

import java.util.List;

public interface DealRepositoryCustom {
    List<Deal> findByApartmentId(Long apartmentId);
}
