package com.mudancas.service;

import com.mudancas.dto.ClienteDto;
import com.mudancas.entity.Cliente;
import com.mudancas.entity.ClienteTelefone;
import com.mudancas.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClienteService {

    ClienteRepository repository;

    @Autowired
    public ClienteService(ClienteRepository repository) {
        this.repository = repository;
    }

    public ClienteDto create(ClienteDto dto) {

        Cliente cliente = Cliente.builder()
                .cpf(dto.getCpf())
                .rg(dto.getRg())
                .nome(dto.getNome())
                .endereco(dto.getEndereco())
                .build();

        List<ClienteTelefone> telefones = dto.getTelefones()
                .stream().map(telefone -> {
                    ClienteTelefone ct = new ClienteTelefone();
                    ct.setCliente(cliente);
                    ct.setTelefone(telefone);
                    return ct;
                }).toList();

        cliente.setTelefones(telefones);
        Cliente saved = repository.save(cliente);

        return ClienteDto.builder()
                .cpf(saved.getCpf())
                .rg(saved.getRg())
                .nome(saved.getNome())
                .endereco(saved.getEndereco())
                .telefones(saved.getTelefones().stream().map(ClienteTelefone::getTelefone).toList())
                .build();
    }
}
