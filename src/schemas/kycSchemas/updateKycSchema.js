const updateKycSchema = {
    params: {
        type: 'object',
        required: ['id'],
        properties: {
            id: {type: 'number'}
        }
    },
    body: {
        type: 'object',
        properties: {
            aadharNo: {type: 'string', minLength: 12, maxLength: 12},
            panNo: {type: 'string', minLength: 10, maxLength: 10}
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

export default updateKycSchema;