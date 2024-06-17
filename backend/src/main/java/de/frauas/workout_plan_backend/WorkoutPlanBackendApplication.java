package de.frauas.workout_plan_backend;

import de.frauas.workout_plan_backend.entity.ExerciseEntity;
import de.frauas.workout_plan_backend.entity.UserEntity;
import de.frauas.workout_plan_backend.entity.UserSettingsEntity;
import de.frauas.workout_plan_backend.entity.WorkoutPlanEntity;
import de.frauas.workout_plan_backend.repository.ExerciseRepository;
import de.frauas.workout_plan_backend.repository.UserRepository;
import de.frauas.workout_plan_backend.repository.UserSettingsRepository;
import de.frauas.workout_plan_backend.repository.WorkoutPlanRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.NoSuchElementException;

@SpringBootApplication
public class WorkoutPlanBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorkoutPlanBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(UserRepository userRepository, ExerciseRepository exerciseRepository,
							 UserSettingsRepository userSettingsRepository, WorkoutPlanRepository workoutPlanRepository) {
		return args -> {

			UserEntity user = new UserEntity(1,"bsp1000", "bsp1000@gmail.com", "1000");
			UserSettingsEntity userSettings = new UserSettingsEntity(1, true, "kg");
			ExerciseEntity exercise1 = new ExerciseEntity(1,"Bankdrücken","https://www.youtube.com/shorts/4HrLBMqGmcc");
			WorkoutPlanEntity workoutPlan = new WorkoutPlanEntity(1,"Monday");

			userRepository.save(user);
			userSettingsRepository.save(userSettings);
			exerciseRepository.save(exercise1);
			workoutPlanRepository.save(workoutPlan);

			UserEntity savedUser = userRepository.findById(user.getId()).orElseThrow(NoSuchElementException::new);
			UserSettingsEntity savedSettings = userSettingsRepository.findById(userSettings.getId()).orElseThrow(NoSuchElementException::new);
			ExerciseEntity savedExercises = exerciseRepository.findById(exercise1.getId()).orElseThrow(NoSuchElementException::new);
			WorkoutPlanEntity savedWorkoutPlan = workoutPlanRepository.findById(workoutPlan.getId()).orElseThrow(NoSuchElementException::new);
		};

	}
}
