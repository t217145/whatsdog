package com.cyrus822.demo.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cyrus822.demo.models.Restaurants;

public interface RestaurantsRepo extends JpaRepository<Restaurants, Integer> {
    
}