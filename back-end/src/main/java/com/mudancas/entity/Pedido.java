package com.mudancas.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="pedidos")
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @ManyToOne
    @JoinColumn(name="empresa_id")
    private Empresa empresa;

    @ManyToOne
    @JoinColumn(name="cliente_id")
    private Cliente cliente;

    @ManyToOne
    @JoinColumn(name="cidade_nome_partida")
    private Cidade cidadePartida;

    @ManyToOne
    @JoinColumn(name="cidade_nome_destino")
    private Cidade cidadeDestino;

    @Column(name="data_solicitacao")
    private LocalDate dataSolicitacao;

    @Column(name="data_resolucao")
    private LocalDate dataResolucao;

    @Column(name="aceite")
    private String aceite;

    @Column(name="preco_total")
    private BigDecimal precoTotal;

    @Column(name="endereco_partida")
    private String enderecoPartida;

    @Column(name="endereco_destino")
    private String enderecoDestino;
}
