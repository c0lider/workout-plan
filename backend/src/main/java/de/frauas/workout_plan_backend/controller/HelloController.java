package de.frauas.workout_plan_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    private static final String template = "Hello, %s!";

    @GetMapping("/hello")
    public String status(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format(template, name);
    }
}
