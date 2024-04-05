package org.estatemates.backend.domain.apartment;

import jakarta.persistence.*;
import lombok.Getter;
import org.estatemates.backend.domain.dongcode.DongCode;

@Getter
@Entity
public class Apartment {
    @Id
    @Column(name = "apartment_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dong_code")
    private DongCode dongCode;

    private String name;
    private int buildYear;
    private double latitude;
    private double longitude;
}
