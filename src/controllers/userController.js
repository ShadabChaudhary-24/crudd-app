import {createUser, deleteUserById, getUserById, updateUserById} from "../services/userService.js";

export async function createUserController(req, reply) {
    try{
        const user = await createUser(this, req.body);
        reply.code(201).send({
            message: "user Created successfully",
            id: user.id,
        });
    }catch(err){
        this.log.error(err);
        reply.code(500).send({
            error: "Failed to create user",
        });
    }
}

export async function getUserByIdController(req, reply) {
    try{
        const userId = req.params.id;
        const user = await getUserById(this, userId);

        if(user){
            reply.send(user);
        }else{
            reply.code(404).send({
                error: "User not found",
            });
        }
    }catch(err){
        reply.code(500).send({
            error: "Failed to fetch user",
        })
    }
}


export async function updateUserByIdController(req, reply) {
    const userId = req.params.id;
    const bodyData = req.body;

    const data = ({
        userId,
        ...bodyData,
    });
    const updated = await updateUserById(this, data);

    if(updated){
        return reply.send("User Updated successfully");
    }else{
        reply.code(404).send({
            error: "user not found",
        });
    }
}

export async function deleteUserByIdController(req, reply) {
    try{
        const userId = req.params.id;
        const deleted = await deleteUserById(this, userId);

        if(deleted){
            reply.send("User deleted");
        }else{
            reply.code(404).send({
                error: "User not found",
            });
        }
    }catch(err){
        reply.code(500).send({
            error: "Failed to fetch user",
        })
    }
} 

