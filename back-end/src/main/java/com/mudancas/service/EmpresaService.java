package com.mudancas.service;

import com.mudancas.dto.EmpresaDto;
import com.mudancas.dto.NomeQuantidadeDto;
import com.mudancas.dto.NomeValorDto;
import com.mudancas.entity.Empresa;
import com.mudancas.entity.EmpresaTelefone;
import com.mudancas.repository.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpresaService {

    private EmpresaRepository repository;

    @Autowired
    public EmpresaService(EmpresaRepository repository) {
        this.repository = repository;
    }

    public EmpresaDto create(EmpresaDto dto) {

        Empresa empresa = Empresa.builder()
                .nome(dto.getNome())
                .endereco(dto.getEndereco())
                .build();

        List<EmpresaTelefone> telefones = dto.getTelefones()
                .stream().map(telefone -> {
                    EmpresaTelefone et = new EmpresaTelefone();
                    et.setTelefone(telefone);
                    et.setEmpresa(empresa);
                    return et;
                }).toList();

        empresa.setTelefones(telefones);
        Empresa saved = repository.save(empresa);

        return EmpresaDto.builder()
                .nome(saved.getNome())
                .endereco(saved.getEndereco())
                .telefones(saved.getTelefones().stream().map(EmpresaTelefone::getTelefone).toList())
                .build();
    }

    public List<NomeQuantidadeDto> listTop5EmpresasPorNumeroDeServicos() {
        return repository.listTop5EmpresasPorNumeroDeServicos();
    }

    public List<NomeValorDto> listTop5EmpresasPorValorDeServicos() {
        return repository.listTop5EmpresasPorValorDeServicos();
    }
}
