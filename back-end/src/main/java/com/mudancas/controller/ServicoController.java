package com.mudancas.controller;

import com.mudancas.entity.Servico;
import com.mudancas.service.ServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/servico")
public class ServicoController {

    private ServicoService service;

    @Autowired
    public ServicoController(ServicoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Servico> create(@RequestBody Servico servico) {
        return ResponseEntity.ok(service.create(servico));
    }

    @GetMapping
    public ResponseEntity<List<String>> find() {
        return ResponseEntity.ok(service.findAll());
    }
}
