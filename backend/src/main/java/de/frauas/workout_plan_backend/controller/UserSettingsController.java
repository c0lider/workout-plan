package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.entity.UserSettingsEntity;
import de.frauas.workout_plan_backend.repository.UserSettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserSettingsController {

    @Autowired
    UserSettingsRepository usersettingsRepository;


    @GetMapping("/settings")
    public Iterable<?> ShowSettings() {
        return usersettingsRepository.findAll();
    }

}
