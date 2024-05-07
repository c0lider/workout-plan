package de.frauas.workout_plan_backend;

import de.frauas.workout_plan_backend.entity.UserEntity;
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
	CommandLineRunner runner(UserRepository repository) {
		return args -> {

			UserEntity user1 = new UserEntity(1, "LeMaemo", "max.moritz@interia.pl", "12345");
			repository.save(user1); //save in repository

			UserEntity savedUser = repository.findById(user1.getId()).orElseThrow(NoSuchElementException::new);
		};

	}
}
