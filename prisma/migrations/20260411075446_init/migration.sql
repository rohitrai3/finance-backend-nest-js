-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "amount" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "date" INTEGER NOT NULL,
    "createTime" INTEGER NOT NULL,
    "updateTime" INTEGER NOT NULL
);
