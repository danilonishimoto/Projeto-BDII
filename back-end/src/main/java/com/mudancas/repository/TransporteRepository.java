package com.mudancas.repository;

import com.mudancas.entity.Transporte;
import com.mudancas.entity.TransporteId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransporteRepository extends JpaRepository<Transporte, TransporteId> {
}
