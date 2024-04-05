package org.estatemates.backend.domain.dongcode;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;

@Getter
@Entity
public class DongCode {
    @Id
    @Column(name = "dong_code")
    private String dongCode;
    private String sidoName;
    private String sigunguName;
    private String dongName;
}
