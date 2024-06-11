package de.frauas.workout_plan_backend.repository;

import de.frauas.workout_plan_backend.entity.ExerciseEntity;
import de.frauas.workout_plan_backend.entity.WorkoutPlanEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface WorkoutPlanRepository extends CrudRepository<WorkoutPlanEntity, Long> {

    WorkoutPlanEntity save(WorkoutPlanEntity workoutPlan);
}
