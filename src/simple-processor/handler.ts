import { TransactionHandlerInput, database } from "flair-sdk";

export async function processTransaction({
  transaction,
  horizon,
}: TransactionHandlerInput) {
  await database.upsert({
    entityType: "Transaction",
    entityId: `${transaction.chainId}-${transaction.hash}-${transaction.blockTimestamp}`,
    horizon,
    ...transaction,
  });
}
