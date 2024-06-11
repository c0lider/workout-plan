package de.frauas.workout_plan_backend;

import de.frauas.workout_plan_backend.entity.ExerciseEntity;
import de.frauas.workout_plan_backend.entity.UserEntity;
import de.frauas.workout_plan_backend.entity.UserService;
import de.frauas.workout_plan_backend.entity.UserSettingsEntity;
import de.frauas.workout_plan_backend.repository.ExerciseRepository;
import de.frauas.workout_plan_backend.repository.UserRepository;
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
	CommandLineRunner runner(UserRepository userRepository, ExerciseRepository exerciseRepository) {
		return args -> {

			UserEntity user1 = new UserEntity(1, "LeMaemo", "max.moritz@interia.pl", "12345");
			UserEntity user2 = new UserEntity(2, "LeBrob", "Lemax.Lemoritz@interia.pl", "54321");
			ExerciseEntity exercise1 = new ExerciseEntity(1,"Bankdrücken","https://www.youtube.com/shorts/4HrLBMqGmcc");
			UserService userService = new UserService();
			user1 = userService.registerNewUserAccount();
			userRepository.save(user1); //save in repository
			userRepository.save(user2);
			exerciseRepository.save(exercise1);


			UserEntity savedUser = userRepository.findById(user1.getId()).orElseThrow(NoSuchElementException::new);
			ExerciseEntity savedExercises = exerciseRepository.findById(exercise1.getId()).orElseThrow(NoSuchElementException::new);
		};

	}
}
