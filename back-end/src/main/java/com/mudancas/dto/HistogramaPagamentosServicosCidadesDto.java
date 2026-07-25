package com.mudancas.dto;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HistogramaPagamentosServicosCidadesDto {

    private String nomeCidade;
    private BigDecimal pagamento;
}
