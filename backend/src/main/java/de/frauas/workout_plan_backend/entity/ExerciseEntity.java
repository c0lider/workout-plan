package de.frauas.workout_plan_backend.entity;

import jakarta.persistence.*;

@Entity
public class ExerciseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;

    @Column(nullable = false, unique = true)
    private String exerciseName;

    @Column(nullable = false)
    private String youtubeLink;

    @Column(nullable = false)
    private String description;

    public ExerciseEntity() {
    }

    public ExerciseEntity(int id, String exerciseName, String youtubeLink) {
        this.id = id;
        this.exerciseName = exerciseName;
        this.youtubeLink = youtubeLink;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getExerciseName() {
        return exerciseName;
    }

    public void setExerciseName(String exerciseName) {
        this.exerciseName = exerciseName;
    }

    public String getYoutubeLink() {
        return youtubeLink;
    }

    public void setYoutubeLink(String youtubeLink) {
        this.youtubeLink = youtubeLink;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
