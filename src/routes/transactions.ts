import { title } from "process";
import { knex } from "../database";
import { FastifyInstance } from "fastify";

export async function transactionsRoutes(app: FastifyInstance) {
  app.get("/hello", async () => {
    const transaction = await knex("transactions")
      .where("amount", 1000)
      .select("*");

    return transaction;
  });
}
