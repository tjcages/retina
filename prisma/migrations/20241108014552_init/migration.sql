-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "bestAddress" TEXT NOT NULL,
    "minter" TEXT NOT NULL,
    "score" BIGINT NOT NULL,
    "blockNumber" BIGINT NOT NULL,
    "transactionHash" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SyncState" (
    "id" TEXT NOT NULL DEFAULT 'current',
    "lastBlock" BIGINT NOT NULL,
    "lastSyncTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SyncState_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_transactionHash_key" ON "Event"("transactionHash");

-- CreateIndex
CREATE INDEX "Event_bestAddress_idx" ON "Event"("bestAddress");

-- CreateIndex
CREATE INDEX "Event_minter_idx" ON "Event"("minter");

-- CreateIndex
CREATE INDEX "Event_score_idx" ON "Event"("score");
