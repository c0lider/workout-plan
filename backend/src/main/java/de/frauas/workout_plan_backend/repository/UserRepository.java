package de.frauas.workout_plan_backend.repository;

import de.frauas.workout_plan_backend.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<UserEntity, Long> {

    UserEntity save(UserEntity user);
    Optional<UserEntity> findById(int id);

}
