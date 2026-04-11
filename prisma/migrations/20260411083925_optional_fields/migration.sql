/*
  Warnings:

  - You are about to alter the column `amount` on the `Transaction` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" INTEGER NOT NULL,
    "type" TEXT,
    "description" TEXT,
    "tags" TEXT,
    "date" INTEGER,
    "createTime" INTEGER NOT NULL,
    "updateTime" INTEGER NOT NULL
);
INSERT INTO "new_Transaction" ("amount", "createTime", "date", "description", "id", "tags", "type", "updateTime") SELECT "amount", "createTime", "date", "description", "id", "tags", "type", "updateTime" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
