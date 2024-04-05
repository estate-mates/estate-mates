package org.estatemates.backend.domain.apartment;

import java.util.List;

public interface ApartmentRepositoryCustom {
    List<Apartment> findByBounds(double southWestLatitude,
                                 double southWestLongitude,
                                 double northEastLatitude,
                                 double northEastLongitude);
}
