package de.frauas.workout_plan_backend.entity;


import jakarta.persistence.*;

import java.util.List;

@Entity

public class WorkoutPlanEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = true)
    private String workoutName;

    public WorkoutPlanEntity() {}

    public WorkoutPlanEntity(int id, String workoutName) {
        this.id = id;
        this.workoutName = workoutName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWorkoutName() {
        return workoutName;
    }

    public void setWorkoutName(String workoutName) {
        this.workoutName = workoutName;
    }
}
