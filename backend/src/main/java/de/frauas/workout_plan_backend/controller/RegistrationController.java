package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.entity.UserEntity;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.catalina.User;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class RegistrationController {

    @GetMapping("/register")
    public String showRegistrationFormular(WebRequest request, Model model) {
        UserEntity user = new UserEntity();
        model.addAttribute("user", user);

        return "registration";

    }

    //public ModelAndView registerUserAccount(@ModelAttribute("user") UserEntity user, HttpServletRequest request, Errors error) {}

}
