package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.entity.UserEntity;
import de.frauas.workout_plan_backend.entity.UserSettingsEntity;
import de.frauas.workout_plan_backend.repository.UserRepository;
import de.frauas.workout_plan_backend.repository.UserSettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserSettingsController {

    @Autowired
    UserSettingsRepository usersettingsRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/settings")
    public Iterable<?> ShowSettings() {
        return usersettingsRepository.findAll();
    }

    @GetMapping("/user_settings")
    public UserEntity showUser(@RequestParam(value = "username", defaultValue = "user") String name) {
        UserEntity ourUser = userRepository.findByUsername(name);
        return ourUser;
    }
}
