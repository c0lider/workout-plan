package de.frauas.workout_plan_backend.repository;

import de.frauas.workout_plan_backend.entity.ExerciseEntity;
import de.frauas.workout_plan_backend.entity.WorkoutPlanEntity;
import de.frauas.workout_plan_backend.entity.WorkoutPlanExerciseEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface WorkoutPlanExerciseRepository extends CrudRepository<WorkoutPlanExerciseEntity, Long> {

    WorkoutPlanExerciseEntity save(WorkoutPlanExerciseEntity workoutPlanExerciseEntity);

    Optional<WorkoutPlanExerciseEntity> findById(int id);

}
