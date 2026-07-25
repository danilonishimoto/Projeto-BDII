package com.mudancas.service;

import com.mudancas.dto.GuindasteDto;
import com.mudancas.entity.Guindaste;
import com.mudancas.entity.Servico;
import com.mudancas.repository.GuindasteRepository;
import com.mudancas.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GuindasteService {

    private GuindasteRepository repository;

    @Autowired
    public GuindasteService(GuindasteRepository repository) {
        this.repository = repository;
    }

    public List<String> list() {
        return repository.findAll().stream().map(Servico::getNome).toList();
    }

    public GuindasteDto create(GuindasteDto dto) {
        Guindaste guindaste = Guindaste.builder()
                .nome(dto.getServicoNome())
                .tipo("Guindaste")
                .tamanhoBase(dto.getTamanhoBase())
                .altura(dto.getAltura())
                .bonusAumentado(dto.getBonusAumentado())
                .build();

        Guindaste saved = repository.save(guindaste);

        return GuindasteDto.builder()
                .servicoNome(guindaste.getNome())
                .tamanhoBase(guindaste.getTamanhoBase())
                .altura(guindaste.getAltura())
                .bonusAumentado(guindaste.getBonusAumentado())
                .build();



    }
}
