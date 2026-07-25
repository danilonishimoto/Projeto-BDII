package com.mudancas.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Inheritance(strategy=InheritanceType.JOINED)
@Table(name="servicos")
public class Servico {

    @Id
    @Column(name="nome")
    private String nome;

    @Column(name="tipo")
    private String tipo;
}
