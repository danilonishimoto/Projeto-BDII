package com.mudancas.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PedidoResponseDto {

    private int id;

    private int empresaId;

    private int clienteId;

    private String cidadeNomePartida;

    private String cidadeNomeDestino;

    private LocalDate dataSolicitacao;

    private String aceite;

    private String enderecoPartida;

    private String enderecoDestino;
}
