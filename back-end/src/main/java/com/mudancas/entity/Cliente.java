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
@Table(name="clientes")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="cpf")
    private String cpf;

    @Column(name="rg")
    private String rg;

    @Column(name="nome")
    private String nome;

    @Column(name="endereco")
    private String endereco;

    @OneToMany(mappedBy="cliente", cascade=CascadeType.ALL, orphanRemoval=true)
    private List<ClienteTelefone> telefones = new ArrayList<>();
}
