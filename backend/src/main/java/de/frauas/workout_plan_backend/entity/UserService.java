package de.frauas.workout_plan_backend.entity;

import de.frauas.workout_plan_backend.repository.UserRepository;
import org.apache.catalina.User;

public class UserService {

    private UserRepository repository;

    public UserEntity registerNewUserAccount() {

        UserEntity user = new UserEntity();
        user.setEmailAddress("max.mustermann@gmail.com"); //Hier Getter-Methoden um den User zu speichern
        user.setUsername("xMaxiMusti");
        user.setPassword("12345");

        return repository.save(user);

    }


}
