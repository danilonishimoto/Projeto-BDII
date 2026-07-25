package com.mudancas.service;

import com.mudancas.dto.TransporteDto;
import com.mudancas.entity.Servico;
import com.mudancas.entity.Transporte;
import com.mudancas.entity.TransporteId;
import com.mudancas.repository.ServicoRepository;
import com.mudancas.repository.TransporteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransporteService {

    private TransporteRepository repository;
    private ServicoRepository servicoRepository;

    @Autowired
    public TransporteService(TransporteRepository repository, ServicoRepository servicoRepository) {
        this.repository = repository;
        this.servicoRepository = servicoRepository;
    }

    public List<TransporteId> list() {
        return repository.findAll().stream().map(Transporte::getId).toList();
    }

    public TransporteDto create(TransporteDto dto) {
        Servico servico = servicoRepository.findById(dto.getServicoNome()).orElse(null);

        if (servico == null) {
            Servico newServico = new Servico();
            newServico.setNome(dto.getServicoNome());
            newServico.setTipo("Transporte");

           servico = servicoRepository.save(newServico);
        }

        TransporteId id = new TransporteId();
        id.setServicoNome(dto.getServicoNome());
        id.setLimiteCarga(dto.getLimiteCarga());

        Transporte transporte = Transporte.builder()
                .id(id)
                .percentual(dto.getPercentual())
                .servico(servico)
                .build();

        Transporte saved = repository.save(transporte);

        return TransporteDto.builder()
                .servicoNome(saved.getId().getServicoNome())
                .limiteCarga(saved.getId().getLimiteCarga())
                .percentual(saved.getPercentual())
                .build();
    }
}
