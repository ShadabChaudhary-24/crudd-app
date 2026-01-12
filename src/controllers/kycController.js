import {createKyc, getKycByUserId, updateKyc, deleteKyc} from "../services/kycService.js";

export async function createKycController(req, reply){
    try{
        const userId = req.params.id;
        // console.log(typeof userId);
        const data = ({
            userId,
            ...req.body
        });
        const id = await createKyc(this, data);
        
        reply.code(201).send({
            id: id,
            message: "KYC created successfully"
        });
    }catch(err){
        // this.log.error(err);
        reply.code(500).send({
            message: "Failed to create KYC",
        });
    }
};

export async function getKycController(req, reply){
    try{
        const userId = req.params.id;
        // console.log(typeof userId);

        const data = await getKycByUserId(this, userId);

        if(data){
            const result = {
                id: data.userId,
                aadhar: data.aadharNo,
                pan: data.panNo
            }
            // console.log(result);
            return reply.code(200).send(result);
        }else{
            reply.code(404).send({
                error: "KYC not found",
            });
        }
    }catch(err){
        console.log("Get Kyc error "+ err)
        reply.code(500).send({
            error: "Failed to fetch KYC details",
        });
    }
    
}

export async function updateKycController(req, reply) {
    try {
        const userId = req.params.id;
        const data = req.body;

        const updated = await updateKyc(this, userId, data);

        if(updated) {
            reply.send({message: 'KYC updated successfully'});
        }else{
            reply.code(404).send({error: 'KYC not found'});
        }
    }catch(err) {
        console.error('KYC update error:', err);
        reply.code(500).send({error: 'Failed to update KYC'});
    }
}

export async function deleteKycController(req, reply) {
    try {
        const userId = req.params.id;
        const deleted = await deleteKyc(this, userId);

        if(deleted) {
            reply.send({ message: 'KYC deleted successfully' });
        }else{
            reply.code(404).send({error: 'KYC not found'});
        }
    }catch(err) {
        reply.code(500).send({error: 'Failed to delete KYC'});
    }
}