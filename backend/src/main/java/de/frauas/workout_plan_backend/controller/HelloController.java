package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.repository.user_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import de.frauas.workout_plan_backend.entity.user_entity;

@RestController
public class HelloController {

    @Autowired user_repository repository;
    private static final String template = "Hello, %s!";

    @GetMapping("/hello")
    public String status(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format(template, name);
    }

    @GetMapping("/users")
    public Iterable<?> AllSavedUsers() {
         return repository.findAll();
    }
}
