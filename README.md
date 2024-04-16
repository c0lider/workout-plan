# Project name

## database tables

### user

-   id
-   email address
-   user name
-   passsord

### exercise

-   id
-   name
-   youtube link (private video)

### workout plan

-   id
-   name

> maybe limit this to 5 plans per user later and more is only allowed in paid plans

### user - workout mapping

-   user_id
-   workout_id

> for later if sharing of workouts is possible

### workout plan - exercise mapping

-   workout plan id
-   exercise id
-   reps
-   sets
-   duration

## frontend ui design

### landing page

-   login with username and password
-   button anmelden
-   registrieren feld

### register page

-   email
-   username
-   password

### settings page

-   dark/light mode
-   change user data (username etc)

### workout plan list

-   list of workout plans
-   button to add new workout plan

### workout detail page

-   display exercises including sets and repetitions/duration
-   edit button
-   create workout plan page
-   enter name of plan field
-   add/remove exercise button
-   enter set and repetition amount/duration
-   save button
