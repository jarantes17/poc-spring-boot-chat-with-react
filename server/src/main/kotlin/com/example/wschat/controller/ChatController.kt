package com.example.wschat.controller

import com.example.wschat.model.Message
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.stereotype.Controller

@Controller
class ChatController(
    private val simpMessagingTemplate: SimpMessagingTemplate
) {

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    fun receivePublicMessage(@Payload message: Message): Message {
        return message
    }

    @MessageMapping("/private-message")
    fun receivePrivateMessage(@Payload message: Message): Message {
        simpMessagingTemplate.convertAndSendToUser(message.receiverName!!, "/private", message)
        return message
    }
}