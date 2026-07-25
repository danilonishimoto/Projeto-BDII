package com.mudancas.service;

import com.mudancas.dto.HistogramaNumeroServicosCidadesDto;
import com.mudancas.dto.HistogramaPagamentosServicosCidadesDto;
import com.mudancas.dto.PedidoDto;
import com.mudancas.dto.PedidoResponseDto;
import com.mudancas.entity.Pedido;
import com.mudancas.repository.CidadeRepository;
import com.mudancas.repository.ClienteRepository;
import com.mudancas.repository.EmpresaRepository;
import com.mudancas.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {

    private PedidoRepository repository;
    private EmpresaRepository empresaRepository;
    private ClienteRepository clienteRepository;
    private CidadeRepository cidadeRepository;

    @Autowired
    public PedidoService(PedidoRepository repository, EmpresaRepository empresaRepository, ClienteRepository clienteRepository, CidadeRepository cidadeRepository) {
        this.repository = repository;
        this.empresaRepository = empresaRepository;
        this.clienteRepository = clienteRepository;
        this.cidadeRepository = cidadeRepository;
    }

    public List<HistogramaNumeroServicosCidadesDto> listHistogramaNumeroServicosCidades() {
        return repository.listHistogramaNumeroServicosCidadesDto();
    }

    public List<HistogramaPagamentosServicosCidadesDto> listHistogramaPagamentosServicosCidadesDto() {
        return repository.listHistogramaPagamentosServicosCidadesDto();
    }

    public PedidoResponseDto create(PedidoDto dto) {
        Pedido pedido = Pedido.builder()
                .empresa(empresaRepository.findById(dto.getEmpresaId()).orElse(null))
                .cliente(clienteRepository.findById(dto.getClienteId()).orElse(null))
                .cidadeDestino(cidadeRepository.findById(dto.getCidadeNomeDestino()).orElse(null))
                .cidadePartida(cidadeRepository.findById(dto.getCidadeNomePartida()).orElse(null))
                .dataSolicitacao(dto.getDataSolicitacao())
                .aceite("Análise")
                .enderecoPartida(dto.getEnderecoPartida())
                .enderecoDestino(dto.getEnderecoDestino())
                .build();

        Pedido saved = repository.save(pedido);

        return PedidoResponseDto.builder()
                .id(saved.getId())
                .empresaId(saved.getEmpresa().getId())
                .clienteId(saved.getCliente().getId())
                .cidadeNomeDestino(saved.getCidadeDestino().getNome())
                .cidadeNomePartida(saved.getCidadePartida().getNome())
                .dataSolicitacao(saved.getDataSolicitacao())
                .aceite(saved.getAceite())
                .enderecoPartida(saved.getEnderecoPartida())
                .enderecoDestino(saved.getEnderecoDestino())
                .build();
    }


}
