package com.mudancas.controller;

import com.mudancas.dto.ClienteDto;
import com.mudancas.dto.ClienteResponseDto;
import com.mudancas.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    private ClienteService service;

    @Autowired
    public ClienteController(ClienteService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<ClienteResponseDto>> list() {
        return ResponseEntity.ok(service.list());
    }

    @PostMapping
    public ResponseEntity<ClienteDto> create(@RequestBody ClienteDto dto) {
        return ResponseEntity.ok(service.create(dto));
    }
}
