INSERT INTO welp
    (username,password)
VALUES
    ($1, $2)
RETURNING *;