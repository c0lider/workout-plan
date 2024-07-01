package de.frauas.workout_plan_backend.entity;

import jakarta.persistence.*;

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
    private int weight;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "exercise_id")
    ExerciseEntity exerciseEntity;

    public WorkoutPlanExerciseEntity() {
    }

    public WorkoutPlanExerciseEntity(int id, int reps, int sets, int weight) {
        this.id = id;
        this.reps = reps;
        this.sets = sets;
        this.weight = weight;
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

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public ExerciseEntity getExerciseEntity() {
        return exerciseEntity;
    }

    public void setExerciseEntity(ExerciseEntity exerciseEntity) {
        this.exerciseEntity = exerciseEntity;
    }
}
