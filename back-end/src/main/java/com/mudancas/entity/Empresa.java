package com.mudancas.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="empresas")
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="nome")
    private String nome;

    @Column(name="endereco")
    private String endereco;

    @OneToMany(mappedBy="empresa", cascade=CascadeType.ALL, orphanRemoval=true)
    private List<EmpresaTelefone> telefones = new ArrayList<>();
}
