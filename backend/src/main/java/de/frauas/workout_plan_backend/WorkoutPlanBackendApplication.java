package de.frauas.workout_plan_backend;

import de.frauas.workout_plan_backend.entity.ExerciseEntity;
import de.frauas.workout_plan_backend.entity.UserEntity;
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

			UserEntity user = new UserEntity();
			UserEntity user2 = new UserEntity(2, "LeBrob", "Lemax.Lemoritz@interia.pl", "54321");
			ExerciseEntity exercise1 = new ExerciseEntity(1,"Bankdrücken","https://www.youtube.com/shorts/4HrLBMqGmcc");

			userRepository.save(user.registerNewUserAccount());
			userRepository.save(user2);
			exerciseRepository.save(exercise1);


			UserEntity savedUser = userRepository.findById(user.getId()).orElseThrow(NoSuchElementException::new);
			ExerciseEntity savedExercises = exerciseRepository.findById(exercise1.getId()).orElseThrow(NoSuchElementException::new);
		};

	}
}
