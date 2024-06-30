package de.frauas.workout_plan_backend.repository;

import de.frauas.workout_plan_backend.entity.ExerciseEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ExerciseRepository extends CrudRepository<ExerciseEntity, Long> {
    public List<ExerciseEntity> findAll();

    public Optional<ExerciseEntity> findByExerciseName(String exerciseName);

    public Optional<ExerciseEntity> findById(int id);

    public ExerciseEntity save(ExerciseEntity exercise);

    public void deleteById(int id);

}
