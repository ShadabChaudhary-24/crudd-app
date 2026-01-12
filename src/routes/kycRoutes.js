import {createKycController, getKycController, updateKycController, deleteKycController} from "../controllers/kycController.js";
import createKycSchema from "../schemas/kycSchemas/createKycSchema.js";
import deletekycSchema from "../schemas/kycSchemas/deleteKycSchema.js";
import getKycSchema from "../schemas/kycSchemas/getKycSchema.js";
import updateKycSchema from "../schemas/kycSchemas/updateKycSchema.js"

async function kycRoute(fastify, options){
    fastify.post('/users/:id', {schema: createKycSchema}, createKycController);
    fastify.get('/users/:id/kyc',{schema: getKycSchema},getKycController);
    fastify.put('/users/:id/kyc', {schema: updateKycSchema}, updateKycController);
    fastify.delete('/users/:id/kyc', {schema: deletekycSchema}, deleteKycController);
}

export default kycRoute;