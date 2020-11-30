package com.mx.chat.controller;

import com.mx.chat.business.ChatBusiness;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
public class ChatController {

    @Autowired
    ChatBusiness chatBusiness;

    @Transactional
    @GetMapping("metodo")
    public String metodoGet(/*@RequestHeader(value = "x-api-key") String xApiKey*/) throws Exception{
        return chatBusiness.metodo();
    }

    @Transactional
    @PostMapping("metodo")
    public String metodoPost(/*@Valid @RequestBody RequestDto requestDto,
                                      @RequestHeader(value = "x-api-key") String xApiKey*/) throws Exception{
        return chatBusiness.metodo();
    }

    //TODO: Métodos de prueba

    @GetMapping("test")
    public String test() throws Exception{
        return "Servicio Chat";
    }
}
