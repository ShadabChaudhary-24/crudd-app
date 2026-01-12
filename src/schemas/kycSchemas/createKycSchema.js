const createKycSchema = {
    params: {
        type: "object",
        required: ['id'],
        properties: {
            id: {type: 'number'}
        }
    },
    body: {
        type: 'object',
        required: ['aadharNo', 'panNo'],
        properties: {
            aadharNo: {type: 'string', minLength: 12, maxLength: 12},
            panNo: {type: 'string', minLength: 10, maxLength: 10},
        },
    },

    response: {
        201: {
            type: 'object',
            properties: {
                id: {type: 'string'},
                message: {type: 'string'}
            },
        },
    },
};

export default createKycSchema;