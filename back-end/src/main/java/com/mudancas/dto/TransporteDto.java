package com.mudancas.dto;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransporteDto {

    private String servicoNome;

    private BigDecimal limiteCarga;

    private BigDecimal percentual;
}
