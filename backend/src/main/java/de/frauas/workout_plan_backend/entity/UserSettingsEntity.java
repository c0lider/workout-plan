package de.frauas.workout_plan_backend.entity;

import jakarta.persistence.*;
import de.frauas.workout_plan_backend.entity.UserEntity;

import java.util.List;

@Entity
public class UserSettingsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;

    @Column(nullable = false, unique = false)
    private boolean darkMode = true;
    @Column(nullable = false, unique = false)
    private String preferredUnits;

    @OneToOne
    private UserEntity userEntity;
    public UserSettingsEntity() {
    }

    public UserSettingsEntity(int id, boolean darkMode, String preferredUnits) {
        this.id = id;
        this.darkMode = darkMode;
        this.preferredUnits = preferredUnits;
    }

    public boolean isDarkMode() {
        return darkMode;
    }

    public void setDarkMode(boolean darkMode) {
        this.darkMode = darkMode;
    }

    public String getPreferredUnits() {
        return preferredUnits;
    }

    public void setPreferredUnits(String preferredUnits) {
        this.preferredUnits = preferredUnits;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
