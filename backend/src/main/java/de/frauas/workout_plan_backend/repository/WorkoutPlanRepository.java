package de.frauas.workout_plan_backend.repository;

import de.frauas.workout_plan_backend.entity.WorkoutPlanEntity;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface WorkoutPlanRepository extends CrudRepository<WorkoutPlanEntity, Long> {
    public List<WorkoutPlanEntity> findAll();

    public Optional<WorkoutPlanEntity> findById(int id);

    public WorkoutPlanEntity save(WorkoutPlanEntity workoutPlan);

    public void deleteById(int id);
}
