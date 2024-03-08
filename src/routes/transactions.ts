import { knex } from "../database";

export async function transactionsRoutes(app) {
  app.get("/hello", async () => {
    const transaction = await knex("transactions")
      .insert({
        id: crypto.randomUUID(),
        title: "Transação de teste",
        amount: 1000,
      })
      .returning("*");

    return transaction;
  });
}
