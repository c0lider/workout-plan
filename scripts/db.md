# Database scripts

Connect to the database:
```bash
psql -h localhost -p 5432 -U developer -d workout-plan-db
```

List all tables:
```bash
\dt
```

List all entries in a table:
```bash
SELECT * FROM exercise_entity;
```

List all columns of a table:
```bash
\d user_entity
```

Insert values into a table
```sql
INSERT INTO user_entity (email_address, password, username) VALUES ('test@email.com', 'strongPassword123', 'xxX_dragonSlayer_Xxx');
```