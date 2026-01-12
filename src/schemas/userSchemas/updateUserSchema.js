const updateUserSchema = {
    params: {
        type: 'object',
        required: ['id'],
        properties: {
            id: {type: 'number'}
        }
    },
    body: {
        type: 'object',
        required: ['name', 'email'],
        properties: {
            name: {type: 'string', minLength: 2},
            email: {type: 'string', format: 'email'}
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                message: {type: 'string'}
            }
        },
        404: {
            type: 'object',
            properties: {
                error: {type: 'string'}
            },
        },
    },

};

export default updateUserSchema;