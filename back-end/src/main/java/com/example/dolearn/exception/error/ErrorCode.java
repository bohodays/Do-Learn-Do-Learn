package com.example.dolearn.exception.error;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum ErrorCode {
    // user
    USER_DUPLICATION(HttpStatus.CONFLICT, "409", "이미 존재하는 사용자입니다."),
    SAME_EMAIL(HttpStatus.BAD_REQUEST, "400", "동일한 이메일이 존재합니다."),
    NO_USER(HttpStatus.BAD_REQUEST, "400", "없는 사용자입니다."),
    NO_LOGIN(HttpStatus.UNAUTHORIZED, "401", "로그인이 필요합니다");

    private HttpStatus httpStatus;
    private String code;
    private String message;
}
