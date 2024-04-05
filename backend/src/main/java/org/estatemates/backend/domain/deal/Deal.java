package org.estatemates.backend.domain.deal;

import jakarta.persistence.*;
import lombok.Getter;
import org.estatemates.backend.domain.apartment.Apartment;

@Getter
@Entity
public class Deal {
    @Id
    @Column(name = "deal_id")
    private Long id;

    private String dealAmount;
    private int dealYear;
    private int dealMonth;
    private int dealDay;
    private double area;
    private int floor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "apartment_id")
    private Apartment apartment;
}
