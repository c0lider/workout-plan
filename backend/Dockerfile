# Use an official Gradle image to build the app
FROM gradle:7.3.3-jdk17 as build

# Set the working directory
WORKDIR /app

# Copy the Gradle wrapper and build files
COPY gradle ./gradle
COPY gradlew .
COPY build.gradle .
COPY settings.gradle .

# Download dependencies without running tests
RUN ./gradlew build --no-daemon -x test

# Copy the application code
COPY src ./src

# Build the application
RUN ./gradlew build --no-daemon -x test

# Use an official OpenJDK runtime as the base image
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the packaged application from the build stage
# ARG JAR_FILE=target/*.jar
COPY --from=build /app/build/libs/*.jar app.jar

# Expose the port on which the app will run
EXPOSE 8080

# Start the application
ENTRYPOINT ["java", "-jar", "app.jar"]

# FROM openjdk:latest
# ARG JAR_FILE=target/*.jar
# COPY ${JAR_FILE} app.jar
# EXPOSE 8080
# ENTRYPOINT ["java","-jar","/app.jar"]