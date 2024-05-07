package de.frauas.workout_plan_backend.repository;

import de.frauas.workout_plan_backend.entity.user_entity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

import java.util.List;
import java.util.Optional;

public interface user_repository extends CrudRepository<user_entity, Long> {

    user_entity save(user_entity user);
    Optional<user_entity> findById(int id);

}
