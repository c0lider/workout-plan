package de.frauas.workout_plan_backend.controller;

import de.frauas.workout_plan_backend.entity.UserEntity;
import de.frauas.workout_plan_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired // automatisch
    UserRepository userRepository;

    @GetMapping
    public Iterable<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserEntity> getUserById(@PathVariable int id) {
        return userRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<UserEntity> saveUser(@RequestBody UserEntity user) {
        // TODO: catch duplicate email address etc
        return ResponseEntity.ok(userRepository.save(user));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable int id, @RequestBody UserEntity user) {
        // TODO: catch duplicate email address etc
        return userRepository.findById(id)
                .map(existingUser -> {
                    existingUser.setUsername(user.getUsername());
                    existingUser.setEmailAddress(user.getEmailAddress());
                    existingUser.setPassword(user.getPassword());
                    return ResponseEntity.ok(userRepository.save(existingUser));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // TODO: maybe delete by username instead of id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        return userRepository.findById(id)
                .map(user -> {
                    userRepository.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // @GetMapping("/")
    // public UserEntity getSavedUser(@RequestParam(value = "username", defaultValue
    // = "user") String name) {
    // UserEntity ourUser = userRepository.findByUsername(name);
    // return ourUser;
    // }

    // @PostMapping("/users")
    // public String saveUser(@RequestBody UserEntity user) {
    // userRepository.save(user);
    // return "User saved!";
    // }
}
