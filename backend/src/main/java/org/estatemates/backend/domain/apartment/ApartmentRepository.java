package org.estatemates.backend.domain.apartment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ApartmentRepository extends JpaRepository<Apartment, Long>, ApartmentRepositoryCustom {
}
