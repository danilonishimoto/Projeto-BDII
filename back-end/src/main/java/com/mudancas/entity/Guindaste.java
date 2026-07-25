package com.mudancas.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@PrimaryKeyJoinColumn(name="servico_nome")
@Table(name="guindaste")
public class Guindaste extends Servico {

    @Column(name="tamanho_base")
    private String tamanhoBase;

    @Column(name="altura")
    private BigDecimal altura;

    @Column(name="bonus_aumentado")
    private BigDecimal bonusAumentado;
}
