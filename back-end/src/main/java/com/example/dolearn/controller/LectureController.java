package com.example.dolearn.controller;

import com.example.dolearn.dto.LectureDto;
import com.example.dolearn.exception.CustomException;
import com.example.dolearn.exception.error.ErrorCode;
import com.example.dolearn.response.ErrorResponse;
import com.example.dolearn.response.SuccessResponse;
import com.example.dolearn.service.LectureService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/lecture")
@RestController
public class LectureController {

    private final LectureService lectureService;

    @GetMapping("/{lecture_id}")
    public ResponseEntity<?> getLectureDetail(@PathVariable Long lecture_id) {

        log.info("lecture detail 호출!");
        log.info("lecture_id : {}", lecture_id);

        try {
            return new ResponseEntity<>(new SuccessResponse(lectureService.getDetail(lecture_id)), HttpStatus.OK);
        } catch(Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.NO_MESSSAGE),
                    HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/fix")
    public ResponseEntity<?> updateFixed(@RequestBody Map<String,Long> idMap){
        try{
            log.info("업데이트 요청: {} {}",idMap.get("bid"),idMap.get("Luid"));
            LectureDto updateBoard = lectureService.update(idMap.get("bid"),idMap.get("Luid"));
            log.info("강의 업데이트 완료: {}",updateBoard);

            return new ResponseEntity<>(new SuccessResponse(updateBoard), HttpStatus.OK);
        }catch (CustomException e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(e.getErrorCode()), HttpStatus.CONFLICT);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
