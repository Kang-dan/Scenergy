package com.wbm.scenergyspring.domain.chat.controller.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateChatRoomResponse {
    Long chatRoomId;
    String roomName;
}
