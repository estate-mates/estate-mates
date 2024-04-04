package org.estatemates.backend.domain.deal;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
public class DealRepositoryCustomImpl implements DealRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    private QDeal deal = QDeal.deal;

    @Override
    public List<Deal> findByApartmentId(Long apartmentId) {
        return queryFactory
                .selectFrom(deal)
                .where(deal.apartment.id.eq(apartmentId))
                .orderBy(deal.dealYear.desc(), deal.dealMonth.desc(), deal.dealDay.desc())
                .fetch();
    }
}
