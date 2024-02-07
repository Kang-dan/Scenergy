package com.example.scenergynotification.domain.notification.service.command;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SendFollowNotificationCommand {
	private Long toUserId;
	private Long fromUserId;
}