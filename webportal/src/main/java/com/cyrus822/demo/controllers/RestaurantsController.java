package com.cyrus822.demo.controllers;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import com.cyrus822.demo.models.Restaurants;
import com.cyrus822.demo.repos.RestaurantsRepo;
import java.util.Random;

@Controller
public class RestaurantsController {

    @Autowired
    private RestaurantsRepo repo;

    @GetMapping({"", "/", "/index"})
    public String draw(ModelMap m) {
        List<Restaurants> allRestaurants = repo.findAll();
        int length = allRestaurants.size();
        int idx = 0;
        if(length == 0) {
            return "redirect:/create";
        } else {
            idx = new Random().nextInt(length);
        }
        m.addAttribute("restaurantObj", allRestaurants.get(idx));
        return "index";
    }    

    @GetMapping("/list")
    public String index(ModelMap m) {
        m.addAttribute("allRestaurants", repo.findAll());
        return "list";
    }

    @GetMapping("/create")
    public String create(ModelMap m) {
        m.addAttribute("restaurantObj", new Restaurants());
        m.addAttribute("action", "Create");
        return "form";
    }

    @GetMapping("/edit/{id}")
    public String edit(ModelMap m, @PathVariable("id") @NonNull Integer id) {
        Optional<Restaurants> oRest = repo.findById(id);
        if(!oRest.isPresent()) {
            return "redirect:/list";
        }
        m.addAttribute("restaurantObj", oRest.get());
        m.addAttribute("action", "Edit");
        return "form";
    }

    @PostMapping("/save")
    public String save(ModelMap m, @NonNull Restaurants r) {
        repo.save(r);
        return "redirect:/list";
    }

    @GetMapping("/delete/{id}")
    public String delete(ModelMap m, @PathVariable("id") @NonNull Integer id) {
        repo.deleteById(id);
        return "redirect:/list";
    }
}