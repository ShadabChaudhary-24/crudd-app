import fastify from "fastify";

export async function createUser(fastify, data) {
    const {name, email, password} = data;

    const result = await(fastify.pg.query(
                    `INSERT INTO users (name, email, password)
                    VALUES ($1, $2, $3)
                    RETURNING id`,
                    [name, email, password]
    ));
    return result.rows[0];

}

export async function getUserById(fastify, id) {
    const result = await fastify.pg.query(
        `SELECT id, name, email FROM users WHERE id = $1`,[id]
    );
    return result.rows[0];
}

export async function updateUserById(fastify, data) {
    console.log(data)
    const {userId, name, email} = data;
    const result = await fastify.pg.query(`UPDATE users SET name = $1, email = $2
                    WHERE id = $3
                    RETURNING id`,
                    [name, email, userId]
    );

    console.log(result);
    return result.rowCount;
}

export async function deleteUserById(fastify, id) {
    const result = await fastify.pg.query(`DELETE FROM users WHERE id = $1`, [id]);
    return result.rowCount;
}