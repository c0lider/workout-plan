package de.frauas.workout_plan_backend.repository;

import de.frauas.workout_plan_backend.entity.UserEntity;
import jakarta.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<UserEntity, Long> {

    public List<UserEntity> findAll();

    public UserEntity save(UserEntity user);

    public UserEntity findByUsername(String username);

    public Optional<UserEntity> findById(int id);

    // TODO needs service method instead of direct call
    @Transactional
    public void deleteById(int id);
}
