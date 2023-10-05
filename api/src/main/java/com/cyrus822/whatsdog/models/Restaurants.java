package com.cyrus822.whatsdog.models;

import java.io.Serializable;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Restaurants implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int rId;

    @Column(nullable = false, length = 100)
    @NotBlank(message = "Name must be provided!")
    @Length(max=100, min = 3, message = "Name must between 3 to 100 characters")
    private String rName;

    @Column(nullable = false, length = 255)
    @NotBlank(message = "Address must be provided!")
    @Length(max=100, min = 3, message = "Address must between 3 to 255 characters")    
    private String rAddr;

    @Column(nullable = false)
    @Range(max = 5, min = -5, message = "Rating must  between -5 to 5")
    private int rating;
}
