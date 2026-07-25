package com.mudancas.service;

import com.mudancas.dto.SolicitamDto;
import com.mudancas.dto.SolicitamResponseDto;
import com.mudancas.entity.Solicitam;
import com.mudancas.repository.FuncionarioRepository;
import com.mudancas.repository.PedidoRepository;
import com.mudancas.repository.ServicoRepository;
import com.mudancas.repository.SolicitamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SolicitamService {

    private SolicitamRepository repository;
    private ServicoRepository servicoRepository;
    private FuncionarioRepository funcionarioRepository;
    private PedidoRepository pedidoRepository;

    @Autowired
    public SolicitamService(SolicitamRepository repository, ServicoRepository servicoRepository, FuncionarioRepository funcionarioRepository, PedidoRepository pedidoRepository) {
        this.repository = repository;
        this.servicoRepository = servicoRepository;
        this.funcionarioRepository = funcionarioRepository;
        this.pedidoRepository = pedidoRepository;
    }

    public SolicitamResponseDto create(SolicitamDto dto) {
        Solicitam solicitam = Solicitam.builder()
                .servico(servicoRepository.findById(dto.getServicoNome()).orElse(null))
                .funcionario(funcionarioRepository.findById(dto.getFuncionarioCpf()).orElse(null))
                .pedido(pedidoRepository.findById(dto.getPedidoId()).orElse(null))
                .tempoDuracao(dto.getTempoDuracao())
                .carga(dto.getCarga())
                .build();

        Solicitam saved = repository.save(solicitam);

        return SolicitamResponseDto.builder()
                .id(saved.getId())
                .servicoNome(saved.getServico().getNome())
                .funcionarioCpf(saved.getFuncionario().getCpf())
                .pedidoId(saved.getPedido().getId())
                .tempoDuracao(saved.getTempoDuracao())
                .carga(saved.getCarga())
                .build();
    }
}
