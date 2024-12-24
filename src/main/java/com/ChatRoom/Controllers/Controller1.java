package com.ChatRoom.Controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ChatRoom.Models.Message;

@RestController
public class Controller1 {
	
	
	
	@MessageMapping("/message")
	@SendTo("/topic/return-to")
	public Message getContent(@RequestBody Message message)
	{
		return message;
	}
	
	
	
	
	
	
	
	
	

}
