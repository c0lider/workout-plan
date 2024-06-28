package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.entity.ExerciseEntity;
import de.frauas.workout_plan_backend.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ExerciseController {

    @Autowired
    ExerciseRepository exerciseRepository;

    @GetMapping("/exercises")
    public Optional<ExerciseEntity> SaveExercise(@RequestParam(value = "id", defaultValue = "id") int id) {
        Optional<ExerciseEntity> exercise = exerciseRepository.findById(id);
        return exercise;
    }


    @GetMapping("/all_exercises")
    public Iterable<?> AllSavedExercises() {
        return exerciseRepository.findAll();
    }

    @PostMapping("/exercises")
    public String saveExercise(@RequestBody ExerciseEntity exercise) {
        exerciseRepository.save(exercise);
        return "Exercise Saved!";
    }

}
