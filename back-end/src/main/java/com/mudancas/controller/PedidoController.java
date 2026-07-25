package com.mudancas.controller;

import com.mudancas.dto.HistogramaNumeroServicosCidadesDto;
import com.mudancas.dto.HistogramaPagamentosServicosCidadesDto;
import com.mudancas.dto.PedidoDto;
import com.mudancas.dto.PedidoResponseDto;
import com.mudancas.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedido")
public class PedidoController {

    private PedidoService service;

    @Autowired
    public PedidoController(PedidoService service) {
        this.service = service;
    }

    @GetMapping("/histograma/numero-servicos")
    public ResponseEntity<List<HistogramaNumeroServicosCidadesDto>> listHistogramaNumeroServicos() {
        return ResponseEntity.ok(service.listHistogramaNumeroServicosCidades());
    }

    @GetMapping("/histograma/pagamento-servicos")
    public ResponseEntity<List<HistogramaPagamentosServicosCidadesDto>> listHistogramaPagamentoServicos() {
        return ResponseEntity.ok(service.listHistogramaPagamentosServicosCidadesDto());
    }

    @PostMapping
    public ResponseEntity<PedidoResponseDto> create(@RequestBody PedidoDto dto) {
        return ResponseEntity.ok(service.create(dto));
    }
}
