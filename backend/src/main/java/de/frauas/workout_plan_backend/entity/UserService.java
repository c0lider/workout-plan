package de.frauas.workout_plan_backend.entity;

import de.frauas.workout_plan_backend.repository.UserRepository;
import org.apache.catalina.User;

public class UserService {

    private UserRepository repository;

    public UserEntity registerNewUserAccount() {
        return new UserEntity(23, "max.mustermann@gmail.com", "xMaxiMusti", "12345");
    }


}
