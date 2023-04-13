// import pg from "pg";
// import dotenv from "dotenv";
// dotenv.config();
// const { Pool } = pg;
// const configDatabase = {
//   connectionString: process.env.DATABASE_URL
// };
// const db = new Pool(configDatabase);
// export default db;
import pkg from "@prisma/client"; // precisamos instalar esse pacote!
var PrismaClient = pkg.PrismaClient;
var client = new PrismaClient();
export default client;
