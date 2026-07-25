package com.mudancas.repository;

import com.mudancas.dto.HistogramaNumeroServicosCidadesDto;
import com.mudancas.dto.HistogramaPagamentosServicosCidadesDto;
import com.mudancas.entity.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Integer> {

    @Query(value= """
        SELECT
            quantidade_servicos,
            COUNT(*) AS quantidade_cidades
        FROM (
            SELECT
                c.nome,
                COUNT(s.id) AS quantidade_servicos
            FROM CIDADES c
            JOIN PEDIDOS p
                ON p.cidade_nome_partida = c.nome
            JOIN SOLICITAM s
                ON s.pedido_id = p.id
            GROUP BY c.nome
        ) t
        GROUP BY quantidade_servicos
        ORDER BY quantidade_servicos;
    """, nativeQuery = true)
    public List<HistogramaNumeroServicosCidadesDto> listHistogramaNumeroServicosCidadesDto();

    @Query(value= """
        SELECT new com.mudancas.dto.HistogramaPagamentosServicosCidadesDto(p.cidadePartida.nome, SUM(p.precoTotal))
        FROM Pedido p
        WHERE p.aceite = 'Aceito'
        GROUP BY p.cidadePartida.nome
        ORDER BY SUM(p.precoTotal)
    """)
    public List<HistogramaPagamentosServicosCidadesDto> listHistogramaPagamentosServicosCidadesDto();
}
