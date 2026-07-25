package com.mudancas.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="funcionarios")
public class Funcionario {

    @Id
    @Column(name="cpf")
    private String cpf;

    @Column(name="rg")
    private String rg;

    @Column(name="nome")
    private String nome;

    @Column(name="endereco")
    private String endereco;

    @Column(name="telefone")
    private String telefone;

    @Column(name="tipo")
    private String tipo;

    @Column(name="salario")
    private BigDecimal salario;
}
