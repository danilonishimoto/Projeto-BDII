package com.mudancas.controller;

import com.mudancas.dto.SolicitamDto;
import com.mudancas.dto.SolicitamResponseDto;
import com.mudancas.service.SolicitamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/solicitam")
public class SolicitamController {

    private SolicitamService service;

    @Autowired
    public SolicitamController(SolicitamService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<SolicitamResponseDto> create(@RequestBody SolicitamDto solicitamDto) {
        return ResponseEntity.ok(service.create(solicitamDto));
    }
}
