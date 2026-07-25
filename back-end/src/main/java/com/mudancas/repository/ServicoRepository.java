package com.mudancas.repository;

import com.mudancas.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ServicoRepository extends JpaRepository<Servico, String> {
}
