package de.frauas.workout_plan_backend.entity;

import org.apache.catalina.User;

public interface UserRegistrationService {
    User registerNewUserAccount(UserEntity user);
}
