# Workout plan - Backend

- [Workout plan - Backend](#workout-plan---backend)
  - [About the project](#about-the-project)
  - [Prerequisites](#prerequisites)
  - [Getting started](#getting-started)
    - [1. Set-up the database](#1-set-up-the-database)
    - [2. Start the backend](#2-start-the-backend)
    - [3. Start the frontend](#3-start-the-frontend)

## About the project 
Lorem ipsum


## Prerequisites
TODO: explain why docker (ease of use)
TODO: maybe create script to install all relevant software
- install docker

## Getting started

### 1. Set-up the database
If you do not have a local databse instance running yet, create one using the following command:
```
docker run -d --name workout-plan-container -e POSTGRES_USER=developer -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=workout-plan-db -p 5432:5432 postgres:13
```
If you already have a container set up, run it by using the following command:

```
docker start workout-plan-container
```

### 2. Start the backend
To boot up the backend run the following command in your backend source directory:

```
./gradlew bootRun
```
Check the backend status by accessing http://localhost:8080/hello

### 3. Start the frontend
To start the frontend run the following command in your frontend source directory:

```
npm run start
```
Access the frontend via http://localhost:3001
