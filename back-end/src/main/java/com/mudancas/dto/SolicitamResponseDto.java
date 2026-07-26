package com.mudancas.dto;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SolicitamResponseDto {

    private int id;

    private String servicoNome;

    private String funcionarioCpf;

    private int pedidoId;

    private int tempoDuracao;

    private BigDecimal carga;
}
