package com.mudancas.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="solicitam")
public class Solicitam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @ManyToOne
    @JoinColumn(name="pedido_id")
    private Pedido pedido;

    @ManyToOne
    @JoinColumn(name="funcionario_cpf")
    private Funcionario funcionario;

    @ManyToOne
    @JoinColumn(name="servico_nome")
    private Servico servico;

    @JdbcTypeCode(SqlTypes.INTERVAL_SECOND)
    @Column(name="tempo_duracao")
    private Duration tempoDuracao;

    @Column(name="preco")
    private BigDecimal preco;

    @Column(name="carga")
    private BigDecimal carga;

    @Column(name="data_finalizacao")
    private LocalDate dataFinalizacao;
}
