package com.mudancas.repository;

import com.mudancas.entity.Guindaste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuindasteRepository extends JpaRepository<Guindaste, String> {
}
