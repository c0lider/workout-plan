package de.frauas.workout_plan_backend.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class WorkoutPlanEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, unique = false)
    private String workoutName;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<WorkoutPlanExerciseEntity> exercises;

    public WorkoutPlanEntity() {
    }

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

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public List<WorkoutPlanExerciseEntity> getExercises() {
        return exercises;
    }

    public void setExercises(List<WorkoutPlanExerciseEntity> exercises) {
        this.exercises = exercises;
    }
}
