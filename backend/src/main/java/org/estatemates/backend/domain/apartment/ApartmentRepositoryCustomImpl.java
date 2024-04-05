package org.estatemates.backend.domain.apartment;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.estatemates.backend.domain.deal.QDeal;

import java.util.List;

@RequiredArgsConstructor
public class ApartmentRepositoryCustomImpl implements ApartmentRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    private QApartment apartment = QApartment.apartment;
    private QDeal deal = QDeal.deal;

    @Override
    public List<Apartment> findByBounds(double southWestLatitude,
                                        double southWestLongitude,
                                        double northEastLatitude,
                                        double northEastLongitude) {
        return queryFactory
                .selectDistinct(apartment)
                .from(apartment)
                .innerJoin(deal)
                .on(apartment.id.eq(deal.apartment.id))
                .where(
                        apartment.latitude.between(southWestLatitude, northEastLatitude),
                        apartment.longitude.between(southWestLongitude, northEastLongitude)
                )
                .fetch();
    }
}
