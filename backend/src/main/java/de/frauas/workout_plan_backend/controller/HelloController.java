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
public class HelloController {

    @Autowired  //automatisch
    UserRepository userRepository;

    @Autowired
    ExerciseRepository exerciseRepository;

    @Autowired
    UserSettingsRepository usersettingsRepository;

    UserSettingsEntity userSettings;

    private static final String template = "Hello, %s!";

    @GetMapping("/hello")
    public String status(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format(template, name);
    }

    @GetMapping("/users")
    public Iterable<?> AllSavedUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/exercises")
    public Iterable<?> AllSavedExercises() {
        return exerciseRepository.findAll();
    }

    @GetMapping("/settings")
    public UserSettingsEntity ShowSettings() {
        userSettings = new UserSettingsEntity(1,true,"kg");
        return userSettings;
    }
}
