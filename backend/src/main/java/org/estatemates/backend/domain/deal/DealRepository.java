package org.estatemates.backend.domain.deal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface DealRepository extends JpaRepository<Deal, Long>, QuerydslPredicateExecutor<Deal>, DealRepositoryCustom {
}
