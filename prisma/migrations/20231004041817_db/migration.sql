-- CreateTable
CREATE TABLE "pacientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomePcnte" TEXT NOT NULL,
    "senha" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "consultas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePcnte" TEXT NOT NULL,
    "nomeDents" TEXT NOT NULL,
    CONSTRAINT "consultas_nomePcnte_fkey" FOREIGN KEY ("nomePcnte") REFERENCES "pacientes" ("nomePcnte") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "agendas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "nomePcnt" TEXT,
    CONSTRAINT "agendas_nomePcnt_fkey" FOREIGN KEY ("nomePcnt") REFERENCES "pacientes" ("nomePcnte") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "secretarias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "RG" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_PacienteToSecretaria" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PacienteToSecretaria_A_fkey" FOREIGN KEY ("A") REFERENCES "pacientes" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PacienteToSecretaria_B_fkey" FOREIGN KEY ("B") REFERENCES "secretarias" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "pacientes_nomePcnte_key" ON "pacientes"("nomePcnte");

-- CreateIndex
CREATE UNIQUE INDEX "secretarias_nome_key" ON "secretarias"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "_PacienteToSecretaria_AB_unique" ON "_PacienteToSecretaria"("A", "B");

-- CreateIndex
CREATE INDEX "_PacienteToSecretaria_B_index" ON "_PacienteToSecretaria"("B");
