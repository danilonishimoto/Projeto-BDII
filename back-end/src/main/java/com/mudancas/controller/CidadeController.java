package com.mudancas.controller;

import com.mudancas.dto.NomeQuantidadeDto;
import com.mudancas.dto.NomeValorEstadoDto;
import com.mudancas.entity.Cidade;
import com.mudancas.service.CidadeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cidade")
public class CidadeController {

    private CidadeService service;

    @Autowired
    public CidadeController(CidadeService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Cidade> create(@RequestBody Cidade cidade) {
        return ResponseEntity.ok(service.create(cidade));
    }

    @GetMapping
    public ResponseEntity<List<Cidade>> list() {
        return ResponseEntity.ok(service.list());
    }

    @GetMapping("/top-5-quantidade")
    public ResponseEntity<List<NomeQuantidadeDto>> listTop5CidadesPorNumeroDeServicos() {
        return ResponseEntity.ok(service.getTop5CidadesPorNumeroDeServicos());
    }

    @GetMapping("/top-5-valor")
    public ResponseEntity<List<NomeValorEstadoDto>> listTop5CidadesPorValorDeServicos() {
        return ResponseEntity.ok(service.listTop5CidadesPorValorDeServicos());
    }
}
