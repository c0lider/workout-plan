package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.entity.UserEntity;
import de.frauas.workout_plan_backend.entity.UserSettingsEntity;
import de.frauas.workout_plan_backend.repository.ExerciseRepository;
import de.frauas.workout_plan_backend.repository.UserRepository;
import de.frauas.workout_plan_backend.repository.UserSettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired // automatisch
    UserRepository userRepository;

    @GetMapping("/users")
    public UserEntity AllSavedUsers(@RequestParam(value = "username", defaultValue = "user") String name) {
        UserEntity ourUser = userRepository.findByUsername(name);
        return ourUser;
    }

    @PostMapping("/users")
    public String saveUser(@RequestBody UserEntity user) {
        userRepository.save(user);
        return "User saved";
    }
}
