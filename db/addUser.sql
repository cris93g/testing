INSERT INTO welp_o
    (username,hash)
VALUES
    ($1, $2)
RETURNING *;