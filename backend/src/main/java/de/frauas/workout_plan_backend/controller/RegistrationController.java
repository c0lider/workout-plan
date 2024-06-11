package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.entity.UserEntity;
import org.apache.catalina.User;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

@RestController
public class RegistrationController {

    @GetMapping("/register")
    public String showRegistrationFormular(WebRequest request, Model model) {
        UserEntity user = new UserEntity();
        model.addAttribute("user", user);

        return "registration";

    }
}
