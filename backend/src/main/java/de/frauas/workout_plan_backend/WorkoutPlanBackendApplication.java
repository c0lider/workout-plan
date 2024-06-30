package de.frauas.workout_plan_backend;

import de.frauas.workout_plan_backend.entity.*;
import de.frauas.workout_plan_backend.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.NoSuchElementException;

import static java.sql.Types.NULL;

@SpringBootApplication
public class WorkoutPlanBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorkoutPlanBackendApplication.class, args);
	}

	// TODO:
	// @Bean
	// CommandLineRunner runner(UserRepository userRepository, ExerciseRepository
	// exerciseRepository,
	// WorkoutPlanRepository workoutPlanRepository, UserSettingsRepository
	// userSettingsRepository,
	// WorkoutPlanExerciseRepository workoutPlanExerciseRepository) {
	// return args -> {

	// UserEntity user1 = new UserEntity(1, "LeMaemo", "max.moritz@interia.pl",
	// "12345");
	// UserEntity user2 = new UserEntity(2, "LeBrob", "Lemax.Lesmoritsz@interia.pl",
	// "5432s1");
	// ExerciseEntity exercise1 = new
	// ExerciseEntity(1,"Bankdrücken","https://www.youtube.com/shorts/4HrLBMqGmcc");
	// WorkoutPlanEntity workoutPlan = new WorkoutPlanEntity(1,"Monday");
	// UserSettingsEntity userSettings = new UserSettingsEntity(1, true,"kg");
	// WorkoutPlanExerciseEntity planExerciseEntity = new
	// WorkoutPlanExerciseEntity(1, 10, 3, 60);
	// userRepository.save(user1); //save in repository
	// userRepository.save(user2);
	// userSettingsRepository.save(userSettings);
	// exerciseRepository.save(exercise1);
	// workoutPlanRepository.save(workoutPlan);
	// workoutPlanExerciseRepository.save(planExerciseEntity);

	// UserEntity savedUser =
	// userRepository.findById(user1.getId()).orElseThrow(NoSuchElementException::new);
	// ExerciseEntity savedExercises =
	// exerciseRepository.findById(exercise1.getId()).orElseThrow(NoSuchElementException::new);
	// WorkoutPlanEntity savedWorkout =
	// workoutPlanRepository.findById(workoutPlan.getId());
	// UserSettingsEntity savedSettings =
	// userSettingsRepository.findById(userSettings.getId()).orElseThrow(NoSuchElementException::new);
	// WorkoutPlanExerciseEntity savedExercisesInWorkout =
	// workoutPlanExerciseRepository.findById(planExerciseEntity.getId()).orElseThrow(NoSuchElementException::new);
	// };

	// }
}
