package com.example.wschat

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SpringWsChatServerApplication

fun main(args: Array<String>) {
	runApplication<SpringWsChatServerApplication>(*args)
}
