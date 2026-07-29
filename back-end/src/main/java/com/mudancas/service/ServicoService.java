package com.mudancas.service;

import com.mudancas.entity.Servico;
import com.mudancas.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicoService {

    private ServicoRepository repository;

    @Autowired
    public ServicoService(ServicoRepository repository) {
        this.repository = repository;
    }

    public Servico create(Servico servico) {
        return repository.save(servico);
    }

    public List<String> findAll() {
        return repository.findAll().stream().map(Servico::getNome).toList();
    }
}
