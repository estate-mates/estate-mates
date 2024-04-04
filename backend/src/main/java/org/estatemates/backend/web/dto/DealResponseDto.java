package org.estatemates.backend.web.dto;

import lombok.Getter;
import lombok.Setter;
import org.estatemates.backend.domain.deal.Deal;

@Getter
@Setter
public class DealResponseDto {
    private int dealYear;
    private int dealMonth;
    private int dealDay;
    private double area;
    private String dealAmount;

    public DealResponseDto(Deal deal) {
        this.dealYear = deal.getDealYear();
        this.dealMonth = deal.getDealMonth();
        this.dealDay = deal.getDealDay();
        this.area = deal.getArea();
        this.dealAmount = deal.getDealAmount();
    }
}
