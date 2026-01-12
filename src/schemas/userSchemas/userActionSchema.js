const userActionSchema = {
    params: {
        type: 'object',
        required: ['id'],
        properties: {
            id: {type: 'number'}
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

export default userActionSchema;