package com.cyrus822.whatsdog.utils;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import com.cyrus822.whatsdog.models.CustomError;

@ControllerAdvice
public class CustomErrorAdvice {
    
    @ExceptionHandler(CustomError.class)
    public ResponseEntity<String> handleCustomError(CustomError err){
        StringBuffer sb = new StringBuffer();
        if(err.getErrorMsg() != null){
            sb.append(err.getErrorMsg());
        } else if (err.getValidationErrors() != null && !err.getValidationErrors().getAllErrors().isEmpty()) {
            sb.append("Following fields contains errors : \n");
            for(ObjectError oe : err.getValidationErrors().getAllErrors()){
                sb.append(oe.getObjectName());
                sb.append(" : ");
                sb.append(oe.getDefaultMessage());
            }
        } else {
            sb.append("Fatal Error!");
        }

        return ResponseEntity.badRequest().body(sb.toString());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneralError(Exception err){
        return ResponseEntity.badRequest().body(err.getMessage());
    }
}
