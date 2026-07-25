package com.mudancas.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HistogramaNumeroServicosCidadesDto {

    private long quantidadeServicos;
    private long quantidadeCidades;

}
