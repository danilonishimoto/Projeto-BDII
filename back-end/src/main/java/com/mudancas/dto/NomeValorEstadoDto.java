package com.mudancas.dto;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NomeValorEstadoDto {

    private String nome;
    private String estado;
    private BigDecimal valor;
}
