INSERT INTO user_test
    (username,password)
VALUES
    ($1, $2)
RETURNING *;