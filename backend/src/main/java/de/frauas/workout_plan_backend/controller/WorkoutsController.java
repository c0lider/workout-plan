package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.entity.UserSettingsEntity;
import de.frauas.workout_plan_backend.entity.WorkoutPlanEntity;
import de.frauas.workout_plan_backend.repository.UserSettingsRepository;
import de.frauas.workout_plan_backend.repository.WorkoutPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WorkoutsController {

    @Autowired
    WorkoutPlanRepository workoutPlanRepository;

    @GetMapping("/workouts")
    public Iterable<?> ShowAllWorkouts() {
        return workoutPlanRepository.findAll();
    }

}
