import dotenv from "dotenv";
import buildFastify from "./app.js";
dotenv.config();

const fastify = buildFastify();

const start = async() => {
    try{
        fastify.listen({ port: process.env.PORT || 4000 });
        console.log("server is running...");
    }catch(err){
        fastify.log.error(err);
        process.exit(1);
    }
};

start();