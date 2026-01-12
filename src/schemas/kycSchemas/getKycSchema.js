const getKycSchema = {
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
                aadhar: {type: 'string'},
                pan: {type: 'string'},
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

export default getKycSchema;