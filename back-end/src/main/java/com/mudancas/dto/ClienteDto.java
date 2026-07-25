package com.mudancas.dto;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ClienteDto {

    private String cpf;
    private String rg;
    private String nome;
    private String endereco;
    private List<String> telefones = new ArrayList<>();
}
