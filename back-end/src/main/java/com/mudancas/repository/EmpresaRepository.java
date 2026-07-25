package com.mudancas.repository;

import com.mudancas.dto.NomeQuantidadeDto;
import com.mudancas.dto.NomeValorDto;
import com.mudancas.entity.Empresa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Integer> {

    @Query(value= """
        SELECT new com.mudancas.dto.NomeQuantidadeDto(e.nome, COUNT(s.id))
        FROM Empresa e
        JOIN Pedido p ON e.id = p.empresa.id
        JOIN Solicitam s ON p.id = s.pedido.id
        GROUP BY e.id, e.nome
        ORDER BY COUNT (s.id) DESC, e.nome
        LIMIT 5
    """)
    public List<NomeQuantidadeDto> listTop5EmpresasPorNumeroDeServicos();

    @Query(value="""
        SELECT new com.mudancas.dto.NomeValorDto(e.nome, SUM(s.preco))
        FROM Empresa e
        JOIN Pedido p ON e.id = p.empresa.id
        JOIN Solicitam s ON p.id = s.pedido.id
        WHERE p.aceite = 'Aceito'
        GROUP BY e.id, e.nome
        ORDER BY SUM(s.preco) DESC, e.nome
        LIMIT 5
    """)
    public List<NomeValorDto> listTop5EmpresasPorValorDeServicos();
}
