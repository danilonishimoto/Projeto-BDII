package com.mudancas.controller;

import com.mudancas.dto.GuindasteDto;
import com.mudancas.entity.Guindaste;
import com.mudancas.service.GuindasteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/guindaste")
public class GuindasteController {

    private GuindasteService service;

    @Autowired
    public GuindasteController(GuindasteService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<String>> list() {
        return ResponseEntity.ok(service.list());
    }

    @PostMapping
    public ResponseEntity<GuindasteDto> create(@RequestBody GuindasteDto dto) {
        return ResponseEntity.ok(service.create(dto));
    }
}
