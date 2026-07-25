package com.mudancas.dto;

import lombok.*;
import lombok.experimental.SuperBuilder;

import java.math.BigDecimal;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class GuindasteDto {

    private String servicoNome;

    private String tamanhoBase;

    private BigDecimal altura;

    private BigDecimal bonusAumentado;
}
