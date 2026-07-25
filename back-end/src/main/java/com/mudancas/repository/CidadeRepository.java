package com.mudancas.repository;

import com.mudancas.dto.NomeQuantidadeDto;
import com.mudancas.dto.NomeValorEstadoDto;
import com.mudancas.entity.Cidade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CidadeRepository extends JpaRepository<Cidade, String> {

    @Query(value= """
        SELECT new com.mudancas.dto.NomeQuantidadeDto(c.nome, COUNT(s.id))
        FROM Cidade c
        JOIN Pedido p ON c.nome = p.cidadePartida.nome
        JOIN Solicitam s ON p.id = s.pedido.id
        GROUP BY c.nome, c.estado
        ORDER BY COUNT(s.id) DESC, c.nome
        LIMIT 5
    """)
    public List<NomeQuantidadeDto> listTop5CidadesPorNumeroDeServicos();

    @Query(value= """
        SELECT new com.mudancas.dto.NomeValorEstadoDto(c.nome, c.estado, SUM(s.preco))
        FROM Cidade c
        JOIN Pedido p ON c.nome = p.cidadePartida.nome
        JOIN Solicitam s ON p.id = s.pedido.id
        WHERE p.aceite = 'Aceito'
        GROUP BY c.nome, c.estado
        ORDER BY SUM(s.preco) DESC, c.nome
        LIMIT 5
    """)
    public List<NomeValorEstadoDto> listTop5CidadesPorValorDeServicos();
}
