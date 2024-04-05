package org.estatemates.backend.web.dto;

import lombok.Getter;
import org.estatemates.backend.domain.apartment.Apartment;

@Getter
public class ApartmentResponseDto {
    private Long apartmentId;
    private String name;
    private double latitude;
    private double longitude;

    public ApartmentResponseDto(Apartment apartment) {
        this.apartmentId = apartment.getId();
        this.name = apartment.getName();
        this.latitude = apartment.getLatitude();
        this.longitude = apartment.getLongitude();
    }
}
