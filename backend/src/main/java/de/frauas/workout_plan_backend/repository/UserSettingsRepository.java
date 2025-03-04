package de.frauas.workout_plan_backend.repository;

import de.frauas.workout_plan_backend.entity.UserSettingsEntity;
import de.frauas.workout_plan_backend.entity.WorkoutPlanEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserSettingsRepository extends CrudRepository<UserSettingsEntity, Long> {

    UserSettingsEntity save(UserSettingsEntity userSettings);

    Optional<UserSettingsEntity> findById(int id);

}
