package org.estatemates.backend.domain.apartment;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;

@Getter
@Entity
public class Apartment {
    @Id
    @Column(name = "apartment_id")
    private Long id;

    private String name;
    private int buildYear;
    private double latitude;
    private double longitude;
}
