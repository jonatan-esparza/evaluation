package com.mx.chat.business;


import org.slf4j.*;
import org.springframework.stereotype.Service;

@Service
public class ChatBusiness {

    Logger log = LoggerFactory.getLogger(ChatBusiness.class);

    public String metodo() throws Exception {
        log.info("<RETORNO> SUCCESS!!");
        try {
            return "SUCCESS!!";
        } catch (Exception e){
            log.error("Falla en el consumo del chat, DETALLE: " + e.getMessage());
            e.printStackTrace();
            throw e;
        }
    }
}
