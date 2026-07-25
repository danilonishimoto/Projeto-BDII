package com.mudancas.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class TransporteId implements Serializable {

    @Column(name="servico_nome")
    private String servicoNome;

    @Column(name="limite_carga")
    private BigDecimal limiteCarga;

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        TransporteId that = (TransporteId) o;
        return Objects.equals(getServicoNome(), that.getServicoNome()) && Objects.equals(getLimiteCarga(), that.getLimiteCarga());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getServicoNome(), getLimiteCarga());
    }
}
