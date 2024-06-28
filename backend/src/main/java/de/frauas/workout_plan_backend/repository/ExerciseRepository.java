package de.frauas.workout_plan_backend.repository;

import de.frauas.workout_plan_backend.entity.ExerciseEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface ExerciseRepository extends CrudRepository<ExerciseEntity, Long> {

    ExerciseEntity save(ExerciseEntity exercise);

    Optional<ExerciseEntity> findById(int id);

}
