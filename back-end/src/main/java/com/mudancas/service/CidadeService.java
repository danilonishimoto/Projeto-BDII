package com.mudancas.service;

import com.mudancas.dto.*;
import com.mudancas.entity.Cidade;
import com.mudancas.repository.CidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CidadeService {

    private CidadeRepository repository;

    @Autowired
    public CidadeService(CidadeRepository repository) {
        this.repository = repository;
    }

    public List<Cidade> list() {
        Sort sort = Sort.by("estado").ascending().and(Sort.by("nome").ascending());
        return repository.findAll(sort);
    }

    public Cidade create(Cidade cidade) {
        return repository.save(cidade);
    }

    public List<NomeQuantidadeDto> getTop5CidadesPorNumeroDeServicos() {
        return repository.listTop5CidadesPorNumeroDeServicos();
    }

    public List<NomeValorEstadoDto> listTop5CidadesPorValorDeServicos() {
        return repository.listTop5CidadesPorValorDeServicos();
    }
}
