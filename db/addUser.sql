INSERT INTO welp_o
    (username,hash,email,firstname,lastname,age)
VALUES
    ($1, $2, $3, $4, $5, $6)
RETURNING *;