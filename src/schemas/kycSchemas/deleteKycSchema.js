const deletekycSchema = {
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
                id: {type: 'number'},
                message: {type: 'string'}
            },
        },
        404: {
            type: 'object',
            properties: {
                error: {type: 'string'}
            }
        },
    },
};

export default deletekycSchema;