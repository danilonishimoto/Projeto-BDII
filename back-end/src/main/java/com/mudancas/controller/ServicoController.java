package com.mudancas.controller;

import com.mudancas.entity.Servico;
import com.mudancas.service.ServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
