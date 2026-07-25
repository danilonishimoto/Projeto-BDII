package com.mudancas.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="transporte")
public class Transporte {

    @EmbeddedId
    private TransporteId id;

    @MapsId("servicoNome")
    @ManyToOne
    @JoinColumn(name="servico_nome")
    private Servico servico;

    @Column(name="percentual")
    private BigDecimal percentual;
}
