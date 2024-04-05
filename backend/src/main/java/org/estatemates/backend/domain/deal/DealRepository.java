package org.estatemates.backend.domain.deal;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DealRepository extends JpaRepository<Deal, Long>, DealRepositoryCustom {
}
