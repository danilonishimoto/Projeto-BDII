package com.mudancas.service;

import com.mudancas.entity.Funcionario;
import com.mudancas.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FuncionarioService {

    private FuncionarioRepository repository;

    @Autowired
    public FuncionarioService(FuncionarioRepository repository) {
        this.repository = repository;
    }

    public Funcionario create(Funcionario funcionario) {
        return repository.save(funcionario);
    }
}
