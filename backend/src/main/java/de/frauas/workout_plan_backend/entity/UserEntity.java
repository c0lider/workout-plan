package de.frauas.workout_plan_backend.entity;

import jakarta.persistence.*;

@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true)
    private String emailAddress;    //email

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;    //s

    public UserEntity() {}

    public UserEntity(int id, String username, String emailAddress, String password) {
        this.id = id;
        this.username = username;
        this.emailAddress = emailAddress;
        this.password = password;

    }

    public int getId() {

        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String email_address) {
        this.emailAddress = email_address;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserEntity registerNewUserAccount() {
        return new UserEntity(23, "max.mustermann@gmail.com", "xMaxiMusti", "12345");
    }



}
