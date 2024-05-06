# database tables

## user

-   id
-   email address
-   user name
-   passsord

## exercise

-   id
-   name
-   youtube link (private video)

## workout plan

-   id
-   name

> maybe limit this to 5 plans per user later and more is only allowed in paid plans

## user - workout mapping

-   user_id
-   workout_id

> for later if sharing of workouts is possible

## workout plan - exercise mapping

-   workout plan id
-   exercise id
-   reps
-   sets
-   duration
