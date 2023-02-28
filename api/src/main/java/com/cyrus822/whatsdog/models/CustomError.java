package com.cyrus822.whatsdog.models;

import org.springframework.validation.BindingResult;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper=false)
public class CustomError extends Exception{
    private BindingResult validationErrors;
    private String errorMsg;
}
