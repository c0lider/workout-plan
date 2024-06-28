package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.entity.UserEntity;
import de.frauas.workout_plan_backend.entity.UserSettingsEntity;
import de.frauas.workout_plan_backend.entity.WorkoutPlanEntity;
import de.frauas.workout_plan_backend.repository.UserSettingsRepository;
import de.frauas.workout_plan_backend.repository.WorkoutPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class WorkoutsController {

    @Autowired
    WorkoutPlanRepository workoutPlanRepository;

    @GetMapping("/workouts")
    public Iterable<?> ShowAllWorkouts() {
        return workoutPlanRepository.findAll();
    }

    @GetMapping("/workout")
    public WorkoutPlanEntity SavedWorkout(@RequestParam(value = "workout_plan_id", defaultValue = "id") int id) {
        WorkoutPlanEntity workoutPlanEntity = workoutPlanRepository.findById(id);
        return workoutPlanEntity;
    }

    @PostMapping("/workout")
    public String saveUser(@RequestBody WorkoutPlanEntity workoutPlan) {
        workoutPlanRepository.save(workoutPlan);
        return "Workout Plan saved!";
    }
}
