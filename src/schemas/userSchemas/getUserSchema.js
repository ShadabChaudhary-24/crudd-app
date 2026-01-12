const getUserSchema = {
    params: {
        type: 'object',
        required: ['id'],
        properties: {
            id: {type: "number"}
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                id: {type: 'number'},
                name: {type: 'string'},
                email: {type: 'string'}
            }
        },
        404: {
            type: 'object',
            properties: {
                error: {type: 'string'}
            }
        },
    },
};


export default getUserSchema;