package com.mudancas.repository;

import com.mudancas.entity.Solicitam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SolicitamRepository extends JpaRepository<Solicitam, Integer> {
}
