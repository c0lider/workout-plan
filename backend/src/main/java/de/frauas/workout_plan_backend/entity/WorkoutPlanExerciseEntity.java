package de.frauas.workout_plan_backend.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class WorkoutPlanExerciseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = false)
    private int reps;
    @Column(unique = false)
    private int sets;
    @Column(unique = false)
    private int duration; //in seconds

    @ManyToOne
    ExerciseEntity exerciseEntity;

    @OneToOne
    @JoinColumn(name = "workout_plan_id")
    WorkoutPlanEntity workoutPlanEntity;

    public WorkoutPlanExerciseEntity() {
    }

    public WorkoutPlanExerciseEntity(int id, int reps, int sets, int duration) {
        this.id = id;
        this.reps = reps;
        this.sets = sets;
        this.duration = duration;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getReps() {
        return reps;
    }

    public void setReps(int reps) {
        this.reps = reps;
    }

    public int getSets() {
        return sets;
    }

    public void setSets(int sets) {
        this.sets = sets;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

}
