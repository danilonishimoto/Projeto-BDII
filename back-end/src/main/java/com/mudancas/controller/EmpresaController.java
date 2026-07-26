package com.mudancas.controller;

import com.mudancas.dto.EmpresaDto;
import com.mudancas.dto.EmpresaResponseDto;
import com.mudancas.dto.NomeQuantidadeDto;
import com.mudancas.dto.NomeValorDto;
import com.mudancas.service.EmpresaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {

    private EmpresaService service;

    @Autowired
    public EmpresaController(EmpresaService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<EmpresaResponseDto>> list() {
        return ResponseEntity.ok(service.listAll());
    }

    @PostMapping
    public ResponseEntity<EmpresaDto> create(@RequestBody EmpresaDto dto) {
        return ResponseEntity.ok(service.create(dto));
    }

    @GetMapping("/top-5-quantidade")
    public ResponseEntity<List<NomeQuantidadeDto>> listTop5EmpresasPorNumeroDeServicos() {
        return ResponseEntity.ok(service.listTop5EmpresasPorNumeroDeServicos());
    }

    @GetMapping("top-5-valor")
    public ResponseEntity<List<NomeValorDto>> listTop5EmpresasPorValor() {
        return ResponseEntity.ok(service.listTop5EmpresasPorValorDeServicos());
    }
}
