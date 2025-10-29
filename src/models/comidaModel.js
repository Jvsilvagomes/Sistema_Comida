import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.comida.findMany({
        orderBy: { nome: 'asc'}
    });
}

export const findById = async (id) => {
    return await prisma.comida.findUnique({
        where: { id: Number(id) }
    });
}

export const create = async (data) => {
    return await prisma.comida.create({
        data: {
            nome: data.nome,
            tipo: data.tipo,
            preco: data.preco,
            descricao: data.descricao
        }
    });
}

export const deletar = async (id) => {
    return await prisma.comida.delete({
        where: { id: Number(id) }
    });
}

export const atualizar = async (id, data) => {
    return await prisma.comida.update({
        where: { id: Number(id) },
        data: {
            ...(data.nome && { nome: data.nome }),
            ...(data.tipo && { tipo: data.tipo }),
            ...(data.preco && { preco: data.preco }),
            ...(data.descricao && { descricao: data.descricao })
        }
    });
}
