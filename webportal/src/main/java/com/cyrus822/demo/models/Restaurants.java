package com.cyrus822.demo.models;

import java.io.Serializable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Restaurants implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(columnDefinition = "varchar(100) character set big5 collate big5_bin not null")
    private String name;

    @Column(columnDefinition = "varchar(100) character set big5 collate big5_bin null")
    private String location;

    @Column(columnDefinition = "varchar(100) character set big5 collate big5_bin null")
    private String phone;
}