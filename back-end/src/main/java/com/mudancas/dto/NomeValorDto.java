package com.mudancas.dto;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NomeValorDto {

    private String nome;
    private BigDecimal valor;
}
