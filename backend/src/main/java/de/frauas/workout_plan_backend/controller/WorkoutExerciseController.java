package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.dto.WorkoutPlanExerciseDTO;
import de.frauas.workout_plan_backend.entity.ExerciseEntity;
import de.frauas.workout_plan_backend.entity.WorkoutPlanEntity;
import de.frauas.workout_plan_backend.entity.WorkoutPlanExerciseEntity;
import de.frauas.workout_plan_backend.repository.ExerciseRepository;
import de.frauas.workout_plan_backend.repository.WorkoutPlanExerciseRepository;
import de.frauas.workout_plan_backend.repository.WorkoutPlanRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/workouts/")
public class WorkoutExerciseController {
    @Autowired
    WorkoutPlanExerciseRepository workoutPlanExerciseRepository;

    @Autowired
    WorkoutPlanRepository workoutPlanRepository;

    @Autowired
    ExerciseRepository exerciseRepository;

    @PostMapping("/{id}/add")
    public ResponseEntity<WorkoutPlanEntity> addExerciseToWorkoutPlan(@PathVariable int id,
            @RequestBody WorkoutPlanExerciseDTO workoutPlanExerciseDTO) {
        Optional<WorkoutPlanEntity> workoutPlanOptional = workoutPlanRepository.findById(id);

        if (!workoutPlanOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        WorkoutPlanEntity workoutPlan = workoutPlanOptional.get();

        Optional<ExerciseEntity> exerciseOptional = exerciseRepository.findById(workoutPlanExerciseDTO.getExerciseId());

        if (!exerciseOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        ExerciseEntity exerciseEntity = exerciseOptional.get();

        WorkoutPlanExerciseEntity workoutPlanExercise = new WorkoutPlanExerciseEntity();

        workoutPlanExercise.setExerciseEntity(exerciseEntity);
        workoutPlanExercise.setSets(workoutPlanExerciseDTO.getSets());
        workoutPlanExercise.setReps(workoutPlanExerciseDTO.getReps());
        workoutPlanExercise.setWeight(workoutPlanExerciseDTO.getWeight());

        workoutPlan.getExercises().add(workoutPlanExercise);
        workoutPlanExerciseRepository.save(workoutPlanExercise);

        WorkoutPlanEntity savedWorkoutPlan = workoutPlanRepository.save(workoutPlan);

        return ResponseEntity.ok(savedWorkoutPlan);
    }
}
