package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.entity.ExerciseEntity;
import de.frauas.workout_plan_backend.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/exercises")
public class ExerciseController {

    @Autowired
    ExerciseRepository exerciseRepository;

    @GetMapping
    public Iterable<ExerciseEntity> getAllExercises() {
        return exerciseRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExerciseEntity> getExerciseById(@PathVariable int id) {
        return exerciseRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ExerciseEntity> createExercise(@RequestBody ExerciseEntity exercise) {
        return ResponseEntity.ok(exerciseRepository.save(exercise));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ExerciseEntity> updateExercise(@PathVariable int id, @RequestBody ExerciseEntity exercise) {
        return exerciseRepository.findById(id)
                .map(existingExercise -> {
                    existingExercise.setExerciseName(exercise.getExerciseName());
                    existingExercise.setDescription(exercise.getDescription());
                    existingExercise.setYoutubeLink(exercise.getYoutubeLink());
                    return ResponseEntity.ok(exerciseRepository.save(existingExercise));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExercise(@PathVariable int id) {
        return exerciseRepository.findById(id)
                .map(exercise -> {
                    exerciseRepository.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
