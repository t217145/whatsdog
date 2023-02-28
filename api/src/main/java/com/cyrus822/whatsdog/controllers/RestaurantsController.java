package com.cyrus822.whatsdog.controllers;

import java.util.List;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cyrus822.whatsdog.models.CustomError;
import com.cyrus822.whatsdog.models.Restaurants;
import com.cyrus822.whatsdog.repos.RestaurantsRepo;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantsController {
    
    @Autowired
    private RestaurantsRepo repo;

    @GetMapping({"","/","/index"})
    public List<Restaurants> index(){
        return repo.findAll();
    }

    @GetMapping("draw")
    public Restaurants draw() throws CustomError{
        List<Restaurants> allRestaurants = repo.findAll();
        if(allRestaurants.isEmpty()){
            throw new CustomError(null, "No Restaurants! Please add a restaurants");
        }
        int rand = new Random(System.currentTimeMillis()).nextInt(allRestaurants.size());
        return repo.findAll().get(rand);
    } 
    
    @PostMapping({"","/","/index"})
    @PutMapping({"","/","/index"})
    public Restaurants updSert(@RequestBody @Valid Restaurants newRestaurants, BindingResult errors) throws CustomError{
        if(errors.hasErrors()){
            throw new CustomError(errors, null);
        }
        return repo.save(newRestaurants);
    }
}
