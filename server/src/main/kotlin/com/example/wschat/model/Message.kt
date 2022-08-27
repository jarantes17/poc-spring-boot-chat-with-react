package com.example.wschat.model

import java.time.LocalDateTime

data class Message(
    val senderName: String?,
    val receiverName: String?,
    val message: String?,
    val creationDate: LocalDateTime?,
    val status: Status
) {

}