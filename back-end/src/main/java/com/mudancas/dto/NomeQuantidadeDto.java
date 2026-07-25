package com.mudancas.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NomeQuantidadeDto {

    private String nome;
    private Long valor;
}
