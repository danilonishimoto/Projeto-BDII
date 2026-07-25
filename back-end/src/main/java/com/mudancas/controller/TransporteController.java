package com.mudancas.controller;

import com.mudancas.dto.TransporteDto;
import com.mudancas.entity.Transporte;
import com.mudancas.entity.TransporteId;
import com.mudancas.service.TransporteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transporte")
public class TransporteController {

    private TransporteService service;

    @Autowired
    public TransporteController(TransporteService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<TransporteId>> list() {
        return ResponseEntity.ok(service.list());
    }

    @PostMapping
    public ResponseEntity<TransporteDto> save(@RequestBody TransporteDto dto) {
        return ResponseEntity.ok(service.create(dto));
    }
}
