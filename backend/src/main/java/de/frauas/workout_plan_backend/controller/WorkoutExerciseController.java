package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.repository.WorkoutPlanExerciseRepository;
import de.frauas.workout_plan_backend.repository.WorkoutPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WorkoutExerciseController {
    @Autowired
    WorkoutPlanExerciseRepository workoutPlanExerciseRepository;

    @GetMapping("/workout_exercises")
    public Iterable<?> ShowAllExercisesInWorkout() {
        return workoutPlanExerciseRepository.findAll();
    }
}
