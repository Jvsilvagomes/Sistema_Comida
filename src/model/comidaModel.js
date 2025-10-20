import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.Comida.findMany({
        orderBy: { nome: 'asc'}
    });
}

export const findById = async (id) => {
    return await prisma.Comida.findUnique({
        where: { id: Number(id) }
    });
}