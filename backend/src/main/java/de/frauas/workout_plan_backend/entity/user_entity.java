package de.frauas.workout_plan_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;

@Entity
public class user_entity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String email_address;
    private String username;
    private String password;

    public user_entity() {}

    public user_entity(String password, String username, String email_address, int id) {
        this.password = password;
        this.username = username;
        this.email_address = email_address;
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail_address() {
        return email_address;
    }

    public void setEmail_address(String email_address) {
        this.email_address = email_address;
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



}
