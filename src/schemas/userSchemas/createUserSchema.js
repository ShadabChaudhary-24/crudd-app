const createUserSchema = {
    body: {
        type: 'object',
        required: ['name', 'email', 'password'],
        properties: {
            name: {type: 'string'},
            email: {type: 'string', format: 'email'},
            password: {type: 'string', minLength: 8},
        },
    },
    response: {
        201: {
            type: 'object',
            properties: {
                id: {type: 'string'},
                message: {type: 'string'},
            },
        },
        400: {
            type: 'object',
            properties: {
                error: {type: 'string'},
            },
        },
        500: {
            type: 'object',
            properties: {
                error: {type: 'string'},
            },
        },
    }
};

export default createUserSchema;