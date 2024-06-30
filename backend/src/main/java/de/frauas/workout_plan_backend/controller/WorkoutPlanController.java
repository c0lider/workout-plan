package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.entity.WorkoutPlanEntity;
import de.frauas.workout_plan_backend.repository.WorkoutPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/workouts")
public class WorkoutPlanController {

    @Autowired
    WorkoutPlanRepository workoutPlanRepository;

    @GetMapping
    public Iterable<WorkoutPlanEntity> getAllWorkoutPlans() {
        return workoutPlanRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkoutPlanEntity> getWorkoutPlanById(@PathVariable int id) {
        return workoutPlanRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<WorkoutPlanEntity> saveUser(@RequestBody WorkoutPlanEntity workoutPlan) {
        return ResponseEntity.ok(workoutPlanRepository.save(workoutPlan));
    }

    // TODO
    @PutMapping("/{id}")
    public ResponseEntity<WorkoutPlanEntity> updateWorkoutPlan(@PathVariable int id,
            @RequestBody WorkoutPlanEntity workoutPlan) {
        return workoutPlanRepository.findById(id)
                .map(existingWorkoutPlan -> {
                    existingWorkoutPlan.setWorkoutName(workoutPlan.getWorkoutName());
                    return ResponseEntity.ok(workoutPlanRepository.save(existingWorkoutPlan));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkoutPlan(@PathVariable int id) {
        return workoutPlanRepository.findById(id)
                .map(workoutPlan -> {
                    workoutPlanRepository.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
