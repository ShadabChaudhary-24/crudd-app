export async function createKyc(fastify, data){
    const result = await fastify.mongo.db.collection("user_kyc").insertOne(data);
    return result.insertedId;
}


export async function getKycByUserId(fastify, userId) {
    const collection = fastify.mongo.db.collection('user_kyc');
    const result = await collection.findOne({userId});

    console.log(result);
    
    return result;
}


export async function updateKyc(fastify, userId, data) {
    console.log("User id: "+userId);
    const collection = fastify.mongo.db.collection('user_kyc');
    const result =  await collection.updateOne(
        {userId},
        {$set: data}
    );
    console.log(result);
    return result.matchedCount;
}


export async function deleteKyc(fastify, userId){
    const collection = fastify.mongo.db.collection('user_kyc');
    const result = await collection.deleteOne({userId});
    console.log(result);
    return result.deletedCount;
}