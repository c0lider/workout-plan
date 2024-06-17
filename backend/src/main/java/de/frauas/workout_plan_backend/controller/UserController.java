package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.entity.UserSettingsEntity;
import de.frauas.workout_plan_backend.repository.ExerciseRepository;
import de.frauas.workout_plan_backend.repository.UserRepository;
import de.frauas.workout_plan_backend.repository.UserSettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired  //automatisch
    UserRepository userRepository;


    @GetMapping("/users")
    public Iterable<?> AllSavedUsers() {
        return userRepository.findAll();
    }
}
