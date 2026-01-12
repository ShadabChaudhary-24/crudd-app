import Fastify from "fastify";
import fastifyPostgres from "@fastify/postgres";
import fastifyMongodb from "@fastify/mongodb";
import userRoutes from "./routes/userRoutes.js";
import kycRoute from "./routes/kycRoutes.js";

function buildFastify (){

    const app = Fastify({logger: true});
    //register postgress plugin
    app.register(fastifyPostgres, {
        connectionString: process.env.POSTGRES_URL,
    });

    //register mongodb plugin
    app.register(fastifyMongodb, {
        forceClose: true,
        url: process.env.MONGODB_URL
    });

    // Register user route
    app.register(userRoutes);

    //Register kyc route
    app.register(kycRoute);

    return app;
};

export default buildFastify;