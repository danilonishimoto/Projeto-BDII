package com.mudancas.dto;

import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.math.BigDecimal;
import java.time.Duration;

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

    @JdbcTypeCode(SqlTypes.INTERVAL_SECOND)
    private Duration tempoDuracao;

    private BigDecimal carga;
}
