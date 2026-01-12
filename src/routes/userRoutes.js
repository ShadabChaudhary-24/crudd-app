import createUserSchema from "../schemas/userSchemas/createUserSchema.js";
import getUserSchema from "../schemas/userSchemas/getUserSchema.js";
import userActionSchema from "../schemas/userSchemas/userActionSchema.js"
import updateUserSchema from "../schemas/userSchemas/updateUserSchema.js";
import {createUserController, getUserByIdController, updateUserByIdController, deleteUserByIdController} from "../controllers/userController.js";

async function userRoutes (fastify, options) {
    fastify.post('/users', {schema: createUserSchema}, createUserController);
    fastify.get('/users/:id', {schema: getUserSchema}, getUserByIdController);
    fastify.put('/users/:id/update', {schema: updateUserSchema}, updateUserByIdController);
    fastify.delete('/users/:id/delete', {schema: userActionSchema}, deleteUserByIdController)
}

export default userRoutes;