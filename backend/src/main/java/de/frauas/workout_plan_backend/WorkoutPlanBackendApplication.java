package de.frauas.workout_plan_backend;

import de.frauas.workout_plan_backend.entity.user_entity;
import de.frauas.workout_plan_backend.repository.user_repository;
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
	CommandLineRunner runner(user_repository repository) {
		return args -> {

			user_entity user1 = new user_entity(1, "LeMaemo", "max.moritz@interia.pl", "12345");
			repository.save(user1);

			user_entity savedUser = repository.findById(user1.getId()).orElseThrow(NoSuchElementException::new);
		};

	}
}
